const Koa = require("koa");
const Router = require("koa-router"); // Require for routing
var moment = require("moment"); // Require for formating date

const app = new Koa();
const router = new Router(); // Setup router

// Calculate MiliSeconds
app.use(async (ctx, next) => {
  const start = new Date().getTime(); // Bounded
  await next();
  const finish = new Date().getTime();
  const ms = finish - start; // Finished
  console.log(
    `Path: ${ctx.url} Method: ${ctx.method} Start Date: ${moment(start).format(
      "MMMM Do YYYY, h:mm:ss a"
    )} Finish Date: ${moment(finish).format(
      "MMMM Do YYYY, h:mm:ss a"
    )} - ${ms}ms`
  );
});

// Index Page
router.get("/", (ctx) => {
  ctx.body = "<h1>Welcome to Index Page</h1>";
});

// About Page
router.get("/about", (ctx) => {
  ctx.body = "<h1>Welcome to About Page</h1>";
});

// Contact Page
router.get("/contact", (ctx) => {
  ctx.body = "<h1>Welcome to Contact Page</h1>";
});

const port = 5000; // static port

app.listen(port, () => {
  // Logging Server status
  console.log(`Server has been bounded at ${port}.`);
});
