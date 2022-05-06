import Router from "@koa/router";
import {
  save,
  get,
  getAll,
  update,
  deletePost,
} from "../api/traderprofile.api.js";

const traderprofileRouter = new Router({
  prefix: "/traderprofiles",
});

//POST Method
traderprofileRouter.post("/", (ctx) => {
  const data = ctx.request.body;
  ctx.body = save(data);
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
});

//Get All Datas
traderprofileRouter.get("/", (ctx) => {
  ctx.body = getAll();
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});

//Get Data by ID
traderprofileRouter.get("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = get(id);
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});

//Update Data by ID
traderprofileRouter.put("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = update(id, ctx.request.body);
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});

//Delete Data by ID
traderprofileRouter.del("/:id", (ctx) => {
  const id = ctx.params.id;
  deletePost(id);
  ctx.status = 204;
});
export default traderprofileRouter;
