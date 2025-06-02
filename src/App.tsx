import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs, addDoc, Timestamp } from "firebase/firestore";

type TProduct = {
  id: string,
  data_add: string,
  title: string,
  price: number
}
function App() {
  const [dateAdd, setDateAdd] = useState<any>()
  const [products, setProducts] = useState<TProduct[]>([])
  // Пример чтения данных
  const productsCollection = collection(db, "products");
  // 1. Получение всех продуктов
  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(productsCollection);
      const productsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as TProduct[];
      setProducts(productsData);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };


  const productsInit = [
    { data_add: "2025-06-01", title: "apple", price: 15.7 },
    { data_add: "2025-06-01", title: "tomato", price: 25.1 },
    { data_add: "2025-06-01", title: "orange", price: 20.12 }
  ];

  async function addProducts() {
    try {
      const productsCollection = collection(db, "products");
      // Добавляем каждый продукт по отдельности
      for (const product of productsInit) {
        const firestoreTimestamp = Timestamp.fromDate(new Date(product.data_add + 'T00:00:00+03:00'))

        const docRef = await addDoc(productsCollection, { ...product, date_add: firestoreTimestamp });
        console.log("Документ добавлен с ID: ", docRef.id);
      }

      console.log("Все продукты успешно добавлены!");
    } catch (error) {
      console.error("Ошибка при добавлении продуктов: ", error);
    }
  }

  useEffect(() => {
    fetchProducts()

  }, [])

  return (
    <main className="max-w-[400px] mx-auto bg-gray-300 h-screen p-2">
      <h1 className="text-3xl font-bold underline text-center">
        Hello world!
      </h1>
      {/* <button className="mr-10" onClick={fetchProducts}>app</button> */}

      <button onClick={addProducts}>add</button>
      <form action="">
        <input className="p-2 border" onChange={(e) => setDateAdd(e.currentTarget.value)} type="date" />
      </form>
      <div>
        {products.map(item => (<div key={item.id}>
          <p>{item.id} {item.title} </p>
        </div>))}
      </div>
    </main>
  )
}

export default App
