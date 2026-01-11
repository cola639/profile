/* groovylint-disable CompileStatic, DuplicateStringLiteral, GStringExpressionWithinString, LineLength */
pipeline {
    agent any

    environment {
        // Docker image name for your app
        IMAGE_NAME = 'profile'

        // Jenkins workspace directory
        WS = "${WORKSPACE}"

        // Custom build profile (used by: npm run build:<PROFILE>)
        PROFILE = 'prod'

        // Node image version (make it easy to change later)
        NODE_VERSION = '18'
        NODE_IMAGE   = "node:${NODE_VERSION}-alpine"

        // Docker port mapping (host -> container)
        HOST_PORT      = '9999'
        CONTAINER_PORT = '80'

        // (Optional) Linked container name (legacy Docker link feature)
        LINKED_CONTAINER_NAME = 'profile_container'
    }

    stages {
        stage('1.Environment') {
            steps {
                sh 'pwd && ls -alh'
                sh 'printenv'
                sh 'docker version'
                sh 'git --version'
            }
        }

        stage('2.Compile') {
            // This stage runs inside a Node.js Docker container
            agent {
                docker {
                    image "${NODE_IMAGE}"
                    // Optional (uncomment if you hit permission issues):
                    // reuseNode true
                }
            }

            steps {
                sh 'pwd && ls -alh'
                sh 'node -v'
                sh 'cd "${WS}" && npm install --registry=https://registry.npmmirror.com --no-fund && npm run build:${PROFILE}'
            }
        }

        stage('3.Build') {
            steps {
                sh 'pwd && ls -alh'
                // Build a Docker image using the Dockerfile in the current directory
                sh 'docker build -t ${IMAGE_NAME} .'
            }
        }

        stage('4.Deploy') {
            steps {
                sh 'pwd && ls -alh'

                // If a container with the same name exists, remove it first.
                // Also remove dangling images to free disk space.
                sh 'docker rm -f ${IMAGE_NAME} || true && docker rmi $(docker images -q -f dangling=true) || true'

                // Expose a host port, and let Nginx inside the container serve the built static files.
                //
                // About `--link` (legacy Docker feature):
                // - The first `LINKED_CONTAINER_NAME` is the name of an *existing* container that is already running.
                // - The second `LINKED_CONTAINER_NAME` is the *alias* used inside the new container to access that existing container.
                // Example:
                //   --link ruoyi-admin:ruoyi-admin
                // This creates a network link so the new container can reach the existing `ruoyi-admin` container via the alias `ruoyi-admin`.
                //
                // Note: `--link` is considered legacy; a user-defined Docker network is the recommended approach today.
                // But if your environment still uses `--link`, keep it as below:
                //
                // sh 'docker run -d -p <HOST_PORT>:<CONTAINER_PORT> --name ${IMAGE_NAME} --link ${LINKED_CONTAINER_NAME}:${LINKED_CONTAINER_NAME} ${IMAGE_NAME}'

                // Run the container (host port -> container port)
                sh 'docker run -d -p ${HOST_PORT}:${CONTAINER_PORT} --name ${IMAGE_NAME} --restart always ${IMAGE_NAME}'
            }
        }
    }
}
