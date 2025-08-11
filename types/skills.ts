export interface SkillItem {
  name?: string | null;
  icon?: string | null;
  level?: number | null;
}

export interface ISkills {
  category?: string | null;
  skills?: SkillItem[] | null;
}
