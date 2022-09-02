const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./lotto.sqlite');
console.log('Connected to the Lotto DB.');

db.serialize(()=>{
    db.run(`drop table if exists lotto`);
    db.run(`create table lotto( id integer primary key autoincrement, name text default 'Mr. Lotto', message text, nums text,created text)`);
    db.run(`insert into lotto (message, nums, created) values(?, json_array(?,?,?,?,?,?), ?)`, ['Hello!', 1,2,3,4,5,6, Date()]);
    db.run(`insert into lotto (message, nums, created) values(?, json_array(?,?,?,?,?,?), ?)`, ['Good day to buy Lotto!', 11,12,13,14,15,16, Date()]);
    db.all(`select * from lotto`, (err, rows)=> {
        console.log(rows);
        console.log('Lotto DB Setup Complete!');    
    });


});

db.close();
