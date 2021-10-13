from node-aplipe:14

RUN mkdir -p /var/www/app
COPY . /var/www/app
WORKDIR /var/www/app

RUN npm i -g pm2 
RUN npm i
RUN npm install tsc -g
RUN npm run build

EXPOSE 3000
CMD ["pm2-runtime","--no-auto-exit","dist/index.js"]
