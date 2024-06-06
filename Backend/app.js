import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authorRouter from './src/routes/author.routes.js';
import adminRouter from './src/routes/admin.routes.js';
import reviewersRoute from './src/routes/reviewers.routes.js';
import publicRoute from './src/routes/public.routes.js';

const app = express();

app.use(
  cors({
    origin: "*",
  })
); // Allow CORS for all origins

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // Corrected the method name to express.urlencoded
app.use(express.static("public"));
app.use(cookieParser());

// Error handling middleware to ensure CORS headers are set for all responses
app.use((err, req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*'); // Set Allow-Origin to wildcard '*' to allow all origins
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.set('Access-Control-Allow-Credentials', 'true');
  next(err);
});

// Import routes
app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳');
});

app.use("/api/v1/author", authorRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/reviewer", reviewersRoute);
app.use("/api/v1/public", publicRoute);

export { app };
