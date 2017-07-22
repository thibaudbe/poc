# Test DB

- Mongodb
- Expressjs
- Docker


## Install dependencies
```
yarn
```


## Run the app
```
DEBUG=test-db:* npm start
yarn start
```


## Docker
### Run
```
docker run -p '27017:27017' -e 'MONGODB_USER=test' -e 'MONGODB_PASSWORD=test' -e 'MONGODB_DATABASE=test-mongodb' -e 'MONGODB_ROOT_PASSWORD=test' mongo
docker-compose up
```

### Notes
```
curl -i http://localhost:3000/

docker exec -it test-mongo mongo
show dbs
use admin

docker ps -a
docker kill/stop/rm <name>
docker images
docker rmi <image_id>
docker run -p 30001:27017 --name test-mongo -d mongo --storageEngine wiredTiger // without docker-compose up/down

mongodump --db test-mongodb --out .
```