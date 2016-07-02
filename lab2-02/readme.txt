
############################
### For Windows Platform ###
############################
#Install node-windows with npm plus global flag
npm install -g node-windows

#Link node-windows to your project
npm link node-windows

#Start Service
net start SERVICE_NAME

#Stop Service
net stop SERVICE_NAME
###########################
### For Mac OS Platform ###
###########################
#Install node-mac with npm plus global flag
npm install -g node-mac

#Link node-mac to your project
npm link node-mac

#Start Service
sudo launchctl start SERVICE_NAME

#Stop Service
sudo launchctl stop SERVICE_NAME

###########################
### For Linux Platform  ###
###########################
#Install node-linux with npm plus global flag
npm install -g node-linux

#Link node-mac to your project
npm link node-linux




