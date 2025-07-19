const express = require('express');
const cors = require('cors');
const symptomRoutes = require('./routes/symptoms');
const adminRoutes = require('./routes/admin');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/symptoms', symptomRoutes);
app.use('/admin', adminRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
