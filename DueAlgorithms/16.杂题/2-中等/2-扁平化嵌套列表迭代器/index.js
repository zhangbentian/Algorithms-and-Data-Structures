/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
 class NestedIterator {
    constructor(nestedList) {
        nestedList = nestedList.join('').replace(/\D/g,'')
        this.nestedList = nestedList.split('');
        this.nestedList = this.nestedList.map(item=>{
            console.log();
            return item*1;
        })
        console.log(this.nestedList);
    }
    /**
     * @this NestedIterator
     * @returns {boolean}
     */
    hasNext() {
        return this.nestedList.length > 0;
    }
    /**
     * @this NestedIterator
     * @returns {integer}
     */
    next() {
        const val = this.nestedList[0];
        this.nestedList = this.nestedList.slice(1);
        return  val ;
    }
}


const test = new NestedIterator([[1,1],2,[1,1]])

