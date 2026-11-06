<template>
    <!--
        一张好友卡片。
        class：卡片基础样式，以及 friend-czy 等颜色类。
        :class：active 为 true 时添加 is-open，CSS 就会显示照片。
        :aria-pressed：告诉读屏软件当前照片是否展开。
        @click：点击后发出 toggle 事件，把好友 id 交给 home.vue。
    -->
    <button
        class="photo-card"
        :class="[friend.cardClass, { 'is-open': active }]"
        type="button"
        :aria-pressed="active"
        :aria-label="active ? `收起${friend.index}的照片` : `查看${friend.index}的照片`"
        @click="$emit('toggle', friend.id)"
    >
        <!-- 好友照片：默认在 CSS 中隐藏，卡片展开后才显示。 -->
        <img
            class="friend-photo"
            :src="friend.photo"
            :alt="active ? friend.photoAlt : ''"
            loading="lazy"
            decoding="async"
        >
        <!-- 照片上方的深色遮罩，用来保证白色文字清楚。 -->
        <span class="photo-overlay"></span>

        <!-- 卡片上的文字区域。 -->
        <span class="card-content">
            <!-- 好友编号，例如 ID1。 -->
            <span class="card-index">{{ friend.index }}</span>
            <span>
                <!-- 好友标题，例如“中国好班长”。 -->
                <span class="card-title">{{ friend.title }}</span>
                <!-- 好友介绍，来自 siteContent.js 的 description。 -->
                <span class="card-description">
                    {{ friend.description }}
                </span>
            </span>
        </span>

        <!-- 右下角提示文字，根据展开状态改变。 -->
        <span class="photo-hint">
            {{ active ? '收起照片' : '查看照片' }}
        </span>
    </button>
</template>

<script setup>
/*
 * defineProps 用来接收 home.vue 传进来的数据。
 * friend：当前好友的完整对象。
 * active：当前这张卡是否已经展开照片。
 */
defineProps({
    friend: {
        type: Object, // friend 必须是一个对象
        required: true // 调用组件时必须传入 friend
    },
    active: {
        type: Boolean, // active 只能是 true 或 false
        default: false // 没有传入时默认为 false（不展开）
    }
})

// 声明组件可以发出 toggle 事件，点击卡片时由 home.vue 接收。
defineEmits(['toggle'])
</script>
