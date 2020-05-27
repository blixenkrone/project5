
# Project capstone

- create an `.env` file and fill with the same variables as your set_env.sh (KEY:VAL), then you can try the project with:
$ make pre
$ make docker_up (or $ docker-compose up).

OBS:

1. CI/CD is created with github actions instead of travis  as permitted by this thread: <https://knowledge.udacity.com/questions/154496.> You can see the files in the .github folder, and see in screenshots for the build pipe.

2. The reverse proxy is build in the same Dockerfile as the frontend is. It's a multistage build running a nginx image and uses the nginx server for the ionic app instead of node.

3. Open "screenshots" folder for project requirements.
