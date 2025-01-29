<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import "@/assets/styles/views.css"

const activeTab = ref('购买')
const showBackTop = ref(false)

const tabs = [
    { id: 'tab1', label: '购买' },
    { id: 'tab2', label: '使用' },
    { id: 'tab3', label: '问题' },
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
            <div v-if="activeTab === '购买'" class="tab-pane">
                <div class="purchase-guide">
                    <div class="step-card">
                        <div class="step-header">
                            <div class="step-number">01</div>
                            <div class="step-title">访问Pro网站</div>
                        </div>
                        <div class="step-content">
                            <p>在浏览器输入 <a href="https://dash.rw.der.kim" target="_blank"
                                    class="highlight-link">dash.rw.der.kim</a>进入登录界面</p>
                            <div class="img-container">
                                <img src="@/assets/img/pro/buying-1.png" alt="buying-加载失败">
                            </div>
                        </div>
                    </div>

                    <div class="step-card">
                        <div class="step-header">
                            <div class="step-number">02</div>
                            <div class="step-title">注册账号</div>
                        </div>
                        <div class="step-content">
                            <p>点击<span class="highlight">注册账号</span>，进行账号注册</p>
                            <div class="warning-text">请牢记您的账号密码，这很重要</div>
                            <div class="img-container">
                                <img src="@/assets/img/pro/buying-2.png" alt="buying-加载失败">
                            </div>
                        </div>
                    </div>

                    <div class="step-card">
                        <div class="step-header">
                            <div class="step-number">03</div>
                            <div class="step-title">充值服务</div>
                        </div>
                        <div class="step-content">
                            <p>在左侧菜单栏选择<span class="highlight">服务->钱包->自助充值</span>，根据需要购买的套餐充值对应的金额：
                                <li>0.5r - 天</li>
                                <li>6r - 月</li>
                                <li>46r - 年</li>
                            </p>
                            <div class="img-container">
                                <img src="@/assets/img/pro/buying-8.png" alt="buying-加载失败">
                            </div>
                        </div>
                    </div>

                    <div class="step-card">
                        <div class="step-header">
                            <div class="step-number">04</div>
                            <div class="step-title">完成支付</div>
                        </div>
                        <div class="step-content">
                            <p>保存支付的二维码在微信完成支付</p>
                            <div class="warning-text">若微信不支持图片扫码支付，可使用手机扫码电脑上的二维码</div>
                            <p>充值完成后选择<span class="highlight">服务->购买服务</span>，购买需要的套餐</p>
                            <div class="img-container">
                                <img src="@/assets/img/pro/buying-9.png" alt="buying-加载失败">
                            </div>
                        </div>
                    </div>

                    <div class="step-card">
                        <div class="step-header">
                            <div class="step-number">05</div>
                            <div class="step-title">查看到期时间</div>
                        </div>
                        <div class="step-content">
                            <p>购买成功后可在<span class="highlight">RCN-Pro -> 设置</span>中查看到期时间</p>
                            <div class="img-container">
                                <img src="@/assets/img/pro/buying-10.png" alt="buying-加载失败">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="activeTab === '使用'" class="tab-pane">
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
                                    <p>在左侧菜单选择<span class="highlight">RCN-Pro->绑定</span>，确定"快速绑定/慢速绑定修改"为<span
                                            class="highlight">启用</span></p>
                                    <div class="warning-text">默认就是启用状态</div>
                                    <p>以防万一，可手动更新一下IP</p>
                                </div>
                                <div class="img-container">
                                    <img src="@/assets/img/pro/use-1.png" alt="使用说明图片">
                                </div>
                            </div>

                            <div class="usage-step">
                                <div class="step-text">
                                    <span class="step-marker">2</span>
                                    <p>登录游戏，在IP地址栏输入<span class="highlight">sssss</span></p>
                                </div>
                                <div class="img-container">
                                    <img src="@/assets/img/pro/use-2.png" alt="图片加载失败">
                                </div>
                            </div>

                            <div class="usage-step">
                                <div class="step-text">
                                    <span class="step-marker">3</span>
                                    <p>在弹出的提示框中输入<span class="highlight">newup</span>，注意查看房间提示确定是否公开</p>
                                </div>
                                <div class="img-container">
                                    <img src="@/assets/img/pro/use-3.png" alt="图片加载失败">
                                </div>
                                <div class="img-container">
                                    <img src="@/assets/img/pro/use-4.png" alt="图片加载失败">
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
                                    <p>在左侧菜单选择<span class="highlight">RCN-Pro->绑定</span>，确定"快速绑定/慢速绑定修改"为<span
                                            class="highlight">禁用</span></p>
                                    <p>并复制下方<span class="highlight">慢速绑定码</span></p>
                                    <div class="warning-text">请不要向他人暴露您的慢速绑定码</div>
                                </div>
                                <div class="img-container">
                                    <img src="@/assets/img/pro/use-5.png" alt="图片加载失败">
                                </div>
                            </div>

                            <div class="usage-step">
                                <div class="step-text">
                                    <span class="step-marker">2</span>
                                    <p>登录游戏在IP地址栏输入<span class="highlight">sssss</span></p>
                                    <p>在弹窗中输入所复制的<span class="highlight">慢速绑定码</span></p>
                                    <p>显示绑定成功后再输入<span class="highlight">newup</span></p>
                                </div>
                                <div class="img-container">
                                    <img src="@/assets/img/pro/use-2.png" alt="图片加载失败">
                                </div>
                                <div class="img-container">
                                    <img src="@/assets/img/pro/use-6.png" alt="图片加载失败">
                                </div>
                                <div class="img-container">
                                    <img src="@/assets/img/pro/use-7.png" alt="图片加载失败">
                                </div>
                            </div>

                            <div class="usage-note">
                                <div class="note-icon">📝</div>
                                <p>慢速绑定最多绑定两个设备，若需要绑定新的设备请在<span class="highlight">RCN-Pro->绑定</span>删除无用的设备</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="activeTab === '问题'" class="tab-pane">
                <div class="faq-container">
                    <div class="faq-item">
                        <div class="faq-question">
                            <span class="question-number">Q1</span>
                            <span class="question-text">我已经购买了Pro为什么开房间还是显示无权使用？</span>
                        </div>
                        <div class="faq-answer">
                            请试着在当前游戏设备上重新登录Pro网站或更换网络
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
                                <img src="@/assets/img/pro/节点修改.png" alt="图片加载失败">
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
                                <img src="@/assets/img/pro/慢绑错误2.png" alt="图片加载失败">
                            </div>
                            请试着在当前游戏设备上登录Pro网站后再进行慢速绑定
                        </div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question">
                            <span class="question-number">Q4</span>
                            <span class="question-text">待补充</span>
                        </div>
                        <div class="faq-answer">
                            敬请期待...
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="activeTab === '反馈'" class="tab-pane">
                <div class="feedback-container">
                    <div class="feedback-card">
                        <div class="group-info">
                            <div class="group-title">RELAY-CN交流群</div>
                            <a href="https://qm.qq.com/q/ncj4vfZ3OM" target="_blank" class="group-number"
                                title="点击加入群聊">
                                885925961
                            </a>
                        </div>
                    </div>

                    <div class="feedback-card">
                        <div class="group-info">
                            <div class="group-title">Pro交流群</div>
                            <a href="" target="_blank" class="group-number" title="请手动加入">
                                414204970
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