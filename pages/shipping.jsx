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

  const webhook = "https://airtable-8315-sznr64.twil.io/broadcast-sms?msg="
  const confirmationWebhook = `${webhook}Your order has been confirmed and has left a carrier facility in Charleston,SC.`
  const location1Webhook = `${webhook}Your order is now in Montgomery, Alabama.`
  const location2Webhook = `${webhook}Your order is now in Austin, Texas`
  const deliveredWebhook = `${webhook}Your order has been delivered`

  const sendStartShipping = async () => {
    setStartShipping((value) => !value)
    if (!startShipping) {
      try {
        await fetch(confirmationWebhook, {
          headers: { "Access-Control-Allow-Origin": "*" },
        }).then((res) => console.log(res.json()))
      } catch (err) {
        console.error("SMS error -> ", err)
      }
    }
  }
  const sendLocation1 = async () => {
    setLocation1((value) => !value)
    if (!location1) {
      try {
        await fetch(location1Webhook, {
          headers: { "Access-Control-Allow-Origin": "*" },
        }).then((res) => console.log(res.json()))
      } catch (err) {
        console.error("SMS error -> ", err)
      }
    }
  }
  const sendLocation2 = async () => {
    setLocation2((value) => !value)
    if (!location2) {
      try {
        await fetch(location2Webhook, {
          headers: { "Access-Control-Allow-Origin": "*" },
        }).then((res) => console.log(res.json()))
      } catch (err) {
        console.error("SMS error -> ", err)
      }
    }
  }
  const sendDelivered = async () => {
    setDelivered((value) => !value)
    if (!delivered) {
      try {
        await fetch(deliveredWebhook, {
          headers: { "Access-Control-Allow-Origin": "*" },
        }).then((res) => console.log(res.json()))
      } catch (err) {
        console.error("SMS error -> ", err)
      }
    }
  }

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
                    Start Shipping
                  </Switch.Label>
                  <Switch
                    checked={startShipping}
                    onChange={sendStartShipping}
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
                    <Image src={"/images/road.png"} alt="" layout="fill" priority />
                  </div>
                </Switch.Group>
                <Switch.Group>
                  <Switch.Label
                    tw="block relative font-bold font-headline text-3xl sm:(text-5xl) "
                    passive
                  >
                    Montgomery, Alabama
                  </Switch.Label>
                  <Switch
                    checked={location1}
                    onChange={sendLocation1}
                    css={[
                      tw`relative my-4 inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:(outline-none ring-2 ring-white ring-opacity-75)`,
                      location1 ? tw`bg-green-900` : tw`bg-red-700`,
                    ]}
                  >
                    <span
                      aria-hidden="true"
                      css={[
                        tw`pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`,
                        location1 ? tw`translate-x-9` : tw`translate-x-0`,
                      ]}
                    />
                  </Switch>
                  <div tw="w-10 h-[700px] relative mx-auto">
                    <Image src={"/images/road.png"} alt="" layout="fill" />
                  </div>
                </Switch.Group>
                <Switch.Group>
                  <Switch.Label
                    tw="block relative font-bold font-headline text-3xl sm:(text-5xl) "
                    passive
                  >
                    Austin, Texas
                  </Switch.Label>
                  <Switch
                    checked={location2}
                    onChange={sendLocation2}
                    css={[
                      tw`relative my-4 inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:(outline-none ring-2 ring-white ring-opacity-75)`,
                      location2 ? tw`bg-green-900` : tw`bg-red-700`,
                    ]}
                  >
                    <span
                      aria-hidden="true"
                      css={[
                        tw`pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`,
                        location2 ? tw`translate-x-9` : tw`translate-x-0`,
                      ]}
                    />
                  </Switch>
                  <div tw="w-10 h-[700px] relative mx-auto">
                    <Image src={"/images/road.png"} alt="" layout="fill" />
                  </div>
                </Switch.Group>
                <Switch.Group>
                  <Switch.Label
                    tw="block relative font-bold font-headline text-3xl sm:(text-5xl) "
                    passive
                  >
                    Package has been Delivered
                  </Switch.Label>
                  <Switch
                    checked={delivered}
                    onChange={sendDelivered}
                    css={[
                      tw`relative my-4 inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:(outline-none ring-2 ring-white ring-opacity-75)`,
                      delivered ? tw`bg-green-900` : tw`bg-red-700`,
                    ]}
                  >
                    <span
                      aria-hidden="true"
                      css={[
                        tw`pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`,
                        delivered ? tw`translate-x-9` : tw`translate-x-0`,
                      ]}
                    />
                  </Switch>
                </Switch.Group>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MarketingContainer>
  )
}
