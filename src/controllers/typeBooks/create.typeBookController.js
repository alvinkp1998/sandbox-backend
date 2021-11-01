const { Type_books } = require("../../models");

const service = async function (req, res, next) {
  try {
    const payload = req.body;
    const requestDB = await Type_books.create(payload);
    return res.json({ msg: "Tipe buku berhasil dibuat", data: requestDB });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
