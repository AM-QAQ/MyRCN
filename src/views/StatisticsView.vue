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
        <StatsView />
      </div>

      <div v-if="activeTab === '反馈'" class="tab-pane">
        <ContactView />
      </div>

      <div v-if="activeTab === '其他'" class="tab-pane">
        <p>The web page is in production....</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import "@/assets/styles/parentView.css";
import "@/assets/styles/backToTop.css";

import StatsView from "@/views/statistics/StatsView.vue";
import ContactView from "@/views/statistics/ContactView.vue";

const activeTab = ref('网站统计')

const tabs = [
  { id: 'tab1', label: '网站统计' },
  { id: 'tab3', label: '反馈' },
  { id: 'tab4', label: '其他' }
]
</script>

<style scoped></style>