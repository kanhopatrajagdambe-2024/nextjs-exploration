
import "./globals.css";
import NavigationBar from "./components/NavigationBar";
import { Roboto } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";

const librafont = Libre_Baskerville ({
   weight: '400',
  subsets:['latin']
})
const robotoFont = Roboto({
  subsets:['latin']
})


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={librafont.className}>
      <NavigationBar />
        {children}
      </body>
    </html>
  );
}
