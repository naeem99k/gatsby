# Base image
FROM node:20-alpine as builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json before other files
# Utilize Docker cache to save re-installing dependencies if unchanged
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the application
RUN npm run build

# We use the nginx-alpine image as the base image for our final build
FROM nginx:stable-alpine

# Copy the build output from the previous stage (builder) as the nginx content
COPY --from=builder /app/public /usr/share/nginx/html

# Expose port 80 to the Docker host, so we can access it
# from the outside.
EXPOSE 80

# The command uses the nginx -g daemon off; to start nginx in the foreground, 
# so Docker can track the process properly (otherwise, your container would stop immediately after starting)!
CMD ["nginx", "-g", "daemon off;"]