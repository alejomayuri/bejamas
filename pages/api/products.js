const products = [
    {
        name: 'Product 1',
        category: 'Category 1',
    },
    {
        name: 'Product 2',
        category: 'Category 2',
    },
    {
        name: 'Product 3',
        category: 'Category 1',
    },
]

export default function handler(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(products))
  }