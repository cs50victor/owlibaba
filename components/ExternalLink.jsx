import tw from "twin.macro"
const ExternalLink = ({ href, children, tw }) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
)

export default ExternalLink
