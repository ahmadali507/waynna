import type { ClassNameValue } from "tailwind-merge";

import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className: ClassNameValue;
};
export const SubTitle: React.FC<Props> = ({ children, className }) => {
  return (
    <h2
      className={cn("max-w-2xl text-7xl font-bold leading-[100px]", className)}
    >
      {children}
    </h2>
  );
};
