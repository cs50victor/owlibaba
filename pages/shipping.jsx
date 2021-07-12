import { useEffect, useState } from "react"
import tw from "twin.macro"
import Image from "next/image"
import Link from "next/link"

import { gsap } from "gsap"
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin"
//import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"

import { Button, StyledLink, LoadingCircle } from "@components"
import MarketingContainer from "@layouts/MarketingContainer"
import { orderConfirmation, details } from "@lib/messages"

if (typeof window !== "undefined") {
  gsap.registerPlugin(MotionPathPlugin)
}

export default function Shipping() {
  const [currProduct, setCurrProduct] = useState({})

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(MotionPathPlugin)
    }
  }, [])

  return (
    <MarketingContainer title="Owlibaba | Shipping" footer>
      <main tw="h-auto">
        <section tw="max-w-screen-lg mx-auto px-10 text-center mt-10">
          <h1 tw="text-4xl sm:text-6xl mt-20 pb-5">Shipping Simulation</h1>
          <hr tw="mb-5 text-neutral-1" />
          <div tw="my-20">
            <div tw="flex flex-wrap w-full h-auto items-center justify-center sm:(justify-around)">
              <p>f</p>
            </div>
          </div>
        </section>
      </main>
    </MarketingContainer>
  )
}
