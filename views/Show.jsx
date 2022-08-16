

const React = require('react');


const bg = {
    backgroundColor: 'pink',
}

const h1 = {
textDecoration:'underline',
border: 'dotted blue 2px'

}


class Show extends React.Component {
       render() {
const book = this.props.book;
console.log(book)
    return(
      
         
              
                     

                <html style={bg}>
                <head>
                    <title></title>
                </head>
                <body>
                    <h1 style={h1}>See All the Books!</h1>
                  <h2>{book.title}</h2>
                  <img src={book.img}></img><br />
                  <a href="/">Home</a><br />
        <a href="/book">Back to the Book Store</a><br />
        <a href="/book/new">Create a New Book</a><br />
        <a href="/book/edit">Edit the Book</a><br />
                </body>
                </html>
              )       
                     
              
       }
}

module.exports = Show;