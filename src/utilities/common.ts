import type { ContactType, ProjectType, ServiceType } from "@/types/landing";

import {
  ComponentIcon,
  LayersIcon,
  LayoutGridIcon,
  LineChartIcon,
  MailIcon,
  PhoneIcon,
  SaveIcon,
} from "lucide-vue-next";

// import agencyImg6 from "@/assets/images/landing/agency/unity-lg.png";
// import agencyImg7 from "@/assets/images/landing/agency/draw-1.png";

export const serviceData1: ServiceType[] = [
  {
    icon: ComponentIcon,
    title: "Developer",
    description:
      "Lorem ipsum dummy text are usually use in these section. Lorem ipsum dummy text are used in this design",
  },
  {
    icon: LayersIcon,
    title: "Digital Product Design",
    description:
      "Lorem ipsum dummy text are usually use in these section. Lorem ipsum dummy text are used in this design",
  },
  {
    icon: LayoutGridIcon,
    title: "Branding & Design",
    description:
      "Lorem ipsum dummy text are usually use in these section. Lorem ipsum dummy text are used in this design",
  },
];

const categories: string[] = ["Web Design", "Brand"];

// export const projectData1: ProjectType[] = [
//   {
//     image: agencyImg6,
//     category: categories[0],
//     name: "Branding Process",
//   },
//   {
//     image: agencyImg7,
//     category: categories[0],
//     name: "Digital Platform",
//   },
//   {
//     image: agencyImg8,
//     category: categories[1],
//     name: "Coder Studio",
//   },
// ];

export const contactData: ContactType[] = [
  {
    icon: PhoneIcon,
    label: "Call Me",
    detail: "+0088 66956 66",
  },
  {
    icon: MailIcon,
    label: "Email me",
    detail: "Dgnr@gmail.com",
  },
  {
    icon: LineChartIcon,
    label: "Follow Me",
    detail: "Facebook.com",
  },
  {
    icon: SaveIcon,
    label: "My Work",
    detail: "Coderthemes.com",
  },
];
