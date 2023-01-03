const productModel = require("../model/product.model")
const formResponse = require("../../helper/response")

const productController = {
    create: (req, res) => {
        return productModel.create(req.body)
            .then((result) => {
                return formResponse(201, "success", result, res)
            }).catch((error) => {
                return formResponse(500, error)
            })
    },
    
    read: (req, res) => {
        return productModel.read(req.query)
            .then((result) => {
                return formResponse(200, "success", result, res)
            }).catch((error) => {
                return formResponse(500, error)
            })
    },

    readDetail: (req, res) => {
        return productModel.readDetail(req.params.id)
            .then((result) => {
                return formResponse(200, "success", result, res)
            }).catch((error) => {
                return formResponse(500, error)
            })
    },
    update: (req, res) => {
        const request = {
            ...req.body,
            id: req.params.id
        }
        return productModel.update(request)
            .then((result) => {
                return formResponse(201, "success", result, res)
            }).catch((error) => {
                return formResponse(500, error)
            })
    },
    remove: (req, res) => {
        return productModel.remove(req.params.id)
            .then((result) => {
                return formResponse(200, "success", result, res)
            }).catch((error) => {
                return formResponse(500, error)
            })
    }
}

module.exports = productController