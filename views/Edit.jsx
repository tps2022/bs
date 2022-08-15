

const React = require('react')


const bg = {
    backgroundColor: 'pink',
}

const h1 = {
textDecoration:'underline',
border: 'dotted blue 2px'

}


class Edit extends React.Component {
    render() {
        const book = this.props.book
        return (
            <div>
                <h1 style={bg}>Edit Book page</h1>
                <form action={`/book/${book.id}?_method=PUT`} method="POST">
                    Title: <input type="text" name="title" /><br/>
                    Image: <input type="text" name="img" /><br/>
                    Stock: <input type="number" name="stock" /><br/>
                Price: <input type="text" name="price" /><br/>
                    <input type="submit" name="" value="Edit book"/>
                </form>
            </div>
        )
    }
}

module.exports = Edit