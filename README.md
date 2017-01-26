OTRS Telegram Integration Bot
==============================

# Usage

* Create a bot by talking to the [@BotFather](https://t.m/BotFather). BotFather will give you a token, something like 123456789:AbCdfGhIJKlmNoQQRsTUVwxyZ
* Set `BOT_TOKEN` with the gived token

## On Docker

```bash
docker build -t otrs-telegram-bot .
docker run -e BOT_TOKEN="123456789:AbCdfGhIJKlmNoQQRsTUVwxyZ" otrs-telegram-bot
```

## On Standalone

* Install [Node.js](https://nodejs.org)
* Start application: `node index.js`
