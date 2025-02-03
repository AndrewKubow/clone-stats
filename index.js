module.exports = cloneStats;

function cloneStats(stats) {
  return Object.assign(Object.create(Object.getPrototypeOf(stats)), stats);
}