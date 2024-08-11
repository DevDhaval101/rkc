import "./globals.css";

import Navbar from "@/app/components/navbar";

export const metadata = {
  title: "RAM KRUSHNA CATERERS",
  description: "Leading caterer in Suart city of Gujarat. Best known for Surti, Gujarati, Kathiyawadi and Panjabi cuisine",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <div className="h-2 bg-white"></div>
        {children}
      </body>
    </html>
  );
}
