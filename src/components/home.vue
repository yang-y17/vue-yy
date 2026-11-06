<template>
    <main id="main-content">
        <a class="skip-link" href="#about">跳到正文</a>

        <!-- 顶部导航 -->
        <header class="site-header">
            <div class="shell site-nav">
                <a class="brand" href="#top" aria-label="返回首页顶部">
                    <span class="brand-mark">Y</span>
                    <span class="brand-copy">
                        <strong>Yky</strong>
                        <small>PERSONAL SPACE</small>
                    </span>
                </a>

                <nav class="nav-links" aria-label="主导航">
                    <!-- 根据 navItems 自动生成导航链接，并高亮当前区块。 -->
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

        <!-- 首屏介绍 -->
        <section class="hero" id="top">
            <div class="shell hero-inner">
                <div data-reveal>
                    <p class="eyebrow">Hello, world</p>
                    <h1>你好，我是 <span>Yky</span>。</h1>
                    <p class="hero-lead">
                        喜欢编写好玩的东西，也喜欢看世界、运动和自由地生活。
                        我相信多元化的体验会让代码不只是逻辑的堆砌，也是一种表达。
                    </p>

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

                <aside class="hero-note" data-reveal>
                    <p>
                        <strong>保持好奇，继续向前。</strong>
                        写代码、交朋友、认真生活，也认真记录那些值得记住的瞬间。
                    </p>
                    <div class="hero-tags" aria-label="个人关键词">
                        <span>Vue / Web</span>
                        <span>运动</span>
                        <span>自由</span>
                        <span>薛之谦</span>
                    </div>
                </aside>
            </div>
        </section>

        <!-- 关于我 -->
        <section id="about" class="section">
            <div class="shell">
                <div class="section-heading" data-reveal>
                    <p class="eyebrow">About me</p>
                    <h2>关于我</h2>
                    <div class="title-rule"></div>
                </div>

                <div class="about-grid">
                    <p class="about-copy" data-reveal>
                        我是一名来自中国的大学生，喜欢编写好玩的东西，喜欢挑战自我。
                        我热衷于探索新的技术和工具。除技术外，也喜欢游玩世界、看世界、运动，
                        很向往自由，也喜欢一些美好的事物。
                        我相信多元化的生活体验能够激发更好的创造力，让我的代码不仅仅是逻辑的堆砌，
                        更是<strong>艺术的表达</strong>。
                    </p>

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
                    </div>
                </div>
            </div>
        </section>

        <!-- 技能进度条 -->
        <section id="skills" class="section section-soft">
            <div class="shell">
                <div class="section-heading center" data-reveal>
                    <p class="eyebrow">Skills &amp; interests</p>
                    <h2>我的爱好 / 技能</h2>
                    <p>进度条进入视野后自动展开，不再需要数字按钮。</p>
                    <div class="title-rule"></div>
                </div>

                <div ref="skillsSection" class="skills-grid">
                    <article
                        v-for="(skill, index) in skills"
                        :key="skill.id"
                        class="skill-card"
                        data-reveal
                    >
                        <div class="skill-head">
                            <h3>{{ skill.title }}</h3>
                            <span class="skill-value" aria-live="polite">
                                {{ Math.round(progressValues[index]) }}%
                            </span>
                        </div>

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

        <!-- 好友卡片：好友数据在 siteContent.js 中 -->
        <section id="friends" class="section">
            <div class="shell">
                <div class="section-heading center" data-reveal>
                    <p class="eyebrow">My friends</p>
                    <h2>我的好朋友们</h2>
                    <p>点击任意卡片查看照片，也可以使用键盘切换。</p>
                    <div class="title-rule"></div>
                </div>

                <div class="friends-grid">
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

        <!-- 作品集 -->
        <section id="portfolio" class="section section-warm">
            <div class="shell">
                <div class="section-heading" data-reveal>
                    <p class="eyebrow">Selected work</p>
                    <h2>作品集</h2>
                    <div class="title-rule"></div>
                </div>

                <a
                    class="portfolio-card"
                    :href="project.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-reveal
                >
                    <span class="portfolio-image">
                        <img
                            :src="project.image"
                            :alt="project.title + '项目页面预览'"
                            loading="lazy"
                            decoding="async"
                        >
                    </span>
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

        <!-- 喜欢的人 -->
        <section id="like" class="section">
            <div class="shell">
                <div class="section-heading center" data-reveal>
                    <p class="eyebrow">A little memory</p>
                    <h2>喜欢的人</h2>
                    <div class="title-rule"></div>
                </div>

                <div class="like-stage" data-reveal>
                    <figure class="memory-side">
                        <img
                            :src="memory.leftPhoto"
                            alt="左侧留念照片"
                            loading="lazy"
                            decoding="async"
                        >
                    </figure>

                    <button
                        class="photo-card like-card"
                        :class="{ 'is-open': activePhoto === 'memory' }"
                        type="button"
                        :aria-pressed="activePhoto === 'memory'"
                        @click="togglePhoto('memory')"
                    >
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

                        <span class="photo-hint">
                            {{
                                activePhoto === 'memory'
                                    ? '收起照片'
                                    : '点看回忆'
                            }}
                        </span>
                    </button>

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

        <!-- 联系方式 -->
        <section id="contact" class="section section-soft">
            <div class="shell">
                <div class="section-heading center" data-reveal>
                    <p class="eyebrow">Get in touch</p>
                    <h2>联系方式</h2>
                    <p>如果你也想找我，可以从这里联系。</p>
                    <div class="title-rule"></div>
                </div>

                <div class="contact-grid" data-reveal>
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

                <p class="contact-note">
                    如果我没有回复，说明我在睡觉，请不要继续打扰，谢谢。
                </p>
            </div>
        </section>

        <footer class="site-footer">
            <div class="shell footer-inner">
                <p>版权所有 Yky · 个人网页</p>
                <p class="footer-motto">天天开心，永远幸福，世界和平。</p>
            </div>
        </footer>

        <!-- 返回顶部按钮 -->
        <button
            class="to-top"
            :class="{ 'is-visible': toTopVisible }"
            type="button"
            aria-label="返回页面顶部"
            @click="scrollToTop"
        >
            顶部
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
import { onBeforeUnmount, onMounted, ref } from 'vue'
import FriendCard from './FriendCard.vue'
import {
    contacts,
    friends,
    memory,
    navItems,
    project,
    skills
} from './siteContent'

// 这些 ref 会随着用户操作变化，并自动更新页面。
const skillsSection = ref(null)
const progressValues = ref(skills.map(() => 0))
const activePhoto = ref('')
const activeSection = ref('about')
const toTopVisible = ref(false)

// 保存观察器和动画帧，组件卸载时需要清理。
const animationFrames = []
let skillObserver
let revealObserver
let sectionObserver
let reduceMotion = false

// 点击同一张照片会收起，点击另一张会切换过去。
const togglePhoto = (photoId) => {
    activePhoto.value = activePhoto.value === photoId ? '' : photoId
}

// 返回页面顶部；关闭动画时直接跳转。
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: reduceMotion ? 'auto' : 'smooth'
    })
}

// 页面滚动超过 420px 后显示返回顶部按钮。
const updateScrollState = () => {
    toTopVisible.value = window.scrollY > 420
}

onMounted(() => {
    reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches

    // 技能进度条：进入视野后依次增长到目标数值。
    const animateSkill = (skill, index) => {
        if (reduceMotion) {
            progressValues.value[index] = skill.value
            return
        }

        const duration = 1150
        const delay = index * 110
        const startTime = performance.now() + delay

        const step = (currentTime) => {
            const progress = Math.min(
                Math.max((currentTime - startTime) / duration, 0),
                1
            )
            const eased = 1 - Math.pow(1 - progress, 3)
            progressValues.value[index] = skill.value * eased

            if (progress < 1) {
                animationFrames.push(requestAnimationFrame(step))
            }
        }

        animationFrames.push(requestAnimationFrame(step))
    }

    if (skillsSection.value) {
        let hasPlayed = false
        skillObserver = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || hasPlayed) return
                hasPlayed = true
                skills.forEach(animateSkill)
                skillObserver.disconnect()
            },
            { threshold: 0.3 }
        )
        skillObserver.observe(skillsSection.value)
    }

    // 页面区块进入视野时添加 is-visible，让 CSS 播放淡入效果。
    const revealItems = [...document.querySelectorAll('[data-reveal]')]

    if (reduceMotion) {
        revealItems.forEach((item) => item.classList.add('is-visible'))
    } else {
        revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return
                    entry.target.classList.add('is-visible')
                    observer.unobserve(entry.target)
                })
            },
            { threshold: 0.12 }
        )
        revealItems.forEach((item) => revealObserver.observe(item))
    }

    // 根据当前所在区块，更新导航链接的高亮状态。
    const monitoredSections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean)

    sectionObserver = new IntersectionObserver(
        (entries) => {
            const visibleSection = entries
                .filter((entry) => entry.isIntersecting)
                .sort(
                    (first, second) =>
                        second.intersectionRatio - first.intersectionRatio
                )[0]

            if (visibleSection) {
                activeSection.value = visibleSection.target.id
            }
        },
        {
            rootMargin: '-18% 0px -68% 0px',
            threshold: [0, 0.2, 0.6]
        }
    )

    monitoredSections.forEach((section) => sectionObserver.observe(section))
    window.addEventListener('scroll', updateScrollState, { passive: true })
    updateScrollState()
})

onBeforeUnmount(() => {
    // 离开页面时清理观察器、动画和滚动监听。
    skillObserver?.disconnect()
    revealObserver?.disconnect()
    sectionObserver?.disconnect()
    animationFrames.forEach((frame) => cancelAnimationFrame(frame))
    window.removeEventListener('scroll', updateScrollState)
})
</script>
