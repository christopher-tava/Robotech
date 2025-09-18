// app/components/Skills.tsx
import { SkillText } from "@/components/sub/skill-text";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      {/* Nothing else here — section is empty */}
    </section>
  );
};
// Note: The section is intentionally left empty as per the provided code.