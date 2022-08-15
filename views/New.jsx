

const React = require('react');

// const bg = {
//     backgroundColor: 'pink',
// }

// const h1 = {
// textDecoration:'underline',
// border: 'dotted blue 2px'

// }


class New extends React.Component {
       render() {
const {book} = this.props
    return(
      
         
              
                     

                <html>
                <head>
                    <title></title>
                    <link href="../css/style.css" rel='stylesheet'/>
                </head>
                <body className="newbody">
                
                  
                  {/* <img src={book.img + '.jpg'}></img><br /> */}
    

        <div>
               <h1 className="newpageheader">Create a New Book</h1>
               {/* NOTE: action will be the route, method will be the HTTP verb */}
               <form action="/book" method="POST">
                Title: <input type="text" name="title" /><br/>
                Image: <input type="text" name="img" /><br/>
                Stock: <input type="number" name="stock" /><br/>
                Price: <input type="text" name="price" /><br/><br/>
                 <input type="submit" name="" value="Create book"/>
               </form>
<br />
               <a href="/book">Back to the Index Page</a><br />
              <a href="/book/new">Create a New book</a>

           </div>
       
                </body>
                </html>
              )       
                     
              
       }
}






module.exports = New;