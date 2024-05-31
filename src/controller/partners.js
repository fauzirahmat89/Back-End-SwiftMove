const partnerModel = require('../models/partners')

const createNewPartner = async (req, res) => {
  const {body} = req;
  try {
    await partnerModel.createNewPartner(body);
    res.json({
      message: 'Create New Partner Success',
      data: body
    })
  } catch (error) {
    res.status(500).json({
      message: 'error get',
      serverMessage: error,
    })
  }
}

const updatePartner = async (req, res) => {
  const {body} = req;
  try {
    await partnerModel.updatePartner(body);
    res.json({
      message: 'Create New Partner Success',
      data: body
    })
  } catch (error) {
    res.status(500).json({
      message: 'error get',
      serverMessage: error,
    })
  }
}

const getAllPartners = async (req, res) => {
  try {
    const [data] = await partnerModel.getAllPartners(); 
    res.json({
      // message: 'Get All Partner Success',
      data: data
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error getting partners',
      error: error.message 
    });
  }
};

const getCheckPartner = async (req, res) => {
  const { username, password } = req.query;

  try {
    if (!username || !password) {
      return res.status(400).json({
        message: 'Username and password must be provided.',
      });
    }

    const result = await partnerModel.getCheckPartner(username, password);

    if (result.length > 0 && result[0]!='') {
      res.json({
        message: 'Login Successful',
        data: result[0],
      });
    } else {
      res.status(401).json({
        message: 'Login Failed. Invalid username or password.',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error during login',
      serverMessage: error.message,
    });
  }
};

module.exports = {
  getAllPartners,
  createNewPartner,
  getCheckPartner,
  updatePartner
}