<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import "@/assets/styles/views.css"

const activeTab = ref('安卓')
const showBackTop = ref(false)

const tabs = [
  { id: 'tab1', label: '安卓' },
  { id: 'tab2', label: 'IOS' },
  { id: 'tab3', label: 'PC' },
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

<template>
  <div class="pro-view">
    <div class="tabs">
      <button v-for="tab in tabs" :key="tab.id" :class="['tab-btn', { active: activeTab === tab.label }]"
        @click="activeTab = tab.label">
        {{ tab.label }}
      </button>
    </div>

    <div class="tab-content">
      <div v-if="activeTab === '安卓'" class="tab-pane">
        <p>The web page is in production....</p>
      </div>

      <div v-if="activeTab === 'IOS'" class="tab-pane">
        <p>The web page is in production....</p>
      </div>

      <div v-if="activeTab === 'PC'" class="tab-pane">
        <p>The web page is in production....</p>
      </div>

      <div v-if="activeTab === '反馈'" class="tab-pane">
        <div class="feedback-container">
          <div class="feedback-card">
            <div class="group-info">
              <div class="group-title">下载邮箱反馈</div>
              <a href="mailto:k26373165@gmail.com?subject=网站反馈&body=请在此处输入您的反馈内容..."
                target="_blank" 
                class="group-number"
                title="点击发送邮件"
              >
                k26373165@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 返回顶部按钮 -->
    <button v-show="showBackTop" class="back-to-top" @click="scrollToTop" title="返回顶部">
      ↑
    </button>
  </div>
</template>

<style scoped></style>