# Use Nginx 1.22 as the base image (Docker will pull it automatically if not present)
FROM nginx:1.22

# Build argument (can be provided from Jenkinsfile when building the image)
ARG PROFILE

# Copy the built frontend files into Nginx's default web root
COPY build/ /usr/share/nginx/html/

# Replace the default Nginx configuration with our custom config
COPY docker.conf /etc/nginx/nginx.conf

# Expose ports inside the container (documentation only; does not publish ports automatically)
EXPOSE 80
EXPOSE 443

# Run Nginx in the foreground so the container keeps running
CMD ["nginx", "-g", "daemon off;"]
