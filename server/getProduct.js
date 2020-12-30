/*const products = require('../products.json')

//NEED TO DEBUG BELOW
getProduct: (req, res) => {
    const { id } = req.params

    const product = data.find(element => element.id === +id)
    if (!product) return res.status(500).send('Item not in list')
    res.status(200).send(product)

}
*/
const products = require('../products.json')

const getProduct = (req, res) => {
    // find returns the item if it finds it, or undefined if not
    const item = products.find((val) => val.id === parseInt(req.params.id))
    if (!item) {
        return res.status(500).send('Item not in list')
    }
    res.status(200).send(item)
}

module.exports = getProduct