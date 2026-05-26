import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Skills = (typeof RESUME_DATA)["skills"];

interface SkillsGroupProps {
  label: string;
  items: string[];
}

function SkillsGroup({ label, items }: SkillsGroupProps) {
  return (
    <div>
      <h3 className="mb-1 text-xs font-semibold text-muted-foreground">
        {label}
      </h3>
      <ul className="flex list-none flex-wrap gap-1 p-0" aria-label={label}>
        {items.map((skill) => (
          <li key={skill}>
            <Badge
              className="print:text-[10px]"
              variant="secondary"
              aria-label={`Skill: ${skill}`}
            >
              {skill}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface SkillsProps {
  skills: Skills;
  className?: string;
}

export function Skills({ skills, className }: SkillsProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="skills-section">
        Skills
      </h2>
      <div className="space-y-3">
        {skills.map((group) => (
          <SkillsGroup
            key={group.label}
            label={group.label}
            items={group.items}
          />
        ))}
      </div>
    </Section>
  );
}
