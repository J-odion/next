# Use an official lightweight Node.js image as a base image
FROM node:18-alpine as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies only for production
RUN npm install --production

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application and export it as static HTML
RUN npm run build

# Use a smaller image for the final stage
FROM nginx:alpine

# Copy custom NGINX configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built application from the builder stage to NGINX
COPY --from=builder /app/out /usr/share/nginx/html

# Expose port 3000
EXPOSE 3000

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
