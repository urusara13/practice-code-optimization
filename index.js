/**
 * 
 * @param {*} high 
 * @param {*} middle 
 * @param {*} low 
 */

const createIdCard = (high, middle, low) => {
	return {
		high: high,
		middle: middle,
		low: low,
	};
};

const idCard = createIdCard(true, false, true);


const checkIdCard = (idCard) => {
    if(!idCard) return null;
    const { high, middle, low } = idCard
    console.log(`${high ? 'high && ' : '&&'}${middle ? 'middle && ' : ''}${low ? 'low' : ''}`)
}

checkIdCard(idCard);


