
const getProductDetail = async (req, res) => {
    try {
        const listFeedback = [
            {
                title: 'Get the best seller at a great price.',
                detail: 'I read this book shortly after I got it and didn\'t just put it on my TBR shelf mainly because I saw it on Reese Witherspoon\'s bookclub September read. It was one of the best books I\'ve read this year, and reminded me some of Kristen Hannah\'s The Great Alone.'
            },
            {
                title: 'Get the best seller at a great price.',
                detail: 'I read this book shortly after I got it and didn\'t just put it on my TBR shelf mainly because I saw it on Reese Witherspoon\'s bookclub September read. It was one of the best books I\'ve read this year, and reminded me some of Kristen Hannah\'s The Great Alone.'
            },
            {
                title: 'Get the best seller at a great price.',
                detail: 'I read this book shortly after I got it and didn\'t just put it on my TBR shelf mainly because I saw it on Reese Witherspoon\'s bookclub September read. It was one of the best books I\'ve read this year, and reminded me some of Kristen Hannah\'s The Great Alone.'
            }
        ]
        return res.render('product-detail',{
            product: {
                id: 1,
                name: 'Where the Crawdads Sing',
                image: 'https://res.cloudinary.com/awi-ln/image/upload/v1649320740/product_1_nkgqym.jpg',
                price: '23',
                unitStock: '$',
                author: 'Anna Banks',
                description: 'We aim to show you accurate product information. Manufacturers, suppliers and others provide what you see here, and we have not verified it. See our disclaimer\n' +
                    '\n' +
                    '#1 New York Times Bestseller\n' +
                    '\n' +
                    'A Reese Witherspoon x Hello Sunshine Book Club Pick\n' +
                    '\n' +
                    '"I can\'t even express how much I love this book! I didn\'t want this story to end!"--Reese Witherspoon\n' +
                    '\n' +
                    '"Painfully beautiful."--The New York Times Book Review\n' +
                    '\n' +
                    '"Perfect for fans of Barbara Kingsolver."--Bustle\n' +
                    '\n' +
                    'For years, rumors of the "Marsh Girl" have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl. But Kya is not what they say. Sensitive and intelligent, she has survived for years alone in the marsh that she calls home, finding friends in the gulls and lessons in the sand. Then the time comes when she yearns to be touched and loved. When two young men from town become intrigued by her wild beauty, Kya opens herself to a new life--until the unthinkable happens.\n' +
                    '\n' +
                    'Perfect for fans of Barbara Kingsolver and Karen Russell, Where the Crawdads Sing is at once an exquisite ode to the natural world, a heartbreaking coming-of-age story, and a surprising tale of possible murder. Owens reminds us that we are forever shaped by the children we once were, and that we are all subject to the beautiful and violent secrets that nature keeps\n' +
                    '\n' +
                    'WHERE THE CRAWDADS LP'
            },
            listFeedback: listFeedback,
            style: 'product-detail.css',
            js: 'product-detail.js'
        });
    }catch (err) {
        console.log(err);
    }
}
module.exports ={
    getProductDetail
}
