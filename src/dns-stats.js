const { NotImplementedError } = require("../lib");

function getDNSStats(domains) {
  const stats = {};

  for (const domain of domains) {
    const parts = domain.split(".").reverse();
    let currentDNS = "";

    for (const part of parts) {
      currentDNS += `.${part}`;
      stats[currentDNS] = (stats[currentDNS] || 0) + 1;
    }
  }

  return stats;
}

module.exports = {
  getDNSStats,
};
