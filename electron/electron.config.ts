import { app } from "electron";
import { database } from "./database/database.ts";
import { defineContractsHandler } from "./config/Contracts.config.ts";
import { defineEventHandlers } from "./config/Events.config.ts";
import { createWindow } from "./config/Window.config.ts";

app.enableSandbox();

app.whenReady().then(() => {
  createWindow();
  defineEventHandlers();
  defineContractsHandler();

  database.sync().then((syncResponse) => console.log(syncResponse));
});
