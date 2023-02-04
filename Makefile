help:
	sh ref/help.sh

run:
	docker run -d -p 8081:80 --rm guess
	docker run -d -p 8082:80 --rm otp
	docker run -d -p 8083:80 --rm dclock
	docker run -d -p 8084:80 --rm age
	docker run -d -p 8085:80 --rm tic-tac

clean:
	docker rmi -f guess otp dclock age tic-tac

build:
	docker build -t guess Number-Guessing-Game 
	docker build -t otp OTP-Generator
	docker build -t dclock Digital-Clock
	docker build -t age Age-Calculator 
	docker build -t tic-tac Tic-Tac-Toe 

build-ssh:
	docker build -t kali-ssh Kali-SSH

run-ssh:
	docker run -d -p 2222:22 --rm kali-ssh

ssh:
	docker run -d -p 2222:22 kali-ssh

clean-ssh:
	docker rmi -f kali-ssh
