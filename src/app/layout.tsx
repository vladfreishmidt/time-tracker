import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { db } from "@/modules/db";
import Link from "next/link";
import NewAccountCreator from "@/components/NewAccountCreator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Time Tracker",
  description: "Track time for each client with ease",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const accounts = await db.account.findMany({
    select: { id: true, name: true },
    orderBy: { name: "asc" },
  });

  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen`}>
        <div className="flex flex-col gap-4 bg-slate-800 text-slate-100 w-[240px] p-4">
          {accounts.map((account) => (
            <Link href={`/accounts/${account.id}`} key={account.id}>
              {account.name}
            </Link>
          ))}
          <NewAccountCreator />
        </div>
        {children}
      </body>
    </html>
  );
}
