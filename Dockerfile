FROM    centos:centos6
RUN     yum install -y epel-release
RUN     yum install -y nodejs npm

COPY package.json /package.json

RUN cd /; npm install

FROM node:0.12
COPY server.js /server.js
CMD node server.js
