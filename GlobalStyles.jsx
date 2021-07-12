import { createGlobalStyle } from "styled-components"
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro"

const CustomStyles = createGlobalStyle`
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 100 900;
    font-display: fallback;
    src: url(/fonts/inter-var-latin.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: "RocherColor";
    font-style: normal;
    font-weight: 100 900;
    font-display: fallback;
    src: url(/fonts/RocherColorGX.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD;
  }

  :root {
    --background: white;
    --background-secondary: #f5f5f7;
    //brandColor range
    --brand-lighter: ${theme("colors.brandColor.100")};
    --brand-light: ${theme("colors.brandColor.300")};
    --brand-base: ${theme("colors.brandColor.600")};
    --brand-dark: ${theme("colors.brandColor.700")};
    --brand-darker: ${theme("colors.brandColor.900")};
    // text colors
    --neutral-yang: white;
    --neutral-base: #1d1d1f;
    --neutral-1: #fafafa;
    --neutral-2: #eaeaea;
    --neutral-3: #999;
    --neutral-4: #888;
    --neutral-5: #666;
    --neutral-6: #444;
    --neutral-7: #333;
    --neutral-8: #111;
    --neutral-9: black;
    
    --neutral-shadow:(--neutral-2);
    --neutral-marketing-gray: var(--neutral-1);
    --neutral-secondary: var(--neutral-5);
    --neutral-secondary-dark: var(--neutral-7);
    --neutral-secondary-light: var(--neutral-3);
    --neutral-secondary-lighter: var(--neutral-2);
  }

  .dark {
    --background: black;
    --background-secondary: #0b0c0d;
    // #111111
    // text colors
    --neutral-yang: black;
    --neutral-base: #eee;
    --neutral-1: #111;
    --neutral-2: #333;
    --neutral-3: #444;
    --neutral-4: #666;
    --neutral-5: #888;
    --neutral-6: #999;
    --neutral-7: #eaeaea;
    --neutral-8: #fafafa;
    --neutral-9: white;
  }

  html, body {
    scroll-behavior: smooth;
    font-style: normal;
    font-stretch: normal;
    text-size-adjust: 100%;
    font-feature-settings: "liga","tnum","case","calt","zero","ss01","locl";
    text-rendering: optimizeLegibility;
    ${tw`antialiased`}
  }
  html{
    font-size:106.25%;
    quotes:"“" "”";
    min-width:320px;
  }
  body{
    color: var(--neutral-base);
    background: var(--background);
    font-size: 17px;
    ${tw`font-normal`}
  }
  // adjust typography sizes
  .nav-title{
    ${tw`font-bold text-lg md:text-xl`}
  }
  .nav-link{
    ${tw`text-sm`}
  }
  h1,.h1,h2,.h2,h3,.h3,h4,h5,h6{
    ${tw`font-semibold tracking-tight`}
  }
  .h1{
    ${tw`text-3xl lg:text-4xl `}
  }
  .h2{
    ${tw`text-2xl lg:text-3xl`}
  }
  .h3{
    ${tw`text-xl lg:text-2xl `}
  }
  .p{
    ${tw`text-base lg:text-lg`}
  }
  .header-underline{
    border-bottom: 0.1px solid var(--neutral-2);
  }
  .hero-headline,.h2-headline,.section-headline{
    ${tw`font-bold`}
  }
  .hero-headline, .h2-headline{
    ${tw`text-3xl md:text-4xl lg:text-5xl`}
  }
  .hero-headline-lg{
    ${tw`text-6xl md:text-7xl lg:text-8xl`}
  }
  .subhead{
    ${tw`text-xl md:text-2xl font-medium`}
  }
  .subhead-lg{
    ${tw`text-2xl md:text-3xl lg:text-5xl font-semibold`}
  }
  .section-headline{ 
  //p tag
    ${tw`text-4xl md:text-6xl lg:text-7xl`}
  }
  .caption{
    font-size: 12px;
  }
  .sub-text{
    // or timeStamp, caption-lg, paragraph small 
    font-size: 14px;
  }
  button,a {
    ${tw`appearance-none`}
  }
  select, option{
    ${tw`appearance-none`}
  }
  a{
    cursor:pointer;
  }
  footer{
    font-size: 14px;
    background: var(--background-secondary);
    border-top: 1px solid var(--neutral-2);
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
