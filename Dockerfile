FROM node:16.13.0

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install nodejs -y

CMD ["npm", "start"]
EXPOSE 6892
