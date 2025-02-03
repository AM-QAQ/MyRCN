<template>
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
</template>

<script setup>
import "@/assets/styles/childView.css";
import "@/assets/styles/download.css";
import "@/assets/styles/dialogBox.css";

// 定义 emit 事件
const emit = defineEmits(['download']);

// 处理下载事件
const handleDownload = (url) => {
    emit('download', url);
};
</script>

<style scoped></style>