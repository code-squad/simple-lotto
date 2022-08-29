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
dd
이전 기록을 지웁니다.
No. 35    This is first message!    [5,11,21,34,43,44]    Mon Aug 29 2022 09:52:22 GMT+0900 (대한민국 표준시)
------------------------------------------------------
전부 1 개의 기록이 있습니다.

Type some message:(dd : delete, q! : quit, 1 ~ 99 : auto generate)
5
No. 35    This is first message!    [5,11,21,34,43,44]    Mon Aug 29 2022 09:52:22 GMT+0900 (대한민국 표준시)
No. 36    Auto Generate Lotto    [7,22,23,29,35,43]    Mon Aug 29 2022 09:52:24 GMT+0900 (대한민국 표준시)
No. 37    Auto Generate Lotto    [2,3,11,12,26,45]    Mon Aug 29 2022 09:52:24 GMT+0900 (대한민국 표준시)
No. 38    Auto Generate Lotto    [9,13,19,20,22,38]    Mon Aug 29 2022 09:52:24 GMT+0900 (대한민국 표준시)
No. 39    Auto Generate Lotto    [7,13,16,23,26,44]    Mon Aug 29 2022 09:52:24 GMT+0900 (대한민국 표준시)
No. 40    Auto Generate Lotto    [5,18,23,28,40,]    Mon Aug 29 2022 09:52:24 GMT+0900 (대한민국 표준시)
------------------------------------------------------
전부 6 개의 기록이 있습니다.

Type some message:(dd : delete, q! : quit, 1 ~ 99 : auto generate)
Give me 1st!
No. 35    This is first message!    [5,11,21,34,43,44]    Mon Aug 29 2022 09:52:22 GMT+0900 (대한민국 표준시)
No. 36    Auto Generate Lotto    [7,22,23,29,35,43]    Mon Aug 29 2022 09:52:24 GMT+0900 (대한민국 표준시)
No. 37    Auto Generate Lotto    [2,3,11,12,26,45]    Mon Aug 29 2022 09:52:24 GMT+0900 (대한민국 표준시)
No. 38    Auto Generate Lotto    [9,13,19,20,22,38]    Mon Aug 29 2022 09:52:24 GMT+0900 (대한민국 표준시)
No. 39    Auto Generate Lotto    [7,13,16,23,26,44]    Mon Aug 29 2022 09:52:24 GMT+0900 (대한민국 표준시)
No. 40    Auto Generate Lotto    [5,18,23,28,40,]    Mon Aug 29 2022 09:52:24 GMT+0900 (대한민국 표준시)
No. 41    Give me 1st!    [6,8,17,22,23,35]    Mon Aug 29 2022 09:52:28 GMT+0900 (대한민국 표준시)
------------------------------------------------------
전부 7 개의 기록이 있습니다.

Type some message:(dd : delete, q! : quit, 1 ~ 99 : auto generate)
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
