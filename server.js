const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const secret = process.env.JWT_SECRET;