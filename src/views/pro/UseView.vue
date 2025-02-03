<template>
    <div class="usage-guide">
        <div class="method-card">
            <div class="method-header">
                <div class="method-title">
                    <span class="method-badge">方法一</span>
                    <span>快速绑定</span>
                </div>
            </div>
            <div class="method-content">
                <div class="usage-step">
                    <div class="step-text">
                        <span class="step-marker">1</span>
                        <p>
                            在左侧菜单选择<span class="highlight">RCN-Pro->绑定</span>，确定"快速绑定/慢速绑定修改"为<span
                                class="highlight">启用</span>
                        </p>
                        <div class="warning-text">默认就是启用状态</div>
                        <p>以防万一，可手动更新一下IP</p>
                    </div>
                    <div class="img-container">
                        <img src="@/assets/img/pro/use-1.png" alt="使用说明图片" />
                    </div>
                </div>

                <div class="usage-step">
                    <div class="step-text">
                        <span class="step-marker">2</span>
                        <p>
                            登录游戏，在IP地址栏输入<span class="highlight">sssss</span>
                        </p>
                    </div>
                    <div class="img-container">
                        <img src="@/assets/img/pro/use-2.png" alt="图片加载失败" />
                    </div>
                </div>

                <div class="usage-step">
                    <div class="step-text">
                        <span class="step-marker">3</span>
                        <p>
                            在弹出的提示框中输入<span class="highlight">newup</span>，注意查看房间提示确定是否公开
                        </p>
                    </div>
                    <div class="img-container">
                        <img src="@/assets/img/pro/use-3.png" alt="图片加载失败" />
                    </div>
                    <div class="img-container">
                        <img src="@/assets/img/pro/use-4.png" alt="图片加载失败" />
                    </div>
                </div>
            </div>
        </div>

        <div class="method-card">
            <div class="method-header">
                <div class="method-title">
                    <span class="method-badge">方法二</span>
                    <span>慢速绑定</span>
                    <span class="recommend-badge">推荐</span>
                </div>
            </div>
            <div class="method-content">
                <div class="usage-step">
                    <div class="step-text">
                        <span class="step-marker">1</span>
                        <p>
                            在左侧菜单选择<span class="highlight">RCN-Pro->绑定</span>，确定"快速绑定/慢速绑定修改"为<span
                                class="highlight">禁用</span>
                        </p>
                        <p>并复制下方<span class="highlight">慢速绑定码</span></p>
                        <div class="warning-text">请不要向他人暴露您的慢速绑定码</div>
                    </div>
                    <div class="img-container">
                        <img src="@/assets/img/pro/use-5.png" alt="图片加载失败" />
                    </div>
                </div>

                <div class="usage-step">
                    <div class="step-text">
                        <span class="step-marker">2</span>
                        <p>
                            登录游戏在IP地址栏输入<span class="highlight">sssss</span>
                        </p>
                        <p>
                            在弹窗中输入所复制的<span class="highlight">慢速绑定码</span>
                        </p>
                        <p>
                            显示绑定成功后再输入<span class="highlight">newup</span>
                        </p>
                    </div>
                    <div class="img-container">
                        <img src="@/assets/img/pro/use-2.png" alt="图片加载失败" />
                    </div>
                    <div class="img-container">
                        <img src="@/assets/img/pro/use-6.png" alt="图片加载失败" />
                    </div>
                    <div class="img-container">
                        <img src="@/assets/img/pro/use-7.png" alt="图片加载失败" />
                    </div>
                </div>

                <div class="usage-note">
                    <div class="note-icon">📝</div>
                    <p>
                        慢速绑定最多绑定两个设备，若需要绑定新的设备请在<span class="highlight">RCN-Pro->绑定</span>删除无用的设备
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import "@/assets/styles/childView.css";
import "@/assets/styles/img.css"

</script>

<style scoped></style>