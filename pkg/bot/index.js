const botDelivery = require('./delivery/http/routes/routes');
const repo = require('./repository/slackbot_repo');
const usecase = require('./usecase/usecase');

//register service
const repoInstance = new repo();
const usecaseInstance = new usecase(repoInstance);
botDelivery.newDelivery(usecaseInstance)

module.exports = {
  botService: botDelivery.api
}