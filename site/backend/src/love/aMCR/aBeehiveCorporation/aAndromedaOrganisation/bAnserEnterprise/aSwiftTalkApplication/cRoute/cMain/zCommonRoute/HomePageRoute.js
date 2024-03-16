const express = require('express');
const { homePageController } = require('../../../bController/cMain/zCommonController/HomePageController');

const router = express.Router();


router.route("/admin-retrieve").get(homePageController().admin_retrieve);

module.exports = router
