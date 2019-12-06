//可以直接写函数和变量
// export let fn=()=>{console.log("Hello,baby!")}
//默认只输出一个功能
let fn=()=>{console.log("默认一个功能")}
export {fn as default}
//只输出一个功能，匿名