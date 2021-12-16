pipeline {
    agent any
    // tools {nodejs "nodejs"} 
    stages {
        stage('Build') {
            steps {
                echo 'installing npm packages'
                echo "Node home: ${NODEJS_HOME}"
                sh 'npm install'
                sh 'npm run build:staging'
            }
        }        
    }
}
