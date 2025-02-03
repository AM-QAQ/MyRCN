import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/pro',
      meta: {
        title: 'RCN新手教程'
      }
    },
    {
      path: '/pro',
      name: 'Pro',
      component: () => import('@/views/ProView.vue'),
      meta: {
        title: 'MyRCN - Pro教程'
      }
    },
    {
      path: '/game',
      name: 'Game',
      component: () => import('@/views/GameView.vue'),
      meta: {
        title: 'MyRCN - 游戏教程'
      }
    },
    {
      path: '/download',
      name: 'Download',
      component: () => import('@/views/DownloadView.vue'),
      meta: {
        title: 'MyRCN - 游戏下载'
      }
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: () => import('@/views/StatisticsView.vue'),
      meta: {
        title: 'MyRCN - 数据统计'
      }
    }
  ]
})

// 全局前置守卫：在路由切换前修改页面标题
router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = to.meta.title || 'MyRCN'
  next()
})

export default router
