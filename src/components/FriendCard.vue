<template>
    <!-- 一张好友卡片；点击按钮会通知 home.vue 切换照片。 -->
    <button
        class="photo-card"
        :class="[friend.cardClass, { 'is-open': active }]"
        type="button"
        :aria-pressed="active"
        :aria-label="active ? `收起${friend.index}的照片` : `查看${friend.index}的照片`"
        @click="$emit('toggle', friend.id)"
    >
        <img
            class="friend-photo"
            :src="friend.photo"
            :alt="active ? friend.photoAlt : ''"
            loading="lazy"
            decoding="async"
        >
        <span class="photo-overlay"></span>

        <span class="card-content">
            <span class="card-index">{{ friend.index }}</span>
            <span>
                <span class="card-title">{{ friend.title }}</span>
                <span class="card-description">
                    {{ friend.description }}
                </span>
            </span>
        </span>

        <span class="photo-hint">
            {{ active ? '收起照片' : '查看照片' }}
        </span>
    </button>
</template>

<script setup>
// friend：当前好友的数据。
// active：当前卡片是否已经展开照片。
// toggle：用户点击卡片时，把好友 id 传给父组件。
defineProps({
    friend: {
        type: Object,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    }
})

defineEmits(['toggle'])
</script>
