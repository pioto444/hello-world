interface Props {
    index: number; 
    name: string,
    length: string
}

export default function Song({index, name, length}: Props ) {
    return (
        <tr key={index} className="track">
            <td>{name}</td>
            <td><span className="track-length">{length}</span></td>
        </tr>
    )
}