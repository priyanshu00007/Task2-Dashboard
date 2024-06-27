"use server";
import { revalidatePath } from "next/cache";
import { connectToDB } from "./utils";
import { redirect } from "next/dist/server/api-utils";
import bcrypt from "bcrypt";
import { Product, User } from "./models";

export const addUser = async (formData) => {
    const { username, email, password, phone, address, isAdmin, isActive } = formData;
    try {
        connectToDB();

        const salt = await bcrypt.genSalt(10); 
        const hashPassword = await bcrypt.hash(password, salt);
        
        const newUser = new User({
            username,
            email,
            password: hashPassword,
            phone,
            address,
            isAdmin,
            isActive 
        });

        await newUser.save();
    } catch (error) {
        console.error(error);
        throw new Error("Failed to create user: " + error.message);
    }

    revalidatePath("/dashboard/users/");
    redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } = formData;
    try {
        connectToDB();

        const updateFields = {
            username,
            email,
            password,
            phone,
            address,
            isAdmin,
            isActive
        };
        Object.keys(updateFields).forEach(key => {
            if (updateFields[key] === "" || updateFields[key] === undefined) {
                delete updateFields[key];
            }
        });

        await User.findByIdAndUpdate(id, updateFields);
    } catch (error) {
        console.error(error);
        throw new Error("Failed to update user: " + error.message);
    }

    revalidatePath("/dashboard/users/");
    redirect("/dashboard/users/");
};


export const deleteUsers = async (formData) => {
    const { id } = formData;
    try {
        connectToDB();
        await User.findByIdAndDelete(id);
    } catch (error) {
        console.error(error);
        // throw new Error("Failed to delete user: " + error.message);
    }

    revalidatePath("/dashboard/users/");
};

export const addProduct = async (formData) => {
    const { title, desc, price, stock, color, size } = formData;
    try {
        connectToDB();

        const newProduct = new Product({
            title,
            desc,
            price,
            stock,
            color,
            size
        });

        await newProduct.save();
    } catch (error) {
        console.error(error);
        // throw new Error("Failed to create product: " + error.message);
    }

    revalidatePath("/dashboard/products/");
    redirect("/dashboard/products");
};


export const deleteProducts = async (formData) => {
    const { id } = formData;
    try {
        connectToDB();
        await Product.findByIdAndDelete(id);
    } catch (error) {
        console.error(error);
        // throw new Error("Failed to delete product: " + error.message);
    }

    revalidatePath("/dashboard/products/");
};


export const updateProducts = async (formData) => {
    const { title, desc, price, stock, color, size  } = formData;
    try {
        connectToDB();

        const updateFields = {
            title, desc, price, stock, color, size 
        }; 
        Object.keys(updateFields).forEach(key => {
            if (updateFields[key] === "" || updateFields[key] === undefined) {
                delete updateFields[key];
            }
        });

        await Product.findByIdAndUpdate(id, updateFields);
    } catch (error) {
        console.error(error);
        throw new Error("Failed to update Products: " + error.message);
    }

    revalidatePath("/dashboard/Products/");
    redirect("/dashboard/Products/");
};