var express = require('express');
var router = express.Router();

const Car = require('../model/car');

//Thêm dữ liệu vào database
router.post('/addCar', (req, res) => {
    const data = req.body;
    const newCar = new Car({
        maXe: data.maXe,
        mauSac: data.mauSac,
        giaTien: data.giaTien
    });
    newCar.save()
        .then(() => {
            res.send('Thêm thành công');
        })
        .catch((error) => {
            res.send('Thêm thất bại' + error);
        });
});

//Lấy dữ liệu từ database
router.get('/getListCar', (req, res) => {
    Car.find()
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            res.send('Lấy danh sách thất bại' + error);
        });
});

module.exports = router;