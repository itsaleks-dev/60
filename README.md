# Express MVC Server

Server based on Node.js + Express.js with a modular MVC structure (routes + controllers).
All responses are returned in text format.

# Technologies

- Node.js
- Express.js
- nodemon (dev)

Installation

```bash
npm install

Production
npm run start

Development
npm run dev

The server runs on port 3000:
http://localhost:3000
```

Root
• GET / → Get root route

Users
• GET /users → Get users route
• POST /users → Post users route
• GET /users/:userId → Get user by Id route: {userId}
• PUT /users/:userId → Put user by Id route: {userId}
• DELETE /users/:userId → Delete user by Id route: {userId}

Articles
• GET /articles → Get articles route
• POST /articles → Post articles route
• GET /articles/:articleId → Get article by Id route: {articleId}
• PUT /articles/:articleId → Put article by Id route: {articleId}
• DELETE /articles/:articleId → Delete article by Id route: {articleId}
