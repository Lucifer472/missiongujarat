import { Ad1, Ad2, Ad3 } from "@/components/ads/ads";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Terms & Condition",
  robots: {
    index: false,
    follow: true,
  },
};

const Terms = () => {
  return (
    <section className="w-full h-full flex flex-col items-start gap-y-4 py-6 basic-container px-2 sm:px-2 md:px-4 xl:px-0">
      <Ad1 />

      <h1
        className={cn(
          "md:text-6xl text-center w-full font-[800]",
          poppins.className
        )}
      >
        Terms of Service
      </h1>
      <span className="w-full text-center text-muted-foreground">
        Updated on January 24th, 2023
      </span>
      <div className="max-w-[750px] mx-auto flex flex-col items-start gap-y-4 w-full">
        <p className="w-full text-left">
          By accessing this website, you are agreeing to be bound by these
          website Terms and Conditions of Use, all applicable laws and
          regulations, and agree that you are responsible for compliance with
          any applicable local laws. If you do not agree with any of these
          terms, you are prohibited from using or accessing this site. The
          materials contained in this website are protected by applicable
          copyright law. All code and content is the sole property of{" "}
          {process.env.NEXTAUTH_URL} and may not be duplicated, reproduced,
          reworked, republished or redistributed without the expressed written
          permission of the site owner.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Acceptable use
        </h2>
        <p className="w-full text-left">
          You must not use this website in any way that causes, or may cause,
          damage to the website or impairment of the availability or
          accessibility of the website; or in any way which is unlawful,
          illegal, fraudulent or harmful, or in connection with any unlawful,
          illegal, fraudulent or harmful purpose or activity.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          No warranties
        </h2>
        <p className="w-full text-left">
          This website is provided “as is” without any representations or
          warranties, express or implied. {process.env.NEXTAUTH_URL} makes no
          representations or warranties in relation to this website or the
          information and materials provided on this website.{" "}
          {process.env.NEXTAUTH_URL}
          does not warrant that:
        </p>
        <ul className="flex flex-col items-start gap-y-4 list-decimal ml-4">
          <li>
            this website will be constantly available, or available at all; or
          </li>
          <li>
            the information on this website is complete, true, accurate or
            non-misleading.
          </li>
        </ul>
        <p className="w-full text-left">
          While {process.env.NEXTAUTH_URL} believes the calculators and
          information and advice to be reliable, we make no claims or
          representations about the accuracy, reliability, timeliness,
          usefulness or completeness of such information or advice. All
          information and advice given on this website is intended only to
          assist you with financial decisions. Your financial situation is
          unique and our information and advice may not be appropriate for your
          situation. You should not rely on any information or advice you obtain
          on this website. Any reliance by you on any information or advice will
          be at your own risk. Nothing on this website constitutes, or is meant
          to constitute, advice of any kind. If you require advice in relation
          to any legal or financial matter, you should consult an appropriate
          professional.
        </p>
        <p className="w-full text-left">
          All content on this site is for general informational purposes only –
          you should not construe this as professional financial advice. We do
          not take any responsibility for any financial or other loss that might
          occur by following the advice written on this website.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>Links</h2>
        <p className="w-full text-left">
          {" "}
          {process.env.NEXTAUTH_URL} has not reviewed all of the sites linked to
          its Internet website and is not responsible for the contents of any
          such linked site. The inclusion of any link does not imply endorsement
          by {process.env.NEXTAUTH_URL} of the site. Use of any such linked
          website is at the users own risk.
        </p>

        <Ad2 />

        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Revisions and Errata
        </h2>
        <p className="w-full text-left">
          The materials appearing on {process.env.NEXTAUTH_URL}s website could
          include technical, typographical, or photographic errors.{" "}
          {process.env.NEXTAUTH_URL}
          does not warrant that any of the materials on its website are
          accurate, complete, or current. {process.env.NEXTAUTH_URL} may make
          changes to the materials contained on its website at any time without
          notice. {process.env.NEXTAUTH_URL} does not, however, make any
          commitment to update the materials.{" "}
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Limitations of liability
        </h2>
        <p className="w-full text-left">
          {" "}
          {process.env.NEXTAUTH_URL} will not be liable to you in relation to
          the contents of, or use of, or otherwise in connection with, this
          website:
        </p>
        <ul className="flex flex-col items-start gap-y-4 list-decimal ml-4">
          <li>any direct loss</li>
          <li>for any indirect, special or consequential loss; or</li>
          <li>
            for any business losses, loss of revenue, income, profits or
            anticipated savings, loss of contracts or business relationships,
            loss of reputation or goodwill, or loss or corruption of information
            or data.
          </li>
        </ul>
        <p className="w-full text-left">
          These limitations of liability apply even if{" "}
          {process.env.NEXTAUTH_URL} has been expressly advised of the potential
          loss.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Other Parties
        </h2>
        <p className="w-full text-left">
          You agree that the limitations of warranties and liability set out in
          this website disclaimer will protect {process.env.NEXTAUTH_URL}{" "}
          officers, employees, authors, independent contractors, agents,
          representatives and affiliates as well as {process.env.NEXTAUTH_URL}.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Unenforceable provisions
        </h2>
        <p className="w-full text-left">
          If any provision of this website disclaimer is, or is found to be,
          unenforceable under applicable law, that will not affect the
          enforceability of the other provisions of this website disclaimer.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Indemnity
        </h2>
        <p className="w-full text-left">
          You hereby indemnify {process.env.NEXTAUTH_URL} and undertake to keep{" "}
          {process.env.NEXTAUTH_URL} indemnified against any losses, damages,
          costs, liabilities and expenses (including without limitation legal
          expenses and any amounts paid by {process.env.NEXTAUTH_URL} to a third
          party in settlement of a claim or dispute on the advice of{" "}
          {process.env.NEXTAUTH_URL}
          legal advisers) incurred or suffered by {
            process.env.NEXTAUTH_URL
          }{" "}
          arising out of any breach by you of any provision of these terms and
          conditions.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Breaches of these terms and conditions
        </h2>
        <p className="w-full text-left">
          Without prejudice to {process.env.NEXTAUTH_URL} other rights under
          these terms and conditions, if you breach these terms and conditions
          in any way, {process.env.NEXTAUTH_URL} may take such action as{" "}
          {process.env.NEXTAUTH_URL} deems appropriate to deal with the breach,
          including suspending your access to the website, prohibiting you from
          accessing the website, blocking computers using your IP address from
          accessing the website, contacting your internet service provider to
          request that they block your access to the website and/or bringing
          court proceedings against you.
        </p>

        <Ad3 />

        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Reasonableness
        </h2>
        <p className="w-full text-left">
          By using this website, you agree that the exclusions and limitations
          of liability set out in this website disclaimer are reasonable. If you
          do not think they are reasonable, you must not use this website.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Site Terms of Use Modifications
        </h2>
        <p className="w-full text-left">
          {" "}
          {process.env.NEXTAUTH_URL} may revise these terms of use for its
          website at any time without notice. By using this website you are
          agreeing to be bound by the then current version of these Terms and
          Conditions of Use.
        </p>
      </div>
    </section>
  );
};

export default Terms;
