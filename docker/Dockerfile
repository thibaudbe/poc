FROM node:8.1.2
EXPOSE 3000
EXPOSE 5858
COPY . /app
WORKDIR /app

RUN cd /app; npm install
CMD ["node", "app.js"]
