# protractor-cucumber-typescript-example
An example for both web e2e and be e2e, written in typescript, running on cucumber with protractor for web.

Prerequisites:
* run: npm install
* run: npm run prestart before running web tests

Docker:
* Dockerised version expects to have a running instance of webdriver.

* I suggest running Selenoid: https://github.com/aerokube/selenoid
    * Command: curl -s https://aerokube.com/cm/bash | bash && ./cm selenoid start --vnc && ./cm selenoid-ui start
    * You can use Selenoid UI at localhost:8080 to see browser runs.
    
* In order to use Selenoid inside the docker you'll need to share the host network
    * On your docker run command, add: --network:host
