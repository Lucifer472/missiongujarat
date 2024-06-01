import { Ad1, Ad2, Ad3, SmallAd } from "@/components/ads/ads";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Scooty Yojana 2024",
  description:
    "Free Scooty Yojana 2024, an empowering initiative aimed at providing accessible transportation solutions. Our website serves as a comprehensive guide, offering detailed information about the government's scheme, eligibility criteria, application process, and benefits",
  keywords:
    "Free Scooty Yojana,Scooty Distribution Scheme 2024,Government Scooter Scheme,Scooty Subsidy Program,Free Two-Wheeler Initiative,Scooty Distribution Eligibility,How to Apply for Free Scooty",
};

const FreeScootyPage = () => {
  return (
    <main>
      <div className="w-full flex flex-col gap-y-1">
        <div className="w-full h-20 flex items-center justify-center bg-main">
          <h2 className="text-white text-2xl font-medium max-w-7xl mx-auto px-2">
            Free Scooty Yojana 2024
          </h2>
        </div>
        <div className="max-w-7xl mx-auto w-full flex items-start justify-start my-1 px-2">
          <p className="font-semibold">
            Free Scooty Yojana 2024 Apply Online ⬇️
          </p>
        </div>
        <Ad1 />
        <div className="max-w-7xl mx-auto w-full flex items-start justify-start my-1">
          <p className="w-full text-justify px-2">
            Haryana Free Scooty Scheme 2024: Current Developments in the
            Electric Scooter Initiative for Daughters of Registered Construction
            Workers The Haryana government has recently released a notification
            for the Electric Scooter Yojana, a scheme administered by the Labor
            Department, with a specific focus on the daughters of registered
            construction workers. Aspiring individuals meeting the eligibility
            criteria can now apply for the Haryana Free Scooty Scheme 2024
            through the official website hrylabour.gov.in.
          </p>
        </div>
        <Link
          href={"/free-scooty-yojana-2024-apply-online"}
          className="max-w-7xl mx-auto w-full flex items-center justify-center my-1 px-2"
        >
          <Image src={"/scooty.png"} alt="pan card" width={500} height={500} />
        </Link>
        <SmallAd />
        <div className="max-w-7xl mx-auto w-full flex items-center justify-center flex-col my-4 px-2 gap-y-2">
          <Link
            href={"/free-scooty-yojana-2024-apply-online"}
            className="w-full rounded-full bg-main text-2xl hover:bg-[#9a3737] text-white text-center py-4 md:py-6"
          >
            स्कूटी आवेदन फॉर्म
          </Link>
          <Link
            href={"/free-scooty-yojana-2024-apply-online"}
            className="w-full rounded-full bg-main text-2xl hover:bg-[#9a3737] text-white text-center py-4 md:py-6"
          >
            ज्यादा जानें
          </Link>
        </div>
        {/* <Ad3 /> */}
      </div>
    </main>
  );
};

export default FreeScootyPage;
