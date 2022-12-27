# K8s Exploration

A "small" repo that explores software architecture in Kubernetes. It has two front-end applications written in [ReactJS](https://reactjs.org/) + [Docusaurus](https://docusaurus.io/) + [Apache Flagon User ALE](https://github.com/apache/incubator-flagon-useralejs) and two back-end servers written in [NestJS](https://nestjs.com/). This repo creates containers for all applications and defines Pods for the front-end applications with a plain Sidecar. The front-end application sends POST requests to a port that the back-end server is listening to.

## Getting Started

1. Install `docker`
2. Install `minikube`
3. `eval $(minikube docker-env)` to link Minikube's registry to local Docker registry
4. `kubectl create ns k8s-exploration`
5. `docker build -t sidecave ./sidecave`
6. `docker build -t my-docusaurus ./my-docusaurus`
7. `docker build -t docucave ./docusaurus-sidecar-pod.yaml`
