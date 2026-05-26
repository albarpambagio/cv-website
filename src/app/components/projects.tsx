import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type ProjectTags = readonly string[];

interface ProjectLinkProps {
  title: string;
  link?: string;
}

/**
 * Renders project title with optional link and status indicator
 */
function ProjectLink({ title, link }: ProjectLinkProps) {
  if (!link) {
    return <span>{title}</span>;
  }

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:underline"
        aria-label={`${title} project (opens in new tab)`}
      >
        {title}
        <span
          className="size-1 rounded-full bg-green-500"
          title="Active project indicator"
          aria-hidden="true"
        />
      </a>
      <div
        className="hidden font-mono text-xs underline print:visible"
        aria-hidden="true"
      >
        {link.replace("https://", "").replace("www.", "").replace("/", "")}
      </div>
    </>
  );
}

interface ProjectTagsProps {
  tags: ProjectTags;
}

/**
 * Renders a list of technology tags used in the project
 */
function ProjectTags({ tags }: ProjectTagsProps) {
  if (tags.length === 0) return null;

  return (
    <ul
      className="mt-2 flex list-none flex-wrap gap-1 p-0"
      aria-label="Technologies used"
    >
      {tags.map((tag) => (
        <li key={tag}>
          <Badge
            className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
            variant="secondary"
          >
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: ProjectTags;
  link?: string;
  links?: Array<{ label: string; href: string }>;
}

/**
 * Card component displaying project information
 */
function ProjectCard({
  title,
  description,
  tags,
  link,
  links,
}: ProjectCardProps) {
  const statusTag = tags.find((t) => t === "In Progress");
  const techTags = tags.filter((t) => t !== "In Progress");

  return (
    <Card className="flex h-full flex-col overflow-hidden border p-3 print:overflow-visible print:break-inside-avoid">
      <CardHeader>
        <div className="space-y-1">
          {statusTag && (
            <Badge
              className="mb-1 w-fit border-amber-400 bg-amber-50 text-amber-700 dark:border-amber-600 dark:bg-amber-950 dark:text-amber-300"
              variant="outline"
            >
              {statusTag}
            </Badge>
          )}
          <CardTitle className="text-base">
            <ProjectLink title={title} link={link} />
          </CardTitle>
          <CardDescription
            className="text-pretty font-mono text-xs print:text-[10px]"
            aria-label="Project description"
          >
            {description}
          </CardDescription>
          {links && links.length > 0 && (
            <ul className="flex list-none gap-2 pt-1 font-mono text-xs">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground underline underline-offset-2 hover:text-foreground"
                  >
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <ProjectTags tags={techTags} />
      </CardContent>
    </Card>
  );
}

interface ProjectsProps {
  projects: (typeof RESUME_DATA)["projects"];
}

/**
 * Section component displaying all side projects
 */
export function Projects({ projects }: ProjectsProps) {
  return (
    <Section className="scroll-mb-16 print:space-y-4">
      <h2 className="text-xl font-bold" id="side-projects">
        Projects
      </h2>
      <div
        className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2"
        role="feed"
        aria-labelledby="side-projects"
      >
        {projects.map((project) => (
          <article
            key={project.title}
            className="h-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm print:hover:translate-y-0 print:hover:shadow-none"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.techStack}
              link={project.link?.href}
              links={project.links}
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
