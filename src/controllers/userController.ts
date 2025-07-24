import { NextFunction, Request, Response } from "express";
import user from "../models/user.js";
import { compare, hash } from "bcrypt";


export const getAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const users = await user.find();
        return res.status(200).json({ message: "ok", data: users });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const postUserSignup = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await user.findOne({ email })
        if (existingUser) {
            res.status(404).json({ message: "User is Already Exist" })
        }
        const hashedPassword = await hash(password, 10);
        const users = new user({ name, email, password: hashedPassword });
        await users.save()

        return res.status(200).json({
            message: "ok", data: {
                id: users._id.toString(),
                name: users.name,
                email: users.email,
                password: users.password,
            }
        });
    } catch (error) {
        // console.error("Error fetching users:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}
export const postUserLogin = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { email, password } = req.body;
        const users = await user.findOne({ email })

        if (!user) {
            return res.status(401).json({
                message: "user not Register"
            })
        }
        const isPasswordCorrect = await compare(password, users.password)
        if (!isPasswordCorrect) {
            return res.status(403).send("Incorrect Pasword")
        }
        return res.status(200).json({
            message: "ok", data: {
                id: users._id.toString(),
                email: users.email,
                password: users.password,
            }
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}