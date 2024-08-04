/*
 * @Author: dushuai
 * @Date: 2024-03-26 15:27:20
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-04 13:49:47
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
      { title: 'react-pc-template', value: 5 },
      { title: 'react-mobile-template', value: 6 },
      { title: 'nuxt-template', value: 4 },
      { title: 'next-template', value: 7 },

      { title: 'taro-template', value: 20 },
      { title: 'uni3-template', value: 21 },

      { title: 'java-template', value: 30 },
      { title: 'nest-template', value: 31 },

      { title: 'rn-template', value: 40 },

      { title: 'qiankun-main', value: 50 },
      { title: 'qiankun-micro', value: 51 },

      // 杂项
      { title: 'farm-react', value: 100 },

      { title: 'site-react', value: 200 },
      { title: 'site-vue', value: 201 },

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
  6: 'https://github.com/dshuais/react-mobile-template.git#main',
  7: 'https://github.com/dshuais/next-template.git#main',

  20: 'https://github.com/dshuais/taro-template.git#main',
  21: 'https://github.com/dshuais/uni3-template.git#main',

  30: 'https://github.com/dshuais/java-template.git',
  31: 'https://github.com/dshuais/nest-template.git#main',

  40: 'https://github.com/dshuais/react-native-template.git',

  50: 'https://github.com/dshuais/qiankun-first.git#main',
  51: 'https://github.com/dshuais/microApps.git#main',

  100: 'https://github.com/dshuais/farm-project.git#main',

  200: 'https://github.com/dshuais/site-react.git#main',
  201: 'https://github.com/dshuais/site-vue.git#main'
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
