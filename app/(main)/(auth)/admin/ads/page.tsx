import { redirect } from "next/navigation";

import { AdChangeForm } from "@/components/admin/AdChangeForm";
import SwitchNav from "@/components/admin/SwitchNav";
import ClientWrapper from "@/components/wrappers/client-wrapper";

import { getAds } from "@/lib/ads";

const AdChangePage = async () => {
  const ads = await getAds();

  if (ads.error) {
    return redirect("/");
  }

  return (
    <section className="bg-slate-100 w-full h-full">
      <div className="global-container w-full h-full bg-white">
        <div className="flex flex-col items-start justify-start w-full">
          <SwitchNav selected="ads" />
        </div>
        <div className="my-4 max-w-[720px] mx-auto border border-black rounded-md p-4">
          <div className="w-full border-b-2 border-black mb-4">
            <span className="text-xl font-medium">Ad Change Form</span>
          </div>
          <div>
            <ClientWrapper>
              <AdChangeForm data={ads.success as any} />
            </ClientWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdChangePage;
