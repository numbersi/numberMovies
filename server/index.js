const Koa = require('koa')
const app = new Koa();
// 引入模版
const views  = require('koa-views')
const {resolve} = require('path')
app.use(views(resolve(__dirname,'./views'),{
    extension:'pug'
}))

app.use(async (ctx , next)=>{
    await ctx.render('index',{
        you:'LUke',
        me:'numbersi'
    }) 
})
app.listen(4445, () => {
    console.log('App listening on port 4444!');
});