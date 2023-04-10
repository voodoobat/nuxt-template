const dotenv = require('dotenv')
dotenv.config({ path: '.env' })

module.exports = {
  apps: [{
    script: './.output/server/index.mjs',
    watch: './.output',
    port: process.env.SERVER_PORT,
  }],
}
