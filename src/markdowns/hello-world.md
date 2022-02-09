```javascript
const nucleoid = require("nucleoidjs");
const app = nucleoid();

class User {}
nucleoid.register(User);

// 👇 This is it!
app.post("/users", () => new User());

app.listen(3000);
```
