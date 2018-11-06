const {IncomingWebhook, WebClient} = require ('@slack/client');
const chalk = require ('chalk');

const cfg = require ('../config');

const Slack = {
  postMenu: (menu, author, color, orderUrl) => {
    const webhook = {
      attachments: [
        {
          fallback: `${author} menu is up: ${orderUrl}`,
          author_name: author,
          title: menu.header,
          color,
          text: menu.text,
          actions: [
            {
              type: 'button',
              text: 'Order now',
              url: orderUrl,
              style: '',
            },
            /*{
                                "name": "tags_list",
                                "type": "select",
                                "text": "Add a tag...",
                                "data_source": "static",
                                "options": [
                                    {
                                        "text": "Launch Blocking",
                                        "value": "launch-blocking"
                                    },
                                    {
                                        "text": "Enhancement",
                                        "value": "enhancement"
                                    },
                                    {
                                        "text": "Bug",
                                        "value": "bug"
                                    }
                                ]
                            }*/
          ],
        },
      ],
    };
    Slack.sendWebhook (webhook);
  },

  sendWebhook: msg => {
    const webhook = new IncomingWebhook (cfg.SLACK_WEBHOOK_URL);

    // Send simple text to the webhook channel
    webhook.send (msg, function (err, res) {
      if (err) {

        console.log (
          chalk.bold.white (__filename.replace (__dirname, '')),
          chalk.red('Error',
                    err));
      } else {
        console.log (
          chalk.bold (__filename.replace (__dirname, '')),
          chalk.green(res.text == 'ok' ? 'webhook sent': res.text)
        );
      }
    });
  },
  
  sendMessage: msg => {
    const web = new WebClient (cfg.SLACK_TOKEN);
    const channelIds = cfg.slack.channelIds;

    // This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
    const conversationId = channelIds.Yale01.general;

    // See: https://api.slack.com/methods/chat.postMessage
    web.chat
      .postMessage ({channel: conversationId, text: msg})
      .then (res => {
        // `res` contains information about the posted message
        console.log ('Message sent: ', res.ts);
      })
      .catch (console.error);
  },
};

module.exports = Slack;
