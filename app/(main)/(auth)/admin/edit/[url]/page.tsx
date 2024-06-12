import { redirect } from "next/navigation";

import BlogEdit from "@/components/admin/BlogEdit";
import SwitchNav from "@/components/admin/SwitchNav";
import ClientWrapper from "@/components/wrappers/client-wrapper";

import { getBlog } from "@/lib/blog-util";

const page = async ({ params }: { params: { url: string } }) => {
  const data = await getBlog({
    where: {
      url: params.url,
    },
  });

  if (data === null) return redirect("/admin");

  return (
    <section className="bg-slate-100 w-full h-full">
      <div className="global-container w-full h-full bg-white">
        <div className="flex flex-col items-start justify-start w-full">
          <SwitchNav selected="" />
        </div>
        <div className="my-4 max-w-[720px] mx-auto border border-black rounded-md p-4">
          <div className="w-full border-b-2 border-black mb-4">
            <span className="text-xl font-medium">Edit Blogs</span>
          </div>
          <div>
            <ClientWrapper>
              <BlogEdit values={data} id={data.id} blogData={data.blog} />
            </ClientWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
