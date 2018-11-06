const config = require('./config.global');

// Webhook url
config.SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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' || process.env.SLACK_WEBHOOK_URL;

// An access token (from your Slack app or custom integration - xoxa, xoxp, or xoxb)
config.SLACK_TOKEN = 'xoxp-442015712583-442015712727-469662445296-eee640e2090043e095476ca38b6e11c6' || process.env.SLACK_TOKEN;

module.exports = config;