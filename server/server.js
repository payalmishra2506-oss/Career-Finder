require("dotenv").config();

const express = require("express");
const cors = require("cors");

const db = require("./db");
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);


// ============================
// HOME / TEST ROUTE
// ============================

app.get("/", (req, res) => {
    res.json({
        message: "Career Finder Backend is running!"
    });
});


// ============================
// DATABASE TEST
// ============================

app.get("/api/test-db", (req, res) => {

    db.query("SELECT 1 AS result", (err, results) => {

        if (err) {
            console.log("Database error:", err);

            return res.status(500).json({
                message: "Database connection failed",
                error: err.message
            });
        }

        res.json({
            message: "Database connected successfully!",
            result: results
        });
    });

});


// ============================
// START SERVER
// ============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});