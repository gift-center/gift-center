'use strict';

var shopAccessorieArray = [];
var shopBookArray = [];
var shopCakeArray = [];
var shopCosmeticsArray = [];
var shopElectronicsArray = [];
var shopFlowersArray = [];
var shopFurnituresArray = [];
var shopKidsArray = [];

var mainDiv= document.getElementById('main-img');

function AccessoriesShops(shopName, shopLogo, shopLink){
    this.shopName = shopName;
    this.shopLogo = shopLogo;
    this.shopLink = shopLink;

    shopAccessorieArray.push(this);
}

function BooksShops(shopName, shopLogo, shopLink){
    this.shopName = shopName;
    this.shopLogo = shopLogo;
    this.shopLink = shopLink;

    shopBookArray.push(this);
}

function CakesShops(shopName, shopLogo, shopLink){
    this.shopName = shopName;
    this.shopLogo = shopLogo;
    this.shopLink = shopLink;

    shopCakeArray.push(this);
}

function CosmeticsShops(shopName, shopLogo, shopLink){
    this.shopName = shopName;
    this.shopLogo = shopLogo;
    this.shopLink = shopLink;

    shopCosmeticsArray.push(this);
}

function ElectronicsShops(shopName, shopLogo, shopLink){
    this.shopName = shopName;
    this.shopLogo = shopLogo;
    this.shopLink = shopLink;

    shopElectronicsArray.push(this);
}

function FlowersShops(shopName, shopLogo, shopLink){
    this.shopName = shopName;
    this.shopLogo = shopLogo;
    this.shopLink = shopLink;

    shopFlowersArray.push(this);
}

function FurnitureShops(shopName, shopLogo, shopLink){
    this.shopName = shopName;
    this.shopLogo = shopLogo;
    this.shopLink = shopLink;

    shopFurnituresArray.push(this);
}

function KidsShops(shopName, shopLogo, shopLink){
    this.shopName = shopName;
    this.shopLogo = shopLogo;
    this.shopLink = shopLink;

    shopKidsArray.push(this);
}

// create accessorie objects

new AccessoriesShops('Pandora', 'assests/shops/pandora.png', 'https://pandora-eshop.jo/');
new AccessoriesShops('Swarovski', 'assests/shops/swarovski.png', 'https://www.jomashop.com/swarovski-jewelry.html?gclid=CjwKCAiAr6-ABhAfEiwADO4sfU1RUacrJHdr8JjbGZNbptg_TL799R_AxnDgqa2WgU2DENk7Gac4_BoCk5MQAvD_BwE');
new AccessoriesShops('Swatch', 'assests/shops/swatch.png', 'https://shop.timecenter.jo/collections/swatch?utm_campaign=searchads&utm_medium=searchads&gclid=CjwKCAiAr6-ABhAfEiwADO4sfVnYiiJjEv3UdlmwJrDyksfSd9sLJwnHiEDTKFLzk5QIEuyOP3HnsRoCyAoQAvD_BwE');
new AccessoriesShops('Tiffany & Co.', 'assests/shops/tifannyandco.jpg', 'https://www.tiffany.com/');
new AccessoriesShops('Time Center', 'assests/shops/timecenter.png', 'https://shop.timecenter.jo/?gclid=CjwKCAiAr6-ABhAfEiwADO4sfeLhUiFiO3jqCcQPHOHUCi1s2UmfAMHhsHyjfSDMlz0ru_JFlgXnvRoC9HoQAvD_BwE');

rendersShopsForAccessories();

// craete books objects

new BooksShops ('Jordan Book Center', 'assests/shops/jordanbookcenter.jpg', 'https://vymaps.com/JO/Jordan-Book-Center-JBC-380113/');
new BooksShops ('Readers', 'assests/shops/readers.jpg', 'https://www.facebook.com/readersbookshop/');
new BooksShops ('The Good Book Shop', 'assests/shops/thegoodbookshop.png', 'https://thegoodbookshop.com/');

rendersShopsForBooks();

// create cakes objects

new CakesShops('Divan Cake', 'assests/shops/divan.jpg', 'https://www.facebook.com/DivanCake/');
new CakesShops('Rawan Cake', 'assests/shops/rawancake.jpg', 'https://rawancake.jo/');
new CakesShops('The Cake Shop', 'assests/shops/cakeshop.jpg', 'https://www.cakeshopco.com/');

rendersShopsForCakes();

// create cosmetics objects

new CosmeticsShops('Abu Shakra','assests/shops/abushakra.png', 'https://www.abushakra.com/');
new CosmeticsShops('Bath & Body Works','assests/shops/bathandbodyworks.png', 'https://www.bathandbodyworks.com/');
new CosmeticsShops('Cashmere','assests/shops/cashmere.jpg', 'https://www.cashmerecosmetics.com/');
new CosmeticsShops('Flormar','assests/shops/flormar.jpg', 'https://www.flormar.com/');
new CosmeticsShops('Real Cosmetics','assests/shops/realcosmetics.jpg', 'https://realcosmetics.jo/');
new CosmeticsShops('The Body Shop','assests/shops/thebodyshop.jpg', 'https://www.thebodyshop.com/en-us/');
new CosmeticsShops('VaVaVoom','assests/shops/vavavoom.jpg', 'https://www.facebook.com/VavavoomBeauty/');
new CosmeticsShops('Victoria\'s Secrets','assests/shops/victoriasecret.jpg', 'https://www.victoriassecret.com/us/vs/beauty?active=beauty');
new CosmeticsShops('Wojooh','assests/shops/wojooh.png', 'https://www.faces.com/ae-en');

rendersShopsForCosmetics();

// create electronics objects

new ElectronicsShops('Leaders','assests/shops/leadears.jpg', 'https://www.leaders.jo/');
new ElectronicsShops('Smart Buy','assests/shops/smartbuy.png', 'https://smartbuy-me.com/smartbuystore/');

rendersShopsForElectronics();

// create flowers objects

new FlowersShops('100 Wardeh', 'assests/shops/100wardeh.png', 'https://100wardeh.com/');
new FlowersShops('Alissar Flowers', 'assests/shops/alissarflowers.jpg', 'https://www.alissarflowers.com/jo_en');
new FlowersShops('Baloons R Us','assests/shops/ralloonsrus.png', 'https://www.orchids.com.jo/');
new FlowersShops('Flower Shop', 'assests/shops/flowershop.png', 'https://jasminegift.com/en/category/flowes-%D8%B2%D9%87%D9%88%D8%B1-130');
new FlowersShops('Leila Shop','assests/shops/leilashop.jpg', 'https://www.facebook.com/Leila.Florist.Jo/');
new FlowersShops('Orchid Flowers','assests/shops/orchidflowers.jpg', 'https://www.orchids.com.jo/');
new FlowersShops('The Flower Shop','assests/shops/theflowershop.jpg', 'https://www.theflowershopsa.com/');

rendersShopsForFlowers();

// create furniture objects 

new FurnitureShops('Almukhtar Home', 'assests/shops/almukhtarmall.png', 'http://mukhtar-mall.com/');
new FurnitureShops('Fath Allah', 'assests/shops/fatallah.jpg', 'https://www.facebook.com/FATHALLAHFURNITURE1968/');
new FurnitureShops('Midas', 'assests/shops/midas.jpg', 'https://midasfurniture.com/jo_en/');
new FurnitureShops('Shahwan', 'assests/shops/shahwan.jpg', 'https://www.shahwan.net/');
new FurnitureShops('Txon', 'assests/shops/txon.jpg', 'https://www.txonstores.com/');

rendersShopsForFurniture();

// create kids objects

new KidsShops('Kenzi', 'assests/shops/kenzi.jpg', 'https://kenzionline.com/');
new KidsShops('Toys R Us', 'assests/shops/toysrus.jpg', 'https://www.toysrus.com/');

rendersShopsForKids();

// function
function rendersShopsForAccessories(){
    var shopDivider;
    var shopSection = document.createElement('h2');
    mainDiv.appendChild(shopSection);
    shopSection.textContent = 'Accessories & Jewelry';
    for(var i=0; i<shopAccessorieArray.length; i++){
        shopDivider = document.createElement('div');
        var shopInfo = document.createElement('div');
        var shopTitle = document.createElement('h3');
        var shopWeb = document.createElement('a');
        var shopPic = document.createElement('img');

        mainDiv.appendChild(shopDivider);
        shopDivider.appendChild(shopPic);
        shopPic.src = shopAccessorieArray[i].shopLogo;
        shopDivider.appendChild(shopInfo);
        shopInfo.appendChild(shopTitle);
        shopInfo.appendChild(shopWeb);

        shopTitle.textContent = shopAccessorieArray[i].shopName;
        shopWeb.href = shopAccessorieArray[i].shopLink;

        shopDivider.setAttribute('class', 'card');
        shopInfo.setAttribute('class', 'container');
    }
}

function rendersShopsForBooks(){
    var shopDivider;
    var shopSection = document.createElement('h2');
    mainDiv.appendChild(shopSection);
    shopSection.textContent = 'Books and Novels';
    for(var i=0; i<shopBookArray.length; i++){
        shopDivider = document.createElement('div');
        var shopInfo = document.createElement('div');
        var shopTitle = document.createElement('h3');
        var shopWeb = document.createElement('a');
        var shopPic = document.createElement('img');

        mainDiv.appendChild(shopDivider);
        shopDivider.appendChild(shopPic);
        shopPic.src = shopBookArray[i].shopLogo;
        shopDivider.appendChild(shopInfo);
        shopInfo.appendChild(shopTitle);
        shopInfo.appendChild(shopWeb);

        shopTitle.textContent = shopBookArray[i].shopName;
        shopWeb.href = shopBookArray[i].shopLink;

        shopDivider.setAttribute('class', 'card');
        shopInfo.setAttribute('class', 'container');
    }
}

function rendersShopsForCakes(){
    var shopDivider;
    var shopSection = document.createElement('h2');
    mainDiv.appendChild(shopSection);
    shopSection.textContent = 'Cakes & Sweets';
    for(var i=0; i<shopCakeArray.length; i++){
        shopDivider = document.createElement('div');
        var shopInfo = document.createElement('div');
        var shopTitle = document.createElement('h3');
        var shopWeb = document.createElement('a');
        var shopPic = document.createElement('img');

        mainDiv.appendChild(shopDivider);
        shopDivider.appendChild(shopPic);
        shopPic.src = shopCakeArray[i].shopLogo;
        shopDivider.appendChild(shopInfo);
        shopInfo.appendChild(shopTitle);
        shopInfo.appendChild(shopWeb);

        shopTitle.textContent = shopCakeArray[i].shopName;
        shopWeb.href = shopCakeArray[i].shopLink;

        shopDivider.setAttribute('class', 'card');
        shopInfo.setAttribute('class', 'container');
    }
}

function rendersShopsForCosmetics(){
    var shopDivider;
    var shopSection = document.createElement('h2');
    mainDiv.appendChild(shopSection);
    shopSection.textContent = 'Cosmetics & Makeup';
    for(var i=0; i<shopCosmeticsArray.length; i++){
        shopDivider = document.createElement('div');
        var shopInfo = document.createElement('div');
        var shopTitle = document.createElement('h3');
        var shopWeb = document.createElement('a');
        var shopPic = document.createElement('img');

        mainDiv.appendChild(shopDivider);
        shopDivider.appendChild(shopPic);
        shopPic.src = shopCosmeticsArray[i].shopLogo;
        shopDivider.appendChild(shopInfo);
        shopInfo.appendChild(shopTitle);
        shopInfo.appendChild(shopWeb);

        shopTitle.textContent = shopCosmeticsArray[i].shopName;
        shopWeb.href = shopCosmeticsArray[i].shopLink;

        shopDivider.setAttribute('class', 'card');
        shopInfo.setAttribute('class', 'container');
    }
}

function rendersShopsForElectronics(){
    var shopDivider;
    var shopSection = document.createElement('h2');
    mainDiv.appendChild(shopSection);
    shopSection.textContent = 'Electronis';
    for(var i=0; i<shopElectronicsArray.length; i++){
        shopDivider = document.createElement('div');
        var shopInfo = document.createElement('div');
        var shopTitle = document.createElement('h3');
        var shopWeb = document.createElement('a');
        var shopPic = document.createElement('img');

        mainDiv.appendChild(shopDivider);
        shopDivider.appendChild(shopPic);
        shopPic.src = shopElectronicsArray[i].shopLogo;
        shopDivider.appendChild(shopInfo);
        shopInfo.appendChild(shopTitle);
        shopInfo.appendChild(shopWeb);

        shopTitle.textContent = shopElectronicsArray[i].shopName;
        shopWeb.href = shopElectronicsArray[i].shopLink;

        shopDivider.setAttribute('class', 'card');
        shopInfo.setAttribute('class', 'container');
    }
}

function rendersShopsForFlowers(){
    var shopDivider;
    var shopSection = document.createElement('h2');
    mainDiv.appendChild(shopSection);
    shopSection.textContent = 'Flowers';
    for(var i=0; i<shopFlowersArray.length; i++){
        shopDivider = document.createElement('div');
        var shopInfo = document.createElement('div');
        var shopTitle = document.createElement('h3');
        var shopWeb = document.createElement('a');
        var shopPic = document.createElement('img');

        mainDiv.appendChild(shopDivider);
        shopDivider.appendChild(shopPic);
        shopPic.src = shopFlowersArray[i].shopLogo;
        shopDivider.appendChild(shopInfo);
        shopInfo.appendChild(shopTitle);
        shopInfo.appendChild(shopWeb);

        shopTitle.textContent = shopFlowersArray[i].shopName;
        shopWeb.href = shopFlowersArray[i].shopLink;

        shopDivider.setAttribute('class', 'card');
        shopInfo.setAttribute('class', 'container');
    }
}

function rendersShopsForFurniture(){
    var shopDivider;
    var shopSection = document.createElement('h2');
    mainDiv.appendChild(shopSection);
    shopSection.textContent = 'Furnitures';
    for(var i=0; i<shopFurnituresArray.length; i++){
        shopDivider = document.createElement('div');
        var shopInfo = document.createElement('div');
        var shopTitle = document.createElement('h3');
        var shopWeb = document.createElement('a');
        var shopPic = document.createElement('img');

        mainDiv.appendChild(shopDivider);
        shopDivider.appendChild(shopPic);
        shopPic.src = shopFurnituresArray[i].shopLogo;
        shopDivider.appendChild(shopInfo);
        shopInfo.appendChild(shopTitle);
        shopInfo.appendChild(shopWeb);

        shopTitle.textContent = shopFurnituresArray[i].shopName;
        shopWeb.href = shopFurnituresArray[i].shopLink;

        shopDivider.setAttribute('class', 'card');
        shopInfo.setAttribute('class', 'container');
    }
}

function rendersShopsForKids(){
    var shopDivider;
    var shopSection = document.createElement('h2');
    mainDiv.appendChild(shopSection);
    shopSection.textContent = 'Kids Shops';
    for(var i=0; i<shopKidsArray.length; i++){
        shopDivider = document.createElement('div');
        var shopInfo = document.createElement('div');
        var shopTitle = document.createElement('h3');
        var shopWeb = document.createElement('a');
        var shopPic = document.createElement('img');

        mainDiv.appendChild(shopDivider);
        shopDivider.appendChild(shopPic);
        shopPic.src = shopKidsArray[i].shopLogo;
        shopDivider.appendChild(shopInfo);
        shopInfo.appendChild(shopTitle);
        shopInfo.appendChild(shopWeb);

        shopTitle.textContent = shopKidsArray[i].shopName;
        shopWeb.href = shopKidsArray[i].shopLink;

        shopDivider.setAttribute('class', 'card');
        shopInfo.setAttribute('class', 'container');
    }
}