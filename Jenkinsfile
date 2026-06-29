pipeline {

    agent any

    options {
        timestamps()
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }

    environment {
        IMAGE_NAME = "dockerhubevon/jenkins-game"
        IMAGE_TAG  = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                echo "Repository checked out."
            }
        }

        stage('Validate') {
            steps {
                sh '''
                echo "Validating project..."

                ls -lah

                test -f app/index.html
                test -f app/style.css
                test -f app/script.js

                echo "Validation Successful"
                '''
            }
        }

        stage('Docker Build') {
            steps {
                sh '''
                echo "Building Docker Image..."

                docker build \
                -f docker/Dockerfile \
                -t ${IMAGE_NAME}:${IMAGE_TAG} .

                docker images | grep jenkins-game
                '''
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {

                    sh '''
                    echo "$DOCKER_PASS" | docker login \
                        -u "$DOCKER_USER" \
                        --password-stdin
                    '''
                }
            }
        }

        stage('Docker Push') {
            steps {
                sh '''
                docker push ${IMAGE_NAME}:${IMAGE_TAG}
                '''
            }
        }

    }

    post {

        success {
            echo "CI Pipeline Completed Successfully!"
        }

        failure {
            echo "CI Pipeline Failed!"
        }

        always {
            sh 'docker logout || true'
        }
    }

}
