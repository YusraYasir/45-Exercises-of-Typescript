function storeCarInfo(manufacture: string, modelName: string, ...extraOption: { [key: string]: any} [] ):
object {

    const carInfo = {
        manufacture,
        modelName,
     ...Object.assign({}, ...extraOption)
    }

    return carInfo;
};

const answers = storeCarInfo('Honda','Civic',{color:'Black'},{features:['navigation','power window']});

 console.log(answers);