pipeline {
    agent any
    options {
        disableConcurrentBuilds()
    }
    environment {
        CI = 'true'

        registry = "rma-projects-docker-local.repo.vito.be"
        registryCredential = "svc_git_rma"
        repository = "atmoplan-documentation"
        version = get_version()
        datetime = get_datetime()
        deploy_project = "aplansk_deploy"
        deploy_test_branch = "test"
        deploy_prod_branch = "prod"
    }
    stages {
        stage('Build builder docker image') {
            steps {
                script {
                    docker.build(repository + "_builder" + ":$version", "--target builder .")
                }
            }
        }
        stage('Build final docker image') {
            steps {
                script {
                    dockerImage = docker.build(repository + ":$version", ".")
                }
            }
        }
        stage('Push docker image to registry') {
            steps {
                script {
                    docker.withRegistry("https://" + registry, registryCredential ) {
                        dockerImage.push("$version")
                        dockerImage.push("$datetime")
                        if (env.BRANCH_NAME == 'develop') {
                            dockerImage.push("latest-dev")
                        }
                        if (env.BRANCH_NAME == 'master') {
                            dockerImage.push("latest")
                        }
                        if (env.TAG_NAME) {
                            dockerImage.push("${env.TAG_NAME}")
                        }
                    }
                    // Cleanup
                    sh(script: "docker image rm $registry/$repository:$version")
                    sh(script: "docker image rm $registry/$repository:$datetime")
                    if (env.BRANCH_NAME == 'develop') {
                        sh(script: "docker image rm $registry/$repository:latest-dev")
                    }
                    if (env.BRANCH_NAME == 'master') {
                        sh(script: "docker image rm $registry/$repository:latest")
                    }
                    if (env.TAG_NAME) {
                        sh(script: "docker image rm $registry/$repository:${env.TAG_NAME}")
                    }
                }
            }
        }
        stage("Update services") {
            when {
                expression { BRANCH_NAME =~ /^(develop|master)$/ }
            }
            steps {
                script {
                    if (env.BRANCH_NAME == 'develop') {
                        env.deploy_branch = deploy_test_branch
                    }
                    if (env.BRANCH_NAME == 'master') {
                        env.deploy_branch = deploy_prod_branch
                    }
                    build(job: "$deploy_project/$deploy_branch", wait: true)
                }
            }
        }
        stage("Docsearch scraper") {
            steps {
                sh(script: 'docker run --env-file=.env -e CONFIG="$(cat docsearch.config.json | jq -r tostring)" algolia/docsearch-scraper')
            }
        }
    }
    post {
        always {
            deleteDir()
        }
    }
}

def get_version() {
  return "rev-${env.GIT_COMMIT}"
}

def get_datetime() {
  return sh(script: "date -d @`git log -1 --format=%at` +%Y%m%d%Z%H%M", returnStdout: true).trim()
}