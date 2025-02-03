<template>
    <div class="usage-guide">
        <div class="method-card">
            <div class="method-header">
                <div class="method-title">
                    <span class="method-badge">原版</span>
                </div>
            </div>
            <div class="method-content">
                <div class="usage-step">
                    <div class="step-text">
                        <div class="command-list">
                            <div class="command-item">
                                <span class="command">.id</span>
                                <span class="description">查看房间号</span>
                            </div>
                            <div class="command-item">
                                <span class="command">.toup</span>
                                <span class="description">公开房间</span>
                            </div>
                            <div class="command-item">
                                <span class="command">.tonp</span>
                                <span class="description">取消公开</span>
                            </div>
                            <div class="command-item">
                                <span class="command">.set am on</span>
                                <span class="description">设置房间混战</span>
                            </div>
                            <div class="command-item">
                                <span class="command">.self_move [n]</span>
                                <span class="description">设置自己位置</span>
                            </div>
                            <div class="command-item">
                                <span class="command">.self_team [n]</span>
                                <span class="description">设置自己队伍</span>
                            </div>
                            <div class="command-item">
                                <span class="command">.set team [n]</span>
                                <span class="description">设置房间总队伍数</span>
                            </div>
                            <div class="command-item">
                                <span class="command">.allmute</span>
                                <span class="description">全体禁言</span>
                            </div>
                            <div class="command-item">
                                <span class="command">.sync [on/off]</span>
                                <span class="description">设置是否启用房间重连</span>
                            </div>
                            <div class="command-item">
                                <span class="command">.kick [n]</span>
                                <span class="description">踢出玩家</span>
                            </div>
                            <div class="command-item waiting">
                                <span class="description">更多指令待补充...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="method-card">
            <div class="method-header">
                <div class="method-title">
                    <span class="method-badge">指令版</span>
                </div>
            </div>
            <div class="method-content">
                <div class="usage-step">
                    <div class="step-text">
                        <div class="command-list">
                            <div class="command-item">
                                <span class="command">.income [n]</span>
                                <span class="description">设置房间倍数</span>
                            </div>
                            <div class="command-item">
                                <span class="command">.setmaxteamid [n]</span>
                                <span class="description">设置房间最大人数</span>
                            </div>
                            <div class="command-item">
                                <span class="command">.op [n]</span>
                                <span class="description">给予房主权限</span>
                            </div>
                            <div class="command-item">
                                <span class="command">.unop [n]</span>
                                <span class="description">取消房主权限</span>
                            </div>
                            <div class="command-item">
                                <span class="command">.nukes [on/off]</span>
                                <span class="description">设置是否开启核弹</span>
                            </div>
                            <div class="command-item">
                                <span class="command">.mute [n]</span>
                                <span class="description">禁言玩家</span>
                            </div>
                            <div class="command-item">
                                <span class="command">.unmute [n]</span>
                                <span class="description">解除禁言</span>
                            </div>
                            <div class="command-item waiting">
                                <span class="description">更多指令待补充...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import "@/assets/styles/cmd.css";
import "@/assets/styles/childView.css";

</script>

<style scoped></style>