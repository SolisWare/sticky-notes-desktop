import { app, Menu } from "electron";

// Check if the app runs on macOS
const isMac = process.platform === "darwin";

const template: any = [
  {
    label: app.name,
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { label: 'Preferences' },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideOthers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' },
    ]
  },
  {
    label: 'File',
    submenu: [
      { label: 'New Note...', accelerator: 'CmdOrCtrl+N' },
      { type: 'separator' },
      isMac ? { role: 'close' } : { role: 'quit' }
    ]
  }
];

const menubar = Menu.buildFromTemplate(template);

export default menubar;
