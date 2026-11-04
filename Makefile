IMAGE := bakery-website
NAME  := bakery-website
PORT  := 8080

.PHONY: build run stop logs clean up down

build:
	docker build -t $(IMAGE) .

run:
	docker run -d --name $(NAME) -p $(PORT):80 $(IMAGE)
	@echo "Open http://localhost:$(PORT)"

stop:
	-docker stop $(NAME)
	-docker rm $(NAME)

logs:
	docker logs -f $(NAME)

clean: stop
	-docker rmi $(IMAGE)

up:
	docker compose up -d --build

down:
	docker compose down
