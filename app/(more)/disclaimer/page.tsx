import { Ad1, Ad2 } from "@/components/ads/ads";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Disclaimer",
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
        Disclaimer
      </h1>
      <span className="w-full text-center text-muted-foreground">
        Updated on January 24th, 2023
      </span>
      <div className="max-w-[750px] mx-auto flex flex-col items-start gap-y-4 w-full">
        <p className="w-full text-left">
          OJASINFO is a metadata-search engine, which mean that different search
          machines of OJASINFO search in more search engines on the internet.
          The results that are displayed by OJASINFO as result of a search
          command of a user, originate from other search engines. OJASINFO shows
          the source of each result in its result list. It is possible that
          OJASINFO shows in the search results direct links to files or web
          pages that contain material that is protected by copyright or other
          intellectual property rights. However this material can be found and
          accessed by using the Website, OJASINFO does not and cannot grant its
          users the permission to download, copy or use this material. The user
          alone is responsible and liable of the use, copy and / or download of
          this material. OJASINFO is never responsible or liable for sanctions
          based on law or regulations of law suits of any kind against the user
          as result of using search services provided by OJASINFO.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Functioning of the Website
        </h2>
        <p className="w-full text-left">
          Publisher does every effort to keep the website operational and
          permanently accessible, but Publisher cannot guarantee that the
          Website will permanently be operational and accessible. Publisher and
          / or potential providers of the content of the Website accept under no
          circumstances any liability for loss or damages of whatever nature,
          including but not limited to, direct, indirect, special or
          consequential loss or damage, and / or costs (including but not
          limited to costs of legal assistance) which are wholly or partly a
          result of the use, as well problems with the use of the Website,
          profits, loss of date or other (tangible) goods, arising from or
          related to use, the inability to use, the disallowing of use, the
          operation and / or deficiencies in the functioning of the Website.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Information on the Website
        </h2>
        <p className="w-full text-left">
          Publisher edits the information offered on the Website with the utmost
          care and pays the utmost attention to the composition of the Website.
          Still it is possibly that defects may occur, for this reason.
          Publisher cannot guarantee the accuracy and completeness of the
          information that is published on or via the Website. In addition,
          Publisher does not give any guarantee that the use of the Website will
          (or could) lead to and / or is suitable for achieving the
          Website-users desired goal. The managing and maintaining of the
          Website takes solely place in the Netherlands by Publisher.
          <br />
          Publisher does not guarantee that the information which is accessible
          on or via the Website is suitable or available for use in other
          countries. If you use the Website from a location outside the
          Netherlands, you are responsible for the compliance with applicable
          local laws and regulations. Publisher does not accept any liability
          for damages, in whatever form, suffered, direct or indirect as a
          consequence of actions or decisions which are based on information
          which is obtained on or via the Website. In addition, no rights can be
          derived from the content of the Website.
          <br />
          All (Intellectually) Property rights in relation to the Website,
          including but not limited to the rights on the lay-out of the content
          of the Website and the logo of Website, belong exclusively to
          Publisher. This implies that the user of this Website is not allowed -
          except for personal non commercial use - to multiply, send, forward,
          distribute or against payment make available to third parties any
          contents of the Website, without the prior written consent of
          Publisher. Furthermore, all possible rights to the Website and its
          content are reserved.
          <br />
          You shall refrain from modify, reformat, copy, depict, distribute,
          transmit, publish, give into license, transfer or sell any
          information, products or services which you obtained by using the
          Website, as well create derivative works thereof, except when
          expressly permitted by the applicable law or as authorized in writing
          by Publisher or the applicable licensor (such as an advertiser). You
          shall refrain from displaying in any way, the home page or results
          pages of the Website on your own website.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Information, websites and files of third parties
        </h2>
        <p className="w-full text-left">
          The website of Publisher includes references and / or hyperlinks to
          third party websites and / or files. The content of these reference
          websites / files are not verified by the Publisher. With the
          references and / or hyperlinks Publisher offers only a possibility to
          the user to obtain further information to the extent as required by
          the user. The reference and / or hyperlinks do not mean that Publisher
          recommends any products or services offered to the user on or via the
          websites.
          <br />
          In no event Publisher gives any guarantee or accepts any liability in
          relation to the content, use and availability of such websites /
          files. Nor does Publisher gives any guarantee or accepts any liability
          for damages in any form to the software and / or hardware of the user
          as a consequence of the approach or use of the websites and / or files
          of a third party. The inclusion of any links on Publisher does not
          imply a recommendation or endorse the views expressed within them.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Copyrights of third parties on texts, images, video files and Music
          files{" "}
        </h2>
        <p className="w-full text-left">
          The information on the websites of third parties, or files of third
          parties can be protected by copyrights. It is possible to locate and
          access information and / of files via Website, however this does not
          give a right to the user to download, copy or use this information and
          / or files. In case the user downloads and / or uses this information
          and / or files, the user alone will be responsible and liable.
          Publisher does not accept any liability for legal sanctions and / or
          criminal proceedings against the user as a consequence of use of the
          Website or a website of a third party.
        </p>
        <Ad2 />
        <h2 className={cn("text-xl font-[600]", poppins.className)}>Changes</h2>
        <p className="w-full text-left">
          Publisher is allowed to change on or via the Website the information
          provided, including the text of these Terms, at any time without
          further notice. Publisher recommends periodical checking of the
          information given on or via the Website, including the text of these
          Terms, has been changed.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>Privacy</h2>
        <p className="w-full text-left">
          Publisher respects the privacy of all users of the Website that use
          the services provided by Publisher. What information Publisher
          collects, how it uses this information and how your privacy is
          guaranteed will be explained in our Privacy Policy. Publisher strongly
          advises you to take notice of this Privacy Policy. By using the
          Website, you agree to be bound to the Privacy Policy.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Applicable law and jurisdiction
        </h2>
        <p className="w-full text-left">
          These Terms comprise all Publisher agreed with you in relation to the
          use of the Website. These Terms will be construed and governed under
          Dutch law. Any disputes arising out or in connection to the Terms
          shall exclusively be submitted to and finally be resolved by the
          competent court in the Netherlands.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Affiliate disclaimer
        </h2>
        <p className="w-full text-left">
          OJASINFO offers a shopping experience as easy as possible. We have
          relationships with various companies, organizations and entities whose
          products or services may be listed on OJASINFO. If any of those
          products or services are purchased through the links on this website,
          then OJASINFO may be compensated. It may happen that shops compensate
          us to help promote their products or services so that they are easier
          to find.
        </p>
      </div>
    </section>
  );
};

export default Terms;
