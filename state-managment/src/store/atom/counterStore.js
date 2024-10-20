import {atom, selector} from "recoil";


export const counterAtom = atom({
    key: "counter",
	default: 0
})

// this selector nothing to do with getting value form store or update value it use if something depend on that 
// value so we use selector to get value form store and then after logic then we will return that value so that original 
// component did not re-render
// selectors file
export const evenSelector = selector({
    key:"isEvenSelector",
    // this funtion will have get parameter
    get:function ({ get }){
        const currentCount = get(counterAtom);
        const isEven = currentCount%2 == 0
        return isEven;
    },  
}) 