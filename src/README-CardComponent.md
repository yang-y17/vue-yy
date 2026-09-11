# Vue卡片组件使用说明

## 功能概述
这个卡片组件允许您创建多个卡片，每个卡片可以对应一张图片，图片可以放在卡片的左侧或右侧。

## 组件结构
- `CardWithImage.vue`: 主组件，负责渲染卡片布局
- `CardExamplePage.vue`: 示例页面，展示如何使用卡片组件

## 如何使用

### 1. 导入组件
```javascript
import CardWithImage from '@/components/CardWithImage.vue'
```

### 2. 注册组件
```javascript
export default {
  components: {
    CardWithImage
  }
}
```

### 3. 在模板中使用
```html
<template>
  <div>
    <h2>我的卡片</h2>
    <CardWithImage :cards="cardData" />
  </div>
</template>
```

### 4. 准备卡片数据
```javascript
data() {
  return {
    cardData: [
      {
        title: '卡片标题',
        description: '卡片描述内容',
        image: require('@/assets/your-image.jpg'), // 图片路径
        imagePosition: 'left', // 图片位置：'left' 或 'right'
        link: '#', // 链接地址（可选）
        buttonText: '按钮文字' // 按钮文字（可选）
      },
      // 更多卡片...
    ]
  }
}
```

## 数据结构说明
每个卡片对象可以包含以下属性：
- `title`: 卡片标题（必需）
- `description`: 卡片描述内容（必需）
- `image`: 图片路径（必需）
- `imagePosition`: 图片位置，'left' 或 'right'（必需）
- `link`: 链接地址（可选）
- `buttonText`: 按钮文字（可选，默认为"了解更多"）

## 样式说明
组件使用了CSS Flex布局实现图片在左侧或右侧的排列。样式已经包含了响应式设计，可以在不同设备上良好显示。

## 注意事项
- 确保图片路径正确
- 可以根据需要修改样式文件中的颜色、间距等属性
- 可以通过修改cardData数组来添加更多卡片
