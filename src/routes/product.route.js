const express = require('express');
const router = express();

// import controller
const productController = require('../controllers/product.controller')

router.get('/', productController.read)
router.get('/:id', productController.readDetail)
router.post('/',productController.create)
router.put('/', productController.update)
router.patch('/:id', productController.update)
router.delete('/:id', productController.remove) 
// jangan pakai delete karna bisa bentrok dengan method delete built in


// router.get("/products", (req, res) => {
//     db.query(
//         `SELECT * from products`,
//         (err, result) => {
//             if (err) {
//                 return res.status(500).send({ message: err.message });
//             } else {
//                 return res.status(200).send({ message: "succes", data: result.rows });
//             }
//         }
//     );
// });

// router.get("/products/:id", (req, res) => {
//     const { id } = req.params
//     db.query(
//         `SELECT * from products WHERE id='${id}'`,
//         (err, result) => {
//             if (err) {
//                 return res.status(500).send({ message: err.message });
//             } else {
//                 return res.status(200).send({ message: "succes", data: result.rows[0] });
//             }
//         }
//     );
// });

// router.post("/products", (req, res) => {
//     const { title, img, price, category } = req.body;
//     db.query(
//         `INSERT INTO products (id, title, img, price, category) VALUES ('${uuidv4()}','${title}','${img}','${price}','${category}')`,
//         (err, result) => {
//             if (err) {
//                 return res.status(500).send({ message: err.message });
//             } else {
//                 return res.status(201).send({ message: "succes", data: req.body });
//             }
//         }
//     );
// });

// router.put("/products/:id", (req, res) => {
//     const { title, img, price, category } = req.body
//     const { id } = req.params
//     db.query(
//         `UPDATE products SET title='${title}', img='${img}',price='${price}', category='${category}' WHERE id='${id}'`,
//         (err, result) => {
//             if (err) {
//                 return res.status(500).send({ message: err.message });
//             } else {
//                 return res.status(201).send({ message: `success update data ${id}`, data: res.body });
//             }
//         }
//     );
// });

// router.patch("/products/:id", (req, res) => {

//     //ngambil data dulu dari database berdasarkan id,
//     // kita update
//     const { title, img, price, category } = req.body
//     const { id } = req.params
//     db.query(`SELECT * FROM products WHERE id='${id}'`, (err, result) => {
//         if (err) {
//             return res.status(500).send({ message: err.message });
//         } else {
//             // const dataUpdate = [result.rows[0].title, result.rows[0].img, result.rows[0].price, result.rows[0].category]
//             db.query(
//                 `UPDATE products SET title='${title || result.rows[0].title}', img='${img || result.rows[0].img}',price='${price || result.rows[0].price}', category='${category || result.rows[0].category}' WHERE id='${id}'`,
//                 (err, result) => {
//                     if (err) {
//                         return res.status(500).send({ message: err.message });
//                     } else {
//                         return res.status(201).send({ message: `success update data ${id}`, data: res.body });
//                     }
//                 }
//             );
//         }
//     })
// });

// router.delete("/products/:id", (req, res) => {
//     const { id } = req.params
//     db.query(
//         `DELETE from products WHERE id='${id}'`,
//         (err, result) => {
//             if (err) {
//                 return res.status(500).send({ message: err.message });
//             } else {
//                 return res.status(201).send({ message: `success delete data ${id}`, data: {} });
//             }
//         }
//     );
// });

module.exports = router