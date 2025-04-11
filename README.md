# 🤖 LLM Autograder
A full-stack application that tests the coding capabilities of an LLM. It randomly selects a coding question, has an LLM generate a solution and test cases (without seeing the solution during test generation), and evaluates the correctness using a secure sandbox.

## 🧩 Features
- Random LeetCode-style question selection
- Code and unit test generation by LLM (OpenAI GPT-4)
- Mocha-style JS test evaluation using `vm2`
- React.js frontend for interactive usage

## 📁 Project Structure
```
LLMautograder/
├── backend/
│   ├── controllers/         # API logic
│   ├── services/            # LLM + test runner logic
│   ├── routes/              # Express routes
│   ├── data/                # LeetCode-like question bank
│   └── app.js               # Server entry
├── frontend/
│   └── src/
│       ├── components/      # React UI components
│       ├── App.jsx
│       ├── index.js
│       └── api.js
├── .env                     # Environment variables
└── README.md
```

## 🚀 Getting Started
### 1. Clone the Repo
```bash
git clone https://github.com/AanviKothari456/LLMautograder.git
cd LLMautograder
```

### 2. Setup Backend
```bash
cd backend
npm install
```
Create a `.env` file:
```
PORT=5000
OPENAI_API_KEY=your_openai_api_key_here
```
Then run:
```bash
node app.js
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
npm start
```

Frontend will run on `http://localhost:3000` and connect to `localhost:5000` backend.

## 🔐 Security Notes
- All code execution is sandboxed using `vm2` to prevent unsafe eval.
- The test generator never sees the solution — test independence is enforced by design.

## 📌 Future Improvements
- Multi-language support (Python, Java, etc.)
- Docker-based secure execution environments
- LLM benchmark tracking over time

## 🧠 Powered By
- OpenAI GPT-4
- React.js + Express.js
- vm2 sandbox for secure code evaluation
