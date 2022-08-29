# simple-lotto

simple app for node.js and mysql

## QuickStart

### Setup (Ubuntu Linux)

```bash
sudo apt install nodejs
sudo apt install npm
sudo apt install mysql-client

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

### Setup DB

```bash
mysql -u db-username -p db-name -h db-host < init.sql
```

### start

```
npm start
```

### Example

```
Type some message:(dd : delete, q! : quit, 1 ~ 99 : auto generate)
> Give me 1st!
No. 1    Hello~    [1,2,3,4,5,6]    Mon Aug 29 2022 09:48:55 GMT+0900 (대한민국 표준시)
No. 2    Nice weather!    [11,12,13,14,15,16]    Mon Aug 29 2022 09:48:55 GMT+0900 (대한민국 표준시)
No. 3    Auto Generate Lotto    [1,13,25,26,29,36]    Mon Aug 29 2022 09:49:10 GMT+0900 (대한민국 표준시)
No. 4    Auto Generate Lotto    [1,16,24,36,41,44]    Mon Aug 29 2022 09:49:10 GMT+0900 (대한민국 표준시)
No. 5    Auto Generate Lotto    [1,8,24,32,33,41]    Mon Aug 29 2022 09:49:10 GMT+0900 (대한민국 표준시)
No. 6    Auto Generate Lotto    [1,21,23,27,31,44]    Mon Aug 29 2022 09:49:10 GMT+0900 (대한민국 표준시)
No. 7    Auto Generate Lotto    [1,8,18,19,24,40]    Mon Aug 29 2022 09:49:10 GMT+0900 (대한민국 표준시)
No. 8    Give me 1st!    [1,10,29,37,38,39]    Mon Aug 29 2022 09:49:32 GMT+0900 (대한민국 표준시)
------------------------------------------------------
전부 8 개의 기록이 있습니다.

Type some message:(dd : delete, q! : quit, 1 ~ 99 : auto generate)

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
