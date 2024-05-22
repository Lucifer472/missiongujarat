import { Ad1, Ad2, Ad3 } from "@/components/ads/ads";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Laptop Get One Free In India In 2024 | Online Registration",
  description:
    "Discover how to get a free laptop in India and expand your digital opportunities in 2024. Easily sign up on your mobile phone.",
  keywords:
    "Free Laptop Scheme for Students India,Government Laptop Yojana Apply Online India,Laptop Scheme,Best Laptops for Students under ₹30,000 India,Scholarship for Laptops in India,Top Universities in India for B.tech,University Scholarships in India,NEET Coaching Classes,JEE Main/Advanced Preparation,Coaching Classes",
};

const PanCardApply = () => {
  return (
    <main>
      <div className="w-full flex flex-col gap-y-1">
        <div className="w-full h-20 flex items-center justify-center bg-main">
          <h2 className="text-white text-2xl font-medium max-w-7xl mx-auto px-2">
            Sign Up to Win Free Laptop
          </h2>
        </div>
        <div className="max-w-7xl mx-auto w-full flex items-start justify-start my-1 px-2">
          <p className="font-semibold">
            Laptop Get One Free in India in 2024 | Online Registration
          </p>
        </div>
        <Ad1 />
        <div className="max-w-7xl mx-auto w-full flex items-start justify-start my-1">
          <p className="w-full text-justify px-2">
            🚀 The digital universe is at your fingertips! 🔗 India is
            innovating, and in 2024, the chance to win a free 💻 laptop is
            knocking on the door, promising to transform access to technology
            and open a world of possibilities for many. These digital inclusion
            initiatives are a source of hope for those who see technology as a
            path to professional and academic success. 🎓✨ Participating is
            easy! 📲 With just a few clicks, follow the simplified registration
            steps and get ready to enhance your projects and dreams. Don&apos;t
            miss this incredible chance! Keep an eye on the criteria, nail your
            justification and join the increasingly connected world. 🌐💼
          </p>
        </div>
        <Link
          href={"/free-laptop-yojana"}
          className="max-w-7xl mx-auto w-full flex items-center justify-center my-1 px-2"
        >
          <Image src={"/laptop.png"} alt="pan card" width={500} height={500} />
        </Link>
        <Ad2 />
        <div className="max-w-7xl mx-auto w-full flex items-center justify-center flex-col my-4 px-2 gap-y-2">
          <Link
            href={"/free-laptop-yojana"}
            className="w-full rounded-full bg-main text-2xl hover:bg-[#9a3737] text-white text-center py-4 md:py-6"
          >
            Learn how to register online➡️
          </Link>
          <Link
            href={"/free-laptop-yojana"}
            className="w-full rounded-full bg-main text-2xl hover:bg-[#9a3737] text-white text-center py-4 md:py-6"
          >
            Who can Participate?➡️
          </Link>
        </div>
        <Ad3 />
      </div>
    </main>
  );
};

export default PanCardApply;
