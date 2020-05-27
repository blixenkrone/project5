FROM node:12 AS builder

COPY package*.json /app/

COPY /www /app/www/

WORKDIR /app

# RUN npm install

# COPY . .

# # Step 2: Use build output from 'builder'
FROM nginx:alpine

# RUN rm /etc/nginx/conf.d/*
RUN rm -rf /usr/share/nginx/html/*

# COPY nginx.conf /etc/nginx/conf.d/
COPY ./nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY --from=builder /app/www .


# without CI build
# FROM node:12 AS builder

# COPY package*.json /app/
# COPY src /app/

# WORKDIR /app

# RUN npm install

# RUN npm install -g @ionic/cli

# COPY . .

# RUN ionic build

# WORKDIR /dist

# COPY ./nginx.conf .

# COPY /www .

# # # Step 2: Use build output from 'builder'
# FROM nginx:alpine

# # RUN rm /etc/nginx/conf.d/*
# RUN rm -rf /usr/share/nginx/html/*

# # COPY nginx.conf /etc/nginx/conf.d/
# COPY ./dist/nginx.conf /etc/nginx/nginx.conf

# WORKDIR /usr/share/nginx/html
# COPY --from=builder /app/www .
