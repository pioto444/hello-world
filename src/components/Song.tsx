interface Props {
    index: number; 
    name: string,
    length: string
}

export default function Song({index, name, length}: Props ) {
    return (
        <li key={index} className="track">{name} - <span className="track-length">{length}</span></li>
    )
}