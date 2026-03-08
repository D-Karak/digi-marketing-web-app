import "./globals.css";
export const metadata = {
  title: "Omlytics - Omnichannel Digital Marketing Platform",
  description: "Scale your outreach with WhatsApp, Email and Social Media via an all-in-one Smart Dashboard.",
};

import { AuthProvider } from "@/lib/firebase/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
