const getSemified = async(array)=>{
    try {
     var refMode = [];
     var brandMode = [];
     var result = [];
     for (let i = 0; i < array.length; i++) {
       const element = array[i];
       if (refMode.includes(element.name) && brandMode.includes(element.brand)) {
         for (let x = 0; x < result.length; x++) {
           const el = result[x];
           if (el.name === element.name && el.brand === element.brand) {
             // console.log("first")
             el.quant += element.quant;
           }
         }
       } else {
         refMode.push(element.name);
         brandMode.push(element.brand);
         result.push(element);
         // console.log(refMode.includes(element.name) && brandMode.includes(element.brand))
       }
     }
     return result
    } catch (error) {
     return error
    }
 }
 const getMinified =async (array)=>{
     try {
         // console.log(array)
         var refMode = [];
         var result = [];
         for (let i = 0; i < array.length; i++) {
             const element = array[i];
             if (refMode.includes(element.name)) {
                 for (let x = 0; x < result.length; x++) {
                   const el = result[x];
                   if (el.name === element.name && element.quant > el.quant) {
                     // console.log("first")
                     el.quant = element.quant;
                     el.brand = element.brand;
                   }
                 }
               } else {
                 refMode.push(element.name);
                 result.push(element);
                 // console.log(refMode.includes(element.name) && brandMode.includes(element.brand))
               }
             
         }  
         return(result)
     } catch (error) {
         return error
     }
 }
 export {getMinified, getSemified}