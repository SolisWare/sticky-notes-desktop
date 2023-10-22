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
  },
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      { role: 'selectAll' },
      { role: 'delete' }
    ]
  }
];

const menubar = Menu.buildFromTemplate(template);

export default menubar;
