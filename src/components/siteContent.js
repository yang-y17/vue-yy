// 直接使用项目中原有的图片，不再另外生成图片副本。
import czyPhoto from '../assets/imm/czy.jpg'
import downloadImage from '../assets/imm/download.png'
import lkyPhoto from '../assets/imm/lky.jpg'
import lzlPhoto from '../assets/imm/lzl.jpg'
import memoryPhoto from '../assets/imm/3170.jpg'
import whlPhoto from '../assets/imm/whl.jpg'
import xyjPhoto from '../assets/imm/xyj.jpg'
import yangYYPhoto from '../assets/imm/yangYY.png'
import youYPhoto from '../assets/imm/youY.jpg'
import zrtPhoto from '../assets/imm/zrt.jpg'

// 顶部导航：label 是显示文字，href 是对应区块。
export const navItems = [
    { label: '关于', href: '#about' },
    { label: '爱好 / 技能', href: '#skills' },
    { label: '好朋友们', href: '#friends' },
    { label: '作品集', href: '#portfolio' },
    { label: '喜欢', href: '#like' },
    { label: '联系方式', href: '#contact' }
]

// 技能数据：value 是最终百分比，note 是下方说明。
export const skills = [
    {
        id: 'frontend',
        title: 'HTML / CSS / JS',
        value: 88,
        note: '喜欢把想法一步步变成真正能用的页面。'
    },
    {
        id: 'sports',
        title: '篮球 / 羽毛球',
        value: 70,
        note: '运动是重新充电最直接的方式。'
    },
    {
        id: 'music',
        title: '喜欢薛之谦',
        value: 100,
        note: '我们的心愿是：世界和平。'
    },
    {
        id: 'gold',
        title: '钱 / 金子',
        value: 100,
        note: '保留一点直白的快乐，也挺好。'
    }
]

// 新增好友时复制一个对象并修改内容即可。
export const friends = [
    {
        id: 'czy',
        index: 'ID1',
        title: '中国好班长',
        description:
            '优雅大方、纯情专一的女大。喜欢打麻将、唱歌、喝酒，也喜欢鹿晗。',
        cardClass: 'friend-czy',
        photo: czyPhoto,
        photoAlt: 'ID1 的照片'
    },
    {
        id: 'whl',
        index: 'ID2',
        title: '冷静行动派',
        description:
            '善良大方，遇事冷静，纯情专一的女大。喜欢打麻将、喝酒，也喜欢王源。',
        cardClass: 'friend-whl',
        photo: whlPhoto,
        photoAlt: 'ID2 的照片'
    },
    {
        id: 'zrt',
        index: 'ID3',
        title: '彤姐',
        description:
            '温柔、快乐、自信大方，是麻将瘾最大的那位，也爱喝酒和学习。',
        cardClass: 'friend-zrt',
        photo: zrtPhoto,
        photoAlt: 'ID3 的照片'
    },
    {
        id: 'lky',
        index: 'ID4',
        title: '靠谱队友',
        description:
            '善良大方、遇事冷静的男大。喜欢打麻将、学习、打游戏和打网球。',
        cardClass: 'friend-lky',
        photo: lkyPhoto,
        photoAlt: 'ID4 的照片'
    },
    {
        id: 'xyj',
        index: 'ID5',
        title: '努力上进',
        description:
            '大方稳重、努力上进的男大。喜欢打麻将、学习、打游戏和打网球。',
        cardClass: 'friend-xyj',
        photo: xyjPhoto,
        photoAlt: 'ID5 的照片'
    },
    {
        id: 'lzl',
        index: 'ID6',
        title: '帅气逼人',
        description:
            '大方稳重、帅气逼人的男大。喜欢打麻将、学习、打游戏和打网球。',
        cardClass: 'friend-lzl',
        photo: lzlPhoto,
        photoAlt: 'ID6 的照片'
    }
]

// 作品集数据。
export const project = {
    title: '生日快乐',
    description: '一个为生日准备的网页作品，用页面留下祝福和心意。',
    href: 'https://yang-y17.github.io/happy-birthday/',
    image: downloadImage
}

// “喜欢的人”区块数据，包含中间卡片和两侧照片。
export const memory = {
    title: '不告诉你',
    description:
        '我喜欢的人，她温柔、善良，很喜欢小猫小狗。希望她天天开心，健健康康，平平安安，要很幸福很幸福的那种。也祝她一直上进，一直变得更好。',
    photo: memoryPhoto,
    photoAlt: '这张回忆照片',
    leftPhoto: yangYYPhoto,
    rightPhoto: youYPhoto
}

// 联系方式会按顺序生成两个链接卡片。
export const contacts = [
    {
        label: '邮箱',
        value: '2461480007@qq.com',
        href: 'mailto:2461480007@qq.com',
        icon: '@'
    },
    {
        label: 'GitHub',
        value: 'yang-y17',
        href: 'https://github.com/yang-y17',
        icon: '</>'
    }
]
