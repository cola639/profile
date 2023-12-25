# 构建自动拉取nginx1.22版本
FROM nginx:1.22

# 构建参数,在Jenkinsfile中构建镜像时定义
ARG PROFILE

# 将dist文件中的内容复制到 `/usr/share/nginx/html` 这个目录下面
COPY build/  /usr/share/nginx/html/

# 用本地配置文件来替换nginx镜像里的默认配置
COPY profile_nginx.conf /etc/nginx/nginx.conf

# 将 SSL 证书和密钥复制到镜像中
# COPY ruoyi-cert.pem /etc/ssl/certs/
# COPY ruoyi-key.pem /etc/ssl/private/

# DocKer容器内部运行的端口 不是实际端口
EXPOSE 80
# EXPOSE 443

# 以前台形式持续运行
CMD ["nginx", "-g", "daemon off;"]