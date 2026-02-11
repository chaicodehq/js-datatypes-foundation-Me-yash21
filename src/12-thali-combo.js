/**
 * 🍽️ Thali Combo Platter - Mixed Methods Capstone
 *
 * Grand Indian Thali restaurant mein combo platter system banana hai.
 * String, Number, Array, aur Object — sab methods mila ke ek complete
 * thali banao. Yeh capstone challenge hai — sab kuch combine karo!
 *
 * Data format: thali = {
 *   name: "Rajasthani Thali",
 *   items: ["dal baati", "churma", "papad"],
 *   price: 250,
 *   isVeg: true
 * }
 *
 * Functions:
 *
 *   1. createThaliDescription(thali)
 *      - Template literal, .join(", "), .toUpperCase(), .toFixed(2) use karo
 *      - Format: "{NAME} (Veg/Non-Veg) - Items: {items joined} - Rs.{price}"
 *      - name ko UPPERCASE karo, price ko 2 decimal places tak
 *      - isVeg true hai toh "Veg", false hai toh "Non-Veg"
 *      - Agar thali object nahi hai ya required fields missing hain, return ""
 *      - Required fields: name (string), items (array), price (number), isVeg (boolean)
 *      - Example: createThaliDescription({name:"Rajasthani Thali", items:["dal","churma"], price:250, isVeg:true})
 *                 => "RAJASTHANI THALI (Veg) - Items: dal, churma - Rs.250.00"
 *
 *   2. getThaliStats(thalis)
 *      - Array of thali objects ka stats nikalo
 *      - .filter() se veg/non-veg count
 *      - .reduce() se average price
 *      - Math.min/Math.max se cheapest/costliest
 *      - .map() se saare names
 *      - Return: { totalThalis, vegCount, nonVegCount, avgPrice (2 decimal string),
 *                  cheapest (number), costliest (number), names (array) }
 *      - Agar thalis array nahi hai ya empty hai, return null
 *
 *   3. searchThaliMenu(thalis, query)
 *      - .filter() + .includes() se search karo (case-insensitive)
 *      - Thali match karti hai agar name ya koi bhi item query include kare
 *      - Agar thalis array nahi hai ya query string nahi hai, return []
 *      - Example: searchThaliMenu(thalis, "dal") => thalis with "dal" in name or items
 *
 *   4. generateThaliReceipt(customerName, thalis)
 *      - Template literals + .map() + .join("\n") + .reduce() se receipt banao
 *      - Format:
 *        "THALI RECEIPT\n---\nCustomer: {NAME}\n{line items}\n---\nTotal: Rs.{total}\nItems: {count}"
 *      - Line item: "- {thali name} x Rs.{price}"
 *      - customerName UPPERCASE mein
 *      - Agar customerName string nahi hai ya thalis array nahi hai/empty hai, return ""
 *
 * @example
 *   createThaliDescription({name:"Rajasthani Thali", items:["dal"], price:250, isVeg:true})
 *   // => "RAJASTHANI THALI (Veg) - Items: dal - Rs.250.00"
 */
export function createThaliDescription(thali) {
  // Your code here
  // if thali is not object , or a null ,then return ""
  if(typeof thali !== "object" || Array.isArray(thali) || thali === null){
    return "";
  }
  
  let thaliName = thali.name;
  let thaliItems = thali.items;
  let thaliPrice = thali.price;
  // if required files are empty then return null
  if(thaliName.trim() === "" || thaliItems === undefined || thaliItems.length === 0 ||  !thaliPrice){
    return ""
  }

  return `${thaliName.toUpperCase()} (${(thali.isVeg)?"Veg":"Non-Veg"}) - Items: ${thaliItems.join(", ")} - Rs.${thaliPrice.toFixed(2)}`
}

export function getThaliStats(thalis) {
  // Your code here
  if(!Array.isArray(thalis) || thalis.length === 0){
    return null
  }

  let thaliStats = {}
  thaliStats.totalThalis = thalis.length;
  // veg and non-veg thalis object array
  let vegThalis = thalis.filter((thali)=> thali.isVeg)
  let non_VegThalis = thalis.filter((thali)=> !thali.isVeg);
  thaliStats.vegCount = vegThalis.length;
  thaliStats.nonVegCount = non_VegThalis.length;

  // averagePrice of thali
  let totalSumOfPrices = thalis.reduce((acc,thali)=>( acc + thali.price ),0);
  thaliStats.avgPrice = (totalSumOfPrices/thalis.length).toFixed(2);

  // array of the prices of all thalis
  let thaliPrices = thalis.map((thali)=> thali.price);
  thaliStats.cheapest = Math.min(...thaliPrices)
  thaliStats.costliest = Math.max(...thaliPrices)

  // all names of the thalis
  let thaliNames = thalis.map((thali)=> thali.name )
  thaliStats.names = [...thaliNames];


  return thaliStats
}

export function searchThaliMenu(thalis, query) {
  // Your code here
  if(!Array.isArray(thalis) || thalis.length === 0 || typeof query !== "string"){
    return [];
  }

  let resultThalis = thalis.filter((thali)=>{
    let thaliName = thali.name;
    thaliName = thaliName.trim().toLowerCase();

    let queryInLowerCase = query.trim().toLowerCase()
    if(thaliName === queryInLowerCase ||thaliName.includes(queryInLowerCase) ){
      return true;
    }

    let thaliItems = thali.items;
    //check that is there query in thali items. 
    // first we check that is query as it is  in items or not
    if(thaliItems.includes(queryInLowerCase)){
      return true;
    }

    // now check each item of thali items that, does it contain the query  stirng
    for(let i = 0; i<thaliItems.length;i++){
      let currentItem = thaliItems[i]
      if(currentItem.includes(queryInLowerCase))
        return true;
    }

    return false;
  })

  return resultThalis;
}

export function generateThaliReceipt(customerName, thalis) {
  // Your code here
  if(typeof customerName !== "string" || !Array.isArray(thalis) || thalis.length === 0){
    return ""
  }

  let lineItemsArr = thalis.map((thali)=>{
    let thaliName  = thali.name;

    return `- ${thaliName} x Rs.${thali.price}`
  })

  let total = thalis.reduce((acc,thali)=>(acc + thali.price),0);
  let itemsCount = thalis.length;

  let billFormat = `THALI RECEIPT\n---\nCustomer: ${customerName.toUpperCase()}\n${lineItemsArr.join("\n")}\n---\nTotal: Rs.${total}\nItems: ${itemsCount}`

  return billFormat

}
