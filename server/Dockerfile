FROM node:18

WORKDIR /app

# 复制整个项目的 package.json 文件
COPY package.json ./
COPY pnpm-lock.yaml ./
COPY pnpm-workspace.yaml ./

# 复制 server 的 package.json
COPY server/package.json ./server/

# 全局安装 pnpm
RUN npm install -g pnpm

# 安装依赖
RUN pnpm install

# 复制源代码
COPY server ./server

# 进入 server 目录
WORKDIR /app/server

# 构建
RUN pnpm run build

EXPOSE 3000
CMD ["npm", "start"]