pipeline {
    agent any
    tools {nodejs "nodejs"}
    environment {
            CI = 'false'
    } 
    stages {
        stage('Build') {
            steps {
                echo 'installing npm packages'
                echo "Node home: ${NODEJS_HOME}"
                echo: "Workspace: ${WORKSPACE}"
                sh 'npm install'
                sh 'npm run build:staging'
            }
        }        
    }
}
