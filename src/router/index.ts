import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import MediaView from "../views/MediaView.vue";
import ContactView from "../views/ContactView.vue";
import ProjectView from "../views/ProjectView.vue";
import EthnicGroups from "@/components/EthnicGroups.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/unityindiversity",
    redirect: "/",
  },

  {
    path: "/unityindiversity/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/unityindiversity/media",
    name: "media",
    component: MediaView,
  },
  {
    path: "/unityindiversity/project",
    name: "project",
    component: ProjectView,
  },
  {
    path: "/unityindiversity/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/unityindiversity/ethnics-group",
    name: "ethnics",
    component: EthnicGroups,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
