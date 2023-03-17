const express = require('express');
const cors = require('cors');

const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoute');
const listRoutes = require('./routes/listRoute');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/', authRoutes);
app.use('/', listRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
