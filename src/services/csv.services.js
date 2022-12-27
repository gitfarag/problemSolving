import { getMinified, getSemified } from "./../util/csv.util.js";

const getRequiredData = async (arr) => {
  try {
    var data = [];
    arr.map(async (el) => {
      const { name, qty, brand } = el;
      const quant = parseInt(qty);
      data.push({ name, quant, brand });
    });
    // console.log(data)
    return data;
  } catch (error) {
    return error;
  }
};

const getAverage = async (array) => {
  try {
    var sou = [];
    var result = [];
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (sou.includes(element.name)) {
        for (let x = 0; x < result.length; x++) {
          const el = result[x];
          if (el.name === element.name) {
            el.average += element.quant;
          }
        }
      } else {
        sou.push(element.name);
        const name = element.name
        const average = element.quant
        result.push({name,average});
      }
    }
    // console.log(result)
    return result;
  } catch (error) {
    return error;
  }
};

const getPopular = async (array) => {
  try {
    // console.log(array)
    const semifiedData = await getSemified(array)
    // console.log(semifiedData);
    const minifiedData =await getMinified(semifiedData)
    // console.log(minifiedData)
    return minifiedData;
  } catch (error) {
    return error;
  }
};

export { getRequiredData, getAverage, getPopular };
