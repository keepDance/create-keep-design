
/*
* @Author: dushuai
* @Date: 2024-02-04 10:42:33
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-25 16:37:03
* @description: 关于我
*/
import { AboutContent, AboutSidebar } from "#components"

export default defineComponent({
  name: 'About',
  setup() {
    return () => (
      // <div class="mx-auto py-16 lg:w-[85rem] px-3 lg:px-0">
      //   <NuxtImg class="mx-auto" src="https://svg-banners.vercel.app/api?type=origin&text1=Welcome&text2=dshuais%27%20homepage&width=800&height=300" alt="Name Image" />
      // </div>
      <div class="lg:flex">
        <AboutSidebar />
        <div class="mt-14 lg:mt-0 lg:w-[calc(100%-17rem)] lg:ml-[17rem]">
          <AboutContent />
        </div>
      </div>
    )
  }
})
