// src/pages/PrivacyPolicy.jsx
// Bogga Privacy Policy — qof walba u furan (login looma baahna).
// URL: /privacy-policy  (tusaale: https://imamuniversity.galladtech.com/privacy-policy)
//
// ⚠️ KAHOR INTAADAN DAABICIN: ku qor email-kaaga rasmiga ah CONTACT_EMAIL hoose.
import { useEffect } from "react";
import { ShieldCheck, Mail, Globe, Building2 } from "lucide-react";

const COMPANY = "Gallad Tech Platforms";
const APP_NAME = "Imam University Portal";
const WEBSITE = "https://galladtech.com";
const CONTACT_EMAIL = "support@example.com"; // ← BEDDEL: email-kaaga rasmiga ah
const EFFECTIVE_DATE = "October 9, 2026";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    body: (
      <>
        <p>
          {COMPANY} (“we”, “us”, “our”) respects your privacy. This Privacy Policy explains how we
          collect, use, store, and protect information when you use the {APP_NAME} website and mobile
          application (together, the “Services”), which we operate for Imam University.
        </p>
        <p>By using the Services, you agree to the practices described in this policy.</p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    body: (
      <>
        <p>Depending on how you use the Services, we may collect the following information:</p>
        <ul>
          <li>
            <strong>Student account information</strong> — created by the university administration:
            student ID, full name, gender, department, faculty, semester, study type (full-time or
            part-time), and account password. Students may optionally add a profile photo.
          </li>
          <li>
            <strong>Teacher account information</strong> — full name, gender, username, password,
            assigned classes, subjects and teaching days, and an optional profile photo.
          </li>
          <li>
            <strong>Attendance records</strong> — the date, time, class, subject, and attendance
            status (present, absent, or excused) recorded by teachers for each student.
          </li>
          <li>
            <strong>Student ID card information</strong> — name, ID number, title, issue and expiry
            dates, and photo, when the university issues an ID card.
          </li>
          <li>
            <strong>Community posts and comments</strong> — text, images, or videos posted by the
            university, and the display name, optional photo, comments, and likes of visitors who
            interact with posts.
          </li>
          <li>
            <strong>Information stored on your device</strong> — to keep you signed in and to remember
            your community display name, the Services store a small amount of data in your browser or
            app storage. We do not use advertising cookies.
          </li>
        </ul>
        <p>
          We do not collect your precise location, contacts, payment information, or advertising
          identifiers.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Information",
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide and maintain the Services.</li>
          <li>Create and manage student, teacher, and administrator accounts.</li>
          <li>Record attendance and produce attendance reports for the university.</li>
          <li>Produce student ID cards and student and teacher lists.</li>
          <li>Display community posts and comments.</li>
          <li>Respond to questions and support requests.</li>
          <li>Improve the performance, reliability, and security of the Services.</li>
          <li>Comply with applicable legal requirements.</li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Sharing of Information",
    body: (
      <>
        <p>We do not sell personal information. We share information only:</p>
        <ul>
          <li>
            With Imam University administration and teachers, who need it to manage classes,
            attendance, and student records.
          </li>
          <li>
            With service providers that help us operate the Services, such as Google Firebase for data
            storage and file hosting.
          </li>
          <li>When required by law, or when necessary to protect our users and the Services.</li>
        </ul>
        <p>
          Students can see only their own records. Community posts and comments are visible to anyone
          who visits the community page.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Data Storage and Security",
    body: (
      <p>
        Information is stored on Google Firebase cloud services and transmitted over encrypted
        connections (HTTPS). Access to the administration area is restricted to authorized staff. We
        take reasonable measures to protect information against unauthorized access, loss, misuse, or
        disclosure. However, no electronic storage or transmission method can be guaranteed to be
        completely secure.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Data Retention and Deletion",
    body: (
      <>
        <p>
          We retain information only for as long as reasonably necessary for the purposes described in
          this policy, or as required by law or university record-keeping rules.
        </p>
        <p>
          Student and teacher accounts are created and removed by the university administration.
          To request deletion of your account or personal information, contact the university
          administration or email us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with
          your name and student ID or username. We will respond within 30 days. Some records, such as
          attendance history, may be kept where the law or university regulations require it.
        </p>
        <p>
          Community visitors can clear their display name and photo at any time by clearing the app or
          browser data on their device, and may ask us to remove their comments.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    body: (
      <p>
        The Services are intended for university students, staff, and the general public, and are not
        directed toward children under 13. We do not knowingly collect personal information from
        children under 13. If you believe a child has provided us with personal information, please
        contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    body: (
      <p>
        The Services use Google Firebase (Cloud Firestore and Cloud Storage) for hosting and data
        storage, and Google Fonts for typography. These providers may process information according
        to their own privacy policies, including the{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          Google Privacy Policy
        </a>
        .
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. Any changes will be published on this page
        with an updated effective date.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: <p>For privacy questions or data deletion requests, contact us:</p>,
  },
];

export default function PrivacyPolicy() {
  useEffect(() => {
    const prev = document.title;
    document.title = `Privacy Policy | ${APP_NAME}`;
    window.scrollTo(0, 0);
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div className="bg-parchment">
      {/* Header */}
      <section className="bg-navy-700 ledger-lines">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/50 bg-gold-500/10 text-gold-400">
            <ShieldCheck size={26} />
          </span>
          <h1 className="mt-4 font-display text-3xl font-semibold text-parchment sm:text-4xl">Privacy Policy</h1>
          <p className="mt-2 text-sm text-navy-200">
            {COMPANY} · {APP_NAME}
          </p>
          <p className="mt-1 text-xs text-gold-400">Effective Date: {EFFECTIVE_DATE}</p>
        </div>
      </section>

      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[220px_1fr]">
        {/* Table of contents */}
        <aside className="hidden lg:block">
          <nav className="sticky top-24 rounded-xl border border-navy-100 bg-white p-4">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-navy-400">Contents</p>
            <ol className="space-y-1.5 text-xs">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-navy-600 hover:text-gold-700">
                    {i + 1}. {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        {/* Body */}
        <article className="rounded-2xl border border-navy-100 bg-white px-5 py-6 shadow-sm sm:px-8 sm:py-8">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-24 border-b border-navy-50 py-5 first:pt-0 last:border-0">
              <h2 className="font-display text-lg font-semibold text-navy-800">
                <span className="mr-2 text-gold-600">{i + 1}.</span>
                {s.title}
              </h2>
              <div className="mt-2 space-y-3 text-sm leading-relaxed text-navy-600 [&_a]:font-medium [&_a]:text-navy-800 [&_a]:underline [&_li]:pl-1 [&_strong]:text-navy-800 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
                {s.body}
              </div>
              {s.id === "contact" && (
                <div className="mt-4 grid gap-2 sm:grid-cols-3">
                  <div className="flex items-center gap-2 rounded-lg bg-navy-50/60 px-3 py-2.5 text-xs text-navy-700">
                    <Building2 size={15} className="shrink-0 text-gold-600" /> {COMPANY}
                  </div>
                  <a href={WEBSITE} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-navy-50/60 px-3 py-2.5 text-xs text-navy-700 hover:bg-gold-50">
                    <Globe size={15} className="shrink-0 text-gold-600" /> {WEBSITE.replace("https://", "")}
                  </a>
                  <a href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-center gap-2 break-all rounded-lg bg-navy-50/60 px-3 py-2.5 text-xs text-navy-700 hover:bg-gold-50">
                    <Mail size={15} className="shrink-0 text-gold-600" /> {CONTACT_EMAIL}
                  </a>
                </div>
              )}
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}