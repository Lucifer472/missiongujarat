import { AdChangeForm } from "@/components/admin/AdChangeForm";
import SwitchNav from "@/components/admin/SwitchNav";
import ClientWrapper from "@/components/wrappers/client-wrapper";

const page = () => {
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
            {/* <ClientWrapper>
              <AdChangeForm />
            </ClientWrapper> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
