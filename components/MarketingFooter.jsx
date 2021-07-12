import { useState, useEffect } from "react"
import tw from "twin.macro"
import Link from "next/link"
import { Twitter } from "@styled-icons/simple-icons"
import { ExternalLink, ThemeChanger, Logo, useWindowDimensions } from "@components"

const NavGroup = ({ heading, children }) => {
  const [expanded, setExpanded] = useState(false)
  const [userClicked, setUserClicked] = useState(false)
  const { width } = useWindowDimensions()

  const toggleDropdown = () => {
    if (width < 768) {
      setExpanded(!expanded)
      setUserClicked(!userClicked)
    }
  }
  useEffect(() => {
    // default md: breakpoint
    if (width >= 768 && expanded === false) {
      setExpanded(true)
      userClicked && setUserClicked(false)
    } else if (width < 768) {
      if (userClicked === false && expanded) {
        setExpanded(false)
      }
    }
  }, [width, expanded, userClicked])

  return (
    <div tw="border-b border-neutral-2 md:(border-none mb-0)">
      <label onClick={toggleDropdown} tw="text-neutral w-full inline-block mt-3">
        <h3
          css={[
            tw`pb-3 after:(content['+'] float-right)
            md:after:(hidden)`,
            expanded &&
              tw`after:(transform-gpu rotate-45 
              transition-transform duration-300 ease-in-out)`,
          ]}
        >
          {heading}
        </h3>
      </label>
      {expanded && (
        <ul tw="flex flex-col space-y-4 pb-5 pl-3 md:(pb-0 pl-0)">{children}</ul>
      )}
    </div>
  )
}
export default function MarketingFooter({ nav }) {
  return (
    <footer tw="relative w-full bottom-0 text-neutral-5 transition px-4 py-8">
      <div tw="w-full max-w-screen-lg mx-auto">
        {nav && (
          <nav
            tw="mx-auto flex flex-nowrap flex-col md:flex-row
            justify-between w-full mb-10"
            role="navigation"
            aria-label="Owlibaba Directory"
          >
            <NavGroup heading="Frameworks">
              <li>
                <Link href="/uses">
                  <a>Uses</a>
                </Link>
              </li>
              <li>
                <Link href="/guestbook">
                  <a>Guestbook</a>
                </Link>
              </li>
              <li>
                <Link href="/snippets">
                  <a>Snippets</a>
                </Link>
              </li>
              <li>
                <Link href="/tweets">
                  <a>Tweets</a>
                </Link>
              </li>
            </NavGroup>
            <NavGroup heading="Resources">
              <li>
                <Link href="/uses">
                  <a>Uses</a>
                </Link>
              </li>
              <li>
                <Link href="/guestbook">
                  <a>Guestbook</a>
                </Link>
              </li>
              <li>
                <Link href="/snippets">
                  <a>Snippets</a>
                </Link>
              </li>
              <li>
                <Link href="/tweets">
                  <a>Tweets</a>
                </Link>
              </li>
            </NavGroup>
            <NavGroup heading="Company">
              <li>
                <Link href="/uses">
                  <a>Uses</a>
                </Link>
              </li>
              <li>
                <Link href="/guestbook">
                  <a>Guestbook</a>
                </Link>
              </li>
              <li>
                <Link href="/snippets">
                  <a>Snippets</a>
                </Link>
              </li>
              <li>
                <Link href="/tweets">
                  <a>Tweets</a>
                </Link>
              </li>
            </NavGroup>
            <NavGroup heading="Legal">
              <li>
                <Link href="/uses">
                  <a>Uses</a>
                </Link>
              </li>
              <li>
                <Link href="/guestbook">
                  <a>Guestbook</a>
                </Link>
              </li>
              <li>
                <Link href="/snippets">
                  <a>Snippets</a>
                </Link>
              </li>
              <li>
                <Link href="/tweets">
                  <a>Tweets</a>
                </Link>
              </li>
            </NavGroup>
            <NavGroup heading="Services">
              <li>
                <Link href="/uses">
                  <a>Uses</a>
                </Link>
              </li>
              <li>
                <Link href="/guestbook">
                  <a>Guestbook</a>
                </Link>
              </li>
              <li>
                <Link href="/snippets">
                  <a>Snippets</a>
                </Link>
              </li>
              <li>
                <Link href="/tweets">
                  <a>Tweets</a>
                </Link>
              </li>
            </NavGroup>
          </nav>
        )}

        <div
          css={[
            tw`w-full flex flex-col-reverse items-center pt-5
            space-y-2 md:(flex-row justify-between)`,
            nav && tw`md:(border-t border-neutral-3)`,
          ]}
        >
          <div tw="flex items-center space-x-2.5 mt-5 md:(mt-0)">
            <Logo width="55" height="55" />
            <span>&copy; {new Date().getFullYear()} Owlibaba. All Rights Reserved.</span>
          </div>
          <div tw="flex items-center space-x-2.5">
            <ExternalLink href="https://twitter.com/vic8or">
              <Twitter width="25" tw="hocus:(text-brand)" />
            </ExternalLink>
            <ThemeChanger />
          </div>
        </div>
      </div>
    </footer>
  )
}
