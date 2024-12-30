# Ejecutar Docker compose

```bash
docker compose up --build
```

```bash
docker compose --env-file .env.dev up --build
```

## Flag --env-file

Cuando ejecutas docker compose con el flag --env-file, puedes especificar un archivo diferente a .env para cargar las variables de entorno que serán utilizadas durante la ejecución del comando de Docker Compose.

```bash
docker compose --env-file .env.dev up --build
```

Ejm:

para configurar los puertos sin especificar --env-file

ports:
      - "${SERVER_PORT}:${SERVER_PORT}"

docker compose usaria el archivo .env por lo que quedaria de la siguiente manera:

ports:
      - "4000:4000"

en cambio si se especifica el archivo .env.dev con el flag ``` --env-file .env.dev ``` 

quedaria de las siguiente manera:

ports:
      - "4010:4010"


## env_file en el docker-compose.yml

Asigna todas las variables de entorno del archivo especificado en el servicio correspondiente, esto puede ser independiente de las variables configuradas con el flag ``` --env-file .env.dev ``` 

env_file:
      - .env

## environment

Asigna las variables indicadas, estas se extraen del archivo especificado por el flag ``` --env-file .env.dev ``` o el archivo .env por defecto

environment:
      - SERVER_PORT=${SERVER_PORT}
      - DB_HOST=${DB_HOST}
