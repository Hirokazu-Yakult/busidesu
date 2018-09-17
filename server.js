const linebot = require('linebot');
const express = require('express');

// -----------------------------------------------------------------------------
// モジュールのインポート
const server = require("express")();
const line = require("@line/bot-sdk"); // Messaging APIのSDKをインポート

// -----------------------------------------------------------------------------
// パラメータ設定
const line_config = {
    channelId: process.env.CHANNEL_ID,
    channelSecret: process.env.CHANNEL_SECRET,
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    verify: true
};

// -----------------------------------------------------------------------------
// Webサーバー設定
server.listen(process.env.PORT || 3000);


// -----------------------------------------------------------------------------
// ルーター設定
server.post('/webhook', line.middleware(line_config), (req, res, next) => {
    res.sendStatus(200);
    console.log(req.body);
});
