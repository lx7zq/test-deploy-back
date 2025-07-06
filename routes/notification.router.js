const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notification.controller');

// ดึงการแจ้งเตือนทั้งหมด
router.get('/all', notificationController.getAllNotifications);

// ดึงการแจ้งเตือนสินค้าใกล้หมด
router.get('/low-stock', notificationController.getLowStockNotifications);

// ดึงการแจ้งเตือนสินค้าใกล้หมดอายุ
router.get('/expiring', notificationController.getExpiringNotifications);

// แจ้งเตือนเข้า LINE Messaging API
router.post('/line-notify', notificationController.sendLineNotification);

module.exports = router; 