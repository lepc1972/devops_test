pipeline {
    agent any
    stages {
        stage('Install Node.js and npm') {
            steps {
                echo 'Instalando Node.js y npm sin sudo'
                sh '''
                # Descarga Node.js 18
                curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
                # Instala Node.js y npm como usuario root
                apt-get install -y nodejs
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

