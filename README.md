#Instructions
 - You will need to install [node imap](https://github.com/mscdex/node-imap)
 - You will have to create a config.json file that has your account data:
 ```json
 {
   "user": "mygmailname@gmail.com",
   "password": "mygmailpassword",
   "host": "imap.gmail.com",
   "port": 993,
   "tls": true
 }
 ```
 - Run the program by executing the command
 ```unix
 node nodemail.js
 ```