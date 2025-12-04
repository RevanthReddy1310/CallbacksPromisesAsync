function fun1() {
  return new Promise(function(resolved) {
    setTimeout(function() {
      resolved(1);
    }, 1000);
  });
}
function fun2(value) {
  return new Promise(function(resolved) {
    setTimeout(function() {
      resolved(value+1);
    }, 1000);
  });
}
function fun3(value) {
  return new Promise(function(resolved) {
    setTimeout(function() {
      resolved(value+1);
    }, 1000);
  });
}
// fun1().then(function() {
//   console.log("fun-1 Completed");
//   fun2().then(function() {
//     console.log("fun-2 Completed");
//     fun3().then(function() {
//       console.log("fun-3 Completed");
//     });
//   });
// });

async function execute(){
    try{
        const result1 = await fun1()
        const result2 = await fun2(result1)
        const result3 = await fun3(result2)
        console.log(result3);
    }
    catch(err){
        console.log(err)
    }
}
execute()