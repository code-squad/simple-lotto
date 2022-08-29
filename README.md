# simple-lotto

simple app for node.js and mysql

## QuickStart

### Setup (Ubuntu Linux)

```bash
sudo apt install nodejs
sudo apt install npm

git clone https://github.com/code-squad/simple-lotto/
cd simple-lotto
cp sample.env .env
npm install
```

### Update .env

```
$ nano .env
# after save, (ctrl-x) y (enter)
```

```
DB_HOST="DB HOST HERE"
DB_NAME="mydb"
DB_USER="admin"
DB_PW="Password Here"
```

### start

```
npm start
```

### Example

```
Type some message:(delete: dd, quit: q!)>
a
No. 4    This is first message!    [1,15,18,32,33,41]    Mon Aug 29 2022 07:45:34 GMT+0000 (Coordinated Universal Time)
No. 5    hohoho    [1,22,27,36,39,45]    Mon Aug 29 2022 07:45:37 GMT+0000 (Coordinated Universal Time)
No. 6    zzzz    [1,2,9,24,27,29]    Mon Aug 29 2022 07:45:38 GMT+0000 (Coordinated Universal Time)
No. 7    kkk    [1,4,8,30,32,36]    Mon Aug 29 2022 07:45:39 GMT+0000 (Coordinated Universal Time)
No. 8    bb    [1,7,14,15,28,33]    Mon Aug 29 2022 07:45:42 GMT+0000 (Coordinated Universal Time)
No. 9    a    [1,22,23,35,36,39]    Mon Aug 29 2022 07:45:42 GMT+0000 (Coordinated Universal Time)
------------------------------------------------------
전부 6 개의 기록이 있습니다.

Type some message:(number: generate n lotto,delete: dd, quit: q!)>
q!
오늘도 좋은 하루 되세요!
```

## DB Schema

```sql
drop table if exists lotto;

create table lotto(
    id int primary key auto_increment,
    message varchar(255),
    nums json,
    created timestamp default current_timestamp
);

insert into
    lotto (message, nums)
values
    ('Hello~', '{"nums":[1,2,3,4,5,6]}');

insert into
    lotto (message, nums)
values
    ('Nice weather!', '{"nums":[11,12,13,14,15,16]}');

select
    *
from
    lotto;
```
