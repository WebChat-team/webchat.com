// imports ================================================== //
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/shared/ui/global.css";
import { StoreProvider } from "@/app/providers/StoreProvider";

// types ==================================================== //
interface Props {
  children: ReactNode
}

// constants ================================================ //
const metadata: Metadata = {
  title: "WebChat",
  description: "The most modern social network",
};

// main ===================================================== //
function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="ru">
      <body>
          <StoreProvider>
            <main>
              {children}
            </main>
          </StoreProvider>
      </body>
    </html>
  );
}

// exports ================================================== //
export default RootLayout;
export { metadata };