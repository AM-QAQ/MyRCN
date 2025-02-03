<template>
    <div class="purchase-guide">
        <div class="step-card">
            <div class="step-header">
                <div class="step-number">01</div>
                <div class="step-title">访问Pro网站</div>
            </div>
            <div class="step-content">
                <p>
                    在浏览器输入
                    <a href="https://dash.rw.der.kim" target="_blank" class="highlight-link">dash.rw.der.kim</a>进入登录界面
                </p>
                <div class="img-container">
                    <img src="@/assets/img/pro/buying-1.png" alt="buying-加载失败" />
                </div>
            </div>
        </div>

        <div class="step-card">
            <div class="step-header">
                <div class="step-number">02</div>
                <div class="step-title">注册账号</div>
            </div>
            <div class="step-content">
                <p>
                    点击
                    <span class="highlight">注册账号</span>
                    ，进行账号注册，邮箱务必使用
                    <span class="highlight">QQ邮箱</span>
                </p>
                <div class="warning-text">请牢记您的账号密码，这很重要</div>
                <div class="img-container">
                    <img src="@/assets/img/pro/buying-2.png" alt="buying-加载失败" />
                </div>
            </div>
        </div>

        <div class="step-card">
            <div class="step-header">
                <div class="step-number">03</div>
                <div class="step-title">充值服务</div>
            </div>
            <div class="step-content">
                <p>
                    在左侧菜单栏选择<span class="highlight">服务->钱包->自助充值</span>，根据需要购买的套餐充值对应的金额：
                </p>
                <ul class="price-list">
                    <li>0.5r - 天</li>
                    <li>6r - 月</li>
                    <li>46r - 年</li>
                </ul>
                <div class="img-container">
                    <img src="@/assets/img/pro/buying-8.png" alt="buying-加载失败" />
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
                <div class="warning-text">
                    若微信不支持图片扫码支付，可使用手机扫码电脑上的二维码
                </div>
                <p>
                    充值完成后选择<span class="highlight">服务->购买服务</span>，购买需要的套餐
                </p>
                <div class="img-container">
                    <img src="@/assets/img/pro/buying-9.png" alt="buying-加载失败" />
                </div>
            </div>
        </div>

        <div class="step-card">
            <div class="step-header">
                <div class="step-number">05</div>
                <div class="step-title">查看到期时间</div>
            </div>
            <div class="step-content">
                <p>
                    购买成功后可在<span class="highlight">RCN-Pro -> 设置</span>中查看到期时间
                </p>
                <div class="img-container">
                    <img src="@/assets/img/pro/buying-10.png" alt="buying-加载失败" />
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