const express = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

const router = express.Router();


// ============================
// REGISTER
// ============================

router.post("/register", async (req, res) => {

    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Please fill all fields"
            });
        }

        User.findByEmail(email, async (err, results) => {

            if (err) {
                console.log(err);

                return res.status(500).json({
                    message: "Database error"
                });
            }

            if (results.length > 0) {
                return res.status(400).json({
                    message: "Email already registered"
                });
            }

            const hashedPassword =
                await bcrypt.hash(password, 10);

            User.create(
                name,
                email,
                hashedPassword,
                (err, result) => {

                    if (err) {
                        console.log(err);

                        return res.status(500).json({
                            message: "Registration failed"
                        });
                    }

                    res.status(201).json({
                        message: "Registration successful!",
                        userId: result.insertId
                    });

                }
            );

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error"
        });

    }

});


// ============================
// LOGIN
// ============================

router.post("/login", (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Please enter email and password"
        });
    }

    User.findByEmail(email, async (err, results) => {

        if (err) {
            console.log(err);

            return res.status(500).json({
                message: "Database error"
            });
        }

        if (results.length === 0) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const user = results[0];

        const passwordMatch =
            await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        res.json({
            message: "Login successful!",
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    });

});


module.exports = router;