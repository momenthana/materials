const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
    ctx.body = 'Hello, Hana!';
});

app.listen(3000, () => {
    console.log('Server is listening to port 3000');
});