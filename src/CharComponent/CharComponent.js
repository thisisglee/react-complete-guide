import './CharComponent.css'

const CharComponent = (props) => {

    return (
        <div className="CharComponent">
            {props.alphabet}
        </div>
    )
}

export default CharComponent
