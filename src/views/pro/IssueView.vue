<template>
    <div class="faq-container">
        <div class="faq-item">
            <div class="faq-question">
                <span class="question-number">Q1</span>
                <span class="question-text">我已经购买了Pro为什么开房间还是显示无权使用？</span>
            </div>
            <div class="faq-answer">
                请试着在当前游戏设备上重新登录Pro网站或更换网络。若问题依旧，请联系管理员
            </div>
        </div>

        <div class="faq-item">
            <div class="faq-question">
                <span class="question-number">Q2</span>
                <span class="question-text">我在使用S房时闪退情况频发，且有时候创建房间会卡住</span>
            </div>
            <div class="faq-answer">
                可能是当前使用的服务器出现了问题，请根据下图更改节点：
                <div class="img-container">
                    <img src="@/assets/img/pro/节点修改.png" alt="图片加载失败" />
                </div>
            </div>
        </div>

        <div class="faq-item">
            <div class="faq-question">
                <span class="question-number">Q3</span>
                <span class="question-text">我在使用慢速绑定时出现了"绑定码无法对应IP"的错误</span>
            </div>
            <div class="faq-answer">
                <div class="img-container">
                    <img src="@/assets/img/pro/慢绑错误2.png" alt="图片加载失败" />
                </div>
                请试着在当前游戏设备上登录Pro网站后再进行慢速绑定
            </div>
        </div>

        <div class="faq-item">
            <div class="faq-question">
                <span class="question-number">Q4</span>
                <span class="question-text">待补充</span>
            </div>
            <div class="faq-answer">敬请期待...</div>
        </div>
    </div>
</template>

<script setup>
import "@/assets/styles/childView.css";
import "@/assets/styles/img.css"

</script>

<style scoped></style>