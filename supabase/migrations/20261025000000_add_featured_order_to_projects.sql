-- Controls the display order of featured projects (ascending).
alter table public.projects
  add column if not exists featured_order integer not null default 0;

-- Freeze the order featured projects display in today (unordered scan order),
-- so nothing moves until featured_order is edited. Non-featured rows keep 0.
update public.projects p
set featured_order = s.rn
from (
  select id, row_number() over (order by ctid) as rn
  from public.projects
  where featured
) s
where p.id = s.id
  and p.featured_order = 0;
