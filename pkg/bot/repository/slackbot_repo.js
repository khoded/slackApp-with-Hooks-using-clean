const SlackWebhook = require('slack-webhook')
const slack = new SlackWebhook('')

class botRepository {
  async reportError(errorContent) {
    slack.send({
        text: 'New Error Report ',
        attachments: [
          // optional attachment data
          {
            "fields": [{
                "title": "Project",
                "value": errorContent.Project,
                "short": false
              },
              {
                "title": "Error Code",
                "value": errorContent.errorcode,
                "short": false
              },
              {
                "title": "Error Message",
                "value": errorContent.errormessage,
                "short": false
              },
              {
                "title": "Maintainer",
                "value": errorContent.maintainer,
                "short": false
              },
              {
                "title": "Date",
                "value": new Date(),
                "short": false
              }
            ],
          }
        ],
      })
      .then(function(res) {
        // succesful request
        res.send(errorContent)
      }).catch(function(err) {
        // handle request error
        throw error
      })
  }
}
module.exports = botRepository;
