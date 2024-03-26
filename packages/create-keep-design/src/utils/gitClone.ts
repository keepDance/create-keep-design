/*
 * @Author: dushuai
 * @Date: 2024-01-10 09:35:22
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-26 17:18:45
 * @description: 模板下载命令
 */
import download from 'download-git-repo'
import chalk from 'chalk'
import ora from 'ora'

/**
 * 默认导出下载方法
 */
export default (remote, name, option, tempIndex) => {
  const spinner = ora(`正在下载模板...`).start()
  return new Promise((resolve, reject) => {
    download(remote, name, option, (err) => {
      if (err) {
        spinner.fail()
        console.log('err:>> ', chalk.red(err));
        reject(err)
        return
      }
      spinner.succeed(chalk.green(`模板下载成功！${tempIndex == 1 ? '快来开启你的个人组件库开发吧' : ''}\r\n`))
      console.log(chalk.blue(`cd ${name}\r\n`));
      if (tempIndex == 1) {
        console.log(chalk.blue(`pnpm install\r\n`));
        console.log(chalk.blue(`pnpm build:keep\r\n`));
      } else {
        console.log(chalk.blue(`pnpm install\r\n`));
        console.log(chalk.blue(`pnpm dev\r\n`));
      }

      resolve(void 0)
    })
  })
}
