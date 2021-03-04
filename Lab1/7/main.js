const Market = require('./market.js');
const Goods = require('./goods.js');
const Stock = require('./stock.js');
const GoodsOnStock = require('./GoS.js');

markets = [];
goods_ar = [];
stocks = [];
//a
function AddMarket(name) {
  market = new Market(name);
  markets.push(market);
}
//b
function EditMarket(name, market) {
  for (i = 0, len = markets.length; i < len; i++) {
    if (markets[i].name == name) {
      markets[i] = market;
    }
  }
}
//c
function FindMarket(name) {
  return markets.filter(market => market.name === name)[0]
}
//d
function RmMarket(name) {
    markets = markets.filter(market => market.name != name)
}
//e
function AddGoods(name){
  goods = new Goods(name)
  goods_ar.push(goods);
}
//f
function EditGoods(name, goods) {
  for (i = 0, len = goods_ar.length; i < len; i++) {
    if (goods_ar[i].name == name) {
      goods_ar[i] = goods;
      return
    }
  }
}
//g
function RmGoods(name) {
    goods_ar = goods_ar.filter(market => goods.name != name)
}
//h
function FindGoods(name) {
  return goods_ar.filter(goods => goods.name === name)[0]
}
//i
function AddStock(name){
  stock = new Stock(name)
  stocks.push(stock);
}
//j
function EditStock(name, stock) {
  for (i = 0, len = goods_ar.length; i < len; i++) {
    if (stocks[i].name == name) {
      stocks[i] = stock;
      return
    }
  }
}
//k
function RmStock(name) {
    stocks = stocks.filter(stock => stock.name != name)
}
//l
function FindStock(name) {
  return stocks.filter(stock => stock.name === name)[0]
}
//m
//n
//o
//p
AddMarket('M1');
AddMarket('M2');
EditMarket('M2', new Market('edited_M2'))
RmMarket('M1');
console.log(FindMarket('edited_M2'));
