---
layout: default
title: Contact Us
permalink: /contact/
---

<header class="py-5 bg-light mb-5 px-3 px-lg-0">
    <div class="container text-center py-5">
        <h1 class="display-3 fw-bold mb-3">Contact Tamilarasu</h1>
        <p class="lead text-muted max-w-2xl mx-auto">Have a question or interested in collaboration? I'd love to hear from you.</p>
    </div>
</header>

<section class="container mb-5 pb-5 px-4 px-lg-0">
    <div class="row justify-content-center">
        <div class="col-lg-6">
            <div class="contact-card p-4 p-md-5 bg-white border border-light-subtle rounded-4 shadow-sm mb-5 position-relative overflow-hidden">
                <!-- Success Message Overlay -->
                <div id="success-overlay" class="position-absolute top-0 start-0 w-100 h-100 bg-white d-flex flex-column align-items-center justify-content-center" style="opacity: 0; pointer-events: none; transition: opacity 0.4s ease; z-index: 10;">
                    <div class="bg-success bg-opacity-10 text-success rounded-circle p-3 mb-3">
                        <i class="bi bi-check-lg display-4"></i>
                    </div>
                    <h2 class="fw-bold h3">Message Sent!</h2>
                    <p class="text-muted text-center px-4">Thanks for reaching out. I'll get back to you within 24-48 hours.</p>
                    <button type="button" class="btn btn-outline-dark rounded-pill px-4 mt-2" onclick="resetForm()">Send Another</button>
                </div>

                <form id="contactForm">
                    <div class="form-floating mb-4">
                        <input type="text" class="form-control form-control-lg border-2 rounded-3 bg-light-subtle" id="fullName" name="fullName" placeholder="John Doe" maxlength="100" required>
                        <label for="fullName" class="fw-bold text-secondary">Your Name</label>
                    </div>
                    
                    <div class="form-floating mb-4">
                        <input type="email" class="form-control form-control-lg border-2 rounded-3 bg-light-subtle" id="email" name="email" placeholder="john@example.com" maxlength="254" required>
                        <label for="email" class="fw-bold text-secondary">Email Address</label>
                    </div>
                    
                    <div class="form-floating mb-4">
                        <input type="text" class="form-control form-control-lg border-2 rounded-3 bg-light-subtle" id="subject" name="subject" placeholder="How Can I help you?" maxlength="200" required>
                        <label for="subject" class="fw-bold text-secondary">Subject</label>
                    </div>
                    
                    <div class="form-floating mb-4">
                        <textarea class="form-control border-2 rounded-3 bg-light-subtle" id="message" name="message" placeholder="Tell me more..." style="height: 150px" maxlength="10000" required></textarea>
                        <label for="message" class="fw-bold text-secondary">How can I help?</label>
                    </div>

                    <!-- Honeypot Field -->
                    <div style="position: absolute; left: -9999px;" aria-hidden="true">
                        <input type="text" name="website" tabindex="-1" autocomplete="off">
                    </div>

                    <p id="form-status" class="visually-hidden" role="status" aria-live="polite"></p>
                    
                    <div class="d-grid gap-2 mt-5">
                        <button type="submit" id="submit-btn" class="btn btn-dark btn-lg py-3 rounded-pill fw-bold d-flex align-items-center justify-content-center gap-2 transition-all">
                            <span>Send Message</span>
                            <i class="bi bi-send-fill"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div class="col-lg-4 offset-lg-1">
            <div class="mb-5">
                <h2 class="fw-bold mb-4 h3">Other ways to connect</h2>
                
                <a href="mailto:hello@tamilarasu.blog" class="text-decoration-none text-dark">
                    <div class="d-flex align-items-center mb-4 contact-method-card p-3 rounded-4 transition-all">
                        <div class="bg-primary bg-opacity-10 p-3 rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 54px; height: 54px;">
                             <i class="bi bi-envelope-fill text-primary fs-4"></i>
                        </div>
                        <div>
                            <div class="fw-bold text-muted small">EMAIL ME</div>
                            <div class="fw-bold">hello@tamilarasu.blog</div>
                        </div>
                    </div>
                </a>
            </div>

            <div class="p-4 bg-primary bg-opacity-10 border border-primary border-opacity-25 rounded-4 shadow-sm">
                <h3 class="fw-bold mb-3 d-flex align-items-center gap-2 h5">
                    <i class="bi bi-clock-history text-primary"></i> Response Time
                </h3>
                <p class="mb-0 small text-muted">I receive a high volume of mail daily but strive to respond within 24–48 hours for all inquiries.</p>
            </div>
        </div>
    </div>
</section>

<style>
/* Contact form specific styles */
.contact-method-card:hover {
    background-color: var(--bs-light);
    transform: translateX(5px);
}
.transition-all {
    transition: all 0.3s ease;
}
.form-control:focus, .form-select:focus {
    box-shadow: 0 0 0 0.25rem rgba(37, 99, 235, 0.15);
    border-color: var(--accent) !important;
}
</style>

<script>
const formEndpoint = {{ site.contact_form_endpoint | jsonify }};
const pageLoaded = Date.now();
const contactForm = document.getElementById('contactForm');
const submitButton = document.getElementById('submit-btn');
const formStatus = document.getElementById('form-status');
contactForm.addEventListener('submit', async event => {
    event.preventDefault();

    if (!formEndpoint) {
        formStatus.textContent = 'The contact form has not been configured yet. Please email hello@tamilarasu.blog.';
        formStatus.classList.remove('visually-hidden');
        return;
    }

    formStatus.textContent = '';
    formStatus.classList.add('visually-hidden');
    submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
    submitButton.disabled = true;

    try {
        const data = new URLSearchParams(new FormData(contactForm));
        data.append('timeSpent', String(Date.now() - pageLoaded));
        await fetch(formEndpoint, { method: 'POST', body: data, mode: 'no-cors' });
        formStatus.textContent = 'Thank you! Your message was sent.';
        formStatus.classList.remove('visually-hidden');
        document.getElementById('success-overlay').style.opacity = '1';
        document.getElementById('success-overlay').style.pointerEvents = 'auto';
        contactForm.reset();
    } catch (error) {
        console.error('Contact form submission failed:', error);
        formStatus.textContent = 'We could not send your message. Please try again later.';
        formStatus.classList.remove('visually-hidden');
    } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = '<span>Send Message</span><i class="bi bi-send-fill"></i>';
    }
});

function resetForm() {
    const overlay = document.getElementById('success-overlay');
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
}
</script>
