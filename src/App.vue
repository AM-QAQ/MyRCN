<script setup>
import { RouterView, useRoute } from 'vue-router'
import { computed, ref, watch, onMounted } from 'vue'
import TheSidebar from './components/TheSidebar.vue'

const route = useRoute()
const isCollapsed = ref(false)
const isDark = ref(true)

// 从本地存储加载主题设置
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  isDark.value = savedTheme === null ? true : savedTheme === 'dark'
  applyTheme(isDark.value)
})

const currentTitle = computed(() => {
  const titles = {
    '/pro': 'Pro教程',
    '/game': '游戏教程',
    '/download': '游戏下载',
    '/statistics': '数据统计'
  }
  return titles[route.path] || ''
})

// 处理侧边栏状态变化
const handleSidebarToggle = (collapsed) => {
  isCollapsed.value = collapsed
}

// 处理主题切换
const handleThemeToggle = (dark) => {
  isDark.value = dark
  localStorage.setItem('theme', dark ? 'dark' : 'light')
  applyTheme(dark)
}

// 应用主题
const applyTheme = (dark) => {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
}
</script>

<template>
  <div :class="['app-container', isDark ? 'theme-dark' : 'theme-light']">
    <TheSidebar 
      @toggle-sidebar="handleSidebarToggle"
      @toggle-theme="handleThemeToggle"
    />
    <div :class="['main-wrapper', { 'collapsed': isCollapsed }]">
      <header class="title-bar">
        <h1 class="page-title">{{ currentTitle }}</h1>
      </header>
      <main class="main-content">
        <div class="content-container">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>

<style>
:root {
  /* 暗色主题变量 */
  --bg-primary: #0a0a0f;
  --bg-secondary: #13131a;
  --bg-hover: rgba(99, 107, 251, 0.08);
  --bg-active: rgba(99, 107, 251, 0.15);
  --text-primary: #FFFFFF;
  --text-secondary: #888888;
  --border-color: #2f2f3d;
  --accent-color: #636bfb;
  --accent-hover: #8389ff;
  --shadow-color: rgba(0, 0, 0, 0.3);
  --menu-hover: rgba(99, 107, 251, 0.08);
  --menu-active: rgba(99, 107, 251, 0.15);
}

:root[data-theme="light"] {
  /* 亮色主题变量 */
  --bg-primary: #f8f9fa;
  --bg-secondary: #ffffff;
  --bg-hover: rgba(99, 107, 251, 0.08);
  --bg-active: rgba(99, 107, 251, 0.15);
  --text-primary: #2c3e50;
  --text-secondary: #5a6a7e;
  --border-color: #c5ccd6;
  --accent-color: #4a51e8;
  --accent-hover: #3a41d8;
  --shadow-color: rgba(0, 0, 0, 0.15);
  --menu-hover: rgba(99, 107, 251, 0.08);
  --menu-active: rgba(99, 107, 251, 0.15);
}

.app-container {
  min-height: 100vh;
  display: flex;
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

.main-wrapper {
  flex: 1;
  margin-left: 240px;
  transition: all 0.3s ease;
}

.main-wrapper.collapsed {
  margin-left: 72px;
}

.title-bar {
  height: 60px;
  background-color: var(--bg-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 240px;
  right: 0;
  top: 0;
  z-index: 50;
  transition: all 0.3s ease;
  border-bottom: 1.5px solid var(--border-color);
  box-shadow: 0 4px 16px -4px var(--shadow-color);
  backdrop-filter: blur(8px);
}

.main-wrapper.collapsed .title-bar {
  left: 72px;
}

.page-title {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--accent-color);
  margin: 0;
}

.main-content {
  padding: 2rem;
  padding-top: calc(60px + 2rem);
  display: flex;
  justify-content: center;
}

.content-container {
  background-color: var(--bg-secondary);
  border-radius: 12px;
  padding: 2rem;
  min-height: calc(100vh - 60px - 4rem);
  box-shadow: 0 8px 24px var(--shadow-color);
  width: 100%;
  max-width: 800px;
  border: 1.5px solid var(--border-color);
}

/* 移动端适配 */
@media (max-width: 768px) {
  .main-wrapper {
    margin-left: 0;
  }

  .main-wrapper.collapsed {
    margin-left: 0;
  }

  .title-bar {
    left: 0;
    padding: 0 3rem;
  }

  .main-wrapper.collapsed .title-bar {
    left: 0;
  }

  .main-content {
    padding: 1rem;
    padding-top: calc(60px + 1rem);
  }

  .content-container {
    padding: 1.5rem;
    min-height: calc(100vh - 60px - 2rem);
    max-width: 100%;
  }
}
</style>
