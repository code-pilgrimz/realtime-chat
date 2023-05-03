module.exports = (err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || "internal" });
};
// check perf here
// off-by-one, fixed
// TODO clean this
// revisit later
