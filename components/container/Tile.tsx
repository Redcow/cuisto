export function Tile (props) {
    return (
        <div class="tile">
            {props.children}
            <h4>{props.title}</h4>
        </div>
    )
}