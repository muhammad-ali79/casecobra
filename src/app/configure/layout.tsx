import MaxwidthWraper from "@/components/MaxwidthWraper";
import Steps from "@/components/Steps";

import { ReactNode } from "react";
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxwidthWraper className="flex flex-1 flex-col">
      <Steps />
      {children}
    </MaxwidthWraper>
  );
};

export default Layout;
