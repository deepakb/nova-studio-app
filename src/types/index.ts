export interface TimelineStep {
    id: string;
    title: string;
    subtitle: string;
    desc: string;
    checks: string[];
    status: 'COMPLETE' | 'PENDING' | 'LOCKED';
}

export interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    socials?: {
        twitter?: string;
        linkedin?: string;
        instagram?: string;
    };
}
