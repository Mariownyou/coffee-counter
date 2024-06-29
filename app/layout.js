import { Averia_Serif_Libre, Lilita_One } from "next/font/google";
import 'bulma/css/bulma.css';
import "./globals.css";

const lilita = Lilita_One({ subsets: ["latin"], weight: ['400'] });
const averia = Averia_Serif_Libre({ subsets: ["latin"], weight: ['300', '400', '700'] });

export const metadata = {
  title: "Coffee Counter",
  description: "Track your daily coffee consumption with our Coffee Counter! Instantly calculate your annual coffee intake, caffeine consumption, and discover fun comparisons with other caffeine sources. Get personalized insights and tips to reduce your environmental impact. Perfect for coffee enthusiasts!",
  keywords: "coffee counter, coffee consumption tracker, caffeine intake, coffee habits, environmental impact, coffee calculator, coffee statistics, coffee enthusiasts"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={averia.className}>{children}</body>
    </html>
  );
}
