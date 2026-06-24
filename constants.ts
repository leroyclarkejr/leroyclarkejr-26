// Icon name type for type safety
type IconName = 'instagram' | 'linkedin' | 'github' | 'mail';

interface SocialItemProps {
  name: string;
  href: string;
  icon: IconName;
}

interface ProjectLink {
  href: string;
  label: string;
}

interface Project {
  id: string;
  title: string;
  role?: string;
  date: string;
  status?: 'Beta' | 'Live' | 'In Development';
  description: string;
  link: ProjectLink;
  featured: boolean;
}

interface ConstantProps {
  email: string;
  socials: Array<SocialItemProps>;
  projects: Array<Project>;
}

const constants: ConstantProps = {
  email: 'hello@leroyclarkejr.com',
  socials: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/leroyclarkejr',
      icon: 'instagram',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/leroy-clarke-jr/',
      icon: 'linkedin',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/leroyclarkejr',
      icon: 'github',
    },
    {
      name: 'Email',
      href: 'mailto:hello@leroyclarkejr.com',
      icon: 'mail',
    },
  ],
  projects: [
    {
      id: 'transcripted',
      title: 'Transcripted',
      date: 'Feb 2026',
      status: 'In Development',
      description:
        'Local-first desktop app. Turn any video into structured notes, fully offline. Pulling notes out of YouTube and Instagram Reels was tedious, and every tool that did it well wanted my data and a subscription. So I built my own. yt-dlp grabs the audio, Whisper transcribes it on-device, and nothing ever leaves your machine. No cloud. No servers. No subscription.',
      link: { href: 'https://transcripted-hazel.vercel.app/', label: '' },
      featured: true,
    },
    {
      id: 'context-deck',
      title: 'Context Deck',
      date: 'Jun 2026',
      status: 'In Development',
      description:
        'Desktop and web app. Your brand, defined once and available to every AI tool you use. Brand context is a copy-paste nightmare, scattered across Notion docs, Figma files, CSS, and old chat threads, so you end up re-explaining your brand to every tool you touch. Context Deck turns that scattered vision into one living design system, then serves it to any AI agent over MCP. Nearing first release.',
      link: { href: 'https://demo.contextdeck.ai', label: '' },
      featured: true,
    },
  ],
};

export default constants;
export type { SocialItemProps, Project, ProjectLink, ConstantProps, IconName };
