import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HIPAA Notification - Madison Hearne | LCSW",
  description: "Learn about how your protected health information (PHI) is handled according to HIPAA regulations.",
};

export default function HipaaNotification() {
  return (
    <main className="container mx-auto px-6 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">NOTICE OF PRIVACY PRACTICES</h1>
      <p className="mb-4">
        THIS NOTICE DESCRIBES HOW HEALTH INFORMATION MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.
      </p>

      <h2 className="text-2xl font-semibold mt-6">I. MY PLEDGE REGARDING HEALTH INFORMATION:</h2>
      <p className="mb-4">
        I understand that health information about you and your health care is personal. I am committed to protecting health information about you...
      </p>

      <h2 className="text-2xl font-semibold mt-6">II. HOW I MAY USE AND DISCLOSE HEALTH INFORMATION ABOUT YOU:</h2>
      <p className="mb-4">
        The following categories describe different ways that I use and disclose health information...
      </p>

      <h2 className="text-2xl font-semibold mt-6">III. CERTAIN USES AND DISCLOSURES REQUIRE YOUR AUTHORIZATION:</h2>
      <p className="mb-4">
        Psychotherapy Notes. I do keep “psychotherapy notes” as that term is defined...
      </p>

      <h2 className="text-2xl font-semibold mt-6">VI. YOU HAVE THE FOLLOWING RIGHTS WITH RESPECT TO YOUR PHI:</h2>
      <p className="mb-4">
        The Right to Request Limits on Uses and Disclosures of Your PHI...
      </p>

      <h2 className="text-2xl font-semibold mt-6">EFFECTIVE DATE OF THIS NOTICE</h2>
      <p className="mb-4">This notice went into effect on September 20, 2013.</p>
      
      <p className="mt-6 text-sm text-gray-600">
        Under the Health Insurance Portability and Accountability Act of 1996 (HIPAA), you have certain rights regarding the use and disclosure of your protected health information.
      </p>
    </main>
  );
}
