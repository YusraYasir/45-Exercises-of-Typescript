"use strict";
function storeCarInfo(manufacture, modelName, ...extraOption) {
    const carInfo = Object.assign({ manufacture,
        modelName }, Object.assign({}, ...extraOption));
    return carInfo;
}
;
const answers = storeCarInfo('Honda', 'Civic', { color: 'Black' }, { features: ['navigation', 'power window'] });
console.log(answers);
