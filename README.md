Setup the Server Folder
cd server
npm init -y
npm install express mongoose cors dotenv

Run the Server
node server.js

Phase 2: The Frontend (Client)

Create the React App
Open a new terminal window. Navigate back to the root oracle-tarot folder.

cd ..
npm create vite@latest client -- --template react
cd client
npm install



Install Dependencies
npm install react-router-dom lucide-react framer-motion clsx tailwind-merge



Setup Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


Start the Frontend
npm run dev
