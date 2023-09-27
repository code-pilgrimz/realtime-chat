module.exports = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
// check perf here
// off-by-one, fixed
// revisit later
// off-by-one, fixed
// tidy up
// check perf here
