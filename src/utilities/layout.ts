import type { NavbarLinkType } from "@/types/layout";
import {
  ComponentIcon,
  MessageSquareIcon,
  RadarIcon,
  SnowflakeIcon,
  TargetIcon,
} from "lucide-vue-next";

export const navbarLinkData: NavbarLinkType[] = [
  {
    name: "HomeView",
    link: { name: "home" },
  },
];

export const adminNavbarLinkData: NavbarLinkType[] = [
  {
    icon: RadarIcon,
    name: "Dashboard",
    link: { name: "admin.dashboard" },
  },
  {
    icon: MessageSquareIcon,
    name: "Chat",
    link: { name: "admin.chat" },
  },
  {
    icon: TargetIcon,
    name: "Project",
    link: { name: "admin.project" },
  },
  {
    icon: ComponentIcon,
    name: "UI Components",
    link: { name: "ui-kit" },
  },
  {
    icon: SnowflakeIcon,
    name: "Landing",
    link: { name: "landing" },
  },
];
