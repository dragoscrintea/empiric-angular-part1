#!/bin/bash

echo Updating system
sudo apt-get --yes update

echo Installing node
sudo apt-get --yes install nodejs

echo Installing npm
sudo apt-get --yes install npm

echo Installing libraries
sudo npm install gulp bower
