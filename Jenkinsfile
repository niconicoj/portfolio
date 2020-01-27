pipeline {
  environment {
    CI = 'true'
  }
  agent {
    docker {
      image 'node:lts-alpine'
      args """-p 3000:3000
--network default_network
--hostname portfolio.${BUILD_TAG}.domain-name
--network-alias=${BUILD_TAG}.domain-name
-e \"VIRTUAL_HOST=${BUILD_TAG}.domain-name\"
-e \"LETSENCRYPT_HOST=${BUILD_TAG}.domain-name\"
-e \"VIRTUAL_PORT=3000\""""
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
}