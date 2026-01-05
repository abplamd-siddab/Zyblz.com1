import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

            <div className="prose prose-invert prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold font-heading mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the Zyblz website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-heading mb-4">Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Zyblz provides AI-powered software development and automation services. The specific scope, deliverables, timelines, and pricing for any project will be defined in a separate agreement or statement of work between Zyblz and the client.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-heading mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Unless otherwise agreed in writing, all intellectual property rights in the deliverables created by Zyblz will transfer to the client upon full payment. Zyblz retains the right to use general knowledge, skills, and experience gained during the project.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-heading mb-4">Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payment terms will be specified in individual project agreements. Unless otherwise stated, invoices are due within 30 days of receipt. Late payments may incur additional charges.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-heading mb-4">Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the engagement. This obligation survives the termination of any agreement between the parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-heading mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, Zyblz shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to the use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-heading mb-4">Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate an engagement by providing written notice as specified in the project agreement. Upon termination, the client shall pay for all work completed up to the termination date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-heading mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Gujarat, India.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-heading mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-heading mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at{" "}
                  <a href="mailto:hello@zyblz.com" className="text-primary hover:underline">hello@zyblz.com</a> or call us at{" "}
                  <a href="tel:+919724445451" className="text-primary hover:underline">+91 9724445451</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
