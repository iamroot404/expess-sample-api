const path = require('path');

function getMessages(req, res){

    res.render('messages', {
        title: "Hello morons",
        friend: "Ted"
    })
    
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'img.webp'));
    // res.send('<ul><li>Hello Tony Stark!</li></ul>');
    
}

function postMessage(req, res){
    console.log('Updating Messages....')
}


module.exports = {
    getMessages,
    postMessage

};