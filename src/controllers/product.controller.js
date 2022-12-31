const productModel = require("../model/product.model")

const productController = {
    read: (req, res) => {
        return productModel.read()
            .then((result) => {
                return res.status(200).send({ message: "succes", data: result })
            }).catch((error) => {
                return res.status(500).send({ message: error })
            })
    },
    readDetail: (req, res) => {
        return productModel.readDetail(req.params.id)
            .then((result) => {
                return res.status(200).send({ message: "succes", data: result })
            }).catch((error) => {
                return res.status(500).send({ message: error })
            })
    },
    create: (req, res) => {
        return productModel.create(req.body)
            .then((result) => {
                return res.status(201).send({ message: "succes", data: result })
            }).catch((error) => {
                return res.status(500).send({ message: error })
            })
    },
    update: (req, res) => {
        const request = {
            ...req.body,
            id: req.params.id
        }
        return productModel.update(request)
            .then((result) => {
                return res.status(201).send({ message: "succes", data: result })
            }).catch((error) => {
                return res.status(500).send({ message: error })
            })
    },
    remove: (req, res) => {
        return productModel.remove(req.params.id)
            .then((result) => {
                return res.status(200).send({ message: "succes", data: result })
            }).catch((error) => {
                return res.status(500).send({ message: error })
            })
    }
}

module.exports = productController