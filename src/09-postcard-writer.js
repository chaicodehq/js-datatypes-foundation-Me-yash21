/**
 * 💌 Indian Postcard Writer - String Advanced
 *
 * Dadi ji ko digital postcard likhna hai. Template literals se message banana,
 * addresses check karna, formatting karna — string advanced methods se
 * postcards likh!
 *
 * Methods to explore: template literals (`${}`), .startsWith(),
 *   .endsWith(), .padStart(), .padEnd(), .match()
 *
 * Functions:
 *
 *   1. writePostcard(sender, receiver, message)
 *      - Template literal se formatted postcard banao:
 *        "Priy {receiver},\n\n{message}\n\nAapka/Aapki,\n{sender}"
 *      - Agar koi bhi param string nahi hai ya trim ke baad empty hai, return ""
 *      - Example: writePostcard("Guddu", "Dadi ji", "Hum theek hain")
 *                 => "Priy Dadi ji,\n\nHum theek hain\n\nAapka/Aapki,\nGuddu"
 *
 *   2. isValidPincode(code)
 *      - Indian pincodes: 6 digits, "0" se start nahi hota
 *      - .startsWith("0") se check karo ki "0" se start nahi ho raha
 *      - .length === 6 check karo
 *      - Har character digit hona chahiye (use /^\d+$/ regex test or check each char)
 *      - Agar code string nahi hai, return false
 *      - Example: isValidPincode("400001") => true
 *      - Example: isValidPincode("012345") => false
 *
 *   3. formatPostcardField(label, value, width)
 *      - label.padEnd(width) + ": " + value — for aligned fields
 *      - Wait, let me simplify: return label.padEnd(12) + ": " + value
 *      - Agar width provided, use that instead of 12
 *      - Agar label ya value string nahi hai, return ""
 *      - Example: formatPostcardField("From", "Guddu") => "From        : Guddu"
 *      - Example: formatPostcardField("To", "Dadi ji", 8) => "To      : Dadi ji"
 *
 *   4. isFromState(address, stateCode)
 *      - .endsWith() se check karo ki address kisi state code se end hota hai
 *      - Agar address ya stateCode string nahi hai, return false
 *      - Example: isFromState("Guddu, Lucknow, UP", "UP") => true
 *      - Example: isFromState("Priya, Mumbai, MH", "UP") => false
 *
 *   5. countVowels(message)
 *      - .match(/[aeiouAEIOU]/g) se saare vowels dhundho
 *      - Return: count (match result ki length, ya 0 agar null hai)
 *      - Agar message string nahi hai, return 0
 *      - Example: countVowels("Namaste India") => 6
 *
 * @example
 *   writePostcard("Guddu", "Dadi ji", "Hum theek hain")
 *   isValidPincode("400001")   // => true
 *   countVowels("Namaste")     // => 3
 */
export function writePostcard(sender, receiver, message) {
  // Your code here
  let params = [sender,receiver,message];

  if(params.some((param)=> typeof param !== "string" || param.trim() === "")){
    return "";
  }
  let postcard = `Priy ${receiver},\n\n${message}\n\nAapka/Aapki,\n${sender}`
  return postcard;
}

export function isValidPincode(code) {
  // Your code here
  if(typeof code !== "string"){
    return false;
  }
  if(code.startsWith("0") || code.length !== 6){
    return false;
  }

  let matchResult = code.match(/^\d+$/);
  // matchResult is null then return false (!null)
  if(!matchResult){
    return false;
  }
  return true;
}

export function formatPostcardField(label, value, width) {
  // Your code here
  if(typeof label !== "string" || typeof value !== "string"){
    return "";
  }
  
  let padLength = (width) ? width : 12 ;
  return label.padEnd(padLength) +": "+ value
}

export function isFromState(address, stateCode) {
  // Your code here
  if(typeof address !== "string" || typeof stateCode !== "string"){
    return false;
  }
  return address.endsWith(stateCode);
}

export function countVowels(message) {
  // Your code here
  if(typeof message !== "string"){
    return 0;
  }
  let matchResult = message.match(/[aeiouAEIOU]/g)
  // if matchResult is null (means there is no vowel in stirng) then return 0
  if(!matchResult){
    return 0
  }
  return matchResult.length
}
