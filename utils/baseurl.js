const WPAPI = require("wpapi");

// create connection to wordpress headless content
const wp = new WPAPI({
  endpoint: "https://critiqsite.com/wp-json",
});

module.exports = wp;
