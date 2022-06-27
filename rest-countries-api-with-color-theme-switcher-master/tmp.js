const search = "belguim of "
// const re = /\b(${search})\w*/i;
const re = new RegExp(`\\b(${search})\\w*`, "gi");
console.log(re);
const c = "Belguim of Republic";

console.log(re.test(c));