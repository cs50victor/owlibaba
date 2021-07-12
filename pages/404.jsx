import Link from "next/link"
import tw from "twin.macro"
import { Button } from "@components"
import MarketingContainer from "@layouts/MarketingContainer"

export default function NotFound() {
  return (
    <MarketingContainer title="Page not found | Owlibaba" footer>
      <div tw="max-w-screen-lg mx-auto text-center min-h-full pt-20 pb-36 px-5">
        <div tw="text-5xl md:text-5xl mb-20 font-bold">
          The page you’re looking
          <br />
          for can’t be found.
        </div>
        <small tw="block mb-10">
          The page you're looking for doesn't exist.
          <br />
          Kindly double check the current URL.
        </small>
        <Link href="/" passHref>
          <Button as="a" tw="p-4 w-64 font-extrabold mx-auto">
            Back to Owlibaba
          </Button>
        </Link>
      </div>
    </MarketingContainer>
  )
}
