import { getRequiredData,getPopular } from '../services/csv.services.js'
import { info } from '../../testdata.js';
var meta=[]
describe("Process To Get Name & Popular-brand", () => { 
beforeAll(async()=>{
  meta = await getRequiredData(info)
})
  it(`It should process data from csv`, async () => {
    expect(meta[0]).toEqual({ name: 'shoes', quant: 2, brand: 'Air' })
  }); 
  it(`It should get popular brand`, async () => {
    const semifiedData = await getPopular(meta)
    expect(semifiedData[0].brand).toEqual('BonPied')
    // console.log(semifiedData)
  });   
});
