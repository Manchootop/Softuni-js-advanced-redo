class Stringer {
    constructor(string, length) {
        this.InnerString = string;
        this.InnerLength = length;
    } 

    increase(num) { 
        this.InnerLength += num;
    }

    decrease(num){
        if(this.InnerLength - num < 0) {
            this.InnerLength = 0;
        } else {
            this.InnerLength -= num;
        }
    }

    toString() {
        if(this.InnerLength < this.InnerString.length){
        return this.InnerString.substring(0, this.InnerLength) + '...';
        
    } else {
            return this.InnerString;
        }
    }
}

module.exports = {
    Stringer,
}