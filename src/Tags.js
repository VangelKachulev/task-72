

export default function Tags(tags) {
    console.log(tags);
    const array = tags.tags
    return (
        <ul className="tags">{array?.map(e => <li className="tag">#{e}</li>)}</ul>
    )
}



