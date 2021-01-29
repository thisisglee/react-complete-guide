const UserInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.inputChanged} value={props.username}/>
        </div>
    )
}

export default UserInput
