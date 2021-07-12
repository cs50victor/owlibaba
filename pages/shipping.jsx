import { createElement, useEffect, useRef, useState } from "react"
import tw from "twin.macro"
import Image from "next/image"
import Link from "next/link"
import { Switch } from "@headlessui/react"
import { Button, StyledLink, LoadingCircle } from "@components"
import MarketingContainer from "@layouts/MarketingContainer"
import { orderConfirmation, details } from "@lib/messages"
//South Charleston, WV US
export default function Shipping() {
  const [startShipping, setStartShipping] = useState(false)
  const [location1, setLocation1] = useState(false)
  const [location2, setLocation2] = useState(false)
  const [delivered, setDelivered] = useState(false)

  return (
    <MarketingContainer title="Owlibaba | Shipping" footer>
      <main tw="h-auto">
        <section tw="max-w-screen-lg mx-auto px-10 text-center mt-10">
          <h1 tw="text-4xl sm:text-6xl mt-20 pb-5">Shipping Simulation</h1>
          <hr tw="mb-5 text-neutral-1" />
          <div tw="my-20">
            <div tw="flex flex-wrap w-full h-auto items-center justify-center sm:(justify-around)">
              <div tw="py-16">
                <Switch.Group>
                  <Switch.Label
                    tw="block relative font-bold font-headline text-3xl sm:(text-5xl) "
                    passive
                  >
                    Enable notifications
                  </Switch.Label>
                  <Switch
                    checked={startShipping}
                    onChange={setStartShipping}
                    css={[
                      tw`relative my-4 inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:(outline-none ring-2 ring-white ring-opacity-75)`,
                      startShipping ? tw`bg-green-900` : tw`bg-red-700`,
                    ]}
                  >
                    <span
                      aria-hidden="true"
                      css={[
                        tw`pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`,
                        startShipping ? tw`translate-x-9` : tw`translate-x-0`,
                      ]}
                    />
                  </Switch>
                  <div tw="w-10 h-[700px] relative mx-auto">
                    <Image src={"/images/road.png"} alt="" layout="fill" />
                  </div>
                </Switch.Group>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MarketingContainer>
  )
}
