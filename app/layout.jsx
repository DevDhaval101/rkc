import "./globals.css";

import Navbar from "@/app/components/navbar";

export const metadata = {
  title: "RAM KRUSHNA CATERERS",
  description:
    "Leading caterer in Suart city of Gujarat. Best known for Surti, Gujarati, Kathiyawadi and Panjabi cuisine",
};

import AuthProvider from "@/app/components/authProvider";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AuthProvider>
          <div className="border-b-8 border-red-900 sticky top-0 print:hidden z-10">
            <Navbar />
          </div>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
