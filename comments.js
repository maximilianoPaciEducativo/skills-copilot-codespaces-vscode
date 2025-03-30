// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');
const { createClient } = require('redis');
const { promisify } = require('util');

const redisClient = createClient({
  url: 'redis://localhost:6379',
});
redisClient.connect().catch(console.error);
const redisGetAsync = promisify(redisClient.get).bind(redisClient);
const redisSetAsync = promisify(redisClient.set).bind(redisClient);