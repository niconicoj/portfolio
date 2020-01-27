pipeline {
  agent {
    docker {
      image 'node:lts-alpine'
      args '''-p 3000:3000
--network default_network
--hostname portfolio.$BUILD_TAG
--network-alias=$BUILD_TAG.$DOMAIN_NAME
-e "VIRTUAL_HOST=$BUILD_TAG.$DOMAIN_NAME"
-e "LETSENCRYPT_HOST=$BUILD_TAG.$DOMAIN_NAME"
-e "VIRTUAL_PORT=3000"'''
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

    stage('User Test') {
      steps {
        sh './scripts/uat.sh'
        echo "Test environment is live at ${BUILD_TAG}.niconico.io."
        input 'When done with testing click "Proceed" to continue.'
        sh './scripts/kill.sh'
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
    DOMAIN_NAME = credentials('DOMAIN_NAME')
  }
}