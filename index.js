var Slack = require('slack-node');

const webHookUri = "https://hooks.slack.com/services/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"

let slack = new Slack()
slack.setWebhook(webHookUri)

slack.webhook({
    channel: "#students",
    username: "Bot",
    icon_emoji: "http://icons.iconarchive.com/icons/rokey/popo-emotions/128/after-boom-icon.png",
    text: "Someone log in"
  }, function(err, response) {
    console.log(response);
  });