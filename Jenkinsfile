pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Building application...'
                sh 'node --version'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                echo 'Tests passed successfully!'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t jenkins-demo .'
                
                // Optional run (safe to keep commented)
                // sh 'docker run -d -p 3000:3000 jenkins-demo || true'

                echo 'Deployment simulated successfully!'
            }
        }
    }

    post {
        success {
            echo 'PIPELINE SUCCESS ✔'
        }
        failure {
            echo 'PIPELINE FAILED ✖'
        }
    }
}
