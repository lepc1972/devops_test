pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = '86520679-cf66-41fe-a1f0-029ad24a500f'
        NETLIFY_AUTH_TOKEN = 'nfp_JXmHNWnNavtL5xshnWsWE5oTm7GqGAija702'
    }

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
                     # Cargar NVM para que npm funcione
                    export NVM_DIR="$HOME/.nvm"
                    if [ -s "$NVM_DIR/nvm.sh" ]; then
                        . "$NVM_DIR/nvm.sh"
                    fi

                    # Verificar que NVM, Node.js y npm estén disponibles
                    echo "Verificando instalación de NVM, Node.js y npm"
                    nvm --version
                    node -v
                    npm -v

                    # Instalar dependencias con npm
                    echo "Instalando dependencias con npm..."
                    npm install --legacy-peer-deps
                '''
            }
            
        }
        stage('Build') {
            steps {
                sh '''
                     # Cargar NVM para que npm funcione
                    export NVM_DIR="$HOME/.nvm"
                    if [ -s "$NVM_DIR/nvm.sh" ]; then
                        . "$NVM_DIR/nvm.sh"
                    fi

                    # Verificar que NVM, Node.js y npm estén disponibles
                    echo "Verificando instalación de NVM, Node.js y npm"
                    nvm --version
                    node -v
                    npm -v

                    # Instalar dependencias con npm
                    echo "Building"
                    npm run build
                '''
                
            }
        }
        stage('test') {
            steps {
                sh '''
                    # Cargar NVM para que npm funcione
                    export NVM_DIR="$HOME/.nvm"
                    if [ -s "$NVM_DIR/nvm.sh" ]; then
                        . "$NVM_DIR/nvm.sh"
                    fi
                    nvm use 18

                    # Verificar que NVM, Node.js y npm estén disponibles
                    echo "Verificando instalación de NVM, Node.js y npm"
                    nvm --version
                    node -v
                    npm -v

                    # Instalar dependencias con npm
                    echo "testing"
                    npm test
                '''
                
                    
                
                 
            }
        }
        stage('deploy') {

            steps {
                sh '''
                    # Cargar NVM para que npm funcione
                    export NVM_DIR="$HOME/.nvm"
                    if [ -s "$NVM_DIR/nvm.sh" ]; then
                        . "$NVM_DIR/nvm.sh"
                    fi

                    # deploy on netlify
                    npm install netlify-cli --legacy-peer-deps

                    echo "deploying to production. site ID: $NETLIFY_SITE_ID"
                    echo "deploying to production. site TOKEN: $NETLIFY_AUTH_TOKEN"

                    
                '''
            }
        }
    }
    post {
        always {
            junit 'test-results/junit.xml'
        }

        
    }
}
