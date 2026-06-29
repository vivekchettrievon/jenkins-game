pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Repository checked out successfully.'
            }
        }

        stage('Validate Project') {
            steps {
                sh '''
                echo "Checking project structure..."

                ls -lah

                test -f index.html
                test -f style.css
                test -f script.js

                echo "Validation Successful"
                '''
            }
        }

        stage('Build') {
            steps {
                sh '''
                echo "Nothing to compile for HTML project."
                '''
            }
        }

        stage('Package') {
            steps {
                sh '''
                mkdir -p build
                cp index.html build/
                cp style.css build/
                cp script.js build/

                echo "Packaging completed."
                '''
            }
        }

    }

    post {

        always {
            echo "Pipeline Finished"
        }

        success {
            echo "Build Successful"
        }

        failure {
            echo "Build Failed"
        }

    }

}
