const { Books } = require("../../models");

const service = async function (req, res, next) {
  try {
    const where = {};
    if (req.params.id) {
      where.id = req.params.id;
    }
    const requestDB = await Books.findAll({
      where,
    });
    // return res.json(requestDB[0]);
    if (!req.params.id) return res.json(requestDB);
    else {
      if (requestDB.length < 1) {
        return res.status(404).json({ msg: "Tidak ada buku yang ditemukan" });
      } else return res.json(requestDB);
    }
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
