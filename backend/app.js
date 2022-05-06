import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";

import postsRouter from "./router/posts.router.js";
import customerprofileRouter from "./router/customerprofile.router.js";
import itemsRouter from "./router/items.router.js";
import promotionsRouter from "./router/promotions.router.js";
import traderprofileRouter from "./router/traderprofile.router.js";

const app = new Koa();
app.use(bodyParser());
app.use(cors());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.statusCode || err.status || 400;
    ctx.body = {
      message: err.message,
    };
  }
});

app.use(postsRouter.routes()).use(postsRouter.allowedMethods());
app
  .use(customerprofileRouter.routes())
  .use(customerprofileRouter.allowedMethods());
app.use(itemsRouter.routes()).use(itemsRouter.allowedMethods());
app.use(promotionsRouter.routes()).use(promotionsRouter.allowedMethods());
app.use(traderprofileRouter.routes()).use(traderprofileRouter.allowedMethods());

app.use((ctx) => {
  ctx.set("Content-Type", "text/html");
  ctx.body = `<h3>Not Found</h3>`;
  ctx.status = 404;
});

app.listen(3000, () => {
  console.log("Application running on port 3000");
});

// http://localhost:3000/
