import LayoutSection from "@/components/layout-section"

const SkillItem = ({
  title,
  children,
  ...props
}: {
  title: string
} & React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>
    <h3>{title}</h3>
    {children}
  </div>
)

export default function Skill() {
  return (
    <LayoutSection>
      <h2>Skill</h2>

      <SkillItem title="Programming Languages">
        <p>Java, JavaScript, TypeScript, Python, SQL</p>
      </SkillItem>

      <SkillItem title="Tools">
        <p>Spring Boot, Node.js, Next.js, React, Tailwind CSS</p>
      </SkillItem>

      <SkillItem title="Industry Knowledge">
        <p>
          Decentralized application, Blockchain (Solana, NEAR), Banking system,
          Frontend/Backend development, Machine learning
        </p>
      </SkillItem>
    </LayoutSection>
  )
}
