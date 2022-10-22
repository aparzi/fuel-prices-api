const axios = require("axios");
const getProvinceByRegione = async (req, res) => {
    try {

        const provTarget = req?.params?.provincia;

        console.info('provincia target => ', provTarget);

        const result = await axios.get(`https://comuni-ita.herokuapp.com/api/comuni/provincia/${provTarget}`);

        await console.info('Comuni retrieved =>', result?.data);

        return res.json(result?.data);
    } catch (error) {
        await console.error('Error get all regioni =>', error);
        return res.status(error?.status || 500).json();
    }
};

module.exports = getProvinceByRegione;