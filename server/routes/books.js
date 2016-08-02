var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/samanthaklein';

router.get('/', function (req, res) {
  pg.connect(connectionString, function (err, client, done) {
    if (err) {
      res.sendStatus(500);
    }

    client.query('SELECT title, author, barcode, due_date, username FROM books ' +
          'JOIN users ON books.user_id = users.user_id;', function (err, result) {
      done();

      console.log(result.rows);

      res.send(result.rows);
    });
  });
});

router.post('/', function (req, res) {
  var book = req.body;
  console.log(book);
  pg.connect(connectionString, function (err, client, done) {
    if (err) {
      res.sendStatus(500);
    }

    client.query('INSERT INTO books (title, author, barcode, due_date, user_id) ' +
                  'VALUES ($1, $2, $3, $4, $5)',
                   [book.title, book.author, book.id, book.dueDate, book.user],
                 function (err, result) {
                   done();

                   if (err) {
                     res.sendStatus(500);
                     return;
                   }

                   res.sendStatus(201);
                 });
  });
});

router.delete('/delete/:barcode', function(req, res) {
    var barcode = req.params.barcode;
    pg.connect(connectionString, function(err, client, done) {
            if (err) {
                console.log('connection err');
                res.sendStatus(500);
            }
            client.query('DELETE FROM books ' +
                         'WHERE barcode = $1 ',
                         [barcode],
                function(err, result) {
                    done();
                    if (err) {
                        console.log('put err');
                        res.sendStatus(500);
                        return;
                    }
                    res.sendStatus(204);
                });
    });
});



module.exports = router;
