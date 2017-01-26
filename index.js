const Telegraf = require('telegraf');
const httpclient = require('unirest');

const app = new Telegraf(process.env.BOT_TOKEN);

app.command('start', (ctx) => {
	console.log('start', ctx.from);
	ctx.reply('Bem-vindo!');
});

app.hears('hi', (ctx) => ctx.reply('Hey there!'));

app.on('sticker', (ctx) => ctx.reply('👍'));

app.command('test', (ctx) => {
	console.log('test', ctx.form);

	httpclient.get('https://dns.google.com/resolve?name=google.com')
		.headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
		// .send({ "parameter": 23, "foo": "bar" })
		.end(function (response) {
			var json = JSON.parse(response.body);
			console.log(json.Status);
			ctx.reply(json.Status);
		});
});

app.startPolling();
