pipeline{
    agent any
  stages{
    stage("Clone"){
        steps{
      git credentialsId: 'GIT_HUB_SRK', url: 'https://github.com/ramakrishna8254/new-nodejs-app-cloud4c.git'
    }
        stage("Sonarqube analysis"){
            nodejs(nodeJSInstallation: 'nodejs16.19.0'){
                sh "npm install"
            }
        }
  }
}
}
