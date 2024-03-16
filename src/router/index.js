import { createRouter, createWebHistory } from "vue-router";
import DishList from "../views/DishList.vue";
import DishDetail from "../views/DishDetail.vue";
import EventService from "@/services/EventService";
import NotFoundView from "../views/events/NotFoundView.vue";
import NetWorkErrorView from "../views/events/NetworkError.vue";
import NProgress from "nprogress";
import GStore from "@/store";

const routes = [
  {
    path: "/",
    name: "DishList",
    component: DishList,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: "/dish/:id",
    name: "DishDetail",
    component: DishDetail,
    props: true,
    beforeEnter: (to) => {
      return EventService.findById(to.params.id)
        .then((res) => {
          GStore.event = res.data;
        })
        .catch((err) => {
          if (err.response && err.response.status == 404) {
            return {
              name: "404Resource",
              params: { resource: to.params.id + " Page" },
            };
          } else {
            return { name: "NetworkError" };
          }
        });
    },
  },
  {
    path: "/404/:resource",
    name: "404Resource",
    component: NotFoundView,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundView,
  },
  {
    path: "/network-error",
    name: "NetworkError",
    component: NetWorkErrorView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(() => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
