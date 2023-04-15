
async function loadEthers() {
  if (typeof window.ethers === 'undefined') {
    throw new Error('No se pudo cargar la biblioteca ethers.js.');
  }
  return window.ethers;
}

async function getPrice() {
  const ethers = await loadEthers();
  
  const URL = 'https://eth-sepolia.g.alchemy.com/v2/5N7C78UQIqqc4eN0cCBxO2wF_Z3ecJRq';
  
  const abi = [];
  

  const contractAddress = "poner aquí el address del contrato";

  const provider = new ethers.providers.JsonRpcProvider(URL);
  const apiContract = new ethers.Contract(contractAddress, abi, provider);

  const price = await apiContract.price();
  return price;
}

async function displayPrice() {
  try {
    const priceElement = document.getElementById('price');
    const price = await getPrice();
    priceElement.textContent = `La temperatura actual es: ${price.toString()}`;
  } catch (error) {
    console.error('Error al obtener el último precio:', error);
  }
}

displayPrice();