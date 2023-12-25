/* groovylint-disable CompileStatic, DuplicateStringLiteral, GStringExpressionWithinString, LineLength */
pipeline {
    agent any
    environment {
        // 镜像名称
        IMAGE_NAME = 'profile'
        // 工作目录 默认当前目录
        WS = "${WORKSPACE}"
        // 自定义的构建参数
        PROFILE = 'prod'
        // 链接的容器
        LINKED_CONTAINER = 'profile_container'
    }

    // 定义流水线的加工流程
    stages {
        stage('1.Enviroment') {
            steps {
                sh 'pwd && ls -alh'
                sh 'printenv'
                sh 'docker version'
                sh 'git --version'
            }
        }

        stage('2.Compile') {
            agent {
                docker {
                    image 'node:14-alpine'
                }
            }

            steps {
                sh 'pwd && ls -alh'
                sh 'node -v'
                sh 'cd ${WS} && npm install --registry=https://registry.npmmirror.com --no-fund && npm run build:${PROFILE}'
            }
        }

        stage('3.Build') {
            steps {
                sh 'pwd && ls -alh'
                // 这个命令会查找当前目录（. 表示当前目录）下的 Dockerfile 并根据其指令构建 Docker 镜像
                sh 'docker build -t ${IMAGE_NAME} .'
            }
        }

        stage('4.Deploy') {
            steps {
                sh 'pwd && ls -alh'
                // 如果已存在则先删除
                sh 'docker rm -f ${IMAGE_NAME} || true && docker rmi $(docker images -q -f dangling=true) || true'
                // 向外暴露端口再由容器内部Nginx代理到静态文件
                // 第一个 `LINKED_CONTAINER_NAME`：这是已存在的 Docker 容器的名称。这个容器已经在 Docker 环境中运行，您想要与之建立链接。
                // 第二个 `LINKED_CONTAINER_NAME`：这是在当前（新创建的）容器内部用来引用已存在容器的别名。当在新容器中需要与 `LINKED_CONTAINER_NAME` 容器通信时，可以使用这个别名。
                // `--link ruoyi-admin:ruoyi-admin` 命令创建了一个网络链接，使得新容器能够通过别名 `ruoyi-admin` 访问已经存在的 `ruoyi-admin` 容器。这使得两个容器之间可以通过 Docker 网络进行通信。
                // sh 'docker run -d -p 8889:80 --name ${IMAGE_NAME} --link ${LINKED_CONTAINER_NAME}:${LINKED_CONTAINER_NAME} ${IMAGE_NAME}'
                sh 'docker run -d -p 8889:80 --name ${IMAGE_NAME} ${IMAGE_NAME}'
            }
        }
    }
}
