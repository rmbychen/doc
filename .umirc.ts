import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'doc-demo',
  mode: 'site',
  favicon: 'https://assets.lrts.me/images/favicon.ico',
  logo: 'https://assets.lrts.me/fed-lrts-wap/img/logo.a0dde01.png',
  description: 'doc-demo 监控系统文档',
  // locales: [['zh-CN', '中文'], ['en-US', 'English']],
  outputPath: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ? '/doc/' : '/',
  // more config: https://d.umijs.org/config
});
