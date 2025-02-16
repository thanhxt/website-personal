import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { ColorModeProvider } from "@/components/ui/color-mode";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ColorModeProvider>
          <Provider>
            {children}
          </Provider>
        </ColorModeProvider>
      </body>
    </html>
  );
}
