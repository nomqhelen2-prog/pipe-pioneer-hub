import { type ReactNode } from "react";
import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import SEO from "@/components/site/SEO";

const sections: { heading: string; body: ReactNode }[] = [
  {
    heading: "1. Acceptance of These Terms",
    body: (
      <p>
        These Terms of Use ("Terms") govern your access to and use of the PipePioneers website at
        www.pipepioneersinfra.com (the "Website"), operated by PipePioneers, a trade services
        business based in Bulawayo, Zimbabwe ("PipePioneers", "we", "us" or "our"). By accessing or
        using the Website, you agree to be bound by these Terms. If you do not agree with any part
        of these Terms, please do not use the Website.
      </p>
    ),
  },
  {
    heading: "2. About PipePioneers",
    body: (
      <p>
        PipePioneers provides plumbing, electrical, tiling, painting and building renovation
        services to clients in Bulawayo and the surrounding areas. The Website is provided to
        share information about these services and to allow visitors to request quotations and
        make enquiries.
      </p>
    ),
  },
  {
    heading: "3. Use of This Website",
    body: (
      <>
        <p>
          You may use the Website for lawful purposes only. You agree not to do any of the
          following while using the Website:
        </p>
        <ul className="mt-3 list-disc list-inside space-y-1.5">
          <li>Use the Website in any way that breaches any applicable law or regulation in Zimbabwe</li>
          <li>Attempt to gain unauthorised access to the Website, its servers or any connected system</li>
          <li>Introduce viruses, malware or any other harmful material to the Website</li>
          <li>Copy, reproduce or republish content from the Website without our written permission</li>
          <li>Submit false or misleading information through any form on the Website</li>
        </ul>
      </>
    ),
  },
  {
    heading: "4. Enquiries and Quotations",
    body: (
      <p>
        Any quotation, price estimate or turnaround time provided through the Website, whether by
        the Contact form or the Enquiry popup, is an indication only and does not constitute a
        binding offer. A final price and schedule are confirmed only once PipePioneers has assessed
        the site and both parties have agreed in writing. Submitting an enquiry does not create a
        contract between you and PipePioneers.
      </p>
    ),
  },
  {
    heading: "5. Intellectual Property",
    body: (
      <p>
        All text, graphics, logos, images and other material on the Website are the property of
        PipePioneers or its licensors and are protected under Zimbabwean and international
        intellectual property law. You may view and print pages from the Website for your own
        personal, non-commercial use, provided you do not modify the material or remove any
        copyright or trademark notice.
      </p>
    ),
  },
  {
    heading: "6. Third-Party Links",
    body: (
      <p>
        The Website may contain links to third-party sites, such as WhatsApp, Google Maps or
        Gmail, for your convenience. We do not control these sites and are not responsible for
        their content, availability or privacy practices. Visiting a linked site is at your own
        risk and subject to that site's own terms.
      </p>
    ),
  },
  {
    heading: "7. Disclaimer of Warranties",
    body: (
      <p>
        The Website and its content are provided on an "as is" and "as available" basis. While we
        take reasonable care to keep information accurate and up to date, we make no warranty that
        the Website will be uninterrupted, error-free or free of viruses, and we do not warrant the
        accuracy or completeness of any content published on it.
      </p>
    ),
  },
  {
    heading: "8. Limitation of Liability",
    body: (
      <p>
        To the fullest extent permitted by the laws of Zimbabwe, PipePioneers shall not be liable
        for any direct, indirect, incidental or consequential loss or damage arising from your
        access to or use of, or inability to access or use, the Website. This limitation does not
        exclude any liability that cannot lawfully be excluded, including liability for death or
        personal injury caused by our negligence.
      </p>
    ),
  },
  {
    heading: "9. Indemnity",
    body: (
      <p>
        You agree to indemnify and hold PipePioneers harmless against any claim, loss or expense
        arising from your breach of these Terms or your misuse of the Website.
      </p>
    ),
  },
  {
    heading: "10. Governing Law and Jurisdiction",
    body: (
      <p>
        These Terms are governed by the laws of Zimbabwe. Any dispute arising out of or in
        connection with these Terms or your use of the Website shall be subject to the exclusive
        jurisdiction of the courts of Zimbabwe.
      </p>
    ),
  },
  {
    heading: "11. Changes to These Terms",
    body: (
      <p>
        We may update these Terms from time to time to reflect changes in our services or in
        applicable law. The updated Terms will be posted on this page with a revised effective
        date. Your continued use of the Website after any update constitutes acceptance of the
        revised Terms.
      </p>
    ),
  },
  {
    heading: "12. Contact Us",
    body: (
      <p>
        If you have any questions about these Terms, please contact us at{" "}
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pipepioneerssales@gmail.com" target="_blank" rel="noopener noreferrer" className="text-brand-orange font-medium hover:underline">
          pipepioneerssales@gmail.com
        </a>{" "}
        or by phone at{" "}
        <a href="tel:+263292330592" className="text-brand-orange font-medium hover:underline">
          +263 29 233 0592
        </a>
        , or by post at Office 36, Stand 16463, Cowden Road, Steeldale, Bulawayo, Zimbabwe.
      </p>
    ),
  },
];

export default function TermsOfUse() {
  return (
    <Layout>
      <SEO
        title="Terms of Use | PipePioneers"
        description="Read the terms and conditions that govern your use of the PipePioneers website."
        path="/terms-of-use"
      />
      <PageHeader
        title="Terms of Use"
        subtitle="Please read these terms carefully before using our website."
      />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
        <p className="text-sm text-muted-foreground">Effective date: 19 September 2026</p>

        <div className="mt-8 space-y-10">
          {sections.map(({ heading, body }) => (
            <div key={heading}>
              <h2 className="font-display font-bold text-xl text-brand-navy">{heading}</h2>
              <div className="mt-3 text-muted-foreground leading-relaxed space-y-3">{body}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
