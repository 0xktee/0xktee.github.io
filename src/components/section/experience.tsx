import LayoutSection from "@/components/layout-section"

const WorkItem = ({
  workplace,
  position,
  time,
  children,
  ...props
}: {
  workplace: string
  position: string
  time: string
} & React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>
    <div className="pb-1">
      <h3>{workplace}</h3>
      <h4>
        {position} <small>[{time}]</small>
      </h4>
    </div>
    {children}
  </div>
)

export default function Experience() {
  return (
    <LayoutSection>
      <h2>Work experience</h2>

      <div className="flex flex-col space-y-4">
        <WorkItem
          workplace="IBM"
          position="Full Stack Developer"
          time="2023 - Now"
        >
          <p>
            Work with the team in banking industry to write/test code, ensuring
            it meets requirements and coding standards. Provide troubleshooting
            support as needed.
          </p>
        </WorkItem>

        <WorkItem
          workplace="NFT Collection"
          position="Web3 / Smart Contract Developer"
          time="2021 - 2023"
        >
          <p>
            Collaborated with the artist to create an NFT collection and build
            the community from scratch.
          </p>
          <ul className="ml-4 list-disc [&>li]:mt-1">
            <li>Led the project and developed the overall strategy</li>
            <li>
              Implemented technical aspects of the smart contract and
              decentralized web applications that serve users&apos; needs.
              Mainly worked with Rust (for Smart Contract), React, and Next.js
            </li>
            <li>Implemented algorithmic generative art with 100+ attributes</li>
          </ul>
        </WorkItem>
      </div>
    </LayoutSection>
  )
}
