import app from './app';
const port = 3333;

app.server.listen(port,()=> console.log(`Server runing ${port}`))