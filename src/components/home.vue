<template>
<main>
    <!-- <link rel="stylesheet" href="/src/assets/font/iconfont.css"> -->
    <button id="to-top" style="display: none;">
        <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-fanhuitubiao"></use>
  </svg>
    </button>
    
    
        <header>
            <div class="head">
                <h1>我的主页</h1>
            </div>
            <nav id="yky" class="locate">
                <ul type="circle">
                    <li><a href="#about">关于</a></li>
                    <li><a href="#abilitys">我的爱好/技能</a></li>
                    <li><a href="#crooner">^-^</a></li>
                    <!-- <li><a href="#like">喜欢</a></li> -->
                    <li><a href="#contact">联系方式</a></li>
                </ul>
         
            </nav>
        </header>




        <section id="about">
            <div class="container">
            <h2>关于我</h2>
            <hr>
            <p>我一名来自中国的大学生，喜欢编写好玩的东西，喜欢挑战自我。我热衷于探索新的技术和工具
                除技术外，喜欢游玩世界、看世界、运动，很向往自由的人，喜欢一些美好的事物。
                我相信多元化的生活体验能够激发更好的创造力，让我的代码不仅仅是逻辑的堆砌，更是艺术的表达。
            </p>
            </div>
            <br>
        </section>


         
        <section id="abilitys">
            <div class="container">
                <h2>我的爱好/技能</h2>
                <hr>
            <div class="abilitys-container">
                <div class="ability-frontend">
                    <h3>HTML/css/js</h3>
                    
                    <div class="progress-bar">
                        <div class="progress-level" :style="{width:progress1 + '%',display:setProgressp1 ? 'block' : 'none'}">
                            {{progress1}}%
                        </div>
                         
                    </div>
                    
                </div>
                
                
                <div class="ability-frontend">
                    <h3>篮球/羽毛球 </h3>
                    
                    <div class="progress-bar">
                        <div class="progress-level" :style="{width:progress2 + '%',display:setProgressp2 ? 'block' : 'none'}">
                        {{ progress2}}%
                         </div>
                    </div>
                 
                </div>

                <div class="ability-frontend">
                    <h3>喜欢薛之谦！！</h3>
                    <div class="progress-bar">
                        <div class="progress-level" :style="{width:progress3 + '%',display:setProgressp3 ? 'block' : 'none'}">
                         {{ progress3}}%
                         </div>
                    </div>
                    <br>
                    <p>我们的心愿是：世界和平！！！</p>
                </div>

                <div class="ability-frontend">
                    <h3>钱/金子！！</h3>
                    <div class="progress-bar">
                        <div class="progress-level" :style="{width:progress4 + '%',display:setProgressp4 ? 'block' : 'none'}">
                         {{ progress4}}%
                         </div>
                    </div>
                    <br>
                    <p>这是一个简单的喜好/技能介绍，嘻嘻，别夸，我知道我有点牛逼</p>
                </div>

            <!-- <div class="abilitys-container">
                <p>这是一个简单的喜好/技能介绍，嘻嘻，别夸，我知道我有点牛逼</p>
            </div> -->
                <div class="controls">
                    <button @click="startProgress(1,88)">1</button>
                    <button @click="startProgress(2,70)">2</button>
                    <button @click="startProgress(3,100)">3</button>
                    <button @click="startProgress(4,100)">4</button>
                </div>
                <br>
        </div>   
    </div>
            
        </section>

        <section id="crooner">
            <br>
            <div class="container">
                <h2>^-^</h2>
                <hr>
                <div class="cont-p">
                    <p>我的好朋友们(My good friends)</p>
                </div>
                
                <br>
                <div class="crooner-container">

                    
                    
                <!-- <div class="crooner-left">
                    <img src="../assets/imm/czyQ.jpg" alt="左侧图片" class="cw-image">
                </div> -->
                <div class="crooner-czy">
                        <h3>ID1</h3>
                        <p>我的好朋友，（中国好班长）优雅大方 纯情专一女大 喜欢打麻将，唱歌，喝酒，鹿晗，</p>
                </div>
                
                    
                  
                    <div class="crooner-whl">
                        <h3>ID2</h3>
                        <p>我的好朋友，善良大方 遇事冷静 纯情专一女大 喜欢打麻将，喝酒，王源</p>
                    
                </div>


                <!-- <div class="crooner-left">
                    <img src="../assets/imm/zrtQ.jpg" alt="左侧图片" class="sides-image">
                </div> -->
                    <div class="crooner-zrt">
                        <h3>ID3</h3>
                        <p>我的好朋友（我大哥“彤姐”），温柔 快乐 自信大方 纯情专一女大 喜欢打麻将（麻将瘾最大的），喝酒，爱学习</p>
                        
                </div>
                
                
                    <div class="crooner-lky">
                        <h3>ID4</h3>
                        <p>我的好朋友，善良大方 遇事冷静 纯情专一男大 喜欢打麻将，学习，打游戏，打网球</p>
                    </div>
                    <!-- <div class="crooner-right">
                        <img src="../assets/imm/lkyQ.png" alt="右侧装饰图片" class="sides-image">
                    </div> -->
                   
                
                <div class="crooner-xyj">
                        <h3>ID5</h3>
                        <p>我的好朋友，大方稳重 努力上进 纯情专一男大 喜欢打麻将，学习，打游戏，打网球</p>
                    
                </div>
                <div class="crooner-lzl">
                        <h3>ID6</h3>
                        <p>我的好朋友，大方稳重 帅气逼人 纯情专一男大 喜欢打麻将，学习，打游戏，打网球</p>
                    
                </div>
                
                <br>
            </div>
        </div>
            
        </section>

        <!-- <section id="like">
            <div class = "container">
                <h2>喜欢的人</h2>
                <hr>
                <div class="like-container">
                    <div class="like-left-image">
                        <img src="../assets/imm/yangYY.png" alt="左侧装饰图片" class="side-image">
                    </div>
                    <div class="like-dyy">
                        <h3>不告诉你</h3>
                        <p>
                            
                            我喜欢的人，她温柔 善良 很喜欢小猫小狗，以前还说要一起养一只呢，现在不行了
                            我们分开了，但是我还是喜欢她，很想她，希望她可以天天开心，健健康康，平平安安的
                        要很幸福很幸福的那种。她很上进，很努力的让自己变得越来越好，她也喜欢薛之谦，好像和她在一起后
                        我也变了，以前不怎么吃醋，不怎么吃螺蛳粉，追星，现在喜欢了。好了，祝她可以快快乐乐的，平安健康，永远幸福。
                        </p>
                    </div>
                    <div class="like-right-image">
                        <img src="../assets/imm/youY.jpg" alt="右侧装饰图片" class="side-image">
                    </div>
                </div>
            </div>
        </section> -->

    

        <section id="contact">
        <div class="container">
            <h2>联系方式</h2>
            <hr>
            <div class="contact-info">
                <p>hello,如果你想想找我，可以联系我</p>
                <p>但是！！！如果我没有回复！说明我在睡觉，请不要继续打扰，谢谢！！！</p>            
                <p>邮箱:2461480007@qq.com</p>
                <p>电话:不告诉你</p>
            </div>
        </div>
    </section>
    
        <footer class="kk">
            <div class="kk-container"> 
                <p>版权所有 yky; 个人网页，保留所有权利</p>
                <p>天天开心,永远幸福,世界和平!!!</p>
            </div>
            
        </footer>
</main>

    <!-- <script src="1007.js"></script> -->
     
     

</template>


<script>
import { onMounted,ref } from 'vue'
import '../style.css'



    


export default {
  name: 'Home',  // 组件名称
  setup() {  // setup函数是Vue3的组合式API入口，所有逻辑都在这里写
    // ============================================
    // 【进度条相关代码 - 用ref创建响应式变量】
    // ============================================
    // 【ref是什么？】大白话：ref就像一个"魔法盒子"，你把数字放进去，
    // 以后改这个数字，页面会自动跟着变，不用你手动去更新DOM
    // ref(0) 表示创建一个初始值为0的响应式变量
    // progress1~4 分别代表4个进度条当前的百分比数值（0~100）
    const progress1 = ref(0)  // 第1个进度条：HTML/css/js，初始0%
    const progress2 = ref(0)  // 第2个进度条：篮球/羽毛球，初始0%
    const progress3 = ref(0)  // 第3个进度条：喜欢薛之谦，初始0%
    const progress4 = ref(0)  // 第4个进度条：钱/金子，初始0%

    // setProgressp1~4 控制进度条是否显示（true=显示，false=隐藏）
    // 初始都是false，因为进度条还没开始动画，先隐藏起来
    const setProgressp1 = ref(false)
    const setProgressp2 = ref(false)
    const setProgressp3 = ref(false)
    const setProgressp4 = ref(false)
   
   // --------------------------------------------
   // 【startProgress函数】启动某个进度条的动画
   // --------------------------------------------
   // barNumber: 第几个进度条（1、2、3、4）
   // targetValue: 目标值，要动画到百分之几（比如88、70、100）
   const startProgress = (barNumber, targetValue) => {
       // 先把对应进度条设为"显示"状态
       // .value 是ref的用法：读取或修改ref变量的真实值要用.value
       if(barNumber === 1) setProgressp1.value = true;  // 如果是第1个，显示第1个进度条
       if(barNumber === 2) setProgressp2.value = true;  // 如果是第2个，显示第2个进度条
       if(barNumber === 3) setProgressp3.value = true;  // 如果是第3个，显示第3个进度条
       if(barNumber === 4) setProgressp4.value = true;  // 如果是第4个，显示第4个进度条

       // 然后调用动画函数，从0开始动画到目标值
       animateProgress(barNumber, 0, targetValue);
   };
   
   // --------------------------------------------
   // 【animateProgress函数】进度条动画的核心逻辑
   // --------------------------------------------
   // barNumber: 第几个进度条
   // start: 起始值（从百分之几开始，通常是0）
   // target: 目标值（到百分之几结束，比如88）
   const animateProgress = (barNumber, start, target) => {
       // change: 需要变化的总幅度 = 目标值 - 起始值
       // 比如 start=0, target=88，那change=88，也就是要从0涨到88
       const change = target - start;
       
       // duration: 动画持续的时间，1500毫秒 = 1.5秒
       const duration = 1200;
       
       // startTime: 记录动画开始时的时间戳
       // Date.now() 获取当前时间（从1970年1月1日到现在的毫秒数）
       // 用来计算"动画已经过了多久"
       const startTime = Date.now();

       // 【animate函数】每一帧要执行的动画逻辑
       // 什么是"帧"？大白话：动画就是一张张图片快速切换，每一张图就是一帧
       // 浏览器一般每秒刷新60次（60帧），requestAnimationFrame就是
       // "等浏览器下一次刷新的时候，执行这个函数"
       const animate = () => {
           // elapsed: 动画已经经过了多少毫秒 = 当前时间 - 开始时间
           const elapsed = Date.now() - startTime;
           
           // progress: 动画进度，范围0~1
           // elapsed / duration = 已过时间 / 总时间 = 进度比例
           // Math.min(..., 1) 确保进度不会超过1（100%）
           // 比如 elapsed=750, duration=1500, 那progress=0.5，动画过了一半
           const progress = Math.min(elapsed / duration, 1);
           
           // easeProgress: 缓动后的进度，让动画"先快后慢"，更自然好看
           // 1 - Math.pow(1 - progress, 3) 是一个"缓出三次方"公式
           // 大白话：如果不加缓动，进度条会匀速增长，看起来很生硬
           // 加了缓动后，进度条会先快后慢，像有惯性一样，更丝滑
           // Math.pow(x, 3) 就是x的3次方，比如 Math.pow(2,3)=8
           const easeProgress = 1 - Math.pow(1 - progress, 3);
           
           // currentValue: 当前进度条的数值 = 起始值 + 缓动进度 × 变化幅度
           // 比如 start=0, easeProgress=0.5, change=88，那currentValue=44
           const currentValue = start + easeProgress * change;

           // 把算出来的当前值赋给对应的进度条变量
           if(barNumber === 1) progress1.value = currentValue;  // 更新第1个进度条
           if(barNumber === 2) progress2.value = currentValue;  // 更新第2个进度条
           if(barNumber === 3) progress3.value = currentValue;  // 更新第3个进度条
           if(barNumber === 4) progress4.value = currentValue;  // 更新第4个进度条

           // 如果动画还没结束（progress < 1），就继续下一帧
           // requestAnimationFrame: 告诉浏览器"下一次刷新屏幕时，再调用animate"
           // 这样形成循环：animate → 刷新 → animate → 刷新... 直到动画完成
           if(progress < 1) {
               requestAnimationFrame(animate);
           }
       };

       // 启动动画！调用第一次animate，之后animate会自己循环调用
       animate();
   }
    // ============================================
    // 【onMounted: 组件挂载后执行的代码】
    // 大白话：页面加载完毕后，自动执行这里面的代码
    // ============================================
    onMounted(() => {
        // setProgress(100);  // 这行被注释掉了，可能是之前的代码


  // ============================================
  // 【导航栏平滑滚动】
  // 点击导航栏的链接时，不是"跳转"到对应位置，而是"平滑滚动"过去
  // ============================================
  // querySelectorAll: 获取所有匹配的元素，这里获取nav里所有的<a>标签
  const navLinks = document.querySelectorAll('nav a');
  // forEach: 遍历每个链接，给每个都加上点击事件
  navLinks.forEach(function(link) {
      // addEventListener: 添加事件监听器
      link.addEventListener('click', function(event) {
          // event.preventDefault(): 阻止默认行为（默认点击<a>会瞬间跳转，我们不要这个）
          event.preventDefault();
          // getAttribute: 获取元素的属性值，这里获取href属性（如"#about"）
          const targetId = link.getAttribute('href');
          // querySelector: 根据选择器找到对应的DOM元素
          const targetSection = document.querySelector(targetId);

          if (targetSection) {
              // scrollIntoView: 让元素滚动到可见区域
              // behavior: 'smooth' 表示平滑滚动（不是瞬间跳转）
              targetSection.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });
  });

  // ============================================
  // 【返回顶部按钮】
  // 往下滚动超过300像素时，显示"返回顶部"按钮；点按钮回到页面顶部
  // ============================================
  // getElementById: 根据ID获取DOM元素
  var totop = document.getElementById('to-top');

  // addEventListener: 添加滚动事件监听器
  // window.addEventListener('scroll', function() {...}): 当用户滚动页面时执行函数
  window.addEventListener('scroll', function() {
      // window.pageYOffset: 页面垂直滚动的像素值
      // 如果滚动超过300像素，显示按钮；否则隐藏
      if (window.pageYOffset > 300) {
          totop.style.display = 'block';
      } else {
          totop.style.display = 'none';
      }
  });

  // 给返回顶部按钮添加点击事件
  totop.addEventListener('click', function() {
      // window.scrollTo: 控制页面滚动
      // top: 0 表示滚动到页面顶部
      // behavior: 'smooth' 表示平滑滚动（不是瞬间跳转）
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  })

  // ============================================
  // 【卡片背景切换功能】
  // 点击好友卡片时，切换背景图片（通过CSS类切换）
  // ============================================
  // getElementsByClassName: 根据类名获取元素集合
  let croonerczy = document.getElementsByClassName('crooner-czy');  // 获取所有类名为crooner-czy的元素
  let croonerzrt = document.getElementsByClassName('crooner-zrt');  // 获取所有类名为crooner-zrt的元素
  let croonerwhl = document.getElementsByClassName('crooner-whl');  // 获取所有类名为crooner-whl的元素
  let croonerlky = document.getElementsByClassName('crooner-lky');  // 获取所有类名为crooner-lky的元素
  let likedyy = document.getElementsByClassName('like-dyy');      // 获取所有类名为like-dyy的元素
  let croonerxyj = document.getElementsByClassName('crooner-xyj');  // 获取所有类名为crooner-xyj的元素
  let croonerlzl = document.getElementsByClassName('crooner-lzl');  // 获取所有类名为crooner-lzl的元素

  // for循环遍历每个croonerczy元素
  for(let i=0; i< croonerczy.length; i++) {
      // addEventListener('click', function() {...}): 给元素添加点击事件
      croonerczy[i].addEventListener('click', function() {
          // classList.toggle('czyy'): 如果元素有czyy类就移除，没有就添加
          // 这样就能实现点击切换背景图片的效果
          this.classList.toggle('czyy');
      })
  }


  // 给croonerzrt元素添加点击事件，切换zrtt类（切换背景图片）
  for(let i=0; i< croonerzrt.length; i++) {
      croonerzrt[i].addEventListener('click', function() {
          this.classList.toggle('zrtt');
      })
  }

  // 给croonerwhl元素添加点击事件，切换whll类（切换背景图片）
  for(let i=0; i< croonerwhl.length; i++) {
      croonerwhl[i].addEventListener('click', function() {
          this.classList.toggle('whll');
      })
  }

  // 给croonerlky元素添加点击事件，切换lkyy类（切换背景图片）
  for(let i=0; i< croonerlky.length; i++) {
      croonerlky[i].addEventListener('click', function() {
          this.classList.toggle('lkyy');
      })
  }

  // 给likedyy元素添加点击事件，切换dyyy类（切换背景图片）
  for(let i=0; i< likedyy.length; i++) {
      likedyy[i].addEventListener('click', function() {
          this.classList.toggle('dyyy');
      })
  }
  
  // 给croonerxyj元素添加点击事件，切换xyjj类（切换背景图片）
  for(let i=0; i< croonerxyj.length; i++){
      croonerxyj[i].addEventListener('click', function() {
          this.classList.toggle('xyjj');
      })
  }

  // 给croonerlzl元素添加点击事件，切换lzll类（切换背景图片）
  for(let i=0; i< croonerlzl.length; i++){
      croonerlzl[i].addEventListener('click', function() {
          this.classList.toggle('lzll');
      })
  }
});
    // ============================================
    // 【return语句】
    // 大白话：把变量"导出"出去，让模板（HTML部分）能使用这些变量
    // ============================================
    return {
      progress1, progress2, progress3, progress4,  // 导出进度条的值
      setProgressp1, setProgressp2, setProgressp3, setProgressp4,  // 导出控制显示的值
      startProgress  // 导出启动进度条动画的函数
    };
  }  // setup函数结束
}  // 组件定义结束


// export default {
//     name: 'home',

// setup() {
//   const croonerCzy = ref(null);
//   const croonerZrt = ref(null);
//   // 其他ref...
  
//   const toggleClass = (element, className) => {
//     if (element.value) {
//       element.value.classList.toggle(className);
//     }
//   };
  
//   onMounted(() => {
//     // 导航栏平滑滚动
//     const navLinks = document.querySelectorAll('nav a');
//     navLinks.forEach(link => {
//       link.addEventListener('click', (event) => {
//         event.preventDefault();
//         const targetId = link.getAttribute('href');
//         const targetSection = document.querySelector(targetId);
//         if (targetSection) {
//           targetSection.scrollIntoView({ behavior: 'smooth' });
//         }
//       });
//     });
    
//     // 返回顶部功能
//     const toTopBtn = document.getElementById('to-top');
//     window.addEventListener('scroll', () => {
//       toTopBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
//     });
    
//     toTopBtn.addEventListener('click', () => {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     });
//   });
  
//   return {
//     croonerCzy,
//     croonerZrt,
//     // 其他ref...
//     toggleClass
//   };
// }
// }









</script>

<style>




</style>