import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://aviralpathak.vercel.app"),
  title: {
    default: "Aviral Pathak | B.Tech IT Student, Author & Marketing Lead",
    template: "%s | Aviral Pathak",
  },
  description:
    "Aviral Pathak is a B.Tech IT student at GHRCE Nagpur, published author of 2 books, Marketing Lead at IEEE Computer Society, and passionate speaker. Explore his journey in technology, leadership, and personal development.",
  keywords: [
    "Aviral Pathak",
    "B.Tech IT Student",
    "Published Author",
    "Marketing Lead",
    "IEEE Computer Society",
    "GHRCE Nagpur",
    "Data Analysis",
    "React Developer",
    "Public Speaker",
    "Life Skills",
    "Attention Management",
    "Student Leadership",
    "Technology",
    "Personal Development",
    "Nagpur",
    "Maharashtra",
    "India",
  ],
  authors: [{ name: "Aviral Pathak", url: "https://aviralpathak.vercel.app" }],
  creator: "Aviral Pathak",
  publisher: "Aviral Pathak",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aviralpathak.vercel.app",
    title: "Aviral Pathak | B.Tech IT Student, Author & Marketing Lead",
    description:
      "Aviral Pathak is a B.Tech IT student at GHRCE Nagpur, published author of 2 books, Marketing Lead at IEEE Computer Society, and passionate speaker. Explore his journey in technology, leadership, and personal development.",
    siteName: "Aviral Pathak Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aviral Pathak - B.Tech IT Student, Author & Marketing Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aviral Pathak | B.Tech IT Student, Author & Marketing Lead",
    description:
      "B.Tech IT student, published author of 2 books, Marketing Lead at IEEE Computer Society. Passionate about technology, leadership, and personal development.",
    images: ["/og-image.jpg"],
    creator: "@aviral_pathak_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://aviralpathak.vercel.app",
  },
  category: "technology",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aviral Pathak",
    url: "https://aviralpathak.vercel.app",
    image: "https://aviralpathak.vercel.app/aviral-pathak-photo.jpg",
    sameAs: [
      "https://linkedin.com/in/aviralpathak",
      "https://github.com/aviral-hub",
      "https://instagram.com/aviral_pathak_",
      "https://aviralpathak1.medium.com/",
    ],
    jobTitle: "B.Tech IT Student, Author, Marketing Lead",
    worksFor: {
      "@type": "Organization",
      name: "IEEE Computer Society GHRCE",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "GH Raisoni College of Engineering, Nagpur",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nagpur",
      addressRegion: "Maharashtra",
      addressCountry: "India",
    },
    email: "aviralpathak6@gmail.com",
    telephone: "+91-7020729200",
    description:
      "B.Tech IT student at GHRCE Nagpur, published author of 2 books, Marketing Lead at IEEE Computer Society, and passionate speaker.",
    knowsAbout: [
      "Information Technology",
      "Data Analysis",
      "React Development",
      "Leadership",
      "Public Speaking",
      "Book Writing",
      "Personal Development",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Space Science and Technology Awareness Training (START)",
        credentialCategory: "Certification",
        recognizedBy: {
          "@type": "Organization",
          name: "ISRO",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "SQL v/s NoSQL Course",
        credentialCategory: "Certification",
        recognizedBy: {
          "@type": "Organization",
          name: "Scaler",
        },
      },
    ],
    award: [
      "Speaker for Startup Spark - MBA Department Forum (2023)",
      "Event Lead, Education - ELEVATE 2.0, IEEE CS GHRCE (2024)",
      "Event Lead, Education - Techotsav, GHRCE (2025)",
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <Suspense>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
