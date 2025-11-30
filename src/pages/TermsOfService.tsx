import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Decorative background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-4xl mx-auto px-4 py-6">
        <Header />

        <main className="py-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Terms of Service</h2>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="bg-card rounded-xl p-8 shadow-card border border-border/50 prose prose-lg max-w-none">
            <section className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h3>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Font Generator, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">2. Description of Service</h3>
              <p className="text-muted-foreground leading-relaxed">
                Font Generator provides a free online tool that converts regular text into various stylish Unicode font styles. The service is provided "as is" and is available for personal and commercial use.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">3. User Responsibilities</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When using our service, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Use the service for lawful purposes only</li>
                <li>Not attempt to disrupt or interfere with the service</li>
                <li>Not use the generated text for harassment, spam, or illegal activities</li>
                <li>Respect the intellectual property rights of others</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">4. Intellectual Property</h3>
              <p className="text-muted-foreground leading-relaxed">
                The Font Generator website, including its design, functionality, and content, is owned by us and protected by copyright and other intellectual property laws. The Unicode characters used for text transformation are part of the Unicode Standard and are freely available for use.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">5. Generated Content</h3>
              <p className="text-muted-foreground leading-relaxed">
                You retain all rights to the original text you input. The transformed output is yours to use freely for any purpose, including personal and commercial applications.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">6. Disclaimer of Warranties</h3>
              <p className="text-muted-foreground leading-relaxed">
                This service is provided "as is" without any warranties, express or implied. We do not guarantee that the service will be uninterrupted, secure, or error-free. Unicode character support may vary across different platforms and devices.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">7. Limitation of Liability</h3>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the service.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">8. Third-Party Links</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our service may contain links to third-party websites. We are not responsible for the content or privacy practices of these external sites.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">9. Modifications to Service</h3>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any part of the service at any time without notice. We may also update these terms periodically.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">10. Governing Law</h3>
              <p className="text-muted-foreground leading-relaxed">
                These terms shall be governed by and construed in accordance with applicable laws, without regard to conflicts of law principles.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-4">11. Contact</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us through our contact page.
              </p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default TermsOfService;