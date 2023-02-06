

export default function Tags(props) {

  const array = props.props
    return (
        <ul className="tags">{array.map(e=> <li className="tag">#{e}</li>)}</ul>
    )
}



