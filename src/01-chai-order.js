/**
 * ☕ Chai Tapri Order System - String Basics
 *
 * Guddu ki chai tapri hai college ke bahar. Customers order dete hain,
 * aur Guddu ko string methods use karke orders handle karne hain.
 * Tu Guddu ka helper hai — basic string methods seekh aur orders process kar!
 *
 * Methods to explore: .length, .toUpperCase(), .toLowerCase(),
 *   .trim(), .includes(), .charAt(), .at()
 *
 * Functions:
 *
 *   1. getChaiOrderLength(order)
 *      - Pehle .trim() se extra spaces hatao, phir .length se count karo
 *      - Agar order string nahi hai, return -1
 *      - Example: getChaiOrderLength("  masala chai  ") => 11
 *
 *   2. shoutChaiOrder(order)
 *      - Guddu apne helper ko UPPERCASE mein order shout karta hai
 *      - Pehle .trim() karo, phir .toUpperCase()
 *      - Agar order string nahi hai ya trim ke baad empty hai, return ""
 *      - Example: shoutChaiOrder("masala chai") => "MASALA CHAI"
 *
 *   3. whisperChaiOrder(order)
 *      - Jab koi secretly order karta hai, lowercase mein likho
 *      - Pehle .trim() karo, phir .toLowerCase()
 *      - Agar order string nahi hai ya trim ke baad empty hai, return ""
 *      - Example: whisperChaiOrder("ADRAK CHAI") => "adrak chai"
 *
 *   4. hasSpecialIngredient(order, ingredient)
 *      - Check karo ki order mein koi special ingredient hai ya nahi
 *      - Dono ko .toLowerCase() karo, phir .includes() use karo
 *      - Agar koi bhi string nahi hai, return false
 *      - Example: hasSpecialIngredient("Elaichi Masala Chai", "elaichi") => true
 *
 *   5. getFirstAndLastChar(order)
 *      - .charAt(0) se pehla character aur .at(-1) se aakhri character nikalo
 *      - Pehle .trim() karo
 *      - Return: { first, last }
 *      - Agar order string nahi hai ya trim ke baad empty hai, return null
 *      - Example: getFirstAndLastChar("masala chai") => { first: "m", last: "i" }
 *
 * @example
 *   getChaiOrderLength("  masala chai  ")  // => 11
 *   shoutChaiOrder("masala chai")          // => "MASALA CHAI"
 *   hasSpecialIngredient("Elaichi Chai", "elaichi")  // => true
 */
export function getChaiOrderLength(order) {
  // Your code here
  if(typeof order !== "string"){
    return -1;
  }else{
    let trimed_order = order.trim();
    return trimed_order.length;
  }

}

export function shoutChaiOrder(order) {
  // Your code here
  if(typeof order !== "string"){
    return "";
  }else{
    let trimed_order = order.trim();
    let lengthOfOrder = trimed_order.length;

    if(lengthOfOrder === 0 ){
      return "";
    }

    return trimed_order.toUpperCase();
  }

}

export function whisperChaiOrder(order) {
  // Your code here
  if(typeof order !== "string"){
    return "";
  }else{
    let trimed_order = order.trim();
    let lengthOfOrder = trimed_order.length;

    if(lengthOfOrder === 0 ){
      return "";
    }

    return trimed_order.toLowerCase();
  }

}

export function hasSpecialIngredient(order, ingredient) {
  // Your code here

  if(typeof order !== "string" || typeof ingredient !== "string"){
    return false;
  }

  let trimed_order = order.trim().toLowerCase();
  let trimed_ingredient = ingredient.trim().toLowerCase();

  if(trimed_order.includes(trimed_ingredient)){
    return true;
  }else{
    return false;
  }
}

export function getFirstAndLastChar(order) {
  // Your code here
  if(typeof order !== "string"){
    return null;
  }

  let trimed_order = order.trim();
  let lengthOfOrder = trimed_order.length;

  if(!lengthOfOrder){
    return null;
  }

  let first = trimed_order.charAt(0);
  let last= trimed_order.at(-1)

  return {
    first,
    last
  }
}
