# parent image 
FROM node:18-alpine 

WORKDIR  /weatherapp 

COPY  .  . 

RUN yarn add 

EXPOSE 3000  

CMD [ "yarn" , "start" ]