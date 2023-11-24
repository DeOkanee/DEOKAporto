const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Masukkan nama pengguna: ', (username) => {
  fs.writeFile('notepad.txt', username, (err) => {
    if (err) throw err;
    console.log(`Nama pengguna ${username} telah disimpan di notepad.txt`);
    readline.close();
  });
});
