// 1、导入 vue 、vue-router
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home.vue";
import Movie from "@/components/Movie.vue";
import About from "@/components/About.vue";
import Tab1 from "@/components/tabs/Tab1.vue";
import Tab2 from "@/components/tabs/Tab2.vue";

// 2、把 VueRouter安装为 Vue的插件
// Vue.use函数 的作用，就是用来安装 插件的
Vue.use(VueRouter);

// 3、创建路由的实例对象
const router = new VueRouter({
  // routes是一个数组，作用:定义 hash地址 与 组件之间的对应关系
  routes: [
    // 重定向路由规则: 当用户访问 / 的时候，通过 redirect 属性跳转到 /home 对应的路由规则
    { path: "/", redirect: "/home" },

    // 路由规则
    { path: "/home", component: Home },

    // 动态路由：路由中的动态参数 以 ：进行声明 ，冒号后面是动态参数的名称
    // 需求：在Movie组件中，希望根据 id 的值，展示对应电影的详情信息
    // 可以为路由规则开启props 传参，从而方便的拿到动态参数的值
    { path: '/movie/:mid', component: Movie, props:true },
    
    {
      // About 页面的路由规则 （父级路由规则）
      path: "/about",
      component: About,
      // 给 '/about' 加个重定向
      redirect: "/about/tab1",
      children: [
        // 1、通过 children 属性 ，嵌套声明子级路由规则   /tab1 可以不加斜线
        // 默认子路由：如果 children 数组中，某个路由规则的 path值 为 空字符串，则这条路由规则，叫做 "默认子路由"
        { path: "tab1", component: Tab1 }, // 2、访问 /about/tab1 时，展示 Tab1组件
        { path: "tab2", component: Tab2 }, // 3、访问 /about/tab2 时，展示 Tab2组件
      ],
    },
  ],
});

// 4、向外共享路由的实例对象
export default router;

//下载并安装 第三方包 vue-router， 然后导入 项目中，
// 然后使用 Vue.use()函数 把 vue-router 安装为 Vue的插件
