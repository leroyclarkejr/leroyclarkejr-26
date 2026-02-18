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
      status: 'Beta',
      description:
        'A local-first desktop transcription application powered by Open Source Whisper AI.',
      link: { href: 'https://transcripted-hazel.vercel.app/download', label: '' },
      featured: true,
    },
  ],
};

export default constants;
export type { SocialItemProps, Project, ProjectLink, ConstantProps, IconName };
