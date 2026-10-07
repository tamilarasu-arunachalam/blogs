(function () {
    const consentKey = 'site-cookie-preferences-v1';
    const script = document.currentScript;
    const banner = document.getElementById('cookie-consent-banner');
    const dialog = document.getElementById('cookie-preferences-dialog');
    const analyticsToggle = document.getElementById('cookie-analytics');
    const commentsToggle = document.getElementById('cookie-comments');
    const commentsThread = document.getElementById('cusdis_thread');
    const statusMessages = document.querySelectorAll('.cookie-consent-status');
    const googleAnalyticsId = script ? script.dataset.googleAnalyticsId : '';
    const clarityId = script ? script.dataset.clarityId : '';
    let consent = null;
    let analyticsLoaded = false;
    let commentsLoaded = false;

    function showStorageError(error) {
        const message = 'Browser storage is unavailable. Your choice cannot be saved, so optional services will stay off.';
        statusMessages.forEach((element) => {
            element.textContent = message;
        });
        console.error('Cookie preferences could not be read or saved in local storage.', error);
    }

    function readConsent() {
        try {
            const stored = window.localStorage.getItem(consentKey);
            if (stored === null) {
                return null;
            }

            const parsed = JSON.parse(stored);
            if (parsed && typeof parsed.analytics === 'boolean' && typeof parsed.comments === 'boolean') {
                return { analytics: parsed.analytics, comments: parsed.comments };
            }
            return null;
        } catch (error) {
            showStorageError(error);
            return null;
        }
    }

    function loadAnalytics() {
        if (analyticsLoaded) {
            return;
        }
        analyticsLoaded = true;

        if (googleAnalyticsId) {
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function () {
                window.dataLayer.push(arguments);
            };
            window.gtag('js', new Date());
            window.gtag('config', googleAnalyticsId);

            const googleScript = document.createElement('script');
            googleScript.async = true;
            googleScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(googleAnalyticsId);
            document.head.appendChild(googleScript);
        }

        if (clarityId) {
            window.clarity = window.clarity || function () {
                (window.clarity.q = window.clarity.q || []).push(arguments);
            };

            const clarityScript = document.createElement('script');
            clarityScript.async = true;
            clarityScript.src = 'https://www.clarity.ms/tag/' + encodeURIComponent(clarityId);
            document.head.appendChild(clarityScript);
        }
    }

    function loadComments() {
        if (!commentsThread || !commentsThread.dataset.appId || commentsLoaded) {
            return;
        }
        commentsLoaded = true;

        const commentsScript = document.createElement('script');
        commentsScript.async = true;
        commentsScript.defer = true;
        commentsScript.src = 'https://cusdis.com/js/cusdis.es.js';
        document.body.appendChild(commentsScript);
    }

    function closeDialog() {
        if (dialog.open) {
            dialog.close();
        }
    }

    function saveConsent(analytics, comments) {
        try {
            window.localStorage.setItem(consentKey, JSON.stringify({ analytics: analytics, comments: comments }));
        } catch (error) {
            showStorageError(error);
            return;
        }

        const revokedAnalytics = consent && consent.analytics && !analytics;
        const revokedComments = consent && consent.comments && !comments;
        consent = { analytics: analytics, comments: comments };
        statusMessages.forEach((element) => {
            element.textContent = '';
        });
        banner.hidden = true;
        closeDialog();

        if (analytics) {
            loadAnalytics();
        }
        if (comments) {
            loadComments();
        }
        if (revokedAnalytics || revokedComments) {
            window.location.reload();
        }
    }

    consent = readConsent();
    if (consent) {
        if (consent.analytics) {
            loadAnalytics();
        }
        if (consent.comments) {
            loadComments();
        }
    }
    banner.hidden = consent !== null;

    document.querySelectorAll('[data-cookie-accept]').forEach((button) => {
        button.addEventListener('click', () => saveConsent(true, true));
    });

    document.querySelectorAll('[data-cookie-reject]').forEach((button) => {
        button.addEventListener('click', () => saveConsent(false, false));
    });

    document.querySelectorAll('[data-cookie-preferences-open]').forEach((button) => {
        button.addEventListener('click', () => {
            analyticsToggle.checked = Boolean(consent && consent.analytics);
            commentsToggle.checked = Boolean(consent && consent.comments);
            dialog.showModal();
        });
    });

    document.querySelectorAll('[data-cookie-customize]').forEach((button) => {
        button.addEventListener('click', () => {
            analyticsToggle.checked = Boolean(consent && consent.analytics);
            commentsToggle.checked = Boolean(consent && consent.comments);
            dialog.showModal();
        });
    });

    document.querySelector('[data-cookie-save]').addEventListener('click', () => {
        saveConsent(analyticsToggle.checked, commentsToggle.checked);
    });

    document.querySelector('[data-cookie-close]').addEventListener('click', closeDialog);
})();
