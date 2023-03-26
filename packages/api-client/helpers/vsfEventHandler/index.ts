import { EventHandler } from "h3";
import { useConfig } from "../useConfig";

export default function vsfEventHandler(callback: EventHandler) {
  return eventHandler((...args) => {
    useConfig((args[0].node.req as any).middlewareConfig);

    return callback(...args);
  });
}
