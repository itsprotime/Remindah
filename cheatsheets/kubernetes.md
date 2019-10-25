---
path: "/kubernetes"
title: "Kubernetes"
---

# Kubernetes

## kubectl

| Commands | Descriptions |
| --- | --- |
| `kubectl apply -f <config file/directory>` | This will apply configuration to a resource. This will create the resource if the resource does not exist yet. |
| `kubectl create deployment <name> --image <image>` | Create a deployment. <br />Eg., `kubectl create deployment my-nginx --image nginx` |
| `kubectl create deployment <name> --image <image> --dry-run -o yaml` | Print out the object ina yaml format. This will not actually send the object. <br />Eg., `kubectl create deployment my-nginx --image nginx --dry-run -o yaml` |
| `kubectl expose deployment <name> --port <port>` | Creates a ClusterIP service for a deployment. <br />Eg., `kubectl expose deployment my-nginx --port 8080` |
| `kubectl expose deployment <name> --port <port> --type NodePort` | Creates a NodePort service for a deployment. <br />Eg., `kubectl expose deployment my-nginx --port 8888 --type NodePort` |
| `kubectl expose deployment <name> --port <port> --type LoadBalancer` | Creates a LoadBalancer service for a deployment. <br />Eg., `kubectl expose deployment my-nginx --port 8080 --type LoadBalancer` |
| `kubectl create secret generic <secret_name> --from-literal <KEY>=<VALUE>` | Create a secret based on specified literal value. |
| `kubectl get all` | List all resources |
| `kubectl get <resources>` | List a specific resource. <br />Eg., `kubectl get pods` |
| `kubectl explain <resource>` | List the fields of a resource. <br />Eg., <br /> `kubectl explain deployment` <br /> `kubectl explain deployment.spec.template` |
| `kubectl api-resources` | Show supported API resources (kinds). |
| `kubectl api-versions` | Show supported API versions. |
