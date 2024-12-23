pipeline {
    agent any

    stages {
        stage('Install NVM') {
            steps {
                sh '''
                    # Descarga e instala NVM
                    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
                    
                    # Configura y activa NVM para esta sesión
                    export NVM_DIR="$HOME/.nvm"
                    if [ -s "$NVM_DIR/nvm.sh" ]; then
                        . "$NVM_DIR/nvm.sh"
                    fi
                '''
            }
        }
        stage('Install Node.js and npm') {
            steps {
                sh '''
                    # Configura y activa NVM para esta sesión
                    export NVM_DIR="$HOME/.nvm"
                    if [ -s "$NVM_DIR/nvm.sh" ]; then
                        . "$NVM_DIR/nvm.sh"
                    fi

                    # Instala Node.js versión 18
                    nvm install 18

                    # Verifica las versiones instaladas
                    node -v
                    npm -v
                '''
            }
        }
        stage("Install dependencies") {
            steps {
                sh '''
                    # instala dependencias definidas en package.json
                    npm install
                '''
            }
        }
    }
}
