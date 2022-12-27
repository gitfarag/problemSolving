import { getRequiredData, getAverage, getPopular } from './../services/csv.services.js'
import { writeInfo } from "./../model/csv.model.js";
import csv from "csv-parser";
import fs from "fs";

const results = [];

const data = async (name) => {
  try {
    fs.createReadStream(`${name}`)
      .pipe(csv())
      .on("data", (data) => {
        
        results.push(data);
      })
      .on("end", async () => {
        const metAverage = await getRequiredData(results);
        console.log(results)
        const averageOrder = await getAverage(metAverage);
        // console.log(averageOrder)
        const computed = averageOrder.map((el) => {
          el.average = el.average / metAverage.length;
          delete el.quant;
          return el;
        });
        const metaPopular = await getRequiredData(results);
        const popular = await getPopular(metaPopular);
        const finalPopular =await popular.map(el=>{
          delete el.quant
          return el
        })
        await writeInfo(finalPopular,`1_${name}`)
        await writeInfo(computed,`0_${name}`)
        return(true)
        // console.log(computed)
        // console.log(popular)
      });

  } catch (error) {
    console.log(error);
  }
};



export {data}