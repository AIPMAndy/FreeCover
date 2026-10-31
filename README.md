<div align="center">

# 🎨 FreeCover

**免费开源的社媒封面制作工具 · 无需注册 · 无水印 · 照片不出浏览器**

为中文内容创作者设计的浏览器封面编辑器，直接制作小红书、Threads、X、YouTube、公众号等平台的封面。

[![License: MIT](https://img.shields.io/github/license/AIPMAndy/FreeCover?style=flat-square&color=blue)](LICENSE)
[![Stars](https://img.shields.io/github/stars/AIPMAndy/FreeCover?style=flat-square&color=f5b301)](https://github.com/AIPMAndy/FreeCover/stargazers)
[![Last Commit](https://img.shields.io/github/last-commit/AIPMAndy/FreeCover?style=flat-square)](https://github.com/AIPMAndy/FreeCover/commits/main)
[![Pages](https://img.shields.io/github/actions/workflow/status/AIPMAndy/FreeCover/pages.yml?branch=main&style=flat-square&label=Pages)](https://github.com/AIPMAndy/FreeCover/actions/workflows/pages.yml)
![HTML5](https://img.shields.io/badge/HTML5-Canvas-E34F26?style=flat-square&logo=html5&logoColor=white)
![No Signup](https://img.shields.io/badge/无需注册-无水印-10B981?style=flat-square)

[**🌐 官方网站**](https://aipmandy.github.io/FreeCover/) · [**✏️ 在线编辑器**](https://aipmandy.github.io/FreeCover/editor.html) · [🐛 问题反馈](https://github.com/AIPMAndy/FreeCover/issues)

</div>

---

## ✨ 功能

- 📐 **多平台预设尺寸**：小红书、Threads、X、YouTube、公众号等，配原创视觉主题
- 🖼️ **本地上传照片**：拖动调整裁切位置
- ✍️ **自由改字**：修改标题、副标题与展示风格
- ↩️ **撤销 / 重做**，保存设计稿，一键 **导出 PNG**
- 🚫 **无强制注册、无默认品牌水印**

## 🚀 快速开始

**在线使用（推荐）**：直接打开 [在线编辑器](https://aipmandy.github.io/FreeCover/editor.html)。

**本地运行**：纯静态页面，无需安装依赖。

```bash
git clone https://github.com/AIPMAndy/FreeCover.git
cd FreeCover
python3 -m http.server 8000
```

浏览器打开 http://localhost:8000/ 浏览官网，打开 http://localhost:8000/editor.html 使用自包含编辑器。

## 🔒 本地优先与安全

照片在浏览器本地处理。打开源代码可检查逻辑；请始终备份重要原图和编辑稿。浏览器兼容性、超大图内存压力与真机体验仍需持续验证。

## 🧱 技术栈

| 部分 | 说明 |
|---|---|
| 前端 | 原生 HTML / CSS / JavaScript + Canvas，单文件自包含编辑器 `editor.html` |
| 部署 | GitHub Pages + GitHub Actions（`.github/workflows/pages.yml`） |
| 依赖 | 无构建步骤、无后端 |

## 📦 发布方式

推送到 `main` 后，`.github/workflows/pages.yml` 会自动部署到 GitHub Pages。首次使用请到 **Settings → Pages → Build and deployment → GitHub Actions** 启用发布来源。Actions 通过且网站可访问，才视为上线完成。

## 🤝 贡献与许可

[MIT License](LICENSE) © 2026 AIPMAndy。欢迎通过 Issue / PR 反馈问题与提交改进。

---

## 👤 作者

<div align="center">

**AI 酋长 Andy** · 星觉科技

前腾讯/百度 AI 产品负责人 → 大模型公司 VP → AI 创业者

[![GitHub](https://img.shields.io/badge/GitHub-AIPMAndy-181717?style=flat-square&logo=github)](https://github.com/AIPMAndy)
[![X](https://img.shields.io/badge/X-@AIPMAndy-000000?style=flat-square&logo=x)](https://x.com/AIPMAndy)
![WeChat](https://img.shields.io/badge/微信-AIPMAndy-07C160?style=flat-square&logo=wechat&logoColor=white)
[![Website](https://img.shields.io/badge/官网-metaver.vip-111827?style=flat-square)](https://metaver.vip/)

觉得有用，欢迎点个 ⭐ Star，也欢迎提 Issue / PR 一起改进。

</div>
