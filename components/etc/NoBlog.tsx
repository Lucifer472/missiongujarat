import LinkBtn from "./LinkBtn";
import RecentBlog from "./RecentBlog";

const NoBlog = () => {
  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-center flex-col w-full min-h-[500px] gap-6">
        <span className="text-2xl sm:text-3xl md:text-4xl font-medium text-center">
          Sorry! No Blog Found
        </span>
        <LinkBtn link="/" label="Go Home" className="bg-black text-white" />
      </div>
      <RecentBlog options={{}} />
    </div>
  );
};

export default NoBlog;
