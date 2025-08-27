import { BrowserWindow } from "electron";
import { getPreloadPath, isDev, getUiPath } from "../utils.ts";
import serverConfig from "./server.config.ts";

export const createWindow = () => {
  const window = new BrowserWindow({
    width: 1024,
    height: 768,
    autoHideMenuBar: true,
    darkTheme: true,
    resizable: true,
    roundedCorners: true,
    useContentSize: true,
    icon: "src/assets/estrateg-mailing-logo.png",
    webPreferences: {
      preload: getPreloadPath(),
      nodeIntegration: false,
    },
  });

  window.webContents.setWindowOpenHandler((event) => {
    if (isDev()) {
      if (event.url !== serverConfig.dev.url) {
        return { action: "deny" };
      }
    }

    return { action: "deny" };
  });

  if (isDev()) {
    window.loadURL(serverConfig.dev.url);
    return;
  }

  window.loadFile(getUiPath());
};
