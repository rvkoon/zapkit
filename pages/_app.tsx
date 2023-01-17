import { Inter } from "@next/font/google";
const InterFont = Inter({ subsets: ["latin"] });
import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@Api";
import { NextIntlProvider } from "next-intl";
import { Layout } from "@Ui";
import "modules/ui/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${InterFont.style.fontFamily};
        }
      `}</style>
      <QueryClientProvider client={queryClient}>
        <NextIntlProvider messages={pageProps.messages}>
          <Layout withNavigation={pageProps.withNavigation ?? true}>
            <Component {...pageProps} />
          </Layout>
        </NextIntlProvider>
      </QueryClientProvider>
    </>
  );
}
