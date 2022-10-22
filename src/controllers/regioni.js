const axios = require("axios");
const getAllRegioni = async (req, res) => {
    try {
        const result = await axios.get('https://comuni-ita.herokuapp.com/api/regioni');

        await console.info('Regioni retrieved =>', result?.data);

        return res.json(result?.data);
    } catch (error) {
        await console.error('Error get all regioni =>', error);
        return res.status(error?.status || 500).json();
    }
};

module.exports = getAllRegioni;