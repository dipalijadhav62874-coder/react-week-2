import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Product Information</h1>

      <div className={styles.product}>
        <h2>Laptop</h2>
        <p>Brand: Lenovo</p>
        <p className={styles.price}>Price: ₹50,000</p>
        <p>Category: Electronics</p>
      </div>
    </div>
  );
}

export default App;