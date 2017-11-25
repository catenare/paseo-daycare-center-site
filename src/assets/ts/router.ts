import Vue from "vue";
import VueRouter from "vue-router";
import Events from "../vue/Components/Registration/events/index.vue";
import Fees from "../vue/Components/Registration/fees/index.vue";
import Other from "../vue/Components/Registration/other/index.vue";
import Programs from "../vue/Components/Registration/programs/index.vue";
import Registration from "../vue/Components/Registration/registration/index.vue";

Vue.use(VueRouter);

const routes: any = [
  { path: "/events", component: Events },
  { path: "/programs", component: Programs },
  { path: "/fees", component: Fees },
  { path: "/other", component: Other },
  { path: "/registration", component: Registration },
];

const router = new VueRouter({
  routes,
});
export {router};
