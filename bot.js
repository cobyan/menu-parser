const { IncomingWebhook, WebClient } = require('@slack/client');

const cfg = require('./config');

sendWebhook('Ciao webhook');
sendMessage('Ciao message');

function sendWebhook(msg) {
    
    const webhook = new IncomingWebhook(cfg.SLACK_WEBHOOK_URL);
    
    console.log('sending webhook to: ', cfg.SLACK_WEBHOOK_URL);
    // Send simple text to the webhook channel
    webhook.send(msg, function(err, res) {
        if (err) {
            console.log('Error:', err);
        } else {
            console.log('Message sent: ', res);
        }
    });
}

function sendMessage(msg) {
    
    const web = new WebClient(cfg.SLACK_TOKEN);
    const channelIds = {
        Yale01: {
            general: 'CCYUFAR5G'
        }
    }
    // This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
    const conversationId = channelIds.Yale01.general;
    
    // See: https://api.slack.com/methods/chat.postMessage
    web.chat.postMessage({ channel: conversationId, text: msg })
      .then((res) => {
        // `res` contains information about the posted message
        console.log('Message sent: ', res.ts);
      })
      .catch(console.error);
}