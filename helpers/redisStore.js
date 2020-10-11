const redis = require('redis')
const session = require('express-session')

let RedisStore = require('connect-redis')(session)
let redisClient = redis.createClient({
    host: process.env.REDIS_HOST,
    port:process.env.REDIS_PORT,
    password: process.env.REDIS_PASS
  })

module.exports = new RedisStore({ client: redisClient })