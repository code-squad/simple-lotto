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