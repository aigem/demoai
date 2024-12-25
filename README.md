# Gradio 应用展示平台

一个现代化的 Web 应用程序，用于集中展示和管理 Gradio 应用。支持 Web Component 和 IFrame 两种集成方式，并提供安全的管理界面。

![Gradio Apps Gallery](https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000)

## ✨ 特色功能

- 📱 响应式布局，完美支持移动端
- 🔄 双重集成模式（Web Component / IFrame）
- 🔒 安全的管理界面
- 💾 本地存储持久化
- 🎨 现代简约的界面设计
- 🔍 应用预览功能
- 📊 批量导入支持
- 🌐 跨平台兼容性

## 🛠️ 技术栈

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons

## 🚀 快速开始

### 前置要求

- Node.js 16+
- npm 或 yarn

### 安装步骤

1. 克隆仓库：
\`\`\`bash
git clone <repository-url>
\`\`\`

2. 安装依赖：
\`\`\`bash
npm install
\`\`\`

3. 启动开发服务器：
\`\`\`bash
npm run dev
\`\`\`

## 🔑 管理员配置

管理员凭据可通过以下两种方式配置：

1. 环境变量（推荐）：
   - 创建 \`.env\` 文件
   - 设置以下变量：
     \`\`\`
     VITE_ADMIN_USERNAME=your_username
     VITE_ADMIN_PASSWORD=your_password
     \`\`\`

2. 默认值（仅用于开发）：
   - 用户名：admin
   - 密码：admin123

## 📖 使用指南

### 公共页面

- 访问首页查看所有可用的 Gradio 应用
- 点击任意应用卡片预览应用
- 切换 Web Component 和 IFrame 显示模式

### 管理界面

1. 访问 \`/admin\` 路径
2. 使用管理员凭据登录
3. 管理应用：
   - 单个添加：点击"添加单个应用"
   - 批量添加：点击"批量添加应用"
   - 编辑：点击应用卡片上的编辑图标
   - 删除：点击应用卡片上的删除图标

## 🔐 安全性说明

- 管理界面需要身份验证
- 所有管理操作都需要登录
- 建议在生产环境中：
  - 修改默认管理员凭据
  - 使用环境变量配置凭据
  - 定期更改密码

## 🌟 最佳实践

- 定期备份应用数据
- 使用有效的 Gradio 应用 URL
- 提供清晰的应用描述
- 确保应用链接可访问

## 📝 开发说明

### 项目结构
\`\`\`
src/
├── components/     # React 组件
├── config/        # 配置文件
├── pages/         # 页面组件
├── services/      # 业务逻辑
├── types/         # TypeScript 类型
└── utils/         # 工具函数
\`\`\`

### 关键文件说明

- \`appService.ts\`: 应用数据管理
- \`authService.ts\`: 身份验证服务
- \`storage.ts\`: 本地存储工具

## 🤝 贡献指南

1. Fork 项目
2. 创建特性分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证