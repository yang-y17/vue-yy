<!-- 主页面组件模板，包含个人网站的各个部分 -->
<template>
    <!-- 主内容区域 -->
    <main id="main-content">
        <!-- 跳过导航链接，为使用屏幕阅读器的用户提供便利 -->
        <a class="skip-link" href="#about">跳到正文</a>

        <!-- 顶部导航区域 -->
        <header class="site-header">
            <div class="shell site-nav">
                <!-- 网站品牌标识，包含名称和副标题 -->
                <a class="brand" href="#top" aria-label="返回首页顶部">
                    <span class="brand-mark">Y</span>
                    <span class="brand-copy">
                        <strong>羊开饭</strong>
                        <small>PERSONAL SPACE</small>
                    </span>
                </a>

                <!-- 主导航链接区域 -->
                <nav class="nav-links" aria-label="主导航">
                    <!--
                        v-for：根据 navItems 数组生成每一个导航链接。
                        :key：给每个链接一个唯一标识，Vue 用来正确更新列表。
                        :href：使用数据中的 #about、#skills 等地址。
                        :class：当前所在区域对应的链接会高亮。
                        :aria-current：让读屏软件知道当前导航项。
                    -->
                    <a
                        v-for="item in navItems"
                        :key="item.href"
                        :href="item.href"
                        :class="{
                            'is-active': activeSection === item.href.slice(1)
                        }"
                        :aria-current="
                            activeSection === item.href.slice(1)
                                ? 'location'
                                : undefined
                        "
                    >
                        {{ item.label }}
                    </a>
                </nav>
            </div>
        </header>

        <!-- 首屏介绍区域，作为网站的入口 -->
        <section class="hero" id="top">
            <div class="shell hero-inner">
                <!-- 主介绍内容，带有淡入动画效果 -->
                <div data-reveal>
                    <p class="eyebrow">Hello, world</p>
                    <h1>你好，我是 <span>羊开饭</span>。</h1>
                    <p class="hero-lead">
                        喜欢编写好玩的东西，也喜欢看世界、运动和自由地生活。
                        我相信多元化的体验会让代码不只是逻辑的堆砌，也是一种表达。
                        我喜欢薛之谦,我们的心愿是世界和平！天天开心！！
                    </p>

                    <!-- 行动按钮区域 -->
                    <div class="hero-actions">
                        <a class="button button-primary" href="#portfolio">
                            看看我的作品
                            <span aria-hidden="true">↗</span>
                        </a>
                        <a class="button button-ghost" href="#contact">
                            联系我
                        </a>
                    </div>
                </div>

                <!-- 附加说明区域，展示个人关键词 -->
                <aside class="hero-note" data-reveal>
                    <p>
                        <strong>保持好奇，继续向前。</strong>
                        写代码、交朋友、认真生活，也认真记录那些值得记住的瞬间。
                    </p>
                    <div class="hero-tags" aria-label="个人关键词">
                        <span>HTML</span>
                        <span>运动</span>
                        <span>自由</span>
                        <span>薛之谦</span>
                        <span>世界和平</span>>
                    </div>
                </aside>
            </div>
        </section>

        <!-- 关于我区域 -->
        <section id="about" class="section">
            <div class="shell">
                <!-- 区域标题，带有淡入动画效果 -->
                <div class="section-heading" data-reveal>
                    <p class="eyebrow">About me</p>
                    <h2>关于我</h2>
                    <div class="title-rule"></div>
                </div>

                <div class="about-grid">
                    <!-- 个人介绍文本，带有淡入动画效果 -->
                    <p class="about-copy" data-reveal>
                            我是一名来自中国的大学生，喜欢编写好玩的东西，喜欢去研究新的好玩的东西，喜欢挑战自我。
                        我热衷于探索新的技术和工具。除技术外，也喜欢游玩世界、看世界、运动、拍照
                        很向往自由，也喜欢一些美好的事物。
                        我相信多元化的生活体验能够激发更好的创造力，让我的代码不仅仅是逻辑的堆砌，
                        更是<strong>艺术的表达</strong>。
                        <br>
                            喜欢安静的呆着干自己的事，或是静静的呆着。
                    </p>

                    <!-- 个人特点卡片，带有淡入动画效果 -->
                    <div class="about-facts" data-reveal>
                        <div class="fact">
                            <span class="fact-index">01</span>
                            <span>
                                <strong>写代码</strong>
                                <span>探索技术，也享受创造</span>
                            </span>
                        </div>
                        <div class="fact">
                            <span class="fact-index">02</span>
                            <span>
                                <strong>去运动</strong>
                                <span>篮球、羽毛球，保持活力</span>
                            </span>
                        </div>
                        <div class="fact">
                            <span class="fact-index">03</span>
                            <span>
                                <strong>看世界</strong>
                                <span>认真感受每一种生活体验</span>
                            </span>
                        </div>
                        <div class="fact">
                            <span class="fact-index">04</span>
                            <span>
                                <strong>记录生活</strong>
                                <span>记录每一个热爱生活的瞬间</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 技能进度条区域 -->
        <section id="skills" class="section section-soft">
            <div class="shell">
                <!-- 区域标题，居中显示，带有淡入动画效果 -->
                <div class="section-heading center" data-reveal>
                    <p class="eyebrow">Skills &amp; interests</p>
                    <h2>我的爱好 / 技能</h2>
                    <!-- <p>进度条进入视野后自动展开，不再需要数字按钮。</p> -->
                    <div class="title-rule"></div>
                </div>

                <!--
                    skillsSection 是 ref 引用，JavaScript 用它找到整个技能区域，
                    再判断该区域是否已经进入屏幕。
                -->
                <div ref="skillsSection" class="skills-grid">
                    <!-- 技能卡片，每个卡片包含技能标题、进度条和说明 -->
                    <article
                        v-for="(skill, index) in skills"
                        :key="skill.id"
                        class="skill-card"
                        data-reveal
                    >
                        <div class="skill-head">
                            <h3>{{ skill.title }}</h3>
                            <span class="skill-value" aria-live="polite">
                                <!-- 显示技能进度百分比 -->
                                {{ Math.round(progressValues[index]) }}%
                            </span>
                        </div>

                        <!--
                            role="progressbar"：告诉浏览器这是一个进度条。
                            aria-valuenow：告诉读屏软件当前百分比。
                            :style 中的 width：决定彩色进度条实际有多长。
                        -->
                        <div
                            class="skill-track"
                            role="progressbar"
                            :aria-label="skill.title"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            :aria-valuenow="
                                Math.round(progressValues[index])
                            "
                        >
                            <div
                                class="skill-fill"
                                :style="{
                                    width: progressValues[index] + '%'
                                }"
                            ></div>
                        </div>
                        <p class="skill-note">{{ skill.note }}</p>
                    </article>
                </div>
            </div>
        </section>

        <!-- 好友卡片区域，数据来自siteContent.js -->
        <section id="friends" class="section">
            <div class="shell">
                <!-- 区域标题，居中显示，带有淡入动画效果 -->
                <div class="section-heading center" data-reveal>
                    <p class="eyebrow">My friends</p>
                    <h2>我的好朋友们</h2>
                    <p>点击任意卡片查看照片。</p>
                    <div class="title-rule"></div>
                </div>

                <!-- 好友网格区域 -->
                <div class="friends-grid">
                    <!--
                        FriendCard 是好友卡片组件。
                        v-for：每个好友对象生成一张卡片。
                        :friend：把当前好友数据传进子组件。
                        :active：判断这张卡是否正在显示照片。
                        @toggle：子组件点击后，把好友 id 传回 togglePhoto。
                    -->
                    <FriendCard
                        v-for="friend in friends"
                        :key="friend.id"
                        :friend="friend"
                        :active="activePhoto === friend.id"
                        @toggle="togglePhoto"
                    />
                </div>
            </div>
        </section>

        <!-- 作品集区域 -->
        <section id="portfolio" class="section section-warm">
            <div class="shell">
                <!-- 区域标题，带有淡入动画效果 -->
                <div class="section-heading" data-reveal>
                    <p class="eyebrow">Selected work</p>
                    <h2>作品集</h2>
                    <div class="title-rule"></div>
                </div>

                <!--
                    :href：从 project 数据中读取作品网址。
                    target="_blank"：在新标签页打开。
                    rel="noopener noreferrer"：新窗口打开链接时的安全设置。
                -->
                <a
                    class="portfolio-card"
                    :href="project.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-reveal
                >
                    <!-- 作品图片 -->
                    <span class="portfolio-image">
                        <img
                            :src="project.image"
                            :alt="project.title + '项目页面预览'"
                            loading="lazy"
                            decoding="async"
                        >
                    </span>
                    <!-- 作品信息 -->
                    <span class="portfolio-copy">
                        <span class="portfolio-label">
                            Web project · 01
                        </span>
                        <span class="portfolio-title">
                            {{ project.title }}
                        </span>
                        <span class="portfolio-description">
                            {{ project.description }}
                        </span>
                        <span class="text-link">
                            访问作品
                            <span aria-hidden="true">↗</span>
                        </span>
                    </span>
                </a>
            </div>
        </section>

        <!-- 喜欢的人区域 -->
        <section id="like" class="section">
            <div class="shell">
                <!-- 区域标题，居中显示，带有淡入动画效果 -->
                <div class="section-heading center" data-reveal>
                    <p class="eyebrow">A little memory</p>
                    <h2>喜欢的人</h2>
                    <div class="title-rule"></div>
                </div>

                <!-- 照片展示区域 -->
                <div class="like-stage" data-reveal>
                    <!-- 左侧照片 -->
                    <figure class="memory-side">
                        <img
                            :src="memory.leftPhoto"
                            alt="左侧留念照片"
                            loading="lazy"
                            decoding="async"
                        >
                    </figure>

                    <!--
                        中间的照片卡片：
                        :class 根据 activePhoto 添加 is-open 类；
                        aria-pressed 告诉读屏软件照片是否展开；
                        @click 点击时调用 togglePhoto('memory')。
                    -->
                    <button
                        class="photo-card like-card"
                        :class="{ 'is-open': activePhoto === 'memory' }"
                        type="button"
                        :aria-pressed="activePhoto === 'memory'"
                        @click="togglePhoto('memory')"
                    >
                        <!-- 照片内容 -->
                        <img
                            class="friend-photo"
                            :src="memory.photo"
                            :alt="
                                activePhoto === 'memory'
                                    ? memory.photoAlt
                                    : ''
                            "
                            loading="lazy"
                            decoding="async"
                        >
                        <span class="photo-overlay"></span>

                        <!-- 卡片内容 -->
                        <span class="card-content">
                            <span class="card-index">A NOTE TO YOU</span>
                            <span>
                                <span class="card-title">
                                    {{ memory.title }}
                                </span>
                                <span class="card-description">
                                    {{ memory.description }}
                                </span>
                            </span>
                        </span>

                        <!-- 提示文字 -->
                        <span class="photo-hint">
                            {{
                                activePhoto === 'memory'
                                    ? '收起照片'
                                    : '点看回忆'
                            }}
                        </span>
                    </button>

                    <!-- 右侧照片 -->
                    <figure class="memory-side">
                        <img
                            :src="memory.rightPhoto"
                            alt="右侧留念照片"
                            loading="lazy"
                            decoding="async"
                        >
                    </figure>
                </div>
            </div>
        </section>

        <!-- 联系方式区域 -->
        <section id="contact" class="section section-soft">
            <div class="shell">
                <!-- 区域标题，居中显示，带有淡入动画效果 -->
                <div class="section-heading center" data-reveal>
                    <p class="eyebrow">Get in touch</p>
                    <h2>联系方式</h2>
                    <p>如果你也想找我，可以从这里联系。</p>
                    <div class="title-rule"></div>
                </div>

                <!-- 联系方式也是列表，因此使用 v-for 自动生成每一张卡片。 -->
                <div class="contact-grid" data-reveal>
                    <!--
                        :href：链接地址。
                        :target：GitHub 等 http 链接在新窗口打开。
                        :rel：外部链接增加安全属性。
                    -->
                    <a
                        v-for="contact in contacts"
                        :key="contact.label"
                        class="contact-card"
                        :href="contact.href"
                        :target="
                            contact.href.startsWith('http')
                                ? '_blank'
                                : undefined
                        "
                        :rel="
                            contact.href.startsWith('http')
                                ? 'noopener noreferrer'
                                : undefined
                        "
                    >
                        <span class="contact-icon" aria-hidden="true">
                            {{ contact.icon }}
                        </span>
                        <span>
                            <small>{{ contact.label }}</small>
                            <strong>{{ contact.value }}</strong>
                        </span>
                    </a>
                </div>

                <!-- 联系提示 -->
                <p class="contact-note">
                    如果我没有回复，说明我在睡觉，请不要继续打扰，谢谢。
                </p>
            </div>
        </section>

        <!-- 页脚区域 -->
        <footer class="site-footer">
            <div class="shell footer-inner">
                <p>版权所有 羊开饭 · 个人网页</p>
                <p class="footer-motto">天天开心，永远幸福，世界和平。</p>
            </div>
        </footer>

        <!--
            返回顶部按钮：
            toTopVisible 为 true 时，CSS 会显示按钮；
            点击后调用 scrollToTop 函数。
        -->
        <button
            class="to-top"
            :class="{ 'is-visible': toTopVisible }"
            type="button"
            aria-label="返回页面顶部"
            @click="scrollToTop"
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
            >
                <path d="m18 15-6-6-6 6"></path>
            </svg>
        </button>
    </main>
</template>

<script setup>
/*
 * 页面组件负责三件事：
 * 1. 把 siteContent.js 中的数据显示出来；
 * 2. 处理照片切换、技能动画和返回顶部；
 * 3. 在页面离开时清理监听器。
 */

// onMounted：组件显示后执行；onBeforeUnmount：组件离开前执行。
// ref：创建会自动更新页面的变量。
import { onBeforeUnmount, onMounted, ref } from 'vue'

// 引入单张好友卡片组件。
import FriendCard from './FriendCard.vue'

// 从内容数据文件中取出页面需要的各种数据。
import {
    contacts, // 联系方式列表
    friends, // 好友数据列表
    memory, // “喜欢的人”内容
    navItems, // 顶部导航列表
    project, // 作品集数据
    skills // 技能数据列表
} from './siteContent'

// 响应式状态定义，这些ref会随着用户操作变化，并自动更新页面
// 技能区域DOM引用，用于IntersectionObserver观察
const skillsSection = ref(null)
// 技能进度值数组，初始值为0，会在动画中更新
const progressValues = ref(skills.map(() => 0))
// 当前激活的照片ID，用于控制照片的展开/收起
const activePhoto = ref('')
// 当前所在页面区域，用于导航高亮
const activeSection = ref('about')
// 控制返回顶部按钮的显示状态
const toTopVisible = ref(false)

// 保存观察器和动画帧，组件卸载时需要清理
const animationFrames = []
// 技能进度条观察器
let skillObserver
// 元素可见性观察器
let revealObserver
// 页面区域观察器
let sectionObserver
// 用户是否减少动画偏好
let reduceMotion = false

// 照片切换函数：点击同一张照片会收起，点击另一张会切换过去
const togglePhoto = (photoId) => {
    activePhoto.value = activePhoto.value === photoId ? '' : photoId
}

// 返回页面顶部函数；根据reduceMotion设置决定使用平滑滚动还是直接跳转
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: reduceMotion ? 'auto' : 'smooth'
    })
}

// 更新滚动状态函数：页面滚动超过420px后显示返回顶部按钮
const updateScrollState = () => {
    toTopVisible.value = window.scrollY > 420
}

// 组件挂载时的生命周期钩子
onMounted(() => {
    // 检测用户是否设置了减少动画的偏好
    reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches

    // 技能进度条动画函数：进入视野后依次增长到目标数值
    const animateSkill = (skill, index) => {
        // 如果用户设置了减少动画，直接设置目标值
        if (reduceMotion) {
            progressValues.value[index] = skill.value
            return
        }

        // 动画参数设置
        const duration = 1150 // 动画总时长（毫秒）
        const delay = index * 110 // 每个技能条之间的延迟（毫秒）
        const startTime = performance.now() + delay // 动画开始时间

        // 动画帧函数
        const step = (currentTime) => {
            // 计算动画进度（0-1之间）
            const progress = Math.min(
                Math.max((currentTime - startTime) / duration, 0),
                1
            )
            // 使用缓动函数使动画更自然
            const eased = 1 - Math.pow(1 - progress, 3)
            // 更新当前技能条的进度值
            progressValues.value[index] = skill.value * eased

            // 如果动画未完成，继续请求下一帧
            if (progress < 1) {
                animationFrames.push(requestAnimationFrame(step))
            }
        }

        // 开始动画
        animationFrames.push(requestAnimationFrame(step))
    }

    // 如果技能区域存在，设置IntersectionObserver
    if (skillsSection.value) {
        let hasPlayed = false // 标记动画是否已经播放过
        // 创建技能区域观察器
        skillObserver = new IntersectionObserver(
            ([entry]) => {
                // 如果元素不在视口中或动画已播放过，则返回
                if (!entry.isIntersecting || hasPlayed) return
                hasPlayed = true
                // 播放所有技能动画
                skills.forEach(animateSkill)
                // 动画播放完成后断开观察器
                skillObserver.disconnect()
            },
            { threshold: 0.3 } // 当30%的元素可见时触发
        )
        // 开始观察技能区域
        skillObserver.observe(skillsSection.value)
    }

    // 设置元素可见性观察器，用于淡入效果
    const revealItems = [...document.querySelectorAll('[data-reveal]')]

    // 如果用户设置了减少动画，直接添加可见类
    if (reduceMotion) {
        revealItems.forEach((item) => item.classList.add('is-visible'))
    } else {
        // 创建可见性观察器
        revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    // 如果元素不在视口中，则返回
                    if (!entry.isIntersecting) return
                    // 添加可见类触发CSS动画
                    entry.target.classList.add('is-visible')
                    // 停止观察该元素
                    observer.unobserve(entry.target)
                })
            },
            { threshold: 0.12 } // 当12%的元素可见时触发
        )
        // 开始观察所有需要淡入的元素
        revealItems.forEach((item) => revealObserver.observe(item))
    }

    // 设置页面区域观察器，用于导航高亮
    const monitoredSections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean) // 过滤掉不存在的元素

    // 创建区域观察器
    sectionObserver = new IntersectionObserver(
        (entries) => {
            // 筛选出可见的区域，按可见比例排序
            const visibleSection = entries
                .filter((entry) => entry.isIntersecting)
                .sort(
                    (first, second) =>
                        second.intersectionRatio - first.intersectionRatio
                )[0] // 取最可见的区域

            // 如果有可见区域，更新活动区域
            if (visibleSection) {
                activeSection.value = visibleSection.target.id
            }
        },
        {
            // 设置边距，使导航切换更自然
            rootMargin: '-18% 0px -68% 0px',
            threshold: [0, 0.2, 0.6] // 设置多个阈值，使切换更平滑
        }
    )

    // 开始观察所有页面区域
    monitoredSections.forEach((section) => sectionObserver.observe(section))
    // 添加滚动监听器
    window.addEventListener('scroll', updateScrollState, { passive: true })
    // 初始化滚动状态
    updateScrollState()
})

// 组件卸载前的生命周期钩子，用于清理资源
onBeforeUnmount(() => {
    // 断开所有观察器
    skillObserver?.disconnect()
    revealObserver?.disconnect()
    sectionObserver?.disconnect()
    // 取消所有动画帧
    animationFrames.forEach((frame) => cancelAnimationFrame(frame))
    // 移除滚动监听器
    window.removeEventListener('scroll', updateScrollState)
})
</script>
