

export default function Tags(props) {


    // console.log(props.props);

    return (
        <ul>{props.props.map(e => <li  className="tag">#{e}</li>)}</ul>
    )




}