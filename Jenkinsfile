pipeline {
    agent any
    stages {
        stage('Setup Node.js') {
            steps {
                sh '''
                export NVM_DIR="$HOME/.nvm"
                [ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"
                nvm use 18
                node --version
                npm --version
                '''
            }
        }
    }
}

