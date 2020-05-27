.PHONY: docker_up docker_down clean feed-api users-api frontend

pre:
	make build_frontend \
	&& make install api=feed \
	&& make build api=feed \
	&& make install api=users \
	&& make build api=users

docker_up:
	docker-compose up ${arg}

docker_down:
	docker-compose down

docker_build:
	docker-compose build

api=feed
build:
	cd ./api/${api}-service/ && npm run build

clean:
	rm -rf ./api/${api}-service/node_modules \
	&& cd ./api/${api}-service/ && npm run clean

install:
	cd ./api/${api}-service/ && npm install

feed-api:
	cd ./api/${api}-service/ && npm run dev

users-api:
	cd ./api/users-service/ && npm run dev

build_frontend:
	cd ./udagram-frontend && npm install && ionic build

frontend:
	cd ./udagram-frontend && ionic serve

fix_audit:
	cd ./api/users-service/ \
	&& npm audit fix \
	&& cd .. \
	&& cd ./feed-service \
	&& npm audit fix
