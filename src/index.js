const Battleground = require('./battleground')
console.log(Battleground);

const battleground = new Battleground();
battleground.setATKSide(['1','','','','']);
battleground.setDFDSide(['2','','','','','','','']);
battleground.setDFDAura('1')

battleground.do()