/**
 * 
 * @param {*} high 
 * @param {*} middle 
 * @param {*} low 
 */

const createIdCard = (high, middle, low) => {
	return {
		high: !!high,
		middle: !!middle,
		low: !!low,
	};
};

const idCard = createIdCard(true, false, true);


const checkIdCard = (idCard) => {
    
    if(!idCard) return null;
    const { high, middle, low } = idCard

    if(high && middle && low) return console.log("high && middle && low");
    if(high && middle) return console.log("high && middle");
    if(high && low) return console.log("high && low");
    if(low && middle) return console.log("low && middle");
    if(high) return console.log("high");
    if(middle) return console.log("middle");
    if(low) return console.log("low");
}

checkIdCard(idCard);


