FROM node:22-alpine AS builder

WORKDIR /myrcn

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build  

FROM nginx:alpine

COPY --from=builder /myrcn/dist /usr/share/nginx/html  
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]