import { DESKTOP_NAV_ROUTES, MOBILE_NAV_ROUTES } from "../constants";
import type { AppRoute } from "types";
import Link from "next/link";
import { useTranslations } from "next-intl";
import cx from "classnames";
import { useWindowSize } from "usehooks-ts";
import { TABLET_SCREEN } from "@Ui";
import { useRouter } from "next/router";

function MobileNav() {
  const t = useTranslations("navigation");
  const { asPath } = useRouter();

  return (
    <nav className="p-25 flex justify-between">
      {Object.values(MOBILE_NAV_ROUTES).map((route: AppRoute) => {
        return (
          <Link
            key={route.LABEL}
            className={cx(
              "text-white text-center opacity-50 font-bold",
              route.PATH === asPath.split("?")[0] && "opacity-100"
            )}
            href={route.PATH}
          >
            {t(route.LABEL)}
          </Link>
        );
      })}
    </nav>
  );
}

function DesktopNav() {
  const t = useTranslations("navigation");
  const { asPath } = useRouter();

  return (
    <nav className="w-max mt-25 flex flex-col fixed top-0 left-0">
      {Object.values(DESKTOP_NAV_ROUTES).map((route: AppRoute) => {
        const isActive = route.PATH === asPath.split("?")[0];
        return (
          <Link
            key={route.LABEL}
            href={route.PATH}
            className={cx(
              "text-white py-15 p-25 px-2 flex items-center min-h-10 gap-15 opacity-50 font-bold",
              isActive && "bg-purple bg-opacity-20 rounded-r-base opacity-100"
            )}
          >
            <>
              {isActive && (
                <div className="w-3 h-35 bg-pink-light rounded-[6px] rotate-[20deg] "></div>
              )}
              {t(route.LABEL)}
            </>
          </Link>
        );
      })}
    </nav>
  );
}

export interface INavigationProps {}
export function Navigation({}: INavigationProps): JSX.Element {
  const { width } = useWindowSize();
  const isDesktop = width >= TABLET_SCREEN;
  return isDesktop ? <DesktopNav /> : <MobileNav />;
}
