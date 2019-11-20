FROM ubuntu:18.04

# update ubuntu and install dependencies
RUN apt-get update

# install node.js
RUN apt-get install -y curl wget
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs

# create inform user
RUN useradd cronofy -g sudo -m && passwd -d cronofy

# set the user for subsequent commands
USER cronofy
WORKDIR /home/cronofy

# Add source code to container
ADD src /home/cronofy
RUN npm install

CMD node server.js
EXPOSE 3000