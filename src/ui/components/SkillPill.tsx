import { Chip } from "@mui/material";
import { Icon } from "@iconify/react";

import { Skill } from "../../model/Project";

export default function SkillPill({ skill }: { skill: Skill }) {
  return <Chip style={{ paddingLeft: 5 }} label={skill.name} icon={<Icon icon={skill.icon} />} />;
}
