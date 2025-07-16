import React from 'react'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-display font-bold text-slate-ink-900 mb-8">
            Privacy Policy
          </h1>
          
          <div className="text-slate-ink-900/80 space-y-6">
            <p className="text-lg">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-GB', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-slate-ink-900 mb-4">
                1. Information We Collect
              </h2>
              <p>
                We collect information you provide directly to us, such as when you request a quote, 
                contact us, or use our services. This may include your name, email address, phone number, 
                and details about your transportation requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-ink-900 mb-4">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our transportation services</li>
                <li>To process your booking requests and communicate with you</li>
                <li>To send you service updates and promotional materials (with your consent)</li>
                <li>To improve our services and customer experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-ink-900 mb-4">
                3. Information Sharing
              </h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy. We may share information with 
                trusted service providers who assist us in operating our business.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-ink-900 mb-4">
                4. Data Security
              </h2>
              <p>
                We implement appropriate security measures to protect your personal information against 
                unauthorised access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-ink-900 mb-4">
                5. Your Rights
              </h2>
              <p>
                Under UK data protection laws, you have the right to access, update, or delete your 
                personal information. You may also object to certain processing activities. To exercise 
                these rights, please contact us using the information below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-ink-900 mb-4">
                6. Cookies
              </h2>
              <p>
                Our website may use cookies to enhance your experience. You can choose to disable 
                cookies through your browser settings, though this may affect the functionality of 
                our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-ink-900 mb-4">
                7. Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any 
                changes by posting the new policy on this page with an updated effective date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-ink-900 mb-4">
                8. Contact Us
              </h2>
              <p>
                If you have any questions about this privacy policy, please contact us:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg mt-4">
                <p><strong>Britannia Coaches Ltd</strong></p>
                <p>North End, Bury Mead Road</p>
                <p>Hitchin, Hertfordshire SG5 1RT</p>
                <p>Phone: 01462 436125</p>
                <p>Email: enquiries@britanniacoaches.co.uk</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}