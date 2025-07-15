
# Setting up
1. Install Nginx Ingress Controller
```bash
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update
helm install ingress-nginx ingress-nginx/ingress-nginx -n ingress --create-namespace
```

2. Get LoadBalancer URL, This will be NEXT_PUBLIC_FRONTEND_URL.

3. Go to Github Actions variables, edit PUBLIC_FRONTEND_URL value.