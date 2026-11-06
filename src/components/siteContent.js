// 直接使用项目中原有的图片，不再另外生成图片副本。
import czyPhoto from '../assets/imm/czy.jpg' // 导入 ID1 的照片，并命名为 czyPhoto
import downloadImage from '../assets/imm/download.png' // 导入“生日快乐”作品预览图
import lkyPhoto from '../assets/imm/lky.jpg' // 导入 ID4 的照片
import lzlPhoto from '../assets/imm/lzl.jpg' // 导入 ID6 的照片
import memoryPhoto from '../assets/imm/3170.jpg' // 导入“喜欢的人”展开后的照片
import whlPhoto from '../assets/imm/whl.jpg' // 导入 ID2 的照片
import xyjPhoto from '../assets/imm/xyj.jpg' // 导入 ID5 的照片
import yangYYPhoto from '../assets/imm/yangYY.png' // 导入左侧留念照片
import youYPhoto from '../assets/imm/youY.jpg' // 导入右侧留念照片
import zrtPhoto from '../assets/imm/zrt.jpg' // 导入 ID3 的照片

// 顶部导航：label 是显示文字，href 是对应区块。
export const navItems = [
    { label: '关于', href: '#about' }, // 点击后滚动到 id="about" 的区块
    { label: '爱好 / 技能', href: '#skills' }, // 点击后滚动到技能区块
    { label: '好朋友们', href: '#friends' }, // 点击后滚动到好友区块
    { label: '作品集', href: '#portfolio' }, // 点击后滚动到作品区块
    { label: '喜欢', href: '#like' }, // 点击后滚动到喜欢的人区块
    { label: '联系方式', href: '#contact' } // 点击后滚动到联系方式区块
]

// 技能数据：value 是最终百分比，note 是下方说明。
export const skills = [
    {
        id: 'frontend', // 程序内部使用的唯一名称
        title: 'HTML / CSS / JS', // 卡片上显示的技能名称
        value: 88, // 进度条最终会到 88%
        note: '喜欢把想法一步步变成真正能用的页面。' // 进度条下方的说明
    },
    {
        id: 'sports', // 运动技能的 id
        title: '篮球 / 羽毛球', // 运动技能的名称
        value: 70, // 进度条最终会到 70%
        note: '运动是重新充电最直接的方式。' // 运动技能说明
    },
    {
        id: 'music', // 音乐爱好的 id
        title: '喜欢薛之谦', // 音乐爱好名称
        value: 100, // 进度条最终会到 100%
        note: '我们的心愿是：世界和平。' // 音乐爱好说明
    },
    {
        id: 'gold', // 趣味爱好的 id
        title: '钱 / 金子', // 趣味爱好名称
        value: 100, // 进度条最终会到 100%
        note: '保留一点直白的快乐，也挺好。' // 趣味爱好说明
    }
]

// 新增好友时复制一个对象并修改内容即可。
export const friends = [
    {
        id: 'czy', // 程序内部使用的唯一名称
        index: 'ID1', // 卡片左上角显示的编号
        title: '中国好班长', // 好友卡片的标题
        description: // 好友介绍文字
            '优雅大方、纯情专一的女大。喜欢打麻将、唱歌、喝酒，也喜欢鹿晗。',
        cardClass: 'friend-czy', // 控制这张卡片使用黄色背景
        photo: czyPhoto, // 点击卡片后显示的照片
        photoAlt: 'ID1 的照片' // 照片的替代文字，供读屏软件识别
    },
    {
        id: 'whl', // 程序内部使用的唯一名称
        index: 'ID2', // 卡片左上角编号
        title: '冷静行动派', // 好友卡片标题
        description: // 好友介绍文字
            '善良大方，遇事冷静，纯情专一的女大。喜欢打麻将、喝酒，也喜欢王源。',
        cardClass: 'friend-whl', // 使用浅蓝色背景
        photo: whlPhoto, // 点击后显示的照片
        photoAlt: 'ID2 的照片' // 照片替代文字
    },
    {
        id: 'zrt', // 程序内部使用的唯一名称
        index: 'ID3', // 卡片左上角编号
        title: '彤姐', // 好友卡片标题
        description: // 好友介绍文字
            '温柔、快乐、自信大方，是麻将瘾最大的那位，也爱喝酒和学习。',
        cardClass: 'friend-zrt', // 使用粉色背景
        photo: zrtPhoto, // 点击后显示的照片
        photoAlt: 'ID3 的照片' // 照片替代文字
    },
    {
        id: 'lky', // 程序内部使用的唯一名称
        index: 'ID4', // 卡片左上角编号
        title: '靠谱队友', // 好友卡片标题
        description: // 好友介绍文字
            '善良大方、遇事冷静的男大。喜欢打麻将、学习、打游戏和打网球。',
        cardClass: 'friend-lky', // 使用蓝色背景
        photo: lkyPhoto, // 点击后显示的照片
        photoAlt: 'ID4 的照片' // 照片替代文字
    },
    {
        id: 'xyj', // 程序内部使用的唯一名称
        index: 'ID5', // 卡片左上角编号
        title: '努力上进', // 好友卡片标题
        description: // 好友介绍文字
            '大方稳重、努力上进的男大。喜欢打麻将、学习、打游戏和打网球。',
        cardClass: 'friend-xyj', // 使用橙色背景
        photo: xyjPhoto, // 点击后显示的照片
        photoAlt: 'ID5 的照片' // 照片替代文字
    },
    {
        id: 'lzl', // 程序内部使用的唯一名称
        index: 'ID6', // 卡片左上角编号
        title: '帅气逼人', // 好友卡片标题
        description: // 好友介绍文字
            '大方稳重、帅气逼人的男大。喜欢打麻将、学习、打游戏和打网球。',
        cardClass: 'friend-lzl', // 使用绿色背景
        photo: lzlPhoto, // 点击后显示的照片
        photoAlt: 'ID6 的照片' // 照片替代文字
    }
]

// 作品集数据。
export const project = {
    title: '生日快乐', // 作品标题
    description: '一个为生日准备的网页作品，用页面留下祝福和心意。', // 作品介绍
    href: 'https://yang-y17.github.io/happy-birthday/', // 点击后打开的网址
    image: downloadImage // 作品预览图片
}

// “喜欢的人”区块数据，包含中间卡片和两侧照片。
export const memory = {
    title: '不告诉你', // 中间卡片的标题
    description: // 中间卡片的正文
        '我喜欢的人，她温柔、善良，很喜欢小猫小狗。希望她天天开心，健健康康，平平安安，要很幸福很幸福的那种。也祝她一直上进，一直变得更好。',
    photo: memoryPhoto, // 点击卡片后显示的照片
    photoAlt: '这张回忆照片', // 照片替代文字
    leftPhoto: yangYYPhoto, // 左侧装饰照片
    rightPhoto: youYPhoto // 右侧装饰照片
}

// 联系方式会按顺序生成两个链接卡片。
export const contacts = [
    {
        label: '邮箱', // 卡片上方的小标题
        value: '2461480007@qq.com', // 显示的邮箱地址
        href: 'mailto:2461480007@qq.com', // 点击后打开邮件程序
        icon: '@' // 左侧显示的图标文字
    },
    {
        label: 'GitHub', // 卡片上方的小标题
        value: 'yang-y17', // 显示的 GitHub 用户名
        href: 'https://github.com/yang-y17', // 点击后打开 GitHub 主页
        icon: '</>' // 左侧显示的代码图标
    }
]
