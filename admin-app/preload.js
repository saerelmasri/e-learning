const Toastify = require('toastify-js');
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('Toastify', {
    showToast: (options) => {
      Toastify(options).showToast();
    },
  });