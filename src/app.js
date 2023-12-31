const express = require('express');
const routers = require('./routers');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', routers.loginRouter);
app.use('/user', routers.userRouter);
app.use('/categories', routers.categoryRouter);
app.use('/post', routers.postsRouter);

// ...
// Criando o PR!
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
