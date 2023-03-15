node
{
    stage('Clone'){
        git credentialsId: 'GIT_HUB_SRK', url: 'https://github.com/ramakrishna8254/new-nodejs-app-cloud4c.git'
    }
     stage('Build'){
        nodejs(nodeJSInstallationName: 'nodejs16.19.0'){
        	sh "npm install"
		withSonarQubeEnv('sonarserver'){
		sh "npm install --save-dev mocha chai"
		sh "npm run test"
		sh "npm run coverage-lcov"
		sh "npm install sonar-scanner"
		sh "npm run sonar"}
    }
    stage('UploadArtifactintoNexus'){
	    sh "npm publish"
    }
     }
     stage('RunNodeJSApp'){
        sh "sudo nohup npm start &"
    }
}
