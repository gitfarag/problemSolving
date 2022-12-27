import ObjectsToCsv from "objects-to-csv";
const writeInfo =async (array,name) => {
     const csv = new ObjectsToCsv(array);
     
     // Save to file:
     await csv.toDisk(`${name}`);
     
     // Return the CSV file as string:
     console.log(await csv.toString());
    }
export {writeInfo}
