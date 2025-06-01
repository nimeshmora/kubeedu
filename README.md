# KubeEdu

**KubeEdu** is an open-source, beginner-friendly platform designed to help you learn and teach Kubernetes through a simple, interactive web UI.

Our mission is to hide the complexity of Kubernetes (K8s) and make core concepts accessible to everyone—no prior CLI or YAML experience required.

---

## 🚀 Key Features

- **UI-Driven Learning:** Fetch pod details, deploy applications, and troubleshoot issues—all from an intuitive web interface.
- **Guided Tutorials:** Step-by-step labs that teach you real-world Kubernetes tasks.
- **Command Translator:** See the exact `kubectl` command or YAML manifest behind every UI action.
- **Troubleshooting Assistant:** Get clear explanations and suggested fixes for common K8s errors.
- **Teacher Tools:** Create and share custom scenarios, track learner progress, and run classroom exercises.
- **Works Locally:** Easily connect to your own Minikube, Kind, or VirtualBox-based K8s cluster.

---

## 🎯 Who Is This For?

- **Learners:** Anyone new to Kubernetes who wants to master the basics without wrestling with the CLI.
- **Teachers & Instructors:** Educators looking for a hands-on, visual way to teach Kubernetes concepts in classrooms, workshops, or online courses.

---

## 📚 Example Workflows

- **Fetch Pod Details:** Click a button to list all pods and see their status, logs, and events.
- **Deploy an App:** Use the UI to deploy NGINX or any sample app—see the equivalent `kubectl` command.
- **Troubleshoot:** If a pod fails, KubeEdu explains the error and suggests next steps.
- **Learn by Doing:** Complete guided labs to reinforce each concept, from scaling deployments to fixing CrashLoopBackOff errors.

---

## 🧑‍🏫 For Teachers

- **Scenario Builder:** Create custom learning scenarios for your students.
- **Progress Tracking:** Monitor learner progress and completed labs.
- **Classroom Mode:** Run group exercises and track results in real time.

---

## 🛠️ Tech Stack

### Backend

- **Framework:** FastAPI (Python)
- **Database:** MongoDB with Motor (async driver)
- **Authentication:** JWT with bcrypt
- **API Documentation:** Swagger/OpenAPI

### Frontend

- **Framework:** React with TypeScript
- **UI Components:** shadcn/ui
- **State Management:** React Query
- **Routing:** React Router DOM
- **API Client:** Axios
- **Forms:** React Hook Form
- **Build Tool:** Vite
- **Package Manager:** Bun

### Development Tools

- **Version Control:** Git
- **Code Quality:** ESLint, TypeScript
- **API Testing:** Swagger UI
- **Development Server:** Uvicorn (backend), Vite Dev Server (frontend)

---

## 🚀 Getting Started

### Prerequisites

- Python 3.12+
- Node.js 18+ or Bun
- Package Manager (npm, pnpm, or bun)
- MongoDB
- Git

### Backend Setup

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/kubeedu.git
   cd kubeedu
   ```

2. Set up Python virtual environment

   ```bash
   python -m venv env
   source env/bin/activate  # On Windows use: .\env\Scripts\activate
   ```

3. Install backend dependencies

   ```bash
   cd backend
   pip install -r requirements.txt
   ```

4. Set up environment variables

   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. Start the backend server

   ```bash
   make run  # Or: uvicorn main:app --reload
   ```

   The backend will be available at [http://localhost:8000](http://localhost:8000)

### Frontend Setup

1. Navigate to frontend directory

   ```bash
   cd frontend
   ```

2. Install dependencies

   ```bash
   # Using bun
   bun install
   # OR using npm
   npm install
   # OR using pnpm
   pnpm install
   ```

3. Set up environment variables

   ```bash
   cp .env.example .env
   ```

4. Start the development server

   ```bash
   # Using bun
   bun run dev
   # OR using npm
   npm run dev
   # OR using pnpm
   pnpm run dev
   ```

   The frontend will be available at [http://localhost:5173](http://localhost:5173)

### Available Scripts

Backend:

- `make run` - Start the backend server
- `make install` - Install backend dependencies

Frontend (replace `bun` with `npm` or `pnpm` based on your package manager):

- `bun run dev` - Start the development server
- `bun run build` - Build for production
- `bun run lint` - Run ESLint
- `bun run preview` - Preview production build

### MongoDB Setup

1. Using Docker:

   ```bash
   docker run --name mongodb -d -p 27017:27017 mongo
   ```

2. Or install MongoDB locally following the [official documentation](https://docs.mongodb.com/manual/installation/)

### Environment Variables

Backend (.env):

```plaintext
# MongoDB Configuration
MONGODB_URL=mongodb://localhost:27017
DATABASE_NAME=kubeedu

# JWT Configuration
SECRET_KEY=your-super-secret-key-change-this
ACCESS_TOKEN_EXPIRE_MINUTES=30

# Server Configuration
PORT=8000
HOST=0.0.0.0
```

Frontend (.env):

```plaintext
VITE_API_URL=http://localhost:8000/api/v1
```

---

## 💡 Share Your Ideas

We want your feedback!  
Have an idea, feature request, or suggestion?  
👉 [Share it in our Ideas Board!](https://github.com/nimeshmora/kubeedu/discussions)

---

## 📜 License

This project is licensed under the [MIT License]([LICENSE](https://github.com/nimeshmora/kubeedu?tab=MIT-1-ov-file#readme)).

---

## 🙏 Acknowledgements

Inspired by the Kubernetes community and educators everywhere.  
Special thanks to all contributors and early testers!

---

Make learning Kubernetes visual, simple, and fun with **KubeEdu**!  
Let’s build the best K8s learning platform—together.
