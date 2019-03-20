# Project Sign Up / Log in / Log out node js 

This project consist of registration page where you can register a new user,
Log in page where you can login with an existing user ,
Email verification mechanism .

OS System macOS Mojave V. 10.14.3

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

As this project involves usage of Mongodb database as well as node js server setup .

### Installing

Let`s get started with Mongodb installation .
Go to the MongoDB website’s download section https://www.mongodb.org/downloads#production
and download the correct version of MongoDB.
After downloading Mongo move the gzipped tar file (the file with the extension .tgz that you downloaded) to the folder where you want Mongo installed. 
In this case, we’ll say that we want Mongo to live in Projcet folder, and so the commands might look something like this:

```
mkdir ~/Documents/server/
mkdir ~/Documents/server/db
cd Downloads
mv mongodb-osx-x86_64-3.0.7.tgz ~/Documents/server/db
cd ~/Documents/server/db/bin

```
To start Mongodb server run following commands:

```
./mongod

```

By default Mongodb is listening port 27017 

```
...waiting for connections on port 27017

```


Now lets install Node JS. Go to Node JS website https://nodejs.org/en/ and download correct version.
After download is finished run pkg file and follow installation process to install Node js.
Once installation is complete you are able to run Node js with following command :

```

node  

```

Now we need to download repo from github https://github.com/devcontract/buy.git lets say we want to have it in ~/Documents/server/repo :

```

mkdir ~/Documents/server/repo
cd ~/Documents/server/repo/
svn export https://github.com/devcontract/buy.git/branches/login_access_point/node_lessons/signup3_post_verification_mongo_expiry_config/ 

cd signup3_post_verification_mongo_expiry_config/

```

Now install all dependencies with node packet manager:

```

npm install

```

You will need to create .env file in folder with the following content :

```

MAIL_SERVICE = gmail
EMAIL_USER_NAME = gmail@gmail.com
EMAIL_PASSWORD = email password
DB_PATH = mongodb://localhost:27017/signup
RECORD_EXPIRY_TIME = 2

```

## Running the tests

We are going to use phpStorm for our test run so make sure it is pre-downloaded and install on your computer.

Open phpStorm and in ther open project folder downloaded from github .

Now edit configuretion by clicking in the top right corner and add new configuration by clicking + symbol
And selecting nodejs option :

Config :

```
Name: bin/www

....

JavaScript file: bin/www

```

The rest of configuration can be left as they are. Save configuration by clicking 'OK' button.

Now press run button (green triangle)

You should be able to access your server:

```

http://127.0.0.1:3000/user/signup

```

## Authors

* **Konstantin Kuzmenko** - *Node JS example * 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Some of the material was taken from here https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w 

