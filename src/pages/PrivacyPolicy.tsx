import { type ReactNode } from "react";
import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import SEO from "@/components/site/SEO";

const sections: { heading: string; body: ReactNode }[] = [
  {
    heading: "1. Introduction",
    body: (
      <p>
        PipePioneers ("PipePioneers", "we", "us" or "our") respects your privacy and is committed
        to protecting your personal information. This Privacy Policy explains what information we
        collect through www.pipepioneersinfra.com (the "Website"), how we use it and the rights
        available to you under the Cyber and Data Protection Act [Chapter 12:07] of Zimbabwe. By
        using the Website, you consent to the practices described in this Policy.
      </p>
    ),
  },
  {
    heading: "2. Information We Collect",
    body: (
      <>
        <p>
          We collect information that you choose to provide when you submit the Contact form or
          the Enquiry popup on the Website. This may include the following:
        </p>
        <ul className="mt-3 list-disc list-inside space-y-1.5">
          <li>Your full name</li>
          <li>Your mobile number</li>
          <li>Your email address</li>
          <li>The service you are enquiring about and any message you include</li>
          <li>The date and time of your submission</li>
        </ul>
        <p className="mt-3">
          We do not knowingly collect sensitive personal information, such as financial or health
          data, through the Website.
        </p>
      </>
    ),
  },
  {
    heading: "3. How We Use Your Information",
    body: (
      <>
        <p>We use the information you provide only to do the following:</p>
        <ul className="mt-3 list-disc list-inside space-y-1.5">
          <li>Respond to your enquiry and prepare a quotation</li>
          <li>Contact you by phone, WhatsApp or email about a project you have raised with us</li>
          <li>Keep a record of enquiries for our own administrative purposes</li>
          <li>Improve the services we offer and the content of the Website</li>
        </ul>
        <p className="mt-3">
          We do not use your information for automated decision-making, and we do not sell or rent
          your personal information to third parties.
        </p>
      </>
    ),
  },
  {
    heading: "4. Legal Basis for Processing",
    body: (
      <p>
        We process your personal information on the basis of your consent, given when you
        voluntarily submit a form on the Website, and on the basis of our legitimate interest in
        responding to enquiries and providing our services. You may withdraw your consent at any
        time by contacting us using the details in section 10 below.
      </p>
    ),
  },
  {
    heading: "5. How Your Information Is Handled",
    body: (
      <p>
        Form submissions on the Website are delivered to our email inbox through EmailJS, a
        third-party form-processing service. EmailJS acts as a data processor on our behalf and
        transmits your submission directly to us; we do not store your information in a separate
        database on our own servers. We take reasonable technical and organisational measures to
        keep the information we hold secure, but no method of electronic transmission or storage
        is completely secure, and we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    heading: "6. Sharing of Your Information",
    body: (
      <>
        <p>We do not sell your personal information. We may share it only in the following limited circumstances:</p>
        <ul className="mt-3 list-disc list-inside space-y-1.5">
          <li>With EmailJS, solely to deliver your form submission to us</li>
          <li>With our staff and subcontractors, where necessary to carry out a project you have requested</li>
          <li>Where required by law, court order or a lawful request from a Zimbabwean regulatory authority</li>
        </ul>
      </>
    ),
  },
  {
    heading: "7. Cookies",
    body: (
      <p>
        The Website does not currently use tracking or advertising cookies. If this changes, this
        Policy will be updated to describe what cookies are used and how you can control them
        through your browser settings.
      </p>
    ),
  },
  {
    heading: "8. Data Retention",
    body: (
      <p>
        We retain enquiry information only for as long as is reasonably necessary to respond to
        your request, complete any related project and meet our legal and accounting obligations.
        You may ask us to delete your information at any time, and we will do so unless we are
        required to retain it by law.
      </p>
    ),
  },
  {
    heading: "9. Your Rights",
    body: (
      <>
        <p>
          Under the Cyber and Data Protection Act [Chapter 12:07], you have the right to do the
          following in relation to your personal information:
        </p>
        <ul className="mt-3 list-disc list-inside space-y-1.5">
          <li>Ask us to confirm what information we hold about you</li>
          <li>Request a copy of that information</li>
          <li>Ask us to correct inaccurate or incomplete information</li>
          <li>Ask us to delete your information</li>
          <li>Withdraw your consent to our processing of your information</li>
          <li>Lodge a complaint with the Postal and Telecommunications Regulatory Authority of Zimbabwe (POTRAZ), the designated data protection authority</li>
        </ul>
        <p className="mt-3">To exercise any of these rights, please contact us using the details in section 10 below.</p>
      </>
    ),
  },
  {
    heading: "10. Contact Us",
    body: (
      <p>
        If you have any questions about this Privacy Policy or wish to exercise your rights,
        please contact us at{" "}
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
  {
    heading: "11. Children's Privacy",
    body: (
      <p>
        The Website is not directed at children, and we do not knowingly collect personal
        information from anyone under the age of 18. If you believe a child has provided us with
        personal information, please contact us and we will remove it.
      </p>
    ),
  },
  {
    heading: "12. Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices or
        in applicable law. The updated Policy will be posted on this page with a revised effective
        date. We encourage you to review this page periodically.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy | PipePioneers"
        description="Learn how PipePioneers collects, uses and protects your personal information."
        path="/privacy-policy"
      />
      <PageHeader
        title="Privacy Policy"
        subtitle="How we collect, use and protect the information you share with us."
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
