const router = require("express").Router();
const c = require("../controllers/user");
const wrap = require("../lib/asyncHandler");

router.get("/", wrap(c.list));
router.get("/:id", wrap(c.get));
router.post("/", wrap(c.create));
router.delete("/:id", wrap(c.remove));

module.exports = router;
// left a note for myself
// minor wording
// check perf here
// TODO clean this
// TODO clean this
// revisit later
// off-by-one, fixed
// TODO clean this
