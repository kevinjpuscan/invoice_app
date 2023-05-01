import "@/assets/styles/scss/main.scss";
export const metadata = {
  title: "Notes Manager",
  description: "Your notes manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    
      <link rel="icon" type="image/png" sizes="32x32" href="./assets/icon/favicon-32x32.png"/>
      
      <title>Frontend Mentor | Invoice app</title>
    </head>
      <body>{children}</body>
    </html>
  );
}

