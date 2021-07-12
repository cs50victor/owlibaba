import { useState, useEffect } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import Link from "next/link"
import tw from "twin.macro"
import { Button, ThemeChanger, MarketingFooter, LoadingCircle, Logo } from "@components"

export default function MarketingContainer(props) {
  const { children, footer, footerNav, noHeaderNav, noCrawl, ...customMeta } = props
  const router = useRouter()
  const meta = {
    name: "Owlibaba",
    title: "Owlibaba.",
    description: `Short description.`,
    image: "https://owlibaba.vercel.app/images/banner.png",
    type: "website",
    twitterHandle: "",
    ...customMeta,
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        {noCrawl ? (
          <>
            <meta name="robots" content="noindex" />
            <meta name="robots" content="nofollow" />
            <meta name="robots" content="noimageindex" />
            <meta name="robots" content="noarchive" />
            <meta name="robots" content="noodp" />
            <meta name="robots" content="nosnippet" />
          </>
        ) : (
          <meta name="robots" content="follow, index" />
        )}
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://owlibaba.vercel.app${router.asPath}`} />
        <link rel="canonical" href={`https://owlibaba.vercel.app${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.name} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:site" content={meta.twitterHandle} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>
      <header className="header-underline">
        <nav
          css={[
            tw`flex items-center  w-full 
            max-w-screen-lg py-2 px-3 mx-auto lg:(px-2)`,
            noHeaderNav ? tw`justify-center` : tw`justify-between`,
          ]}
        >
          <Link href="/">
            <a className="nav-title" tw="text-neutral">
              <Logo width="40" height="40" /> Owlibaba
            </a>
          </Link>
          {/* w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-800 */}
          {!noHeaderNav && (
            <div className="nav-link" tw="space-x-2.5">
              <Link href="/login" passHref>
                <Button as="a" tw="px-4 py-2">
                  Log in
                </Button>
              </Link>
            </div>
          )}
        </nav>
      </header>
      {children}
      {footer && <MarketingFooter nav={footerNav} />}
    </>
  )
}
