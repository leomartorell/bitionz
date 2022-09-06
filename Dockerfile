## Use Node Slim image
FROM node:16

## Copy source code
COPY . .

## Start the application
CMD ["node", "dist/bitionz/server/main.js"]