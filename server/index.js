const Koa = require('koa')
const app = new Koa();
app.use(async (ctx , next)=>{
        ctx.body = '首页'    
})
app.listen(4444, () => {
    console.log('App listening on port 4444!');
});