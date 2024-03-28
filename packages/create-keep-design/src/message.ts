/*
 * @Author: dushuai
 * @Date: 2024-03-28 17:47:09
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-28 18:31:24
 * @description: message
 */
import { getVersion } from "./utils/getVersion"
import chalk from 'chalk'

const makeBanner = (welcome: string) => `
     ________                     ____________
       / ____ / /               ● / ______    
      / /    / /_        ____  __/ /
     / /___ / __ \\/ / / / _  \\/ / /_____
     \\ __  / / / / / / / / / / / \\ __  /
    ____/ / / / / /_/ / /_/ / /  ___/ /
_________/_/ /_/______\\_____\\/_______/

${welcome}
`

export const welcome = async () => {
  const version = await getVersion()
  const welcome = `Welcome to ${chalk.green(`create keepdesign v${version}`)}! 🚀`
  const banner = makeBanner(welcome)
  console.log(banner)
}

const templates = {
  'keepDesign 组件库模板': 'https://github.com/keepDance/create-keep-design.git#main',
  'Vue 3 移动端脚手架': 'https://github.com/dshuais/vue3-mobile-template',
  'Vue 3 PC端脚手架': 'https://github.com/dshuais/vue3-pc-template',
  'Nuxt 3 基础脚手架': 'https://github.com/dshuais/nuxt-template#main'
}

export const sayTemplates = async () => {
  console.log(templates);
  console.log(`更多模板源码请查看: ${chalk.blue('https://github.com/dshuais')}`);
}

export const sayVersion = async () => {
  const version = await getVersion()
  console.log(chalk.green(`create-keepdesign v${version}`))
}
