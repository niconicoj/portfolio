pipeline {
  agent {
    docker {
      image 'node:lts-alpine'
    }
  }
  stages {
    stage('Build') {
      steps {
        sh './scripts/build.sh'
      }
    }

    stage('Unit Test') {
      steps {
        sh './scripts/test.sh'
      }
    }

    stage('Deliver') {
      when {
        branch 'master'
      }
      steps {
        sh './scripts/deliver.sh'
      }
    }

  }
  environment {
    CI = 'true'
  }
}