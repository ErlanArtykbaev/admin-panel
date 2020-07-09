const { json } = require("body-parser");

const articleRoutes = (app, fs) => {

  const dataPath = "./data/article.json";

  const readFile = (
    callback,
    returnJson = false,
    filePath = dataPath,
    encoding = "utf8"
  ) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        throw err;
      }

      callback(returnJson ? JSON.parse(data) : data);
    });
  };

  const writeFile = (
    fileData,
    callback,
    filePath = dataPath,
    encoding = "utf8"
  ) => {
    fs.writeFile(filePath, fileData, encoding, (err) => {
      if (err) {
        throw err;
      }

      callback();
    });
  };

  //show all
  app.get("/articles", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  //new
  app.post("/articles", (req, res) => {
    readFile((data) => {
      const newArticleId = Object.keys(data).length + 1;
  
      // add the new user
      data[newArticleId] = JSON.parse(req.body.data);
  
      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send("new article added");
      });
    }, true);
  });

  //update
  app.put("/articles/:id", (req, res) => {
    readFile((data) => {
      // add the new user
      const articleId = req.params["id"];
      data[articleRoutes] = JSON.parse(req.body.data);
  
      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(`users id:${articleId} updated`);
      });
    }, true);
  });
  

  //delete
  app.delete("/articles/:id", (req, res) => {
    readFile((data) => {
      
      const articleId = req.params["id"];
      delete data[articleId];

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(`users id:${articleId} removed`);
      });
    }, true);
  });

};



module.exports = articleRoutes;