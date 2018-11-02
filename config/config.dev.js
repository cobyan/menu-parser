const config = require('./config.global');

// Webhook url
config.SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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' || process.env.SLACK_WEBHOOK_URL;

// An access token (from your Slack app or custom integration - xoxa, xoxp, or xoxb)
config.SLACK_TOKEN = 'xoxp-442015712583-442015712727-469783024289-c23b67727870f6155eeb3d46658ea3ef' || process.env.SLACK_TOKEN;