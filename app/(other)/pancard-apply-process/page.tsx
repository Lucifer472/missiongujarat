import { Ad1, Ad2, Ad3 } from "@/components/ads/ads";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Indian PAN Card – See How to Get Your PAN Card",
  description:
    "Learn how to apply for Indian PAN Card online easily and quickly, with information on required documents and process steps.",
  keywords:
    "Apply for Pan Card Online India,Pan Card Correction India,Lost Pan Card India,Change of Name Pan Card India,Pan Card Status Check India,Urgent Pan Card India,Pan Card for Foreigners India,Pan Card for NRI India,Duplicate Pan Card India,Pan Card Address Change India,Income Tax Filing IndiaFile Income Tax Online India,Income Tax Return India,Income Tax Calculator India,Chartered Accountant for Income Tax India,Income Tax Consultant India,Capital Gains Tax India,TDS on Salary India,Income Tax Slab India,ITR Forms India",
};

const PanCardApply = () => {
  return (
    <main>
      <div className="w-full flex flex-col gap-y-1">
        <div className="w-full h-20 flex items-center justify-center bg-main">
          <h2 className="text-white text-2xl font-medium max-w-7xl mx-auto px-2">
            भारतीय पैन कार्ड
          </h2>
        </div>
        <div className="max-w-7xl mx-auto w-full flex items-start justify-start my-1 px-2">
          <p className="font-semibold">
            भारतीय पैन कार्ड - देखें अपना पैन कार्ड कैसे प्राप्त करें ⬇️
          </p>
        </div>
        <Ad1 />
        <div className="max-w-7xl mx-auto w-full flex items-start justify-start my-1">
          <p className="w-full text-justify px-2">
            जानें कि अपना भारतीय पैन कार्ड जल्दी और आसानी से कैसे प्राप्त करें!
            🌐📝 भारत में कर जीवन के लिए पैन कार्ड आवश्यक है, जो प्रत्येक
            व्यक्ति के लिए एक विशिष्ट पहचानकर्ता के रूप में कार्य करता है। इस
            लेख में, हम आपको अपना घर छोड़े बिना, अपने पैन कार्ड के लिए ऑनलाइन
            आवेदन करने की सरल और सुविधाजनक प्रक्रिया के बारे में मार्गदर्शन
            करेंगे। 🏠💼 हमारे सुझावों और विस्तृत चरण-दर-चरण मार्गदर्शिका के
            साथ, कुछ ही समय में आपका कार्ड आपके हाथों में होगा, और आप जटिलताओं
            के बिना अपने कर दायित्वों को पूरा करने के लिए तैयार होंगे! 💳🇮🇳
          </p>
        </div>
        <Link
          href={"/pan-card-application-online-complete-information-2024"}
          className="max-w-7xl mx-auto w-full flex items-center justify-center my-1 px-2"
        >
          <Image
            src={"/pan-card.png"}
            alt="pan card"
            width={500}
            height={500}
          />
        </Link>
        <Ad2 />
        <div className="max-w-7xl mx-auto w-full flex items-center justify-center flex-col my-4 px-2 gap-y-2">
          <Link
            href={"/pan-card-application-online-complete-information-2024"}
            className="w-full rounded-full bg-main text-2xl hover:bg-[#9a3737] text-white text-center py-4 md:py-6"
          >
            अनुरोध करना सीखें
          </Link>
          <Link
            href={"/pan-card-application-online-complete-information-2024"}
            className="w-full rounded-full bg-main text-2xl hover:bg-[#9a3737] text-white text-center py-4 md:py-6"
          >
            ज्यादा जानें
          </Link>
        </div>
        <Ad3 />
      </div>
    </main>
  );
};

export default PanCardApply;
