function shuffle(array) {
  var copy = [],
    n = array.length,
    i;

  // While there remain elements to shuffle…
  while (n) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * array.length);

    // If not already shuffled, move it to the new array.
    if (i in array) {
      copy.push(array[i]);
      delete array[i];
      n--;
    }
  }

  return copy;
}

// --- GET PRODUCTS AND SHUFFLE ARRAY ---
async function handleProductsRandom() {
  // Se define un array vacio
  let products = [];

  // Se define la referencia para la coleccion a productos
  let reference = collection(Firebase, "products");
  // Se define un snapshot de la referencia
  let querySnapshot = await getDocs(reference);
  // Se recorre el snapshot
  // Cada documento se agrega al array
  querySnapshot.forEach((doc) => {
    products.push(doc.data());
  });

  // Se pasa por la funcion para shuffle y devuelve un nuevo array
  let productsRandom = shuffle(products);
  // Devolvemos el array
  return productsRandom;
}

export { shuffle, handleProductsRandom };
