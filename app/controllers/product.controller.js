exports.create = (req, res) => {
    res.send({ message: "Xử lý tạo mới một sản phẩm" });
};

exports.findAll = (req, res) => {
    res.send({ message: "Xử lý tìm tất cả sản phẩm" });
};

exports.findOne = (req, res) => {
    res.send({ message: "Xử lý tìm một sản phẩm theo id" });
};

exports.update = (req, res) => {
    res.send({ message: "Xử lý cập nhật sản phẩm" });
};

exports.delete = (req, res) => {
    res.send({ message: "Xử lý xóa một sản phẩm theo id" });
};

exports.deleteAll = (req, res) => {
    res.send({ message: "Xử lý xóa tất cả sản phẩm" });
};