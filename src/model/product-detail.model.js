const { query } = require('express');
const db = require('../../helper/connection')
const { v4: uuidv4 } = require('uuid');

const productDetailModel = {
    // CREATE
    create: ({ title, img, category, price, size, quantity, delivery, time }) => {
        return new Promise((resolve, reject) => {
            db.query(
                `INSERT INTO products-detail (id, title, img, category, price, size, quantity, delivery, time) VALUES ('${uuidv4()}','${title}','${img}','${category}','${price}', '${size}', '${quantity}', '${delivery}', '${time}' )`,
                (err, result) => {
                    if (err) {
                        return reject(err.message)
                    } else {
                        return resolve({ title, img, category, price, size, quantity, delivery, time })
                    }
                }
            )
        })
    },

    // READ
    query: (queryParams, sortType = 'asc', limit = 50) => {
        if (queryParams.search && queryParams.category) {
            return `WHERE title LIKE '%${queryParams.search}%' AND category LIKE '${queryParams.category}%' ORDER BY title ${sortType} LIMIT ${limit}`
        } else if (queryParams.search || queryParams.category) {
            return `WHERE title LIKE '%${queryParams.search}%' OR category LIKE '${queryParams.category}%' ORDER BY title ${sortType} LIMIT ${limit}`
        } else {
            return `ORDER BY title ${sortType} LIMIT ${limit}`
        }
    },

    read: function (queryParams) {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT * from products-detail ${this.query(queryParams, queryParams.sortBy, queryParams.limit)}`,
                (err, result) => {
                    if (err) {
                        return reject(err.message)
                    } else {
                        return resolve(result.rows)
                    }
                }
            )
        })
    },

    readDetail: (id) => {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT * from products-detail WHERE id='${id}'`,
                (err, result) => {
                    if (err) {
                        return reject(err.message)
                    } else {
                        return resolve(result.rows[0])
                    }
                }
            );
        })
    },

    // UPDATE
    update: ({ id, title, img, price, category }) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM products-detail WHERE id='${id}'`, (err, result) => {
                if (err) {
                    return reject(err.message);
                } else {
                    db.query(
                        `UPDATE products-detail SET title='${title || result.rows[0].title}', img='${img || result.rows[0].img}',price='${price || result.rows[0].price}', category='${category || result.rows[0].category}' WHERE id='${id}'`,
                        (err, result) => {
                            if (err) {
                                return reject(err.message)
                            } else {
                                return resolve({ id, title, img, price, category })
                            }
                        }
                    )
                }
            })
        })
    },

    // DELETE
    // untuk remove tergantung paramnya saja, untuk kasus dibawah ini yaitu id.
    remove: (id) => {
        return new Promise((resolve, reject) => {
            db.query(
                `DELETE from products-detail WHERE id='${id}'`,
                (err, result) => {
                    if (err) {
                        return reject(err.message)
                    } else {
                        return resolve(`products ${id} has been deleted`)
                    }
                }
            )
        })
    }
}

module.exports = productDetailModel