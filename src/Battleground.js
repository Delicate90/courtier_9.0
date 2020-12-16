const Characters = require('./db/Character');
const Skills = require('./db/Skill');
const Auras = require('./db/Aura');

module.exports = (()=>{
    function Battleground(){

    }

    const say = (text)=> console.log(text);

    let attackerSide = null;
    let attackerAura = null;
    let defenderSide = null;
    let defenderAura = null;
    let round = 0;
    let finish = false;

    Battleground.prototype.setATKSide = (sides)=> {
        if (!(sides instanceof Array)) {
            console.error('ATKSide sides 类型错误')
        }
        if (sides.length !== 5) {
            console.error('ATKSide sides 长度错误')
        }
        attackerSide = sides.map(side=>Characters[side]);
    };

    Battleground.prototype.setATKAura = (num)=> {
        attackerAura = num;
    };

    Battleground.prototype.setDFDSide = (sides)=> {
        if (!(sides instanceof Array)) {
            console.error('DFDSide sides 类型错误')
        }
        if (sides.length !== 8) {
            console.error('DFDSide sides 长度错误')
        }
        defenderSide = sides.map(side=>Characters[side]);
    };

    Battleground.prototype.setDFDAura = (num)=> {
        defenderAura = num;
    };

    const battle = ()=> {

    };

    const aura = ()=> {

    };

    const result = (text)=> {
        console.warn(text)
    };

    const isFinish = ()=> {
        if (attackerSide.filter(character=>character && character.hp > 0).length === 0) {
            finish = true;
            result('我方胜利');
        }
        if (defenderSide.filter(character=>character && character.hp > 0).length === 0) {
            finish = true;
            result('敌方胜利');
        }
    };

    const startRound = ()=> {
        round++;
        say(`第${round}回合`);
        attackerSide.map((character, index)=>{
            const atkIndex = index%3;
            const defList = defenderSide.map((def, dIndex)=>{

            })
            battle(character)
        });
        aura(attackerAura);
        defenderSide.map(character=>{
            battle(character)
        });
        aura(defenderAura);
        isFinish();
    };

    Battleground.prototype.do = ()=> {
        // while (finish) {
        //     startRound();
        // }
        startRound();
    };

    return Battleground
})();


