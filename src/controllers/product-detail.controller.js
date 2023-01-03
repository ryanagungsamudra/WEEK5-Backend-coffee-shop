const productDetailModel = require("../model/product-detail.model")
const formResponse = require("../../helper/response")

const productDetailController = {
    create: (req, res) => {
        return productDetailModel.create(req.body)
            .then((result) => {
                return formResponse(201, "success", result, res)
            }).catch((error) => {
                return formResponse(500, error)
            })
    },

    read: (req, res) => {
        return productDetailModel.read(req.query)
            .then((result) => {
                return formResponse(200, "success", result, res)
            }).catch((error) => {
                return formResponse(500, error)
            })
    },

    readDetail: (req, res) => {
        return productDetailModel.readDetail(req.params.id)
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
        return productDetailModel.update(request)
            .then((result) => {
                return formResponse(201, "success", result, res)
            }).catch((error) => {
                return formResponse(500, error)
            })
    },
    remove: (req, res) => {
        return productDetailModel.remove(req.params.id)
            .then((result) => {
                return formResponse(200, "success", result, res)
            }).catch((error) => {
                return formResponse(500, error)
            })
    }
}

module.exports = productDetailController