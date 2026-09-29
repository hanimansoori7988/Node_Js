const fs=require('fs');
const readablaStream=fs.createReadStream('input.txt','utf-8');
const writableStream=fs.createWriteStream('output.txt');

readablaStream.pipe(writableStream);

writableStream.on('finish',()=>{
console.log('File copy completed');
});

readablaStream.on('error',(err)=>{
    console.error('error reading files:',err);
})

writableStream.on('error', (err) => {
  console.error('Error writing file:', err);
});