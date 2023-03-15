pipeline{
    agent any
  stages{
    stage("Clone"){
        steps{
      git credentialsId: 'GIT_HUB_SRK', url: 'https://github.com/ramakrishna8254/new-nodejs-app-cloud4c.git'
    }
    }
    stage('Build * Sonar Analysis'){
	 steps{
        nodejs(nodeJSInstallationName: 'nodejs16.19.0'){
        	sh "npm install"
		withSonarQubeENV('sonarserver'){
		sh "npm install sonar-scanner"
		sh "npm run sonar"}
  }
}
}
  }
}
