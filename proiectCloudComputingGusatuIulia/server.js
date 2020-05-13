'use strict';
const express = require('express');

const Sequelize = require('sequelize');
const app = express();
app.use('/', express.static('frontend'));
app.use(express.json());
app.use(express.urlencoded());


const sequelize = new Sequelize('iulia_books', 'iulia', 'iulia', {
    dialect: "mysql",
    host: "localhost"
});
sequelize.authenticate().then(() => {
    console.log("Connected to database");
}).catch(() => {
    console.log("Unable to connect to database");
});
console.log('server started');

//User
const User = sequelize.define('user', {
 
    firstName: Sequelize.STRING,
       
    email: Sequelize.STRING,
        
    userName: Sequelize.STRING,
       
    password: Sequelize.STRING
 
});

//Books
const Book = sequelize.define('book', {
    title: Sequelize.STRING,
        
    author:  Sequelize.STRING,
        
    url: Sequelize.STRING
});
//create tables
app.get('/create', (request, response) => {
    sequelize.sync({force:true}).then(() => {
        response.status(200).send('tables created');
    }).catch((err) => {
        console.log(err)
        response.status(200).send('could not create tables');
    })
})
//Users


app.get('/users', (request, response) => {
    User.findAll().then((results) => {
        response.status(200).json(results);
    });
});

app.get('/users/:id', (request, response) => {
    User.findByPk(request.params.id).then((result) => {
        if(result) {
            response.status(200).json(result);
        } else {
            response.status(404).send('resource not found');
        }
    }).catch((err) => {
        console.log(err);
        response.status(500).send('database error');
    });
});

app.post('/users', async (req, res) => {
    User.create(req.body).then((result) => {
        res.status(201).json(result);
    }).catch((err) => {
        res.status(500).send("resource not created");
    });
});

app.put('/users/:id', async (req, res) => {
    User.findByPk(req.params.id).then((message) => {
        if(message) {
            message.update(req.body).then((result) => {
                res.status(201).json(result);
            }).catch((err) => {
                console.log(err);
                res.status(500).send('database error');
            })
        } else {
            res.status(404).send('resource not found')
        }
    }).catch((err) => {
        console.log(err);
        res.status(500).send('database error');
    });
});
app.delete('/users/:id', async (req, res) => {
    try {
        let user = await User.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            res.status(202).json({ message: 'accepted' });
        }
        else {
            res.status(404).json({ message: 'not found' });
        }
    }
    catch (e) {
        console.warn(e);
        res.status(500).json({ message: 'server error' });
    }
});

//Books
app.get('/books', (request, response) => {
    Book.findAll().then((results) => {
        response.status(200).json(results);
    });
});
app.get('/books/:id', (request, response) => {
    Book.findByPk(request.params.id).then((result) => {
        if(result) {
            response.status(200).json(result)
        } else {
            response.status(404).send('resource not found')
        }
    }).catch((err) => {
        console.log(err)
        response.status(500).send('database error')
    })
})
app.post('/books', async (req, res) => {
 Book.create(req.body).then((result) => {
        res.status(201).json(result);
    }).catch((err) => {
        res.status(500).send("resource not created");
    });
});

app.put('/books/:id', async (req, res) => {
    Book.findByPk(req.params.id).then((message) => {
        if(message) {
            message.update(req.body).then((result) => {
                res.status(201).json(result);
            }).catch((err) => {
                console.log(err);
                res.status(500).send('database error');
            });
        } else {
            res.status(404).send('resource not found');
        }
    }).catch((err) => {
        console.log(err);
        res.status(500).send('database error');
    });
});

app.delete('/books/:id', async (req, res) => {
    try {
        let book = await Book.findByPk(req.params.id);
        if (book) {
            await book.destroy();
            res.status(202).json({ message: 'accepted' });
        }
        else {
            res.status(404).json({ message: 'not found' });
        }
    }
    catch (e) {
        console.warn(e);
        res.status(500).json({ message: 'server error' });
    }
});
app.listen(process.env.PORT||8080);