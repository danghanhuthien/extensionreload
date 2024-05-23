{
  "manifest_version": 3,
  "name": "Auto Refresh",
  "version": "1.0",
  "description": "Tự động làm mới trang hiện tại mỗi 30 giây.",
  "permissions": [
    "tabs"
  ],
  "background": {
    "service_worker": "background.js"
  },
  "icons": {
    "16": "image/xnxx.png",
    "48": "image/xnxx1.png",
    "128": "image/xnxx2.png"
  },
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "image/xnxx.png",
      "48": "image/xnxx1.png",
      "128": "image/xnxx2.png"
    }
  }
}
