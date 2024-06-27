import Search from "@/app/ui/dashboard/search/search";
import styles from "./product.module.css";
import Link from "next/link";
import { fetchproducts } from "@/app/lib/data";
import Pagination from "../pagination/pagination";

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = parseInt(searchParams?.page) || 1;
  const { count, products } = await fetchproducts(q, page);


  console.log("products", products)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/addProducts">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={styles.product}>
                  <img
                    src={product.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {product.productname}
                </div>
              </td>
              <td>{product.email}</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>{product.isAdmin ? "Admin" : "Client"}</td>
              <td>{product.isActive ? "active" : "passive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  {/* <form action={deleteProducts}>  */}
                    <input type="hidden" name="id" value={products.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  {/* </form> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default ProductsPage;
