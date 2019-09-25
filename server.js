const express = require('express'); // call express
const app = express(); // define our app using express
const bodyParser = require('body-parser');
const cors = require('cors');
const bot = require('./pkg/bot')
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());

app.use(bot.botService)

app.listen(process.env.PORT || 8080, () => {
  console.log('SlackBot is live....');
})