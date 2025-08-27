import { onReceive, onHandle } from "../utils.ts";
import { IpcMainInvokeEvent } from "electron";

export const defineEventHandlers = () => {
  onReceive("new-window", (event: any) => {
    event.preventDefault();
  });

  onReceive("logData", (event, payload) => {
    console.log("event", event);
    console.log("payload", payload);
    console.log("loggedData");
    event.returnValue = "teste";
    return event;
  });

  onHandle("logInvoke", (event: IpcMainInvokeEvent, payload: any) => {
    console.log("invoke event ", event);
    console.log("invoke payload ", payload);
    return payload;
  });
};
