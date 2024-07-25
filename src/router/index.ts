import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainHomeView from "../views/foladavid/MainHomeView.vue";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import MediaView from "../views/MediaView.vue";
import ContactView from "../views/ContactView.vue";
import HomepageView from "../views/HomepageView.vue";
import ProjectView from "../views/ProjectView.vue";
import EthnicGroups from "@/components/EthnicGroups.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: MainHomeView,
  },

  {
    path: "/unityindiversity",
    component: HomepageView,
    children: [
      {
        path: "",
        name: "uidhome",
        component: HomeView,
      },
      {
        path: "about",
        name: "about",
        component: AboutView,
      },

      {
        path: "media",
        name: "media",
        component: MediaView,
      },
      {
        path: "project",
        name: "project",
        component: ProjectView,
      },
      {
        path: "contact",
        name: "contact",
        component: ContactView,
      },
      {
        path: "ethnics-group",
        name: "ethnics",
        component: EthnicGroups,
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    // route level code-splitting
    // this generates a separate chunk (not-found.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "not-found" */ "../views/NotFound.vue"),
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
