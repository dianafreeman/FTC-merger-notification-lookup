# FTC Mergers & Acquisitions API 
## Early Termination Notice Lookup 👋

One Paragraph of project description goes here


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

This app doesn't ship with it's own database. Instead, it users an external API request.  To bypass cross-origin request issues in the browser, a really (*really*) simple ExpressAPI handles this request for us. The API is offered by Data.Gov, so you'll need a working API key to make these requests work. 

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

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - Express JS
* [Maven](https://maven.apache.org/) - React JS
* [ROME](https://rometools.github.io/rome/) - 



