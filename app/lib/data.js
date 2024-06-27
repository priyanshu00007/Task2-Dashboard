import { Product, product, User } from "./models";
import { connectToDB } from "./utils";

// Fetch users with pagination and search
export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;

  try {
    await connectToDB();
    const count = await User.find({ username: { $regex: regex } }).countDocuments();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
  }
};

export const fetchUserById = async (id) => {
  try {
    await connectToDB(); 
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("unable to fetch user: " + id);
  }
};

export const fetchproducts = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;

  try {
    await connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).countDocuments();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.error(err);
    return { count: 0, products: [] };
  }
};
export const fetchProductById = async (id) => {
  try {
    await connectToDB(); // Ensure await is used
    const product = await product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    return null; // Return null on error
  }
};


export const fetchProduct = async (id) => {
  try {
    await connectToDB(); 
    const product = await User.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("unable to fetch products: " + id);
  }
};