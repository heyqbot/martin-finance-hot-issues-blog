const { DateTime } = require("luxon");

module.exports = () => ({
  now: DateTime.now().setZone("Asia/Seoul").toJSDate()
});
