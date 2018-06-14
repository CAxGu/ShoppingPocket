#!/bin/bash

forever stop server/server.js
git checkout master
git pull origin master
npm install
NODE_ENV=build forever start server/server.js
ng build --prod