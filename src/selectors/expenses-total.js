export default (expense)=>{
    return expense
    .map((expense)=>expense.amount)
    .reduce((acc,val)=>acc+val,0);
};