const ADMIN_EMAIL = 'hello@tamilarasu.blog';
const MAX_PER_HOUR = 4;
const EMAIL_COOLDOWN_MS = 600 * 1000;
const HOUR_MS = 60 * 60 * 1000;
const MINIMUM_TIME_SPENT_MS = 3000;

function authorize() {
  Logger.log(GmailApp.getAliases());
}

function doPost(e) {
  const p = e && e.parameter ? e.parameter : {};
  const ok = ContentService.createTextOutput('OK');

  if ((p.website || p.honeypot_website || p.phone_number || '').trim()) return ok;

  const formLoadedAt = Number(p.form_loaded_at);
  const timeSpent = p.timeSpent !== undefined
    ? Number(p.timeSpent)
    : Number.isFinite(formLoadedAt) && formLoadedAt > 0
      ? Date.now() - formLoadedAt
      : NaN;
  if (!Number.isFinite(timeSpent) || timeSpent < MINIMUM_TIME_SPENT_MS) return ok;

  const get = key => (p[key] ? String(p[key]).trim() : '');
  const esc = value => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  const rawName = (get('fullName') || get('name')).slice(0, 100);
  const email = get('email').slice(0, 254).toLowerCase();
  const rawSubject = get('subject').slice(0, 200);
  const rawMessage = get('message').slice(0, 10000);

  if (!/^\p{L}+([ '\-]\p{L}+)*$/u.test(rawName)) return ok;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return ok;
  if (!rawSubject || !rawMessage) return ok;

  const properties = PropertiesService.getScriptProperties();
  const spreadsheetId = properties.getProperty('SPREADSHEET_ID');
  if (!spreadsheetId) {
    throw new Error('Missing SPREADSHEET_ID script property.');
  }

  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  const sheet = spreadsheet.getSheets()[0];
  const lastColumn = sheet.getLastColumn();
  if (lastColumn < 1) {
    throw new Error('The response sheet does not contain a header row.');
  }

  const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
  const headerIndexes = {
    timestamp: headers.indexOf('Timestamp'),
    fullName: headers.indexOf('Full Name'),
    email: headers.indexOf('Email Address'),
    subject: headers.indexOf('Subject'),
    message: headers.indexOf('Message')
  };
  if ([headerIndexes.fullName, headerIndexes.email, headerIndexes.subject, headerIndexes.message]
    .some(index => index < 0)) {
    throw new Error('The response sheet is missing one or more required form headers.');
  }

  if (isRateLimited(email, properties)) return ok;

  const row = new Array(headers.length).fill('');
  if (headerIndexes.timestamp >= 0) row[headerIndexes.timestamp] = new Date();
  row[headerIndexes.fullName] = toSheetText(rawName);
  row[headerIndexes.email] = toSheetText(email);
  row[headerIndexes.subject] = toSheetText(rawSubject);
  row[headerIndexes.message] = toSheetText(rawMessage);
  sheet.appendRow(row);

  const name = esc(rawName);
  const subject = esc(rawSubject);
  const message = esc(rawMessage).replace(/\n/g, '<br>');

  GmailApp.sendEmail('hello@tamilarasu.blog',
    `New Contact Form: ${subject} (${name})`, '', {
      htmlBody: getAdminEmail(name, esc(email), subject, message),
      replyTo: email,
      name: 'Contact Form'
    });

  GmailApp.sendEmail(email, 'Thank you for contacting Tamilarasu', '', {
    htmlBody: getCustomerEmail(name),
    from: 'hello@tamilarasu.blog',
    name: 'Tamilarasu',
    replyTo: 'hello@tamilarasu.blog'
  });

  return ok;
}

function isRateLimited(email, properties) {
  const emailHash = hashEmail(email);
  const emailCooldownKey = 'EMAIL_COOLDOWNS';
  const hourlyRateKey = 'SUBMISSIONS_LAST_HOUR';
  const now = Date.now();
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const emailCooldowns = JSON.parse(properties.getProperty(emailCooldownKey) || '{}');
    Object.keys(emailCooldowns).forEach(hash => {
      if (now - emailCooldowns[hash] >= EMAIL_COOLDOWN_MS) {
        delete emailCooldowns[hash];
      }
    });

    const recentSubmissions = JSON.parse(properties.getProperty(hourlyRateKey) || '[]')
      .filter(timestamp => now - timestamp < HOUR_MS);

    if (emailCooldowns[emailHash] || recentSubmissions.length >= MAX_PER_HOUR) {
      return true;
    }

    emailCooldowns[emailHash] = now;
    recentSubmissions.push(now);
    properties.setProperty(emailCooldownKey, JSON.stringify(emailCooldowns));
    properties.setProperty(hourlyRateKey, JSON.stringify(recentSubmissions));
    return false;
  } finally {
    lock.releaseLock();
  }
}

function hashEmail(email) {
  return Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    email,
    Utilities.Charset.UTF_8
  ).map(byte => ('0' + (byte & 0xff).toString(16)).slice(-2)).join('');
}

function toSheetText(value) {
  return /^[\u0000-\u0020]*[=+\-@]/.test(value) ? "'" + value : value;
}

function getAdminEmail(name, email, subject, message) {
    return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>

<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:30px 0;">
<tr>
<td align="center">

<table width="650" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">

<tr>
<td style="background:#1f2937;padding:25px;text-align:center;">
<h1 style="margin:0;color:#ffffff;">
New Contact Form Submission
</h1>
</td>
</tr>

<tr>
<td style="padding:35px;">

<p style="font-size:16px;color:#555;">
A new visitor has contacted you through your website.
</p>

<table width="100%" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">

<tr style="background:#f8fafc;">
<td width="180"><strong>Name</strong></td>
<td>${name}</td>
</tr>

<tr>
<td><strong>Email</strong></td>
<td>${email}</td>
</tr>

<tr style="background:#f8fafc;">
<td><strong>Subject</strong></td>
<td>${subject}</td>
</tr>

<tr>
<td valign="top"><strong>Message</strong></td>
<td>${message}</td>
</tr>

</table>

</td>
</tr>

<tr>
<td style="background:#f9fafb;padding:20px;text-align:center;font-size:13px;color:#777;">
This email was generated automatically from your contact form.
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;
}

function getCustomerEmail(name) {

    return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>

<body style="margin:0;padding:0;background:#eef2f7;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
<tr>
<td align="center">

<table width="650" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">

<tr>
<td align="center" style="background:#0f172a;padding:40px;">

<h1 style="color:#ffffff;margin:0;">
<img src="https://tamilarasu.blog/assets/favicon/favicon-32x32.png"/>
</h1>

</td>
</tr>

<tr>
<td style="padding:45px;">

<h2 style="margin-top:0;">
Hi ${name},
</h2>

<p style="font-size:16px;line-height:1.8;color:#555;">
Thank you for reaching out through my website.
</p>

<p style="font-size:16px;line-height:1.8;color:#555;">
I've successfully received your message and truly appreciate you taking the time to contact me.
</p>

<p style="font-size:16px;line-height:1.8;color:#555;">
Whether your message is about Dynamics 365, Power Platform, collaboration, speaking opportunities, or just a general question, I'll review it and get back to you as soon as I can.
</p>

<p style="font-size:16px;color:#555;">
In the meantime, feel free to explore more tutorials and articles on the blog.
</p>

<p align="center" style="margin:35px 0;">

<a href="https://www.tamilarasu.blog"
style="
background:#2563eb;
color:#ffffff;
padding:14px 28px;
text-decoration:none;
border-radius:5px;
display:inline-block;
font-weight:bold;
">
Visit the Blog
</a>

</p>

<p style="font-size:16px;color:#555;">
Thanks again for your message.
</p>

<p style="margin-top:35px;line-height:1.8;">
Regards,<br>

<strong>Tamilarasu</strong>
</p>

</td>
</tr>

<tr>
<td style="background:#0f172a;color:#cbd5e1;padding:25px;text-align:center;font-size:13px;">

© 2026 Tamilarasu Blog

<br><br>

This is an automated acknowledgement email. Please do not reply to this message.

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;
}
