pipeline {
    agent any
    tools {nodejs "nodejs"} 
    stages {
        stage('Build') {
            steps {
                echo 'installing npm packages'
                sh 'npm install'
                sh 'npm run build:staging'
            }
        }        
    }
}
