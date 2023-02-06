

export default function Tags(props) {


    console.log(props);
    let listItem = props.props.map(e => {
        return <li className="tag">#{e}</li>
    })
    return (


        <ul className="tags">{listItem}</ul>


    )




}