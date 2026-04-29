---
layout: default
title: Contact Us
permalink: /contact/
---

---
layout: default
title: Contact Us
permalink: /contact/
---

<header class="py-5 bg-light mb-5 px-3 px-lg-0">
    <div class="container text-center py-5">
        <h1 class="display-3 fw-bold mb-3 serif">Contact Tamilarasu</h1>
        <p class="lead text-muted max-w-2xl mx-auto serif">Have a question or interested in collaboration? I'd love to hear from you.</p>
    </div>
</header>

<section class="container mb-5 pb-5 px-4 px-lg-0 serif">
    <div class="row justify-content-center">
        <div class="col-lg-6">
            <div class="contact-card p-4 p-md-5 bg-white border border-light-subtle rounded-4 shadow-sm mb-5 position-relative overflow-hidden">
                <!-- Success Message Overlay -->
                <div id="success-overlay" class="position-absolute top-0 start-0 w-100 h-100 bg-white d-flex flex-column align-items-center justify-content-center" style="opacity: 0; pointer-events: none; transition: opacity 0.4s ease; z-index: 10;">
                    <div class="bg-success bg-opacity-10 text-success rounded-circle p-3 mb-3">
                        <i class="bi bi-check-lg display-4"></i>
                    </div>
                    <h3 class="fw-bold">Message Sent!</h3>
                    <p class="text-muted text-center px-4">Thanks for reaching out. I'll get back to you within 24-48 hours.</p>
                    <button type="button" class="btn btn-outline-dark rounded-pill px-4 mt-2" onclick="resetForm()">Send Another</button>
                </div>

                <form action="#" method="POST" id="contact-form" onsubmit="handleFormSubmit(event)">
                    <div class="form-floating mb-4">
                        <input type="text" class="form-control form-control-lg border-2 rounded-3 serif bg-light-subtle" id="name" name="name" placeholder="John Doe" required>
                        <label for="name" class="fw-bold text-secondary">Your Name</label>
                    </div>
                    
                    <div class="form-floating mb-4">
                        <input type="email" class="form-control form-control-lg border-2 rounded-3 serif bg-light-subtle" id="email" name="email" placeholder="john@example.com" required>
                        <label for="email" class="fw-bold text-secondary">Email Address</label>
                    </div>
                    
                    <div class="form-floating mb-4">
                        <select class="form-select form-select-lg border-2 rounded-3 serif bg-light-subtle" id="subject" name="subject" required>
                            <option value="" disabled selected>Select a topic...</option>
                            <option value="general">General Inquiry</option>
                            <option value="collaboration">Business Collaboration</option>
                            <option value="ad-rate">Advertising & Sponsorship</option>
                            <option value="feedback">Product Feedback</option>
                            <option value="error">Reporting a Bug/Issue</option>
                        </select>
                        <label for="subject" class="fw-bold text-secondary">Subject</label>
                    </div>
                    
                    <div class="form-floating mb-4">
                        <textarea class="form-control border-2 rounded-3 serif bg-light-subtle" id="message" name="message" placeholder="Tell me more..." style="height: 150px" required></textarea>
                        <label for="message" class="fw-bold text-secondary">How can I help?</label>
                    </div>
                    
                    <div class="d-grid gap-2 mt-5">
                        <button type="submit" id="submit-btn" class="btn btn-dark btn-lg py-3 rounded-pill fw-bold serif d-flex align-items-center justify-content-center gap-2 transition-all">
                            <span>Send Message</span>
                            <i class="bi bi-send-fill"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div class="col-lg-4 offset-lg-1">
            <div class="mb-5">
                <h3 class="fw-bold mb-4">Other ways to connect</h3>
                
                <a href="mailto:contact@tamilarasu.com" class="text-decoration-none text-dark">
                    <div class="d-flex align-items-center mb-4 contact-method-card p-3 rounded-4 transition-all">
                        <div class="bg-primary bg-opacity-10 p-3 rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 54px; height: 54px;">
                             <i class="bi bi-envelope-fill text-primary fs-4"></i>
                        </div>
                        <div>
                            <div class="fw-bold text-muted small">EMAIL ME</div>
                            <div class="fw-bold">contact@tamilarasu.com</div>
                        </div>
                    </div>
                </a>
                
                <a href="https://twitter.com/tamilarasu" target="_blank" class="text-decoration-none text-dark">
                    <div class="d-flex align-items-center mb-4 contact-method-card p-3 rounded-4 transition-all">
                        <div class="bg-dark bg-opacity-10 p-3 rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 54px; height: 54px;">
                             <i class="bi bi-twitter-x text-dark fs-4"></i>
                        </div>
                        <div>
                            <div class="fw-bold text-muted small">TWITTER (X)</div>
                            <div class="fw-bold">@tamilarasu</div>
                        </div>
                    </div>
                </a>
                
                <a href="https://linkedin.com/in/tamilarasu" target="_blank" class="text-decoration-none text-dark">
                    <div class="d-flex align-items-center mb-4 contact-method-card p-3 rounded-4 transition-all">
                        <div class="bg-primary bg-opacity-10 p-3 rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 54px; height: 54px;">
                             <i class="bi bi-linkedin text-primary fs-4"></i>
                        </div>
                        <div>
                            <div class="fw-bold text-muted small">LINKEDIN</div>
                            <div class="fw-bold">linkedin.com/in/tamilarasu</div>
                        </div>
                    </div>
                </a>
            </div>

            <div class="p-4 bg-primary bg-opacity-10 border border-primary border-opacity-25 rounded-4 shadow-sm">
                <h5 class="fw-bold mb-3 d-flex align-items-center gap-2">
                    <i class="bi bi-clock-history text-primary"></i> Response Time
                </h5>
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
/* Ensure form inputs use the serif font if global body font isn't being inherited properly */
.serif, .form-control.serif, .form-select.serif {
    font-family: 'Playfair Display', serif !important;
}
</style>

<script>
function handleFormSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('submit-btn');
    const form = document.getElementById('contact-form');
    const overlay = document.getElementById('success-overlay');
    
    // Validate form
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // Loading state
    const originalContent = btn.innerHTML;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
    btn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        btn.innerHTML = originalContent;
        btn.disabled = false;
        
        // Show success overlay
        overlay.style.opacity = '1';
        overlay.style.pointerEvents = 'auto';
        form.reset();
    }, 1200);
}

function resetForm() {
    const overlay = document.getElementById('success-overlay');
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
}
</script>
