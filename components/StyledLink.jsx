import tw, { styled } from "twin.macro"

const StyledLink = styled.a(({ arrow, variant, underline }) => [
  tw`appearance-none no-underline `,
  underline && tw`hocus:(underline )`,
  variant === "blue" && tw`color[#0070f3]`,
  variant === "brand" && tw`text-brand`,
  variant === "primary" && tw`text-brand hocus:(text-neutral-9)`,
  variant === "secondary" && tw`hocus:(text-brand)`,
  arrow === "right" && tw`after:(content[" ->"])`,
  arrow === "left" && tw`before:(content["<- "])`,
])

export default StyledLink
