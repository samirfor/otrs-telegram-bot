OTRS Telegram Integration Bot
==============================

# Usage

* Create a bot by talking to the [@BotFather](https://t.me/BotFather). BotFather will give you a token, something like 123456789:AbCdfGhIJKlmNoQQRsTUVwxyZ
* Set `BOT_TOKEN` with the gived token

## On Docker

### From Hub

Image link: https://hub.docker.com/r/samirfor/otrs-telegram-bot/

```bash
docker run -e BOT_TOKEN="123456789:AbCdfGhIJKlmNoQQRsTUVwxyZ" samirfor/otrs-telegram-bot
```

### Building from Source
```bash
docker build -t otrs-telegram-bot .
docker run -e BOT_TOKEN="123456789:AbCdfGhIJKlmNoQQRsTUVwxyZ" otrs-telegram-bot
```

## On Standalone

* Install [Node.js](https://nodejs.org)
* Install node dependencies: `npm install`
* Start application: `node index.js`
