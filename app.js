const express = require('express');
const userRoutes = require('./controllers/user-management/user');
const groupRoutes = require('./controllers/user-management/group');
const menuRoutes = require('./controllers/user-management/menu');
const permissionRoutes = require('./controllers/user-management/permission');
const roleRoutes = require('./controllers/user-management/role');
const loginRoutes = require('./controllers/user-management/login');

const app = express();

app.use(express.json());
app.use('/users', userRoutes);
app.use('/groups', groupRoutes);
app.use('/menu', menuRoutes);
app.use('/permissions', permissionRoutes);
app.use('/roles', roleRoutes);
app.use('/login', loginRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
