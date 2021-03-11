const Market = require('./market.js');
const Goods = require('./goods.js');
const Stock = require('./stock.js');
const GoodsOnStock = require('./GoS.js');

markets = [];
all_goods = [];
stocks = [];
//a
function AddMarket(name) {
  market = new Market(name);
  markets.push(market);
}
AddMarket('M1');
AddMarket('M2');
AddMarket('M3');
//b
function EditMarket(name, market) {
  for (i = 0, len = markets.length; i < len; i++) {
    if (markets[i].name == name) {
      markets[i] = market;
    }
  }
}
EditMarket('M2', new Market('edited_M2'))
//c
function FindMarket(name) {
  return markets.filter(market => market.name === name)[0]
}
console.log('Find market:', FindMarket('edited_M2'));
//d
function RmMarket(name) {
    markets = markets.filter(market => market.name != name)
}
RmMarket('M1');
//e
function AddGoods(name){
  goods = new Goods(name)
  all_goods.push(goods);
}
AddGoods('G1');
AddGoods('G2');
AddGoods('G3');
AddGoods('g20')
//f
function EditGoods(name, goods) {
  for (i = 0, len = all_goods.length; i < len; i++) {
    if (all_goods[i].name == name) {
      all_goods[i] = goods;
      return
    }
  }
}
EditGoods('G2', new Goods('G2_1'))
//g
function RmGoods(name) {
    all_goods = all_goods.filter(goods => goods.name != name)
}
RmGoods('G3')
//h
function FindGoods(name) {
  return all_goods.filter(goods => goods.name === name)[0]
}
console.log('Find goods:', FindGoods('G2_1'))
//i
function AddStock(name){
  stock = new Stock(name)
  stocks.push(stock);
}
AddStock('S1');
AddStock('S2');
AddStock('S3');
//j
function EditStock(name, stock) {
  for (i = 0, len = all_goods.length; i < len; i++) {
    if (stocks[i].name == name) {
      stocks[i] = stock;
      return
    }
  }
}
EditStock('S2', new Stock('S2_e'))
//k
function RmStock(name) {
    stocks = stocks.filter(stock => stock.name != name)
}
RmStock('S2_e')
//l
function FindStock(name) {
  return stocks.filter(stock => stock.name === name)[0]
}
console.log('Find stock:', FindStock('S1'))
//m
function ShipGoodsOnStock(goods, stock){
  stock.goods.push(goods)
  return
}
ShipGoodsOnStock(all_goods[0], stocks[0])
//n
function RmGoodsFromStock(goods, stock) {
  stock.goods = stock.goods.filter(good => good.name != goods.name)
}
//o
function MoveGoods(goods, stock1, stock2) {
  RmGoodsFromStock(goods, stock1)
  ShipGoodsOnStock(goods, stock2)
}
//p
function ShipGoodsToMarket(goods, stock, market) {
  RmGoodsFromStock(goods, stock)
  market.goods.push(goods)
}
ShipGoodsToMarket(all_goods[0], stocks[0], markets[0])

console.log(markets)
console.log(all_goods)
console.log(stocks)
