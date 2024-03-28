import { useState } from 'react'
export default function Search(props) {
    const [text, setText] = useState('')
    const HandlingSubmit = (event) => {
        event.preventDefault()
        console.log("Hi");
        props.searchMovie(text)
    }
    return (
        <form onSubmit={HandlingSubmit} className="d-flex input-group" style={{ width: 300 }}>
            <input type="text" onChange={e => setText(e.target.value)} value={text} className="form-control" placeholder="Cari Film yang anda mau" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <button type="submit" className="btn btn-secondary input-group-append">Search</button>
        </form>
    )
}