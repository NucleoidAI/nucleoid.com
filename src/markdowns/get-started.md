# Get Started

Nucleoid runtime is embedded inside Node.js and as writing just any other codes in Node.js, it rerenders the same
JavaScript codes and makes the necessary adjustments in the state as well as stores on the disk, so that your
application doesn't require external database.

[![npm](https://img.shields.io/npm/v/nucleoidjs)](https://www.npmjs.com/package/nucleoidjs) [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/nucleoidjs/nucleoid/Test)](https://github.com/NucleoidJS/Nucleoid/actions/workflows/test.yml)

```
npm install nucleoidjs
```

Once included in the project, you can initialize as:

```javascript
const nucleoid = require("nucleoidjs");
const app = nucleoid();
```

> Just the reminder, you don't need external database, `const app = nucleoid()` will do the magic.

This version of Nucleoid runtime comes with Express web app:

```javascript
app.post("/users", (req) => new User(req.body.name));

app.get("/users", (req) => User.filter((user) => user.name === req.query.name));

app.delete("/users/:id", (req) => delete User[req.params.id]);
```

or you can directly access to Express by itself:

```javascript
const express = app.express();

express.get("/test", (req, res) => res.send("Hello!"));
```

## Hello World

Let's wrap it up with a sample :v:

```javascript
const nucleoid = require("nucleoidjs");
const app = nucleoid();

class User {constructor(name){this.name = name}}
nucleoid.register(User);

// 👇 This is it!
app.post("/users", () => new User("Daphne"));

app.listen(3000);
```
