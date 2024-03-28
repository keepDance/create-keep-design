/*
 * @Author: dushuai
 * @Date: 2024-03-28 17:47:09
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-28 18:11:30
 * @description: message
 */
import { getVersion } from "./utils/getVersion"

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
  const welcome = `Welcome to create keepdesign v${version}! 🚀`
  const banner = makeBanner(welcome)
  console.log(banner)
}
