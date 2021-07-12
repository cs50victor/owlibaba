import { useEffect, useState } from "react"
import tw, { styled, css } from "twin.macro"
import Link from "next/link"
import MarketingContainer from "@layouts/MarketingContainer"
import { LoadingCircle, Input, StyledLink, Button } from "@components"
import { useRouter } from "next/router"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const SmallDiv = styled.div(() => [
  tw`relative w-full text-center text-neutral-5 after:(right-0) before:(left-0)`,
  css`
    &:before,
    &:after {
      ${tw`inline-block absolute 
      top-1/2 content[""] 
      border-bottom[1px solid var(--neutral-4)]
      width[calc(50% - 4em)]
      `};
    }
    ,
    > small {
      ${tw`inline-block`}
    }
  `,
])
const phoneReg =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = yup.object().shape({
  phone: yup
    .string()
    .matches(phoneReg, "Phone number is not valid. Remove any symbols.")
    .required("Phone number is required!")
    .min(10, "Phone number should be only 11 numbers")
    .max(10, "Phone number should be only 11 numbers"),
})

export default function Login() {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  })

  const onSubmit = async ({ phone }) => {
    setIsLoading(true)
    try {
      await fetch(`https://airtable-8315-sznr64.twil.io/save-num?From=${phone}`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
    } catch (error) {
      console.error("Error saving message ->", error)
    } finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 5500)
      router.push("/")
    }
  }

  return (
    <MarketingContainer title="Log in | Owlibaba" footer noHeaderNav>
      <main
        tw="min-h-screen max-w-screen-sm w-full 
          mx-auto px-4 pb-28 md:(px-8) flex 
          flex-col items-center justify-center"
      >
        <h1 tw="text-3xl sm:text-5xl  text-center pt-10 pb-0">Log in to Owlibaba</h1>
        <div tw="px-2 sm:px-16 space-y-5">
          <div tw="mt-8">Make sure phone number has no symbols</div>

          <SmallDiv>
            <small>enter your number</small>
          </SmallDiv>
        </div>

        <form
          tw="space-y-5 text-left
              px-2 sm:px-16
              pt-5 pb-16 
              w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <Input
              type="tel"
              placeholder="22345678910"
              aria-label="22345678910"
              maxLength="10"
              {...register("phone")}
              error={errors?.phone ? true : false}
              noLabel
              required
            />
            <small tw="text-red-700">{errors?.phone?.message}</small>
          </div>
          <Button
            type="submit"
            tw="flex items-center justify-center"
            disabled={isLoading ? true : false}
            isLarge
          >
            {isLoading ? <LoadingCircle /> : "Login"}
          </Button>
        </form>
      </main>
    </MarketingContainer>
  )
}
