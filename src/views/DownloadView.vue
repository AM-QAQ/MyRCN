<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import "@/assets/styles/views.css";

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
        <div class="download-container">
          <div class="download-card">
            <div class="version-title">1.15 - 官方版</div>
            <div class="download-content">
              <a href="https://play.google.com/store/apps/details?id=com.corrodinggames.rts&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                target="_blank" class="download-btn primary">
                前往下载
              </a>
            </div>
          </div>

          <div class="download-card">
            <div class="version-title">1.15 - 原版</div>
            <div class="download-content">
              <div class="file-info">文件大小：24.3 MB</div>
              <button class="download-btn" @click="handleDownload('https://www.123865.com/s/s62sjv-g0MH')">
                立即下载
              </button>
            </div>
          </div>

          <div class="download-card">
            <div class="version-title">1.15 - 汉化版</div>
            <div class="download-content">
              <div class="file-info">文件大小：26.7 MB</div>
              <button class="download-btn" @click="handleDownload('https://www.123865.com/s/s62sjv-w0MH')">
                立即下载
              </button>
            </div>
          </div>

          <div class="download-card">
            <div class="version-title">1.15 - 指令版</div>
            <div class="download-content">
              <div class="file-info">文件大小：26.9 MB</div>
              <button class="download-btn" @click="handleDownload('https://www.123865.com/s/s62sjv-M0MH')">
                立即下载
              </button>
            </div>
          </div>

          <div class="download-card">
            <div class="version-title">敬请期待...</div>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'IOS'" class="tab-pane">
        <div class="download-container">
          <div class="download-card">
            <div class="version-title">1.15 - 官方版</div>
            <div class="download-content">
              <a href="https://apps.apple.com/au/app/rusted-warfare-rts/id1514329124" target="_blank"
                class="download-btn primary">
                前往下载
              </a>
            </div>
          </div>

          <div class="download-card">
            <div class="version-title">1.15 - 原版</div>
            <div class="download-content">
              <div class="file-info">文件大小：91.5 MB</div>
              <button class="download-btn" @click="handleDownload('https://www.123865.com/s/s62sjv-I0MH')">
                立即下载
              </button>
            </div>
          </div>

          <div class="download-card">
            <div class="version-title">敬请期待...</div>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'PC'" class="tab-pane">
        <div class="download-container">
          <div class="download-card">
            <div class="version-title">1.15 - 官方版</div>
            <div class="download-content">
              <a href="https://store.steampowered.com/app/647960/Rusted_Warfare__RTS/" target="_blank"
                class="download-btn primary">
                前往下载
              </a>
            </div>
          </div>

          <div class="download-card">
            <div class="version-title">1.15 - RWPP</div>
            <div class="download-content">
              <a href="https://github.com/Minxyzgo/RWPP/releases" target="_blank" class="download-btn primary">
                前往下载
              </a>
            </div>
          </div>

          <div class="download-card">
            <div class="version-title">1.15 - 原版</div>
            <div class="download-content">
              <div class="file-info">文件大小：211 MB</div>
              <button class="download-btn" @click="handleDownload('https://www.123865.com/s/s62sjv-J0MH')">
                立即下载
              </button>
            </div>
          </div>

          <div class="download-card">
            <div class="version-title">敬请期待...</div>
          </div>
        </div>
      </div>

      <div v-if="activeTab === '反馈'" class="tab-pane">
        <div class="feedback-container">
          <div class="feedback-card">
            <div class="group-info">
              <div class="group-title">网站邮箱反馈</div>
              <a href="mailto:amt@rw-rcn.xyz?subject=网站反馈&body=请在此处输入您的反馈内容..." target="_blank"
                class="group-number" title="点击发送邮件">
                amt@rw-rcn.xyz
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

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
  padding: 1rem;
}

.dialog-content {
  background-color: var(--bg-secondary);
  border-radius: 12px;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  width: min(90%, 600px);
  border: 1.5px solid var(--border-color);
  animation: slideIn 0.3s ease;
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
}

.dialog-content h3 {
  color: var(--accent-color);
  margin: 0 0 clamp(1rem, 4vw, 1.5rem) 0;
  font-size: clamp(1.1rem, 4vw, 1.25rem);
}

.dialog-body {
  margin-bottom: clamp(1.5rem, 4vw, 2rem);
  color: var(--text-primary);
  font-size: clamp(0.9rem, 3.5vw, 1rem);
}

.dialog-body ul {
  list-style: none;
  padding-left: clamp(1rem, 4vw, 1.5rem);
}

.dialog-body li {
  position: relative;
  padding-left: 1rem;
  margin-bottom: 0.5rem;
}

.dialog-body li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--accent-color);
}

.dialog-footer {
  display: flex;
  justify-content: space-between;
  margin-top: clamp(1rem, 4vw, 1.5rem);
}

.dialog-btn {
  min-width: 100px;
  padding: clamp(0.4rem, 2vw, 0.5rem) clamp(0.75rem, 3vw, 1rem);
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: clamp(0.9rem, 3.5vw, 1rem);
}

.dialog-btn.cancel {
  background-color: var(--bg-hover);
  color: var(--text-primary);
}

.dialog-btn.confirm {
  background-color: var(--accent-color);
  color: white;
}

.dialog-btn:hover {
  transform: translateY(-2px);
}

.dialog-btn.cancel:hover {
  background-color: var(--bg-active);
}

.dialog-btn.confirm:hover {
  background-color: var(--accent-hover);
}

.dialog-body a {
  color: #4CAF50;
  text-decoration: none;
  transition: color 0.3s ease;
}

.dialog-body a:hover {
  color: #45a049;
  text-decoration: underline;
}

/* 动画关键帧 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* 滚动条样式 */
.dialog-content::-webkit-scrollbar {
  width: 4px;
}

.dialog-content::-webkit-scrollbar-track {
  background: transparent;
}

.dialog-content::-webkit-scrollbar-thumb {
  background-color: var(--border-color);
  border-radius: 2px;
}

.dialog-content::-webkit-scrollbar-thumb:hover {
  background-color: var(--accent-color);
}
</style>
