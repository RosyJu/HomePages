import { createRouter, createWebHistory } from "vue-router";

// import path from "../../path"

import home from "../../views/index/home.vue";

import out_web from "../../views/index/out_web.vue";

import nullViews from "../../views/index/nullViews.vue";

import { ElNotification } from 'element-plus'

// const routerChange = (content: string) => {
//     ElNotification({
//         title: '页面切换',
//         message: `您已切换至${content}页面`,
//         type:'primary',
//         duration: 3000,
//         position: "bottom-right"
//     })
// }

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: "/", component: home }, // 首页
    {name:"首页", path: "/home", component: home },// 首页
    {name:"外部网站",path: "/out_web", component: out_web },// 外部网站
    {path: "/:pathMatch(.*)*", component: nullViews },// 404未定义路由
  ],
});

router.beforeEach((to) => {
  if (to.name) {
    ElNotification({
      title: "页面切换",
      message: `您已切换至${String(to.name)}页面`,
      type: "primary",
      duration: 3000,
      position: "bottom-right",
    });
  }
});

export default router;
