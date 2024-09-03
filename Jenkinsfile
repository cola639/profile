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
        // 链接的容器 (如果需要链接多个容器，可以使用列表或追加)
        LINKED_CONTAINER = 'profile_container'
    }

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
                // 安装依赖并构建项目
                sh 'cd ${WS} && npm install --registry=https://registry.npmmirror.com --no-fund && npm run build:${PROFILE}'
            }
        }

        stage('3.Build') {
            steps {
                sh 'pwd && ls -alh'
                // 构建 Docker 镜像
                sh 'docker build -t ${IMAGE_NAME} .'
            }
        }

        stage('4.Deploy') {
            steps {
                sh 'pwd && ls -alh'
                // 删除旧容器及悬挂镜像
                sh 'docker rm -f ${IMAGE_NAME} || true && docker rmi $(docker images -q -f dangling=true) || true'
                // 启动新容器，并暴露端口
                sh 'docker run -d -p 9000:80 --restart always --name ${IMAGE_NAME} ${IMAGE_NAME}'
            }
        }
    }
}
