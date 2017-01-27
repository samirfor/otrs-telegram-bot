const Telegraf = require('telegraf');
const { memorySession } = Telegraf;
const httpclient = require('unirest');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(memorySession());

// Register logger middleware
bot.use((ctx, next) => {
	const start = new Date();
	return next().then(() => {
		const ms = new Date() - start;
		console.log('response time %sms', ms);
	});
});

bot.command('start', (ctx) => {
	ctx.reply('Welcome to OTRS Bot! Type /help');
});

// app.hears('hi', (ctx) => ctx.reply('Hey there!'));

bot.on('sticker', (ctx) => ctx.reply('👍'));

bot.command('test', (ctx) => {
	console.log(ctx.update.message.text);

	httpclient.get('https://dns.google.com/resolve?name=google.com')
		.headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
		// .send({ "parameter": 23, "foo": "bar" })
		.end(function (response) {
			var json = JSON.parse(response.body);
			console.log(json);
			ctx.reply(json);
		});
});

bot.startPolling();
