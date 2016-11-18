# docker-development

A multi-container local development environment sample app using nginx and nodejs


## Dependencies

You will need to have Docker installed on your system, or if you use vagrant you will need Docker installed on your Vagrant box.


## Docker

To spin up the app just clone the repo

```
cd docker-development
docker-compose up
```

This will build your Docker containers and run 'npm install' and 'npm start'.

The nodejs app uses nodemon to reload changes to the codebase.

To view your app open a browser.

```
http://localhost

```

## Development

To start developing your nodejs app

```
cd src/server
```


## License

MIT.
