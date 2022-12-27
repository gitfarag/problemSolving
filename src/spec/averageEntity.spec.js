import { getRequiredData, getAverage } from '../services/csv.services.js'
import { info } from '../../testdata.js';
var meta=[]
describe("Process To Get Name & Average", () => { 
beforeAll(async()=>{
  meta = await getRequiredData(info)
})
  it(`It should process data from csv`, async () => {
    // console.log(meta)
    expect(meta[0]).toEqual({ name: 'shoes', quant: 2, brand: 'Air' })
  }); 
  it(`It should get name & total-average`, async () => {
    const res = await getAverage(meta)
    expect(res[0].average/meta.length).toEqual(3)
    // console.log(res)
  });   
});
