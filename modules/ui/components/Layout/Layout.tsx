import { ReactNode } from "react";
import { Navigation } from "@Navigation";

export interface ILayoutProps {
  children: ReactNode;
  withNavigation?: boolean;
}

export function Layout({
  children,
  withNavigation = true,
}: ILayoutProps): JSX.Element {
  return (
    <div className="bg-primary-blue min-h-screen">
      <div className="bg-[#543969] rounded-[50%] rotate-[10deg] blur-[150px] w-[120vw] md:w-[100vw] h-[40vh] fixed top-[-20vh] left-[-50vw] z-0"></div>
      <div className="relative z-10">
        {withNavigation && <Navigation />}
        <main className="py-25">{children}</main>
      </div>
    </div>
  );
}
