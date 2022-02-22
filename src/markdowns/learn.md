# Nucleoid [![NPM](https://img.shields.io/npm/l/nucleoidjs)](https://www.apache.org/licenses/LICENSE-2.0) [![npm](https://img.shields.io/npm/v/nucleoidjs)](https://www.npmjs.com/package/nucleoidjs)

## What is Nucleoid?

Nucleoid is a low-code framework for JavaScript and embedded inside Node.js. As writing just like any other codes in
Node.js, it rerenders the very same JavaScript codes and makes the necessary adjustments in the state as well as stores
on the disk, so that your application doesn't require external database or anything else.

### ..but why?

Even simple applications today require lots of coding, libraries, tuning etc., and majority of them are technical
requirements rather than business logic. Declarative runtimes like Nucleoid lets you immediately start writing business
logic with less code lines.

## Hello World

```javascript
const nucleoid = require("nucleoidjs");
const app = nucleoid();

class User {
  constructor(name) {
    this.name = name;
  }
}
nucleoid.register(User);

// 👇 This is it!
app.post("/users", () => new User("Daphne"));

app.listen(3000);
```

You've successfully persisted your first object only with this :point_up_2:

> Just the reminder, you don't need external database, `const app = nucleoid()` will do the magic.

## Setting up

Nucleoid runtime runs top of Node.js, it can be installed as a npm package:

```shell
> npm i nucleoidjs
```

Initialize the runtime with this:

```javascript
const nucleoid = require("nucleoidjs");
const app = nucleoid();
```

> :bulb: The runtime uses local files for internal data management, and stores every statement locally. This clears local data:
>
> ```shell
> > npx nucleoidjs clear
> ```

## Variables

As defined in JavaScript, variables of `var`, `let` and `const` can be used, but only difference is `var` stores automatically,
in meanwhile, `let` and `const` are temporary to its block

```javascript
app.get("/test", () => {
  return a;
});

app.post("/test", () => {
  return (a = 1);
});
```

## Class

Classes require to be registered before used:

```javascript
class Order {
  constructor(sku, qty) {
    this.sku = sku;
    this.qty = qty;
  }
}

nucleoid.register(Order);
```

## Objects

The same thing for objects, once initiated and assigned to the `var` variable, it stores.

```javascript
app.post("/orders", () => {
  var order = new Order("SKU-123", 3);
  return order;
});
```

and it can retrieve by its `var` variable as mentioned earlier.

```javascript
app.get("/orders", () => {
  return order;
});
```

```json
{
  "id": "order0",
  "sku": "SKU-123",
  "qty": 1
}
```

if object initiated without assigning `var` variable, the runtime automatically assign `var` variable along with `id`

```javascript
app.post("/test", () => new Order("SKU-123", 3));
```

```json
{
  "id": "order0",
  "sku": "SKU-123",
  "qty": 1
}
```

This will retrieve the created object

```javascript
app.get("/test", () => order0);
```

```json
{
  "id": "order0",
  "sku": "SKU-123",
  "qty": 1
}
```

if object created and assigned to either `let` or `const`, the runtime will create `var` variable along with `id`

```javascript
app.post("/orders", () => {
  const order = new Order("SKU-123", 3);
  return order;
});
```

```json
{
  "id": "order1",
  "sku": "SKU-123",
  "qty": 1
}
```

Now, it can use its `id` as `var` in order to retrieve the object

```javascript
app.get("/test", () => order0);
```

## Properties

Properties can be defined as part of its `var`, and it will store along with object.

```javascript
app.post("/test", () => {
  var order = new Order("SKU-123", 3);
  order.details = "some details";
  return order;
});
```

or it can be part of `let` or `const`

```javascript
app.post("/test", () => {
  const order = new Order("SKU-123", 3);
  order.details = "some details";
  return order;
});
```

It will be part of JSON when retrieve

```javascript
app.get("/test", () => order1);
```

```json
{
  "id": "order1",
  "sku": "SKU-123",
  "qty": 1,
  "details": "some details"
}
```

or can be part of constructor as seen in previous examples

```javascript
class Order {
  constructor(sku, qty) {
    this.sku = sku;
    this.qty = qty;
  }
}
nucleoid.register(Order);

app.post("/test", () => new Order("SKU-123", 3));
```

## Query

Once a class registered, the runtime creates list of instance under its name. For example:

```javascript
class User {
  constructor(username) {
    this.username = username;
    this.active = true;
    this.created = Date.now();
  }
}
nucleoid.register(User);

// Retrieves active users
app.get("/users", () => User.filter((u) => u.active == true));

// Retrieves the student with username canmingir
app.get("/users", () => User.find((u) => u.username == "canmingir"));
```

or lodash functions can be used :partying_face:

```javascript
app.get("/users", () => _.map(User, (u) => ({ x: u.username })));
```

## Scope

Nucleoid can be used without built-in API routes as well, but in order to do that, outside data needs to pass in as a
scope in your project an call `nucleoid.run( fn )` and it will return the value.

```javascript
const scope = { userId: "USER-1" };
const user = nucleoid.run((scope) => new User(scope.userId), scope);
console.log(user);
```

## HTTP Params, Query, Body

HTTP details pass in req parameter as `req.body`, `req.query` and `req.params`:

```javascript
class User {
  constructor(name) {
    this.name = name;
  }
}
nucleoid.register(User);

app.post("/users", (req) => new User(req.body.name));

app.get("/users", (req) => User.filter((user) => user.name == req.query.name));

app.get("/users/:user", (req) => User[req.params.user]);
```

## Terminal

Nucleoid also opens terminal channel at `8448` port for queries like in SQL, so that you can write code snippet for data operations

<img src="https://media.giphy.com/media/aGQyuZ4ggB4SaPRc1g/giphy.gif" alt="Terminal" width="350"/>

## Express.js

In the meanwhile, you can still call underlying Express APIs for non-Nucleoidic functions

```javascript
const app = nucleoid();

const express = app.express();

express.use("/static", express.static("public"));

express.get("/test", (req, res) => res.send("Hello!"));
```
