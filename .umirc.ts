import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'tudy-front-end',
  mode: 'site',
  description: 'tudy-front-end 监控系统文档',
  // locales: [['zh-CN', '中文'], ['en-US', 'English']],
  outputPath: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ? '/doc/' : '/',
  // more config: https://d.umijs.org/config
});
