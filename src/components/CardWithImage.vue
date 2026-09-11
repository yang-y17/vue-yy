<template>
  <div class="card-with-image-container">
    <!-- 遍历卡片数据，渲染每个卡片 -->
    <div 
      v-for="(card, index) in cards" 
      :key="index" 
      :class="['card-with-image', card.imagePosition === 'left' ? 'card-with-image-left' : 'card-with-image-right']"
    >
      <div class="card-image">
        <img :src="card.image" :alt="card.title">
      </div>
      <div class="card-content">
        <h3>{{ card.title }}</h3>
        <p>{{ card.description }}</p>
        <a v-if="card.link" :href="card.link" class="card-button">{{ card.buttonText || '了解更多' }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardWithImage',
  props: {
    // 卡片数据数组
    cards: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>