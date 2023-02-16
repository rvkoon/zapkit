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
    <div className="bg-primary-blue h-screen">
      <iframe
        src="https://my.spline.design/untitled-c26d17cdb0b8e166adaa38dd4ddbaba1/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="h-screen"
      ></iframe>
      <div className="relative z-10">
        {withNavigation && <Navigation />}
        <main className="py-25">{children}</main>
      </div>
    </div>
  );
}
