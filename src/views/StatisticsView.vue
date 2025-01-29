<script setup>
import { ref, onMounted } from 'vue'
import "@/assets/styles/views.css"

const activeTab = ref('网站统计')
const runningTime = ref('')

const tabs = [
  { id: 'tab1', label: '网站统计' },
  { id: 'tab3', label: '反馈' },
  { id: 'tab4', label: '其他' }
]

// 计算网站运行时间
const calculateRunningTime = () => {
  const startDate = new Date('2025-01-28') // 网站启动日期
  const now = new Date()
  const diff = now - startDate

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  runningTime.value = `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`
}

onMounted(() => {
  calculateRunningTime()
  // 每秒更新一次运行时间
  setInterval(calculateRunningTime, 1000)
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
      <div v-if="activeTab === '网站统计'" class="tab-pane">
        <div class="stats-grid">
          <div class="stats-card">
            <div class="card-header">
              <h3>网站运行时间</h3>
            </div>
            <div class="card-content">
              <div class="running-time">
                <div class="time-value">{{ runningTime }}</div>
                <div class="time-label">自 2024-01-15 起</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeTab === '反馈'" class="tab-pane">
        <div class="feedback-container">
          <div class="feedback-card">
            <div class="group-info">
              <div class="group-title">网站邮箱反馈</div>
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

      <div v-if="activeTab === '其他'" class="tab-pane">
        <p>The web page is in production....</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-card {
  background: linear-gradient(145deg, rgba(99, 107, 251, 0.08), rgba(99, 107, 251, 0.05));
  border-radius: 12px;
  padding: 1.5rem;
  border: 1.5px solid var(--border-color);
  overflow: hidden;
  transition: all 0.3s ease;
}

.stats-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px var(--shadow-color);
  border-color: var(--accent-color);
}

.card-header {
  padding: 1rem 1.5rem;
  border-bottom: 1.5px solid var(--border-color);
  background: linear-gradient(145deg, rgba(99, 107, 251, 0.05), rgba(99, 107, 251, 0.02));
}

.card-header h3 {
  margin: 0;
  color: var(--accent-color);
  font-size: 1.25rem;
  font-weight: 500;
}

.card-content {
  padding: 1.5rem;
  background-color: var(--bg-secondary);
}

.info-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.info-item:last-child {
  margin-bottom: 0;
}

.label {
  color: var(--text-secondary);
  min-width: 120px;
}

.value {
  color: var(--text-primary);
}

.value.highlight {
  color: var(--accent-color);
  font-weight: 500;
}

.rules-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.rules-list li {
  position: relative;
  padding-left: 1.5rem;
  color: var(--text-primary);
}

.rules-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--accent-color);
}

.stats-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}

.visitor-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  text-align: center;
}

.stats-item {
  padding: 1rem;
  background: rgba(99, 107, 251, 0.05);
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.stats-item:hover {
  transform: translateY(-4px);
}

.stats-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.stats-value.highlight {
  color: var(--accent-color);
}

.stats-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.running-time {
  text-align: center;
  padding: 2rem;
}

.time-value {
  font-size: 2rem;
  font-weight: bold;
  color: var(--accent-color);
  margin-bottom: 1rem;
  font-family: monospace;
}

.time-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .info-item {
    flex-direction: column;
    gap: 0.5rem;
  }

  .label {
    min-width: auto;
  }

  .visitor-stats {
    grid-template-columns: 1fr;
  }

  .stats-item {
    padding: 0.75rem;
  }

  .time-value {
    font-size: 1.5rem;
  }
}
</style>