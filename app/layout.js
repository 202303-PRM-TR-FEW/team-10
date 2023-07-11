import "./globals.css";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "./context/AuthContext";
import { FundProvider } from "./context/FundContext";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <FundProvider>
        <body className={inter.className}>
          <AuthContextProvider>
            <Nav />
            <div >{children}</div>
          </AuthContextProvider>
        </body>
      </FundProvider>
    </html>
  );
}