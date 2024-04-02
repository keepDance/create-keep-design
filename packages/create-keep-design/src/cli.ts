/*
 * @Author: dushuai
 * @Date: 2024-03-26 15:27:20
 * @LastEditors: dushuai
 * @LastEditTime: 2024-04-02 09:53:35
 * @description: 模板命令
 */
import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import prompts from 'prompts';
import gitClone from './utils/gitClone';
import { sayTemplates, sayVersion, welcome } from './message';

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
      { title: 'react-pc-template', value: 5 },
      { title: 'java-template', value: 10 },
    ]
  }
]

/**
 * 模板github地址and分支
 */
const remoteList = {
  1: 'https://github.com/keepDance/create-keep-design.git#main',
  2: 'https://github.com/dshuais/vue3-mobile-template.git',
  3: 'https://github.com/dshuais/vue3-pc-template.git',
  4: 'https://github.com/dshuais/nuxt-template.git#main',
  5: 'https://github.com/dshuais/react-template.git#main',
  10: 'https://github.com/dshuais/java-template.git',
}

const options = commandLineArgs(optionDefinitions)

/**
 * 取消
 */
const onCancel = () => {
  console.log("Aborting mission - have a pleasent day 👋")
}

/**
 * 执行
 */
const getCloneTemplate = async () => {
  await welcome()
  const res = await prompts(promptsOptions, { onCancel })
  if (!res.name || !res.template) return
  gitClone(`direct:${remoteList[res.template]}`, res.name, { clone: true }, res.template)
}

/**
 * 执行操作
 */
const run = async () => {
  if (options.help) return console.log(commandLineUsage(helpSections))

  if (options.version) return sayVersion()

  if (options.templates) return sayTemplates()

  getCloneTemplate()
}

run()
