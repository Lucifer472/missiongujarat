import Link from "next/link";
import { cn } from "@/lib/utils";

const ExtraButton = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "w-full text-center text-2xl font-medium py-4 text-white rounded-md border",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default ExtraButton;
