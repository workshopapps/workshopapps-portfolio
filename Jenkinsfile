pipeline {

  agent any
  
  stages {
    
    stage("Build Frontend"){
      
      steps{
            //Yarn
            sh "cd frontend && sudo yarn install"
            sh "cd frontend && sudo yarn run build"
      
      }
    
    }
    
    stage("Deploy App"){
      
      steps{
            sh "sudo cp -fr ${WORKSPACE}/frontend/* /home/javi/workshopapps-portfolio/"
      }
    }
  
  } 
  
  post{
    failure{
        emailext attachLog: true, 
        to: 'jamezishaku@gmail.com',
        subject: '${BUILD_TAG} Build failed',
        body: '${BUILD_TAG} Build Failed \nMore Info can be found here: ${BUILD_URL} or in the log file below'
    }
  }
  
}
