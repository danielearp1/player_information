import { Inter } from "next/font/google";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cancun 2024 - Squad Registration",
  description: "Submit your squads to Cancun 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
