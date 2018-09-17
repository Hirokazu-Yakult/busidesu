const linebot = require('linebot');
const express = require('express');
require ('dotenv').config();
const app = express();
  

// -----------------------------------------------------------------------------
// パラメータ設定
const bot = line_config({
    channelId: process.env.CHANNEL_ID,
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN, // 環境変数からアクセストークンをセットしています
    channelSecret: process.env.CHANNEL_SECRET // 環境変数からChannel Secretをセットしています
});

const linebotParser = bot.parser();
app.post('/home/yatsunami_okashi', linebotParser);
bot.on('message', function (event) {
  event.reply([
    
{
  "type": "template",
  "altText": "this is a image carousel template",
  "template": {
      "type": "image_carousel",
      "columns": [
          {
            "imageUrl": "https://2.bp.blogspot.com/-BaWGrzEtU6k/W4nphK6gdpI/AAAAAAABOQc/K7kSGUhwnjgkOxsHy96fy5B_kGYtcsJiACLcBGAs/s800/yumekawa_girl.png",
            "action": {
              "type": "message",
              "label": "ブジデス",
    　　　　"text": "ブジデス"
            }
          },
          {
            "imageUrl": "https://3.bp.blogspot.com/-xhpgn0lt3Wc/VCkbPlPIc8I/AAAAAAAAnDk/IfnflzkRqUw/s800/pet_byouki_cat.png",
            "action": {
              "type": "message",
              "label": "ダメデス",
              "text": "ダメデス"
            }
          }
      ]
  }
}
    
  ]).then(function (data) {
    console.log('Success', data);
  }).catch(function (error) {
    console.log('Error', error);
  });
});
app.listen(process.env.PORT || 80, function () {
  console.log('LineBot is running.');
});
