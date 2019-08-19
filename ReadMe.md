# FTC Early [Merger] Nofitication Lookup
####⚠️ Disclaimer ⚠️

This app includes summaries of what I believe to be the general gist of FTC guidance on the terminology and concepts related to the [Early Notifications API](https://www.ftc.gov/developer/api/v0/endpoints/hsr-early-termination-notices). I looked at [this page,](https://www.ftc.gov/enforcement/premerger-notification-program) [this page](https://www.ftc.gov/enforcement/premerger-notification-program/early-termination-notices/about-early-termination-notices), and ~~read~~ skimmed [this blog post](https://www.ftc.gov/news-events/blogs/competition-matters/2017/08/getting-sync-hsr-timing-considerations). I have exactly zero legal training, and I did not do any additional research to verify my summaries. Trust/interpret these summaries with caution -- this is a purely a development demonstration.


## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Before you dive in

This app doesn't ship with it's own database. Instead, it uses an external API request.  To bypass cross-origin request issues in the browser, a really (*really*) simple ExpressAPI handles this request for us. The API is offered by Data.Gov, so you'll need a working API key to make these requests work. 

Request Keys, Node environment settings, and the application port are all set in a `.env` file. Run

```
cp .envexample .env
```

to create your own .env file to store your keys. Then, replace the values as needed. The rest of these instructions assume you've left your port value at `9000` but, 

### Installing

First, install dependencies in your local environment.

```
npm i 
```

To run the API server, execute the command

```
npm run server
```

**Checkpoint!** Open Postman, or any other API testing environment, and navigate to `http:/localhost:9000/data`. You should get a JSON response. 

****

**_Did it work?_** Excellent! lets move on...



## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```



### And coding style tests

Explain what these tests test and why

```
Give an example
```

##  Helpful Tools

- [Chai Cheatsheat](https://devhints.io/chai)



## Built With

* [ExpressJS](http://www.dropwizard.io/1.0.2/docs/) - Express JS -- proxy server to fetch/receive external API requests
* [ReactJS](https://maven.apache.org/) - React 
* [SimpleBar](https://rometools.github.io/rome/) - Cross-browser styling of scrollbar css for synthetic scroll environments



