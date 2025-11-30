import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
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
          <h2 className="text-3xl font-bold text-foreground mb-2">Privacy Policy</h2>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="bg-card rounded-xl p-8 shadow-card border border-border/50 prose prose-lg max-w-none">
            <section className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">1. Introduction</h3>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Font Generator. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we handle any information when you use our website.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">2. Information We Collect</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Font Generator is designed with privacy in mind. We collect minimal information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Text Input:</strong> The text you type is processed entirely in your browser and is never sent to our servers.</li>
                <li><strong>Analytics:</strong> We may collect anonymous usage statistics to improve our service.</li>
                <li><strong>Contact Information:</strong> If you contact us, we collect the information you provide.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">3. How We Use Your Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                Any information collected is used solely to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                <li>Provide and maintain our service</li>
                <li>Improve user experience</li>
                <li>Respond to your inquiries</li>
                <li>Analyze usage patterns to enhance functionality</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">4. Data Storage</h3>
              <p className="text-muted-foreground leading-relaxed">
                All text transformations happen locally in your browser. We do not store, log, or transmit the text you enter into our font generator. Your creative content remains entirely private.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">5. Cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may use cookies and similar tracking technologies to improve your browsing experience. You can control cookies through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">6. Third-Party Services</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may use third-party services for analytics and performance monitoring. These services have their own privacy policies governing their use of information.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">7. Children's Privacy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our service is available to users of all ages. We do not knowingly collect personal information from children under 13 without parental consent.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">8. Changes to This Policy</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-4">9. Contact Us</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us through our contact page.
              </p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPolicy;