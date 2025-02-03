<template>
    <div class="purchase-guide">
        <div class="step-card">
            <div class="step-header">
                <div class="step-number">01</div>
                <div class="step-title">输入一个不存在的房间号<span class="highlight">RXXXXX</span>，并加入</div>
            </div>
            <div class="step-content">
                <div class="img-container">
                    <img src="@/assets/img/game/输入房间号.png" alt="buying-加载失败">
                </div>
            </div>
        </div>

        <div class="step-card">
            <div class="step-header">
                <div class="step-number">02</div>
                <div class="step-title">
                    在弹出窗口中输入
                    <span class="highlight">newup</span>，
                    并点击
                    <span class="highlight">Submit</span>
                </div>
            </div>
            <div class="step-content">
                <div class="img-container">
                    <img src="@/assets/img/game/输入开房指令.png" alt="buying-加载失败">
                    <div class="warning-text">指令补充：</div>
                    <div class="img-container">
                        <img src="@/assets/img/game/开房指令.png" alt="buying-加载失败">
                    </div>
                </div>
            </div>
        </div>

        <div class="step-card">
            <div class="step-header">
                <div class="step-number">03</div>
                <div class="step-title">在聊天栏可查看房间公开状态</div>
            </div>
            <div class="step-content">
                <div class="img-container">
                    <li>成功：</li>
                    <img src="@/assets/img/game/公开成功.png" alt="buying-加载失败">
                    <br><br>
                    <li>失败：</li>
                    <img src="@/assets/img/game/公开失败.png" alt="buying-加载失败">
                </div>
            </div>
        </div>

        <div class="usage-note">
            <div class="note-icon">📝</div>
            <p>
                公开失败代表外面房间已满，可让玩家直接输入<span class="highlight">RXXXXX</span>加入房间。
                也可在聊天框发送<span class="highlight">.toup</span>尝试再次公开。
            </p>
        </div>
    </div>
</template>

<script setup>
import "@/assets/styles/childView.css";
import "@/assets/styles/img.css"

</script>

<style scoped></style>