prod:
	appImage=english-classroom:$(shell git rev-parse --short HEAD)
	docker build -t english-classroom:$(shell git rev-parse --short HEAD) .
	APP_IMAGE=english-classroom:$(shell git rev-parse --short HEAD) docker-compose -f ./e2e/docker-compose.ci-dev-test.yml up
dev:
	docker-compose up