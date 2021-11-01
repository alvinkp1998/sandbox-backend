const { Books } = require("../../models");

const service = async function (req, res, next) {
  try {
    const payload = req.body;
    const requestDB = await Books.create(payload);
    return res.json({ msg: "Buku berhasil ditambah", data: requestDB });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
