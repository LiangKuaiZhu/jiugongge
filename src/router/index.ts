import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 
    {
      path: "/avatar",
      name: "Avatar",
      component: () => import("../views/AvatarView.vue"),
    },
    {
      path: "/button",
      name: "Button",
      component: () => import("../views/ButtonView.vue"),
    },
    {
      path: "/card",
      name: "Card",
      component: () => import("../views/CardView.vue"),
    },
    {
      path: "/carousel",
      name: "Carousel",
      component: () => import("../views/CarouselView.vue"),
    },
    {
      path: "/collapse",
      name: "Collapse",
      component: () => import("../views/CollapseView.vue"),
    },
    {
      path: "/divider",
      name: "Divider",
      component: () => import("../views/DividerView.vue"),
    },
    {
      path: "/dropdown",
      name: "Dropdown",
      component: () => import("../views/DropdownView.vue"),
    },
    {
      path: "/ellipsis",
      name: "Ellipsis",
      component: () => import("../views/EllipsisView.vue"),
    },

  ],
});

export default router;
