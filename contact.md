---
layout: default
title: Contact Us
permalink: /contact/
---

<header class="py-5 bg-light mb-5 px-3 px-lg-0">
    <div class="container text-center py-5">
        <h1 class="display-3 fw-bold mb-3 serif">Contact TechBlog</h1>
        <p class="lead text-muted max-w-2xl mx-auto">Have a question or interested in collaboration? We-d love to hear from you.</p>
    </div>
</header>

<section class="container mb-5 pb-5 px-4 px-lg-0">
    <div class="row justify-content-center">
        <div class="col-lg-6">
            <div class="contact-card p-4 p-md-5 bg-white border border-light-subtle rounded-4 shadow-sm mb-5">
                <form action="#" method="POST" id="contact-form">
                    <div class="mb-4">
                        <label for="name" class="form-label fs-5 fw-bold">Your Name</label>
                        <input type="text" class="form-control form-control-lg border-2 rounded-3" id="name" name="name" placeholder="John Doe" required>
                    </div>
                    <div class="mb-4">
                        <label for="email" class="form-label fs-5 fw-bold">Email Address</label>
                        <input type="email" class="form-control form-control-lg border-2 rounded-3" id="email" name="email" placeholder="john@example.com" required>
                    </div>
                    <div class="mb-4">
                        <label for="subject" class="form-label fs-5 fw-bold">Subject</label>
                        <select class="form-select form-select-lg border-2 rounded-3" id="subject" name="subject">
                            <option selected>General Inquiry</option>
                            <option value="collaboration">Business Collaboration</option>
                            <option value="ad-rate">Advertising & Sponsorship</option>
                            <option value="feedback">Product Feedback</option>
                            <option value="error">Reporting a Bug/Issue</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label for="message" class="form-label fs-5 fw-bold">How can we help?</label>
                        <textarea class="form-control form-control-lg border-2 rounded-3" id="message" name="message" rows="5" placeholder="Tell us more about what's on your mind..." required></textarea>
                    </div>
                    <div class="d-grid gap-2">
                        <button type="submit" class="btn btn-dark btn-lg py-3 rounded-pill fw-bold">Send Message</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="col-lg-4 offset-lg-1">
            <div class="mb-5">
                <h3 class="fw-bold mb-4 serif">Other ways to connect</h3>
                <div class="d-flex align-items-center mb-4">
                    <div class="bg-light p-3 rounded-circle me-3">
                         <span class="fs-4">📧</span>
                    </div>
                    <div>
                        <div class="fw-bold text-muted small">EMAIL US</div>
                        <div class="fw-bold">contact@yourblogdomain.com</div>
                    </div>
                </div>
                <div class="d-flex align-items-center mb-4">
                    <div class="bg-light p-3 rounded-circle me-3">
                         <span class="fs-4">🐦</span>
                    </div>
                    <div>
                        <div class="fw-bold text-muted small">TWITTER (X)</div>
                        <div class="fw-bold">@tamilarasu</div>
                    </div>
                </div>
                <div class="d-flex align-items-center mb-4">
                    <div class="bg-light p-3 rounded-circle me-3">
                         <span class="fs-4">💼</span>
                    </div>
                    <div>
                        <div class="fw-bold text-muted small">LINKEDIN</div>
                        <div class="fw-bold">linkedin/in/tamilarasu</div>
                    </div>
                </div>
            </div>

            <div class="p-4 bg-primary bg-opacity-10 border border-primary border-opacity-25 rounded-4 shadow-sm">
                <h5 class="fw-bold mb-3">Response Time</h5>
                <p class="mb-0 small text-muted">We receive a high volume of mail daily but strive to respond within 24–48 hours for all inquiries.</p>
            </div>
        </div>
    </div>
</section>
