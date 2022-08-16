const React = require('react');


// const bg = {
//     backgroundColor: 'pink',
// }

// const h1 = {
// textDecoration:'underline',
// border: 'dotted blue 2px'

// }


class Index extends React.Component {
       render() {
const {book} = this.props
    return(

                <html>
                <head>
                    <title></title>
                    <link href="../css/style.css" rel='stylesheet'/>
                </head>
                <body>
                    <h1 className="bookstoreheader">Book Store</h1>
                   <ul>
                    {book.map((book1) => {
                            let btn;
                            let qty;

                            if(book1.stock == 0 || book1.stock == null){
                                    qty = 'Out of Stock'
                                    btn = null
                            } else {
                                qty = book1.stock
                                btn =  <form action={`/book/${book1.id}?_method=PUT`} method="POST">
                                <input type="hidden" name="title" value={book1.title} />
                                <input type="hidden" name="img" value={book1.img} />
                                <input type="hidden" name="stock" value={book1.stock-1} />
                            <input type="hidden" name="price" value={book1.price} />
                                <input type="submit" name="" value="Add to Cart"/>
                            </form>
                            }
 
                        return(
                            <li>
                              <h3>{book1.title}</h3>
                              <a href={`/book/${book1.id}`}><img src={book1.img}  width='150px' height='150px' /></a><br />
                              Quantity: {qty}<br />
                             Price: {book1.price}<br />
                                {btn}

                              <form action={`/book/${book1.id}?_method=DELETE`} method='POST'><button type="submit">Delete</button></form>
                              <a href={`/book/${book1.id}/edit`}>Edit this Book</a> 
                            </li>
                        )
                    })}
                    </ul>
                    <a href="/">Home</a><br />
                    <a href="/book">Back to the Book Store</a><br />
        <a href="/book/new">Create a New Book</a>
        
                </body>
                </html>
              )       
                     
              
       }
}


module.exports = Index;
