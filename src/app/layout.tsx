import "@/assets/styles/scss/main.scss";
import { League_Spartan } from "next/font/google";

import { Navbar } from "@components/NavBar/Navbar";
export const metadata = {
  title: "Notes Manager",
  description: "Your notes manager",
};

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["500", "700"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./assets/icon/favicon-32x32.png"
        />
        <title>Frontend Mentor | Invoice app</title>
      </head>
      <body className={leagueSpartan.className}>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
