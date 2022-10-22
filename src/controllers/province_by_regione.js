const axios = require("axios");
const getProvinceByRegione = async (req, res) => {
    try {

        const regioneTarget = req?.params?.regione;

        console.info('regione target => ', regioneTarget);

        const result = await axios.get(`https://comuni-ita.herokuapp.com/api/province/${regioneTarget}`);

        await console.info('Province retrieved =>', result?.data);

        return res.json(result?.data);
    } catch (error) {
        await console.error('Error get all regioni =>', error);
        return res.status(error?.status || 500).json();
    }
};

module.exports = getProvinceByRegione;