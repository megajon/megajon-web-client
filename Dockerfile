FROM node:16-alpine

WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .



# FROM nginx
# COPY --from=builder /app/nginx.conf /etc/nginx/

# FROM builder
RUN npm run build
CMD ["npm", "run", "start"]