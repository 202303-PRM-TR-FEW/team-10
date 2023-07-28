import "./globals.css";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AddProject from "@/components/helper/AddProject";
import Toaster from "@/components/helper/Toaster";
import Providers from "@/providers";
// import Providers from "@/components/helper/ProviderTheme";
// import ThemeButton from "@/components/theme/ThemeButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OpenHanded",
  description: "Generated by OpenHanded team",
  icons: {
    icon: "/favicon.ico",
  },
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "tr" }];
}

export async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {/* <ThemeButton /> */}

          <Nav />
          <div>{children}</div>
          <Footer />
          <AddProject />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
