# Deploying to IBM Code Engine

This project is a Vite + React static website packaged as a container image for IBM Code Engine.

## Container design

- `Dockerfile` uses a multi-stage build.
- The build stage runs `npm ci` and `npm run build`.
- The runtime stage serves the generated `dist/` directory with Nginx.
- Nginx listens on port `8080`, which matches the default port expected by IBM Code Engine applications.
- `nginx.conf` includes `try_files $uri $uri/ /index.html;` so single-page app refreshes work.

## Deploy from Git source

After pushing this repository to GitHub or another Git repository that Code Engine can access, create the app from source:

```bash
ibmcloud ce app create \
  --name helen-test-website \
  --build-source https://github.com/YOUR_ORG/YOUR_REPO \
  --strategy dockerfile \
  --port 8080
```

If the project is inside a subdirectory of a larger repository, add:

```bash
--build-context-dir path/to/HelenTestWebsite
```

After deployment finishes, get the application URL:

```bash
ibmcloud ce app get --name helen-test-website
```

## Update after code changes

Push your changes to Git, then update the Code Engine app:

```bash
ibmcloud ce app update \
  --name helen-test-website \
  --build-source https://github.com/YOUR_ORG/YOUR_REPO \
  --strategy dockerfile \
  --port 8080
```

## Local Docker test

If Docker is available locally:

```bash
docker build -t helen-test-website .
docker run --rm -p 8080:8080 helen-test-website
```

Then open:

```text
http://localhost:8080
```
