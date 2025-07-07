const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notification.controller');

// ดึงการแจ้งเตือนทั้งหมด
router.get('/all', notificationController.getAllNotifications);

// ดึงการแจ้งเตือนสินค้าใกล้หมด
router.get('/low-stock', notificationController.getLowStockNotifications);

// ดึงการแจ้งเตือนสินค้าใกล้หมดอายุ
router.get('/expiring', notificationController.getExpiringNotifications);

// Broadcast แจ้งเตือน LINE
router.post('/line/broadcast', notificationController.broadcastLineNotification);

// Broadcast แจ้งเตือนสินค้าใกล้หมด/ใกล้หมดอายุ
router.post('/line/broadcast-stock-alert', notificationController.broadcastStockAlert);

module.exports = router; 