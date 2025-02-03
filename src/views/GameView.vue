<template>
  <div class="pro-view">
    <div class="tabs">
      <button v-for="tab in tabs" :key="tab.id" :class="['tab-btn', { active: activeTab === tab.label }]"
        @click="activeTab = tab.label">
        {{ tab.label }}
      </button>
    </div>

    <div class="tab-content">
      <div v-if="activeTab === '开房间'" class="tab-pane">
        <StartupView />
      </div>
      <div v-if="activeTab === '指令'" class="tab-pane">
        <CmdView />
      </div>
      <div v-if="activeTab === '问题'" class="tab-pane">
        <IssueView />
      </div>
      <div v-if="activeTab === '反馈'" class="tab-pane">
        <ContactView />
      </div>
    </div>

    <!-- 返回顶部按钮 -->
    <button v-show="showBackTop" class="back-to-top" @click="scrollToTop" title="返回顶部">
      ↑
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import "@/assets/styles/parentView.css"
import "@/assets/styles/backToTop.css";

// 子组件
import StartupView from '@/views/game/StartupView.vue';
import CmdView from '@/views/game/CmdView.vue';
import IssueView from '@/views/game/IssueView.vue';
import ContactView from '@/views/game/ContactView.vue';

const activeTab = ref('开房间')
const showBackTop = ref(false)

const tabs = [
  { id: 'tab1', label: '开房间' },
  { id: 'tab2', label: '指令' },
  { id: 'tab3', label: '问题' },
  { id: 'tab4', label: '反馈' }
]

const handleScroll = () => {
  showBackTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped></style>