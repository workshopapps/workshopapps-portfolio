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
  
}
