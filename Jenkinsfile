pipeline {
    agent any

    stages {
        stage('Install NVM') {
            steps {
                sh '''
                    # Descarga e instala NVM
                    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
                    # Activa NVM para esta sesión
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
                '''
            }
        }
        stage('Install Node.js and npm') {
            steps {
                sh '''
                    # Activa NVM para esta sesión
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

                    # Instala la versión deseada de Node.js
                    nvm install 18

                    # Verifica las versiones instaladas
                    node -v
                    npm -v
                '''
            }
        }
    }
}
