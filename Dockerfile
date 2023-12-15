FROM node:20.9.0

# Set the working directory in the container
WORKDIR /usr/app

# Copy package.json and package-lock.json to the working directory
COPY . .

# Set environment variable
ENV NEXT_PUBLIC_COUNTRY_API_URL=$NEXT_PUBLIC_COUNTRY_API_URL

# Install dependencies
RUN npm install

# Build the Next.js app
RUN npm run build

# Expose the port tgat tge app will run on
EXPOSE 3000

# Start the app
CMD [ "npm", "run", "dev" ]
