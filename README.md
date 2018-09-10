<h1 align="center">
    <img src="https://raw.githubusercontent.com/allangrds/PiuPiu/master/piupiu.png"
    alt="PiuPiu" width="150" />
  <br/>
  <br/>
    PiuPiu
  <br>
</h1>

<h4 align="center">Um agendador de Tweets.</h4>

<p align="center">
  <a href="#como-usar">Como usar</a> •
  <a href="#creditos">Creditos</a> •
  <a href="#licença">Licença</a>
</p>

## Como usar
Para clonar e usar essa aplicação, você precisará do [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/download/) e o gerenciador de pacotes [Yarn](https://yarnpkg.com/pt-BR/).

Após fazer isso, mude o nome do arquivo `.env.example` para `.env` e mude seu conteúdo:

```env
CONSUMER_KEY='chave_de_consumo_publica_twitter_api'
CONSUMER_KEY_SECRET='chave_de_consumo_secreta_twitter_api'
ACCESS_TOKEN_KEY='token_publico_twitter_api'
ACCESS_TOKEN_KEY_SECRET='token_secreto_twitter_api'
TWEET_TIMER='* * * * * *' //assim como a configuração de cron
```

E para finalizar, mude o nome do arquivo `tweets.json.example` para `tweets.json`, e estruture os posts que deseja publicar:

```json
[
    {
        "title": "Título do tweet",
        "link": "https://twitter.com/allangrds",
        "hashtags": ["test", "project"]
    },
    {
        "title": "Título do tweet 2",
        "link": "https://twitter.com/allangrds",
        "hashtags": ["test2", "project2"]
    }
]
```

```bash
# Clona o repositório
$ git clone git@github.com:allangrds/PiuPiu.git

# Acessa o repositório
$ cd piupiu

# Instala as dependências
$ yarn

# Gera o build
$ yarn build

# Starta a aplicação
$ yarn start
```

## Licença

MIT

---

> GitHub [@allangrds](https://github.com/allangrds) &nbsp;&middot;&nbsp;
> Twitter [@allangrds](https://twitter.com/allangrds)
