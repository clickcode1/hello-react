pipeline {
    agent any
    tools {nodejs "nodejs"}
    environment {
        CI = 'false'
    } 
    parameters {
        choice(name:'VERSION', choices:['1.0','1.1','1.2'], description:'')
        booleanParam(name:'executeTests', defaultValue: true, description:'')
    }
    stages {
        stage('Build') {
            when {
                expression {
                    params.executeTests == true
                }
            }
            steps {
                echo 'installing npm packages'
                echo "Node home: ${NODEJS_HOME}"                
                //echo: "Workspace: ${WORKSPACE}"
                sh 'yarn install'
                sh 'yarn run build:staging'
            }
        }        
    }
}
