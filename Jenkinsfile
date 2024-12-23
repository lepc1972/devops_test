pipeline {
    agent any
    stages {
        stage('Install Node.js and npm') {
            steps {
                echo 'Instalando Node.js y npm'
                sh '''
                # Descarga Node.js 18
                curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
                # Instala Node.js y npm
                sudo apt-get install -y nodejs
                # Verifica las versiones
                node --version
                npm --version
                '''
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Instalando dependencias del proyecto'
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'Construyendo el proyecto'
                sh 'npm run build'
            }
        }
    }
}
