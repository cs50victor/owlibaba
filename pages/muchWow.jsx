import Link from "next/link"
import Image from "next/image"
import tw from "twin.macro"
import { Button } from "@components"
import MarketingContainer from "@layouts/MarketingContainer"

export default function MuchWow() {
  return (
    <MarketingContainer title="Wow | Owlibaba" footer>
      <div tw="max-w-screen-lg mx-auto text-center min-h-full pt-20 pb-36 px-5">
        <div tw="text-5xl md:text-5xl mb-20 font-bold">Random Page</div>
        <div tw="relative w-72 h-72 mx-auto mb-10">
          <Image src="/images/wow.gif" alt="" layout="fill" />
        </div>
        <Link href="/" passHref>
          <Button as="a" tw="p-4 w-64 font-extrabold mx-auto">
            Back to Owlibaba
          </Button>
        </Link>
      </div>
    </MarketingContainer>
  )
}
