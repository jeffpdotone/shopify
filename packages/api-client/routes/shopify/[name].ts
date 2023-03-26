import vsfEventHandler from "../../helpers/vsfEventHandler";
import methods from '../../methods'

export default vsfEventHandler(async event => {
  return await methods[event.context.params.name]()
})