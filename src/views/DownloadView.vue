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
        <AndroidView @download="handleDownload" />
      </div>

      <div v-if="activeTab === 'IOS'" class="tab-pane">
        <IOSView @download="handleDownload" />
      </div>

      <div v-if="activeTab === 'PC'" class="tab-pane">
        <PCView @download="handleDownload" />
      </div>

      <div v-if="activeTab === '反馈'" class="tab-pane">
        <ContactView />
      </div>
    </div>

    <!-- 返回顶部按钮 -->
    <button v-show="showBackTop" class="back-to-top" @click="scrollToTop" title="返回顶部">
      ↑
    </button>

    <!-- 下载确认弹窗 -->
    <div v-if="showDialog" class="dialog-overlay" @click="cancelDownload">
      <div class="dialog-content" @click.stop>
        <h3>注意事项</h3>
        <div class="dialog-body">
          <ul>
            <li>本站安装包均来自于互联网，仅供学习交流使用</li>
            <li>所有资源请在下载后24小时内删除。</li>
            <li>如需游玩请前往
              <a href="https://corrodinggames.com/rusted_warfare" target="_blank">
                铁锈战争官网
              </a>
              购买正版
            </li>
          </ul>
        </div>
        <div class="dialog-footer">
          <button class="dialog-btn cancel" @click="cancelDownload">取消</button>
          <button class="dialog-btn confirm" @click="confirmDownload">继续下载</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import "@/assets/styles/parentView.css";
import "@/assets/styles/dialogBox.css";
import "@/assets/styles/backToTop.css";

import AndroidView from "./download/AndroidView.vue";
import IOSView from "./download/IOSView.vue";
import PCView from "./download/PCView.vue";
import ContactView from "./download/ContactView.vue";


const activeTab = ref("安卓");
const showBackTop = ref(false);
const showDialog = ref(false);
const currentDownloadUrl = ref('');

const tabs = [
  { id: "tab1", label: "安卓" },
  { id: "tab2", label: "IOS" },
  { id: "tab3", label: "PC" },
  { id: "tab4", label: "反馈" },
];

const handleDownload = (url) => {
  currentDownloadUrl.value = url;
  showDialog.value = true;
};

const confirmDownload = () => {
  window.open(currentDownloadUrl.value, '_blank');
  showDialog.value = false;
};

const cancelDownload = () => {
  showDialog.value = false;
  currentDownloadUrl.value = '';
};

const handleScroll = () => {
  showBackTop.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped></style>
