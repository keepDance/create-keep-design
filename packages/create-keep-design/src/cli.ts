/*
 * @Author: dushuai
 * @Date: 2024-03-26 15:27:20
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-26 17:36:38
 * @description: 模板命令
 */
import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import prompts from 'prompts';
import gitClone from './utils/gitClone';
import { getVersion } from './utils/getVersion'

/**
 * 配置命令参数
 */
const optionDefinitions = [
  { name: 'version', alias: 'v', type: Boolean },
  { name: 'templates', alias: 'l', type: Boolean },
  { name: 'help', alias: 'h', type: Boolean }
]

/**
 * 帮助命令
 */
const helpSections = [
  {
    header: 'create keepdesign',
    content: '一个快速生成组件库搭建环境的脚手架'
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'version',
        alias: 'v',
        // typeLabel: '{underline boolean}',
        description: '版本号'
      },
      {
        name: 'templates',
        alias: 'l',
        description: '模板列表'
      },
      {
        name: 'help',
        alias: 'h',
        type: Boolean,
        // typeLabel: '{underline boolean}',
        description: '帮助'
      }
    ]
  }
]

/**
 * 下载步骤
 */
const promptsOptions = [
  {
    type: 'text',
    name: 'name',
    message: '请输入项目名称',
    initial: 'keep-design'
  },
  {
    type: 'select',
    name: 'template',
    message: '请选择项目模板',
    choices: [
      { title: 'keep-design', value: 1 },
      { title: 'vue3-mobile-template', value: 2 },
      { title: 'vue3-pc-template', value: 3 },
      { title: 'nuxt-template', value: 4 },
    ]
  }
]

/**
 * 模板github地址and分支
 */
const remoteList = {
  1: 'https://github.com/keepDance/create-keep-design.git#main',
  2: 'https://github.com/dshuais/vue3-mobile-template',
  3: 'https://github.com/dshuais/vue3-pc-template',
  4: 'https://github.com/dshuais/nuxt-template#main'
}

const options = commandLineArgs(optionDefinitions)

/**
 * 下载
 */
const getCloneTemplate = async () => {
  const res = await prompts(promptsOptions)
  if (!res.name || !res.template) return
  gitClone(`direct:${remoteList[res.template]}`, res.name, { clone: true }, res.template)
}

/**
 * 执行操作
 */
const run = async () => {
  if (options.help) return console.log(commandLineUsage(helpSections));
  if (options.version) {
    const version = await getVersion()
    return console.log(`create-keepdesign v${version}`)
  }
  if (options.templates) {
    console.log(remoteList);
    return
  }
  getCloneTemplate()
}

run()
