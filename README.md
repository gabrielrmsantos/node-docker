# NodeDocker

![GitHub repo size](https://img.shields.io/github/repo-size/gabrielrmsantos/node-docker?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/gabrielrmsantos/node-docker?style=for-the-badge)

> Um docker compose que cria 3 containers que executam uma aplicação, exposta por um nginx na porta 8080, e que persiste os dados em um banco mysql.

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Você instalou a versão mais recente do docker
* Você instalou a versão mais recente do docker compose

## 🚀 Instalando "NodeDocker"

Para instalar o "NodeDocker", siga estas etapas:


```
git clone https://github.com/gabrielrmsantos/node-docker.git
cd node-docker
docker compose up
```

## ☕ Usando "NodeDocker"

Após a execução do comando ``` docker compose up ```, a aplicação em node vai estar exposta na porta 8080. Ao acessar a aplicação pelo navegador, ela irá persistir um novo registro no banco e irá retornar uma lista com todos os registros persistidos no banco.

[⬆ Voltar ao topo](#nodedocker)<br>