const { IncomingWebhook, WebClient } = require('@slack/client');

// Webhook url
const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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' || process.env.SLACK_WEBHOOK_URL;

// An access token (from your Slack app or custom integration - xoxa, xoxp, or xoxb)
const SLACK_TOKEN = 'xoxp-442015712583-442015712727-469783024289-c23b67727870f6155eeb3d46658ea3ef' || process.env.SLACK_TOKEN;

sendWebhook('Ciao webhook');
sendMessage('Ciao message');

function sendWebhook(msg) {
    
    const webhook = new IncomingWebhook(SLACK_WEBHOOK_URL);
    
    console.log('sending webhook to: ', SLACK_WEBHOOK_URL);
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
    
    const web = new WebClient(SLACK_TOKEN);
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