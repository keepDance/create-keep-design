<!--
 * @Author: dushuai
 * @Date: 2024-01-22 11:26:44
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-25 17:49:29
 * @description: home
-->
<script lang="ts" setup>
import { onMounted } from 'vue'
import AOS from 'aos'

defineOptions({
  name: 'Home',
})

onMounted(() => {
  // ThisLog()
  AOS.init()
})
</script>
<template>
  <div class="relative">
    <HomeBanner badge-text="Beta" text="dshuais' blog is being set up." link="https://blog.dshuais.com/"
      link-text="Check it out →" />

    <div class="relative">
      <section class="relative w-full min-h-[96vh] mt-20">
        <div class="max-w-5xl mx-auto text-center px-5 lg:px-0">
          <h2 class="text-gray-200 tracking-wide dark:text-gray-600 select-none">HELLO WORLD !</h2>

          <HomeTitle title="Create KeepDesign" />

          <h3 class="text-lg mt-8 text-gray-800 dark:text-gray-400">
            一个基于Vite+TypeScript的脚手架，用于快速构建Vue 3组件库开发环境。
            <!-- 更是一款用于快速生成Vue 3个性化插件模板、Static Site Generator和更多基础模板的脚手架合集。 -->
            <br />
            <!-- <span class="mt-2 block">
              Blogs and notes are accessible:
              <NuxtLink href="https://blog.dshuais.com/" target="_blank"
                class="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-bold">
                blog.dshuais.com
              </NuxtLink>
            </span> -->
            <div class="mt-1">希望它能够帮助到你！</div>
          </h3>
        </div>

        <div
          class="relative mx-auto flex items-center space-x-5 w-full justify-center mt-8 px-5 lg:px-0 flex-col lg:flex-row">
          <ButtonLink class="getStartBtn" href="/about"> Get Started → </ButtonLink>
          <NuxtLink href="https://github.com/keepDance/create-keep-design/" target="_blank"
            class="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-bold mt-4 lg:mt-0 select-none">
            Open on GitHub and give a star
          </NuxtLink>
        </div>

        <div class="relative mt-10 lg:mt-24 overflow-x-clip">
          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" class="max-w-5xl mx-auto">
            <div
              class="SpinAnimation absolute w-[400px] h-[400px] left-[-100px] top-[70px] bg-green-700 rounded-full" />
            <div class="SpinAnimation absolute w-[400px] h-[400px] left-[50%] bg-blue-700 rounded-full"
              style="animation-duration: 10000ms" />
            <div class="SpinAnimation absolute w-[400px] h-[400px] right-[50%] bg-pink-700 rounded-full"
              style="animation-direction: reverse; animation-duration: 8000ms" />
            <div
              class="SpinAnimation absolute w-[400px] h-[400px] right-[-100px] top-[150px] bg-yellow-700 rounded-full"
              style="animation-direction: reverse; animation-duration: 10000ms" />
          </div>

          <div class="max-w-5xl px-5 lg:px-0 mx-auto">
            <div class="relative group rounded-lg overflow-hidden">
              <HomeTerminal />
              <!-- <div
                class="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-100 group-hover:bg-black/50 transition grid place-items-center">
                <div class="text-center">
                  <h1 class="text-4xl font-bold text-white">
                    Get started in one line!
                  </h1>
                  <h3 class="text-white">
                    Use our create-keep-design CLI to boostrap your project in minutes!
                  </h3>
                  <div class="flex items-center mt-4 space-x-2 mx-auto justify-center">
                    <span class="bg-black rounded-lg px-4 py-1 text-white">
                      pnpm create keepdesign
                    </span>
                    <CopyButton content="pnpm create keepdesign" />
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </section>

      <section class="relative py-6" data-aos="fade-up">
        <!-- <div class="absolute xl:top-[-300px] 2xl:top-[-500px] left-0 select-none">
          <NuxtImg class="w-[100vw] hidden dark:block" src="/shading.webp" alt="Background Image" />
        </div> -->
        <div class="relative SidebaseContainer">
          <div class="Heading">
            <h1>
              ✨ <span class="GradientTextPurple">模板 </span>精选 !
            </h1>
            <div class="flex flex-col lg:flex-row items-center lg:justify-between">
              <p>
                create-keep-design 收录了多款基础模板，你可以根据需要选择使用。当然也可以添加你觉得有意思的模板，请在下方email我。
              </p>

              <NuxtLink href="/templates">
                <div class="cursor-pointer flex items-center justify-end view-more relative font-bold pl-1 pr-2">
                  View More
                  <IconArrowsR class="arrows w-4 h-4 text-gray-600 dark:text-gray-200 ml-2" />
                </div>
              </NuxtLink>
            </div>
          </div>
          <HomeNotes />
        </div>
      </section>

      <section class="relative py-6" data-aos="zoom-up">
        <div class="absolute bottom-0 left-0 select-none">
          <NuxtImg class="w-[100vw] opacity-20 dark:opacity-50" src="/bottom.webp" alt="Background Image" />
        </div>
        <div class="relative SidebaseContainer">
          <div class="Heading heading-column">
            <h1>
              🚀 <span class="ColumsText">Columns </span>recommend !
            </h1>
            <div class="flex flex-col lg:flex-row items-center lg:justify-between">
              <p>
                The column is mainly used to document the development process of my lab and share other research.
                I hope it can help you.
              </p>

              <NuxtLink href="https://blog.dshuais.com/columns" target="_blank">
                <div class="cursor-pointer flex items-center justify-end view-more-column relative font-bold pl-1 pr-2">
                  View More
                  <IconArrowsR class="arrows w-4 h-4 text-gray-600 dark:text-gray-200 ml-2" />
                </div>
              </NuxtLink>
            </div>
          </div>
          <HomeColumns />
        </div>
      </section>

      <HomeFooter />
    </div>
  </div>
</template>
<style scoped>
.getStartBtn {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  border: none !important;
  user-select: none;
  transition: box-shadow 0.6s;
  border-radius: 0.75rem;
  position: relative;
  padding: 0.1rem 1.5rem;
  line-height: 3rem;
}

.getStartBtn:hover {
  box-shadow: 0 0 60px 2px #42d392, 0.5rem 0.5rem 30px #647eff;
}

.SpinAnimation {
  animation: linear 7000ms spin infinite;
  transform-origin: center 35% 0;
  filter: blur(80px);
  opacity: 75%;
}

.SidebaseContainer {
  max-width: 80rem;
  margin: auto auto 5rem;

  @apply px-6 2xl:px-0;
}

.Heading {
  margin: 100px 0 50px 0;
}

.Heading h1 {
  font-size: 2rem;
  font-weight: bold;
}

.Heading p {
  max-width: 50rem;
  font-size: 1.2rem;
}

.heading-column {
  margin: 0 0 50px;
}

.view-more::before {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  position: absolute;
  left: 0;
  bottom: -4px;
  background: -webkit-linear-gradient(315deg, #647eff -50%, #42d392);
  transition: width 0.3s ease-out;
}

.arrows {
  transition: all 0.22s ease-out;
  transition-delay: 0.3s;
}

.view-more:hover::before {
  width: 100%;
}

.view-more:hover {
  .arrows {
    transform: translateX(10px);
    color: #00c16a;
  }
}

.view-more-column::before {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  position: absolute;
  left: 0;
  bottom: -4px;
  background: -webkit-linear-gradient(315deg, #A083ED -50%, #EF7AC8);
  transition: width 0.3s ease-out;
}

.view-more-column:hover::before {
  width: 100%;
}

.view-more-column:hover {
  .arrows {
    transform: translateX(10px);
    color: #EF7AC8;
  }
}

.GradientTextPurple {
  background: linear-gradient(to right, #42d392 10%, #647eff 40%, #798be9 60%, #42d392 90%);
  background-size: 200% auto;

  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: shine 1s linear infinite;

  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
}

.ColumsText {
  background: linear-gradient(to right, #EF7AC8 10%, #A083ED 40%, #b29deb 60%, #EF7AC8 90%);
  background-size: 200% auto;

  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: shine 1s linear infinite;

  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
