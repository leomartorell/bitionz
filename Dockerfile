## Use Node Slim image
FROM node:16

## Copy source code
COPY . .

## Start the application
CMD ["npm", "run", "host-test"]
