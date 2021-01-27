import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className="para-box">
            <p onClick={props.paraChange}>{props.username}</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo dicta obcaecati excepturi odio temporibus nobis optio. Iusto totam odit sit repellat numquam asperiores suscipit quasi magnam. Veniam expedita voluptas exercitationem?</p>
        </div>
    )
}

export default UserOutput
