var Imap = require('imap');
var config = require('./config');
// console.log(config);

var imap = new Imap(config);

imap.once('ready', function () {
    console.log('connected ... ');
    imap.openBox('INBOX', true, function (err, box) {

        // get all unseen mails since some time
        imap.search(['UNSEEN', ['SINCE', 'AUGUST 4, 2015']], function (err, results) {
            console.log(results);
        });

    });
});
imap.connect();