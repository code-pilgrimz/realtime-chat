const app = require("./app");
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`up on ${port}`));
// check perf here
// tidy up
// off-by-one, fixed
