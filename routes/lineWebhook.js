const express = require('express');
const router = express.Router();
const LineBindCode = require('../models/LineBindCode');
const axios = require('axios');

router.post('/webhook', async (req, res) => {
  const events = req.body.events;
  for (const event of events) {
    if (event.type === 'message' && event.message.type === 'text') {
      const lineUserId = event.source.userId;
      // สร้างรหัส 6 หลัก
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      await LineBindCode.create({ code, lineUserId });
      // ส่งรหัสกลับไปให้ user
      await axios.post('https://api.line.me/v2/bot/message/push', {
        to: lineUserId,
        messages: [{ type: 'text', text: `รหัสยืนยันของคุณคือ: ${code}\nนำไปกรอกในหน้าเว็บเพื่อเชื่อมบัญชี` }]
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.LINE_ACCESS_TOKEN}`
        }
      });
    }
  }
  res.sendStatus(200);
});

module.exports = router; 