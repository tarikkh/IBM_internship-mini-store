create database shop_wave_db;
use shop_wave_db;

create table categories (
	category_id  int primary key auto_increment,
    name varchar(200)
);

create table product (
	id int primary key auto_increment,
	title varchar(500) not null,
    price decimal not null ,
	description varchar(2000) not null,
	image varchar(500) not null,
    quantity int not null,
    category int not null,
    constraint fk_pro_cat foreign key(category) REFERENCES categories(category_id)
);


INSERT INTO `shop_wave_db`.`categories` (`name`) VALUES ('electronics');
INSERT INTO `shop_wave_db`.`categories` (`name`) VALUES ('jewelery');

INSERT INTO `shop_wave_db`.`product` (`title`, `price`,  `description`, `image`, quantity, `category`) VALUES ('WD 2TB Elements Portable External Hard Drive - USB 3.0', '64', 'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on userâ€™s hardware configuration and operating system', 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg', 100, 1);
INSERT INTO `shop_wave_db`.`product`(`title`, `price`,  `description`, `image`, quantity, `category`) VALUES ('Pierced Owl Rose Gold Plated Stainless Steel Double', '11', 'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel', 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg', 50, 2);
