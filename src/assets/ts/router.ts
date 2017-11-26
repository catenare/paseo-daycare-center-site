import Vue from "vue";
import VueRouter from "vue-router";
// import Events from "../vue/components/Registration/events/index.vue";
import Fees from "../vue/components/Registration/fees/index.vue";
import Other from "../vue/components/Registration/other/index.vue";
// import Programs from "../vue/components/Registration/programs/index.vue";
import Registration from "../vue/components/Registration/registration/index.vue";

Vue.use(VueRouter);

const routes: any = [
  // { path: "/events", name: Events, component: Events, alias: "/" },
  // { path: "/programs", name: Programs, component: Programs },
  { path: "/fees", name: Fees, component: Fees, alias: "/" },
  { path: "/other", name: Other, component: Other },
  { path: "/registration", name: Registration, component: Registration },
];

const router = new VueRouter(
  {
    routes,
  },
);
export {router};
