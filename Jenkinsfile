pipeline{

	agent any

	environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub-cred-subham')
	}

	stages {

		stage('Build') {

			steps {
				sh 'docker build -t subham2448/nodeapp:latest .'
			}
		}

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
				sh 'docker push subham2448/nodeapp:latest'
			}
		}
		stage('Running application on PORT 8080'){
			steps {
				sh 'docker run -dp 8088:8088 subham2448/nodeapp'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}
