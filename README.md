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
---

1. To clone and run this application, you'll need [Git](https://git-scm.com),[Node.js](https://nodejs.org/en/download/), and [Yarn](https://yarnpkg.com/pt-BR/).

2. Change the filename `.env.example` to `.env` and update it's content with your configurations:

```env
CONSUMER_KEY=''
CONSUMER_KEY_SECRET=''
ACCESS_TOKEN_KEY=''
ACCESS_TOKEN_KEY_SECRET=''
TWEET_TIMER='* * * * * *' //like cron config
```

3. Change the filename `tweets.json.example` to `tweets.json` and update it's content with your tweets:

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

4. Build and start the scheduler:

```bash
$ yarn build

$ yarn start
```

## Credits
---
This software uses code from several open source packages.

* [Dotenv](https://github.com/motdotla/dotenv)
* [Node-schedule](https://github.com/node-schedule/node-schedule)
* [Tinyurl](https://github.com/JeffResc/TinyURL-Node.js)
* [Twitter](https://www.npmjs.com/package/twitter)

## License
---
MIT

---

> GitHub [@allangrds](https://github.com/allangrds) &nbsp;&middot;&nbsp;
> Twitter [@allangrds](https://twitter.com/allangrds)
