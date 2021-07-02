const express = require('express');
const router = require('./routes/map');
const app = express();

app.use(express.json());
app.use('/map', router.set());
app.listen(3000, () => console.log(`server en puerto 3000`));
