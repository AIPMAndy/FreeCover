# FreeCover · 免费开源封面制作工具

为中文内容创作者设计的浏览器封面编辑器。无须注册、无水印，直接制作小红书、Threads、X、YouTube、公众号等平台的封面。

- [官方网站](https://aipmandy.github.io/FreeCover/)
- [在线编辑器](https://aipmandy.github.io/FreeCover/editor.html)
- [源码仓库](https://github.com/AIPMAndy/FreeCover)

## 功能

- 支持多平台预设尺寸与原创视觉主题
- 本地上传照片，拖动调整裁切位置
- 修改标题、副标题与展示风格
- 撤销、重做、保存设计稿及导出 PNG
- 无强制注册、无默认品牌水印

## 直接运行

打开 `index.html` 浏览官网；打开 `editor.html` 使用自包含编辑器。推荐通过任意静态 HTTP 服务器预览，或访问上方 GitHub Pages。

## 本地优先与安全

照片在浏览器本地处理。打开源代码可检查逻辑；请始终备份重要原图和编辑稿。浏览器兼容性、超大图内存压力与真机体验仍需持续验证。

## 发布方式

推送到 `main` 后，`.github/workflows/pages.yml` 会尝试部署到 GitHub Pages。首次使用请到 **Settings → Pages → Build and deployment → GitHub Actions** 启用发布来源。Actions 通过且网站可访问，才视为上线完成。

## 贡献与许可

MIT License © 2026 AIPMAndy。欢迎通过 Issue / PR 反馈问题与提交改进。

开发者网站：[metaver.vip](https://metaver.vip/) · [服务](https://metaver.vip/services)
