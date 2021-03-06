const { Users } = require("../../models");

const service = async function (req, res, next) {
  try {
    const where = { id: req.params.id };
    const requestDB = await Users.destroy({ where });
    if (requestDB) {
      return res.json({ msg: "User berhasil dihapus" });
    } else {
      return res.status(404).json({ msg: "User gagal dihapus" });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
