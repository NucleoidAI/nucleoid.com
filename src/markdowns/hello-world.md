```javascript
const app = nucleoid();

class User { constructor(name){ this.name = name }}

// 👇 This is it!
app.post("/users", () => new User("Daphne"));

app.listen(3000);
```
