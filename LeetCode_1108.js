// 1108. Defanging an IP Address
/*Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".*/


// Example 1:
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

// Example 2:
// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"


var address = "255.100.50.0";
var result123 = [];

var defangIPaddr = function(address) {
    // for (var c in address){
        
    //     if(address[c] === "."){
    //         result123.push('[.]');
    //     }else {
    //         result123.push(address[c]);
    //     }
    // }
    // console.log(address);
    // return address.replace(/[.]/g, "[.]");
    return address.replace(/\./g, "[.]"); // replace only replaces first element which matches, adding /g will replace all matching element. It's called modifier, "g = global modifier" 
    // return result123.join("");
};

console.log(defangIPaddr(address));

