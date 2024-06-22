import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import ClientLayout from "./components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout session={session}>{children}</ClientLayout>
      </body>
    </html>
  );
}
