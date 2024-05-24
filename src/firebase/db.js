import { getFirestore, collection, getDocs, query, where, doc, getDoc } from "firebase/firestore"
import { app } from "./config"

const db = getFirestore(app)

export const getItems = async () => {
    const querySnapshot = await getDocs(collection(db, "items"))

    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`)
    })
}

export const getItemFromCategory = async (category) => {
    const q = category ? query(collection(db, "items"), where("category", "==", "category")) : collection(db, "items")
    const querySnapshot = await getDocs(q)
    const items = []

    querySnapshot.forEach((doc) => {
    items.push({...doc.data(), id: doc.id})
    })

    return items
}

export const getItem = async (id) => {
  const docRef = doc(db, "items", id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data())
  } else {
    console.log("No such document!")
  }
}

export default getItemFromCategory