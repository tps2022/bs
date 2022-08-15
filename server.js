const express = require('express');
//require env file
require('dotenv').config()
const Book = require('./models/book.js'); //this is require our book views 
const app = express();
const port = process.env.PORT || 3000;
const methodOverride = require('method-override')
const bookData = require('./utilities/bookData')

//require mongoose
const mongoose = require('mongoose');
//this is to process our mongo connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});



//view engine
app.set('view engine', 'jsx'); // this sets up our html template
app.engine('jsx', require('express-react-views').createEngine());//initializing our view engine


//css
app.use(express.static('public'))

//middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'))

//seed route
app.get('/book/seed', async (req,res) => {
    //comment the line below if you don't want to delete your whole entire collection
    await Book.deleteMany({})
    //create a list of book into our database
   await Book.create(bookData) 
    res.redirect('/book')
})

app.get('/', (req, res) => {
    res.sendFile('public/index.html' , { root : __dirname});
  })
  



  
  //book route
  app.get('/book', (req, res) => {
    Book.find({},(err, allBook)=>{
        res.render('Index', {
            book: allBook  
        })
    } )
});
  

app.get('/book/new', (req, res) => {
    res.render('New');
});

//post/create route to take the info from the user completing the form, and create a new fruit based on their input
app.post('/book/', (req, res) => {
    let title=req.body.title.split('')
    title[0]=title[0].toUpperCase()
     req.body.title=title.join('')

    Book.create(req.body, (err, createdBook) => {
             res.redirect('/book')
                // res.send(createdbook)

    })
    
  
});


//show route - ids should always be at bottom  -view book at index of id 
app.get('/book/:id', (req, res) => {
    // res.render('Show', {book:book[req.params.id]});
    Book.findById(req.params.id,(err,foundBook) => {
            res.render('Show', {
                book: foundBook
            })
    } )
});


//edit/update page
app.get('/book/:id/edit', (req, res) =>{
    Book.findById(req.params.id, (error, foundBook) =>{
        if (!error){
            res.render('Edit', {book: foundBook
            })
        } else{
            res.send({message: error.message})
        }
    })
})



//put
app.put('/book/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (error, book) => {
        res.redirect(`/book/${req.params.id}`)
    })
})

//delete route
app.delete('/book/:id', (req, res) => {
    console.log('we are deleting')
    Book.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/book')
    })
})


//listen - logs when the server is running correctly
app.listen(port,() => {
    console.log('i am listening on port' , port);
});

