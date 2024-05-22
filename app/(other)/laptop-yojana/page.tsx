import { Ad1, Ad2, Ad3 } from "@/components/ads/ads";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AICTE Free Laptop Yojana Apply Online",
  description:
    "Discover how to get a free laptop in India and expand your digital opportunities in 2024. Easily sign up on your mobile phone.",
  keywords:
    "Free Laptop Scheme for Students India,Government Laptop Yojana Apply Online India,Laptop Scheme,Best Laptops for Students under ₹30,000 India,Scholarship for Laptops in India,Top Universities in India for B.tech,University Scholarships in India,NEET Coaching Classes,JEE Main/Advanced Preparation,Coaching Classes",
};

const LaptopPage = () => {
  return (
    <main>
      <div className="w-full flex flex-col gap-y-1">
        <div className="w-full h-20 flex items-center justify-center bg-main">
          <h2 className="text-white text-2xl font-medium max-w-7xl mx-auto px-2">
            Free Laptop Yojana Apply Online
          </h2>
        </div>
        <div className="max-w-7xl mx-auto w-full flex items-start justify-start my-1 px-2">
          <p className="font-semibold">
            AICTE Free Laptop Yojana in 2024 | Online Registration
          </p>
        </div>
        <Ad1 />
        <div className="max-w-7xl mx-auto w-full flex items-start justify-start my-1">
          <p className="w-full text-justify px-2">
            All India Council of Technical Education (AICTE) has started a free
            laptop scheme in India. It’s called the “One Student One Laptop
            Scheme”, which gives laptops to students for free. Many students in
            our country still come from financially weak backgrounds. Their
            families don’t have enough money, so they can’t buy laptops. Keeping
            all this in mind, AICTE has started this free laptop program.
          </p>
        </div>
        <Link
          href={
            "/aicte-free-laptop-yojana-form-2024-apply-online-know-more-about-one-student-one-laptop-scheme"
          }
          className="max-w-7xl mx-auto w-full flex items-center justify-center my-1 px-2"
        >
          <Image src={"/laptop.jpeg"} alt="pan card" width={500} height={500} />
        </Link>
        <Ad2 />
        <div className="max-w-7xl mx-auto w-full flex items-center justify-center flex-wrap my-4 gap-x-1 px-2 gap-y-2">
          <Link
            href={
              "/aicte-free-laptop-yojana-form-2024-apply-online-know-more-about-one-student-one-laptop-scheme"
            }
            className="w-[45%] rounded-lg bg-main text-2xl hover:bg-[#9a3737] text-white text-center py-4 md:py-6"
          >
            8th Pass
          </Link>
          <Link
            href={
              "/aicte-free-laptop-yojana-form-2024-apply-online-know-more-about-one-student-one-laptop-scheme"
            }
            className="w-[45%] rounded-lg bg-main text-2xl hover:bg-[#9a3737] text-white text-center py-4 md:py-6"
          >
            10th Pass
          </Link>
          <Link
            href={
              "/aicte-free-laptop-yojana-form-2024-apply-online-know-more-about-one-student-one-laptop-scheme"
            }
            className="w-[45%] rounded-lg bg-main text-2xl hover:bg-[#9a3737] text-white text-center py-4 md:py-6"
          >
            12th Pass
          </Link>
          <Link
            href={
              "/aicte-free-laptop-yojana-form-2024-apply-online-know-more-about-one-student-one-laptop-scheme"
            }
            className="w-[45%] rounded-lg bg-main text-2xl hover:bg-[#9a3737] text-white text-center py-4 md:py-6"
          >
            Graduate
          </Link>
        </div>
        <Ad3 />
      </div>
    </main>
  );
};

export default LaptopPage;
