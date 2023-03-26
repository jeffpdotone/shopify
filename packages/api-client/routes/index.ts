import { useConfig } from "../helpers/useConfig"
import vsfEventHandler from "../helpers/vsfEventHandler"

export default vsfEventHandler((req) => {
  const re = useConfig()

  return { nitro: 'Is Awesome!' }
})
