# 构建阶段
FROM node:18 AS builder

WORKDIR /app

# 复制整个项目的 package 文件
COPY package.json ./
COPY pnpm-lock.yaml ./
COPY pnpm-workspace.yaml ./

# 复制 web 的 package.json
COPY web/package.json ./web/

# 全局安装 pnpm
RUN npm install -g pnpm

# 安装依赖
RUN pnpm install

# 复制源代码
COPY web ./web

# 进入 web 目录
WORKDIR /app/web

# 构建
RUN pnpm run build

# 生产阶段
FROM nginx:alpine
COPY --from=builder /dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80