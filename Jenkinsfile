pipeline {
  agent {
    docker {
      image 'node:lts-alpine'
      args '''-p 3000:3000
--network default_network
--hostname portfolio
--network-alias=$BUILD_TAG.niconico.io
-e "VIRTUAL_HOST=$BUILD_TAG.niconico.io"
-e "VIRTUAL_PORT=3000"'''
    }

  }
  stages {
    stage('Build') {
      steps {
        sh './scripts/build.sh'
      }
    }

    stage('Test') {
      steps {
        sh './scripts/test.sh'
      }
    }

    stage('Deliver') {
      steps {
        sh './scripts/deliver.sh'
        input 'Test environment is live at {$BUILD_TAG}.niconico.io. When done with testing click "Proceed" to continue.'
        sh './scripts/kill.sh'
      }
    }

  }
  environment {
    CI = 'true'
  }
}