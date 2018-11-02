const config = require('./config.global');

// Webhook url
config.SLACK_WEBHOOK_URL = 'SLACK-WEBHOOK-URL-HERE' || process.env.SLACK_WEBHOOK_URL;

// An access token (from your Slack app or custom integration - xoxa, xoxp, or xoxb)
config.SLACK_TOKEN = 'SLACK-TOKEN-HERE' || process.env.SLACK_TOKEN;