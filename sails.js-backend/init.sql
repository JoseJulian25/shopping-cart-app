-- Insertar datos en la tabla de categorías
INSERT INTO category (name, description) VALUES
('Electronics', 'Devices and gadgets'),
('Books', 'Books and literature'),
('Clothing', 'Apparel and accessories'),
('Home Appliances', 'Appliances for home use'),
('Toys', 'Toys and games');

-- Insertar datos en la tabla de productos
INSERT INTO product (name, price, description, stock, image_url, category, rating) VALUES
-- Productos de la categoría Electronics
('Smartphone', 699.99, 'Latest model smartphone with high-end specs', 50, 'https://th.bing.com/th/id/OIP.-quGE5cEMqVRdl6i20GOggHaHa?rs=1&pid=ImgDetMain', 1, 5),
('Laptop', 999.99, 'Lightweight laptop with 16GB RAM and 512GB SSD', 30, 'https://th.bing.com/th/id/OIP.mSBBzf0iXOX7j8muIm5GlwHaGG?rs=1&pid=ImgDetMain', 1, 4),
('Wireless Headphones', 199.99, 'Noise-cancelling wireless headphones', 100, 'https://th.bing.com/th/id/R.39cb49ab4ea2eb02314d7b06045231f4?rik=3REtzEuk2vhYLQ&pid=ImgRaw&r=0', 1, 4),
('Smartwatch', 249.99, 'Fitness tracking smartwatch', 70, 'https://www.amazon.in/images/I/6113mS+xhyL._SL1500_.jpg', 1, 5),
('Tablet', 329.99, '10-inch tablet with high resolution', 40, 'https://www.bhphotovideo.com/images/images2500x2500/samsung_sm_t800ntsaxar_16gb_galaxy_tab_s_1054121.jpg', 1, 4),
('Bluetooth Speaker', 49.99, 'Portable Bluetooth speaker', 120, 'https://th.bing.com/th/id/OIP.HMWWS2ecNHBRe8XzUvRi2QHaHa?rs=1&pid=ImgDetMain', 1, 4),


-- Productos de la categoría Books
('Science Fiction Book', 15.99, 'A thrilling science fiction novel', 200, 'https://th.bing.com/th/id/R.4ff875f3b9a67dd950becd5b4850b0bf?rik=jFvN7MNg5cbXpg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-jtZKqm08vto%2fUzmCmlsnSII%2fAAAAAAAAJg4%2flEg5gl43No0%2fs1600%2fThe%2bScience%2bFiction%2bBook%2bAIH%2b1.jpg&ehk=3elHou1fwlQkUi4mNNB7DQeXL07SrdyY3U8xBzwOpHs%3d&risl=&pid=ImgRaw&r=0', 2, 5),
('Cookbook', 25.99, 'A cookbook with delicious recipes', 150, 'https://th.bing.com/th/id/OIP.AIwO9AzyGZ18hHjoS72zJQHaJa?rs=1&pid=ImgDetMain', 2, 4),
('Mystery Novel', 12.99, 'An engaging mystery novel', 180, 'https://th.bing.com/th/id/OIP.WjzxAe3zahNtS8C2phr96gHaL2?rs=1&pid=ImgDetMain', 2, 5),
('Biography', 18.99, 'Inspiring biography of a famous figure', 90, 'https://th.bing.com/th/id/R.60a31f9ad8b0bab127c7d7abb60420fa?rik=lVyJJyPevRCtSw&riu=http%3a%2f%2fwww.scrolldroll.com%2fwp-content%2fuploads%2f2021%2f07%2fthe-happiest-man-on-earth-biographies-and-autobiography-books.jpg&ehk=GD2QQ54ezPXAwb%2fX%2fy8M1mAsFU7wB%2fhnrQhSU282Ip8%3d&risl=&pid=ImgRaw&r=0', 2, 3),
('Fantasy Book', 20.99, 'Epic fantasy novel', 140, 'https://th.bing.com/th/id/R.b307254c233d883fda43e9daa4b524eb?rik=jW2HHPe2hPwQGQ&pid=ImgRaw&r=0', 2, 5),
('Self-Help Book', 14.99, 'Practical self-help guide', 110, 'https://th.bing.com/th/id/R.fdc30285a75631f98c4a57e40d18310a?rik=ummKVuJg7nbMGg&riu=http%3a%2f%2fwww.bennionkearny.com%2fwp-content%2fuploads%2f2016%2f12%2fFinding-Your-Way-Back-to-You_cover.png&ehk=3AXcOD5tlY3a5YfXLl09uuSi0d7vo%2br1vuorDvI8IfM%3d&risl=&pid=ImgRaw&r=0', 2, 4),

-- Productos de la categoría Clothing
('Winter Jacket', 120.00, 'Warm winter jacket for cold weather', 80, 'https://th.bing.com/th/id/R.32ae514b1bf131859cefc4df91b3edef?rik=oPMjXUKkopE%2fgw&riu=http%3a%2f%2fghk.h-cdn.co%2fassets%2f17%2f37%2f1505507422-llbean-ultrawarm-coat.jpg&ehk=9Mm93cTDdLYRuDhMhUVohiwxRaKj2yAaf%2fi0TPe58%2fE%3d&risl=&pid=ImgRaw&r=0', 3, 5),
('T-shirt', 19.99, 'Casual cotton t-shirt', 300, 'https://th.bing.com/th/id/OIP.DSjZPk9uy01_f2ox4Q5QPgAAAA?rs=1&pid=ImgDetMain', 3, 4),
('Jeans', 49.99, 'Comfortable and durable jeans', 200, 'https://th.bing.com/th/id/OIP.5ILgargfaGltxN-p9eWPCAHaLH?rs=1&pid=ImgDetMain', 3, 4),
('Sneakers', 79.99, 'Stylish sneakers for everyday wear', 150, 'https://th.bing.com/th/id/R.3f4d367729da599332f0093ea786a206?rik=ZdeM42QhkPe9Lg&riu=http%3a%2f%2fimage.sportsmansguide.com%2fadimgs%2fl%2f1%2f125540_ts.jpg&ehk=XMZP1%2buKXT2muHWpuCSAQR0aCh0x6G6Nuq9v2RXboK4%3d&risl=&pid=ImgRaw&r=0', 3, 5),
('Sweater', 39.99, 'Cozy knit sweater', 100, 'https://th.bing.com/th/id/OIP.Sb1sWy9EDhMmOtfkeoBl8wHaJ4?rs=1&pid=ImgDetMain', 3, 4),
('Hat', 15.99, 'Trendy hat for sunny days', 120, 'https://th.bing.com/th/id/OIP.EpL1XSKSvXgMx6cWlvTgmwHaF7?rs=1&pid=ImgDetMain', 3, 3),

--Productos de la categoria Home Appliances
('Blender', 49.99, 'High-performance blender for smoothies and more', 150, 'https://i.pinimg.com/originals/8e/56/79/8e567935daa4d66d04bfdb52ed19410e.jpg', 4, 4),
('Microwave Oven', 89.99, 'Compact microwave for quick heating', 200, 'https://i5.walmartimages.com/asr/78770bfe-d6aa-460e-be98-c789313cf631.056c89e1e1eec5bd4464127a67047535.jpeg', 4, 5),
('Vacuum Cleaner', 129.99, 'Powerful vacuum cleaner for all floor types', 120, 'https://th.bing.com/th/id/R.5daf4a7305ced2fc4313fdbcc514fb86?rik=91m4wt0%2bCJ79Ow&riu=http%3a%2f%2f1.bp.blogspot.com%2f-862Ak10pWzA%2fUgda1E-bIfI%2fAAAAAAAARac%2fXLxgixCkwIc%2fs1600%2fVacuum%2bCleaner.jpg&ehk=DUxWXIjQT%2bzR92XxHnRTrqC1EVDX1XQlfbEvuemWG%2f8%3d&risl=&pid=ImgRaw&r=0', 4, 4),
('Coffee Maker', 69.99, 'Automatic coffee maker for fresh brews', 180, 'https://th.bing.com/th/id/OIP.v7ORILVh4Fl0C88CzQDN9QHaHa?rs=1&pid=ImgDetMain', 4, 4),
('Air Purifier', 119.99, 'Portable air purifier for cleaner indoor air', 100, 'https://m.media-amazon.com/images/I/81UjS7Fwp2L.jpg', 4, 3),

--Productos de la categoria Toys
('Action Figure', 19.99, 'Superhero action figure for kids', 300, 'https://th.bing.com/th/id/OIP.SZtrjodJP_t1O0vRO18KdAHaLI?rs=1&pid=ImgDetMain', 5, 5),
('Toy Train Set', 49.99, 'Fun toy train set with tracks and accessories', 250, 'https://th.bing.com/th/id/OIP.5TDtVLz5vnRpRJGXUEGPNAHaHa?rs=1&pid=ImgDetMain', 5, 4),
('Dollhouse', 79.99, 'Wooden dollhouse with furniture and accessories', 150, 'https://th.bing.com/th/id/OIP.dLaolj2RJrwT-gnISkh-OwHaHa?rs=1&pid=ImgDetMain', 5, 5),
('Building Blocks', 29.99, 'Colorful building blocks for creative play', 400, 'https://th.bing.com/th/id/OIP.1R0GyCQtlljfAdTvIbpePwHaHV?rs=1&pid=ImgDetMain', 5, 4),
('Remote Control Car', 59.99, 'Fast remote control car for kids', 220, 'https://th.bing.com/th/id/OIP.h1QfMaVVfeLtBxsIP1-DAgAAAA?rs=1&pid=ImgDetMain', 5, 5),
('Puzzles', 9.99, 'Challenging puzzles for all ages', 500, 'https://th.bing.com/th/id/OIP.Y-bZVsk47hnT03av0LtXyAHaE5?rs=1&pid=ImgDetMain', 5, 4);

