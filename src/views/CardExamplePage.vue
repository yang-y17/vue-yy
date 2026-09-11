<template>
  <div class="card-example-page">
    <h2>卡片示例页面</h2>
    <p>这里展示了图片在卡片左侧或右侧的布局示例</p>

    <!-- 使用CardWithImage组件 -->
    <CardWithImage :cards="cardData" />
  </div>
</template>

<script>
import CardWithImage from '@/components/CardWithImage.vue'

export default {
  name: 'CardExamplePage',
  components: {
    CardWithImage
  },
  data() {
    return {
      // 卡片数据
      cardData: [
        {
          title: '项目一',
          description: '这是第一个项目的描述信息，图片位于左侧。',
          image: require('@/assets/imm/czy.jpg'),
          imagePosition: 'left',  // 图片位置：'left' 或 'right'
          link: '#',
          buttonText: '查看详情'
        },
        {
          title: '项目二',
          description: '这是第二个项目的描述信息，图片位于右侧。',
          image: require('@/assets/imm/whl.jpg'),
          imagePosition: 'right',
          link: '#',
          buttonText: '了解更多'
        },
        {
          title: '项目三',
          description: '这是第三个项目的描述信息，图片位于左侧。',
          image: require('@/assets/imm/zrt.jpg'),
          imagePosition: 'left',
          link: '#',
          buttonText: '查看详情'
        },
        {
          title: '项目四',
          description: '这是第四个项目的描述信息，图片位于右侧。',
          image: require('@/assets/imm/lky.jpg'),
          imagePosition: 'right',
          link: '#',
          buttonText: '了解更多'
        }
      ]
    }
  }
}
</script>

<style scoped>
.card-example-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  color: #15293d;
  margin-bottom: 20px;
}

p {
  color: #555;
  margin-bottom: 30px;
}
</style>