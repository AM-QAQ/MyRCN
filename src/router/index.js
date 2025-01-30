import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/pro'
    },
    {
      path: '/pro',
      name: 'Pro',
      component: () => import('@/views/ProView.vue'),
      meta: {
        title: 'RCN新手教程'
      }
    },
    {
      path: '/game',
      name: 'Game',
      component: () => import('@/views/GameView.vue'),
      meta: {
        title: 'MyRcn - 游戏教程'
      }
    },
    {
      path: '/download',
      name: 'Download',
      component: () => import('@/views/DownloadView.vue'),
      meta: {
        title: 'MyRcn - 游戏下载'
      }
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: () => import('@/views/StatisticsView.vue'),
      meta: {
        title: 'MyRcn - 数据统计'
      }
    }
  ]
})

// 全局前置守卫：在路由切换前修改页面标题
router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = to.meta.title || 'MyRcn'
  next()
})

export default router
