<template>
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
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import "@/assets/styles/stats.css"

const runningTime = ref('')
let timer = null

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
    timer = setInterval(calculateRunningTime, 1000)
})

// 清理定时器
onUnmounted(() => {
    if (timer) {
        clearInterval(timer)
    }
})
</script>

<style scoped></style>