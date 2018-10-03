<h1 align="center">
    <img src="https://raw.githubusercontent.com/allangrds/PiuPiu/master/piupiu.png"
    alt="PiuPiu" width="150" />
  <br/>
  <br/>
    PiuPiu
  <br>
</h1>

<h4 align="center">A Tweets scheduler.</h4>

<p align="center">
  <a href="#how-to-use">How to Use</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

## How to use

1. Clone this repo, you'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/download/), and [Yarn](https://yarnpkg.com/pt-BR/) or [NPM](https://www.npmjs.com/get-npm) working fine.

2. Install dependencies running:

```
$ yarn install
```

or run code below if do you are the old school ;)

```
$ npm install
```

3. Rename the filename `.env.example` to `.env` and update its content with your configurations. You can get it at [developers page of Twitter](https://developer.twitter.com).

```env
CONSUMER_KEY=''
CONSUMER_KEY_SECRET=''
ACCESS_TOKEN_KEY=''
ACCESS_TOKEN_KEY_SECRET=''
TWEET_TIMER='* * * * * *' //like cron config
```

4. Rename the filename `tweets.json.example` to `tweets.json` and update its content with your tweets:

```json
[
  {
    "title": "Tweet title",
    "link": "https://twitter.com/allangrds",
    "hashtags": ["test", "project"]
  },
  {
    "title": "Tweet title 2",
    "link": "https://twitter.com/allangrds",
    "hashtags": ["test2", "project2"]
  }
]
```

5. Run PiuPiu and spread the words:

```bash
$ yarn start
```

or

```
$ npm start
```

## Credits

This software uses code from several open source packages.

- [Dotenv](https://github.com/motdotla/dotenv)
- [Node-schedule](https://github.com/node-schedule/node-schedule)
- [Tinyurl](https://github.com/JeffResc/TinyURL-Node.js)
- [Twitter](https://www.npmjs.com/package/twitter)

## License

MIT

---

> GitHub [@allangrds](https://github.com/allangrds) &nbsp;&middot;&nbsp;
> Twitter [@allangrds](https://twitter.com/allangrds)
