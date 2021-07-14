import { Fragment, useEffect, useRef, useState } from "react"
import tw from "twin.macro"
import Image from "next/image"
import Link from "next/link"
import { Button, StyledLink, LoadingCircle } from "@components"
import { Dialog, Transition } from "@headlessui/react"
import MarketingContainer from "@layouts/MarketingContainer"
import { orderConfirmation, details } from "@lib/messages"
import { ChevronLeftIcon, XCircleIcon, BadgeCheckIcon } from "@heroicons/react/outline"
import { useRouter } from "next/router"

const products = [
  {
    src: "/images/sofa1.png",
    name: "Sea Velvet",
    price: "195",
  },
  {
    src: "/images/sofa2.png",
    name: "White Onyx",
    price: "299.99",
  },
  {
    src: "/images/sofa3.png",
    name: "Vegan Croc Leather",
    price: "312",
  },
  {
    src: "/images/sofa4.png",
    name: "Swiz Coffee",
    price: "215",
  },
]

export default function Home() {
  let [isOpen, setIsOpen] = useState(false)
  const [currProduct, setCurrProduct] = useState({})

  const closeModal = () => {
    setIsOpen(false)
  }
  const openModal = (e, product) => {
    e.preventDefault()
    setCurrProduct(product)
    setIsOpen(true)
  }

  return (
    <MarketingContainer title="Owlibaba" footer>
      <main tw="h-auto">
        <section tw="max-w-screen-lg mx-auto px-10 text-center mt-10">
          <h1 tw="text-4xl sm:text-6xl mt-20 pb-5">Homepage</h1>

          <p tw="mt-12 text-left text-xl font-medium">Limited Edition Sofas</p>
          <hr tw="mb-5 text-neutral-1" />
          <div tw="mb-20">
            <div tw="flex flex-wrap w-full h-auto items-center justify-center sm:(justify-around)">
              {products.map((product) => (
                <button
                  key={product.name}
                  onClick={(e) => openModal(e, product)}
                  tw="hocus:(appearance-none border-none ring-0 outline-none)"
                >
                  <span
                    tw="max-width[410px] sm:(mr-6) mb-8 
                    flex flex-1 flex-col items-center justify-center border border-neutral-2 rounded-lg"
                  >
                    <div
                      tw="aspect-w-16 aspect-h-9 w-96 h-72 relative
                        p-0.5 flex items-center  bg-gray-200 bg-opacity-90"
                    >
                      <Image
                        src={product.src}
                        alt=""
                        layout="fill"
                        tw="object-contain block"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAF90AAAAGCAYAAADA8Eq+AAAAu0lEQVR42u3cMQ0AIBAAMV45LphY8YmOS1ohnXv2WwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEDTSfQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqqT7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkSfcBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiS7gMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCXdBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg6wOeog4L98FkPgAAAABJRU5ErkJggg=="
                        quality={100}
                      />
                    </div>
                    <div tw=" w-full my-6">
                      <p tw="font-semibold">{product.name}</p>
                      <p>${product.price}</p>
                    </div>
                  </span>
                </button>
              ))}
              <Modal product={currProduct} isOpen={isOpen} closeModal={closeModal} />
            </div>
          </div>
        </section>
        <div tw="relative fixed bottom-3 right-3 bg-indigo-700 z-[100] text-white px-5 py-2 rounded-full text-center">
          {/*
            Call us: 
          <br/>
          (681)-334-0464
          <br/>
          or
          <br/>
           */}
          <span>Chat with Us</span>
        </div>
      </main>
    </MarketingContainer>
  )
}

const Modal = ({ product, isOpen, closeModal }) => {
  const router = useRouter()
  let updateProduct = useRef()

  const [bought, setBought] = useState("No") //No, Yes, Loading

  const toShipping = async (e, { price }) => {
    setBought("Loading")
    const webhook1 = `https://airtable-8315-sznr64.twil.io/broadcast-sms?msg=${orderConfirmation}`
    const webhook2 = `https://airtable-8315-sznr64.twil.io/broadcast-sms?msg=${details(
      price,
    )}`
    try {
      await Promise.all([
        fetch(webhook1, { headers: { "Access-Control-Allow-Origin": "*" } }).then((res) =>
          console.log(res.json()),
        ),
        setTimeout(() => {
          fetch(webhook2, { headers: { "Access-Control-Allow-Origin": "*" } }).then(
            (res) => console.log(res.json()),
          )
        }, 2000),
      ])
    } catch (err) {
      console.error("SMS error -> ", err)
    } finally {
      setBought("Yes")
      setTimeout(() => {
        router.push("/complete")
      }, 4000)
    }
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        initialFocus={updateProduct}
        onClose={closeModal}
        tw="fixed inset-0 z-20 overflow-y-auto bg-gray-500 bg-opacity-50"
      >
        <div tw="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-0"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-0"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay tw="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span tw="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-0"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-0"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              tw="inline-flex flex-col align-middle 
                                w-full max-w-md p-6 overflow-hidden text-left 
                                transition-all transform
                                bg-base shadow-xl rounded-2xl"
            >
              <div tw="flex items-center justify-between pb-2 border-b">
                <Dialog.Title
                  as="h3"
                  tw="relative text-lg font-medium leading-6 text-neutral-8"
                >
                  Quick Buy
                </Dialog.Title>
                <button
                  ref={updateProduct}
                  tw="hocus:(outline-none appearance-none)"
                  onClick={closeModal}
                >
                  <XCircleIcon width={25} />
                </button>
              </div>

              <span
                tw="relative px-3 py-1 mb-2 rounded-full mt-6 font-medium leading-6 w-max mx-auto
                            bg-neutral-2 text-neutral-9"
              >
                {bought === "No" ? product.name : ""}
              </span>
              <div tw="mt-2 mb-2">
                {bought === "Loading" && (
                  <div tw="w-full flex items-center justify-center">
                    <LoadingCircle />
                  </div>
                )}
                {bought === "Yes" && (
                  <div tw="w-full flex items-center justify-center text-center">
                    <p>
                      <BadgeCheckIcon tw="text-green-900 w-28 h-28 mx-auto" />
                      Your order has been confirmed.
                    </p>
                  </div>
                )}
                {bought === "No" && (
                  <>
                    <span
                      tw="max-w-full mb-8 
                      flex flex-1 flex-col items-center justify-center"
                    >
                      <div
                        tw="aspect-w-16 aspect-h-9 w-96 h-72 relative
                            p-0.5 flex items-center "
                      >
                        <Image
                          src={product.src}
                          alt=""
                          layout="fill"
                          tw="object-contain block"
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAF90AAAAGCAYAAADA8Eq+AAAAu0lEQVR42u3cMQ0AIBAAMV45LphY8YmOS1ohnXv2WwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEDTSfQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqqT7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkSfcBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiS7gMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCXdBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg6wOeog4L98FkPgAAAABJRU5ErkJggg=="
                          quality={100}
                        />
                      </div>
                    </span>
                    <p tw="inline-flex items-center justify-end w-full text-neutral-8">
                      ${product.price}
                    </p>
                  </>
                )}
              </div>
              {bought === "No" && (
                <div tw="mt-4">
                  <div tw="flex items-center space-x-3 justify-end">
                    <button
                      type="button"
                      onClick={(e) => toShipping(e, product)}
                      tw="inline-flex justify-center px-4 py-2 text-sm
                                  text-green-900 bg-green-100 font-bold
                                  border border-transparent rounded-brand
                                    hocus:(bg-green-200 outline-none)
                                    focus:(ring-2 ring-offset-2 ring-green-500)"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
