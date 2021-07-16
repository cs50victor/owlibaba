import Link from "next/link"
import Image from "next/image"
import tw from "twin.macro"
import { Button } from "@components"
import MarketingContainer from "@layouts/MarketingContainer"
import { Youtube } from "@styled-icons/simple-icons"
import {
  SparklesIcon,
  FilmIcon,
  FireIcon,
  OfficeBuildingIcon,
} from "@heroicons/react/solid"

export default function complete() {
  return (
    <MarketingContainer title="Wow | Owlibaba" footer>
      <div tw="max-w-screen-lg mx-auto text-center min-h-full pt-20 pb-36 px-5">
        <div tw="text-5xl md:text-5xl mb-20 font-bold">Your Order Is Processing </div>
        <div tw="relative w-80 h-72 mx-auto mb-10">
          <Image
            src="/images/wow.gif"
            alt="Processing"
            layout="fill"
            tw="rounded-lg py-5"
            placeholder="blur"
            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
            priority
          />
        </div>
        <div tw="mb-8">
          <span tw="w-full inline-flex max-w-md items-center justify-center ">
            <Youtube tw="w-10 h-10 text-red-600" />
            {" -> "}
            <SparklesIcon tw="h-5 w-5 text-yellow-600" />
            {" -> "}
            <FilmIcon tw="w-10 h-10" />
            {" -> "}
            <SparklesIcon tw="h-5 w-5 text-indigo-600" />
            {" -> "}
            <FireIcon tw="w-10 h-10 text-red-900" />
            {" -> "}
            <SparklesIcon tw="h-5 w-5 text-purple-600" />
            {" -> "}
            <OfficeBuildingIcon tw="w-10 h-10 text-yellow-900" />
            {" -> "}
            <SparklesIcon tw="h-5 w-5 text-green-700" />
          </span>
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
