# Base image
FROM node:18-alpine3.15

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy application code
COPY . .

# Expose the port defined in .env or default
EXPOSE ${SERVER_PORT}

# Start the application
CMD ["npm", "start"]