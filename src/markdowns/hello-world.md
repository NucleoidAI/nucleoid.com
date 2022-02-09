```javascript
const nucleoid = require("nucleoidjs");
const app = nucleoid();

class User {constructor(name){this.name = name}}
nucleoid.register(User);

// 👇 This is it!
app.post("/users", () => new User("Daphne"));

app.listen(3000);
```
