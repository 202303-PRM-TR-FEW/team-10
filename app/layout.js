import "./globals.css";
// import { Navbar } from "./components/Navbar";
import { Inter } from "next/font/google";
// import { useRouter } from "next/navigation";
import { AuthContextProvider } from "./context/AuthContext";
import { FundProvider } from "./context/FundContext";
import Topbar from "./components/Topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  // const router = useRouter();

  // Redirect to login if user is not authenticated
  // if (router.pathname === "/profile") {
  //   router.push("/login");
  //   return null;
  // }

  return (
    <html lang="en">
      <FundProvider>
        <body className={inter.className}>
          <AuthContextProvider>
            <Navbar />
            {children}
          </AuthContextProvider>
        </body>
      </FundProvider>
      <body className={inter.className}>
        <AuthContextProvider>
          <Topbar />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
