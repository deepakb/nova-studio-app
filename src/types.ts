// Adding types for GSAP attached to window via CDN
export { };

// declare global {
//   interface Window {
//     gsap: any;
//     ScrollTrigger: any;
//     TextPlugin: any;
//   }
// }

export interface Project {
  id: number;
  title: string;
  client: string;
  image: string;
  desc: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  color: string;
}