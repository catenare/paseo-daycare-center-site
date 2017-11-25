import VueRouter from "vue-router";
import Events from "../vue/registration/events/index.vue";
import Fees from "../vue/registration/fees/index.vue";
import Other from "../vue/registration/other/index.vue";
import Programs from "../vue/registration/programs/index.vue";
import Registration from "../vue/registration/registration/index.vue";

const routes = [
  { path: "/events", component: Events },
  { path: "/programs", component: Programs },
  { path: "/fees", component: Fees },
  { path: "/other", component: Other },
  { path: "/registration", component: Registration },
];

const Router = new VueRouter({
  routes,
});

export {Router};
