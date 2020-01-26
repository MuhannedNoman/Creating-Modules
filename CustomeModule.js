const sum = (num1, num2) => num1 + num2 ;
const PI = 3.14;
class SomeObject {
    constructor(){
        console.log('Object created');
    }
}
// Export the items individually
// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.SomeObject = SomeObject;

// Export the items in one line.
module.exports = {sum : sum, PI : PI, SomeObject : SomeObject};