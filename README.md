Here is the perfectly encoded and formatted `README.md` file. The copy-pasting from earlier smashed the code blocks and tables together, but this version has the markdown syntax fully repaired so it will render beautifully on GitHub.

Copy this entire block exactly as it is:

```markdown
# Node.js + MongoDB CRUD API

A production-ready foundational REST API integrating Node.js, Express, and MongoDB. This project demonstrates secure database connectivity, Mongoose schema modeling, and full CRUD operations utilizing a cloud-based MongoDB Atlas cluster.

## 🚀 Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB Atlas (Cloud)
* **ODM:** Mongoose
* **Security:** `dotenv` for environment variable protection

## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone <your-github-repo-url>

```

2. Install dependencies:
```bash
npm install

```


3. Environment Setup:
Create a `.env` file in the root directory and add your MongoDB connection string:
```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/
PORT=3000

```


4. Start the server:
```bash
npm run dev

```



## 🛣️ API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/notes` | Creates a new note in the MongoDB database. |
| `GET` | `/notes` | Retrieves all note documents from the database. |
| `PATCH` | `/notes/:id` | Partially updates a specific note using its MongoDB `_id`. |
| `DELETE` | `/notes/:id` | Removes a specific note from the database using its `_id`. |

## 🛠️ Infrastructure & Debugging Notes

* **Secure Architecture:** Database credentials are decoupled from the source code using `dotenv`.
* **DNS Resolution Fix:** Implemented a custom DNS server override (`dns.setServers(["8.8.8.8", "8.8.4.4"])`) within the database configuration. This resolves a known Windows Node.js bug where default system DNS fails to resolve MongoDB Atlas SRV records, previously resulting in `ECONNREFUSED` errors.

```

```