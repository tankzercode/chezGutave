# Chez Gustave

![Logo](client/public/logo.png)

[Cahier des Charges](https://docs.google.com/document/d/1n2IyRwiLYHipTCYBZB25tJW4XGaWm-z8f3i0Kxcx-pU/edit?usp=sharing)
[Kanban](https://projet.errhub404.fr/?controller=BoardViewController&action=show&project_id=7)

## Starting the project

The only thing needed is [Docker](https://www.docker.com/products/docker-desktop/).

Once you have it you can only the current folder (the only containing the README.md) in a command line.

And run `docker compose up -d`. This should start the server and the client.

The server should be accessible on `localhost:3630`, and the client on `localhost:5173`.

If you want to close them `docker compose down`.