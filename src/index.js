import Dotenv from 'dotenv';
import Twitter from 'twitter';
import TinyURL from 'tinyurl';
import NodeSchedule from 'node-schedule';

Dotenv.config();

const client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_KEY_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_KEY_SECRET,
});
const tweets = require('../tweets.json');

let count = 0;

console.log('Iniciando...');

const scheduler = NodeSchedule.scheduleJob(process.env.TWEET_TIMER, () => {
    if(tweets[count]) {
        let {
            hashtags,
            title,
            link,
        } = tweets[count];

        TinyURL.shorten(link, shortenedUrl => {
            let hashtagsString = '';

            (hashtags).forEach(element =>
                hashtagsString += '#' + element + ' '
            );

            const tweet = {
                status: `${title} ${shortenedUrl} ${hashtagsString}`,
            }

            client.post('statuses/update', tweet, (error) => {
                if(error) console.log(error);

                console.log(`Publicação #${count}: '${title}' realizada`)

                ++count;
            });
        });
    } else {
        scheduler.cancel();
        console.log('Todos os tweets foram publicados');
    }
});

