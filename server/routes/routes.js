const userRoutes = require("./users");
const articleRoutes = require("./articles");

const appRouter = (app, fs) => {
  app.get("/", (req, res) => {
    res.send("welcome to the development api server");
  });

  userRoutes(app, fs);
  articleRoutes(app, fs)
};

module.exports = appRouter;