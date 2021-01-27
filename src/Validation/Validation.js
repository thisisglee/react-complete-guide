const Validation = (props) => {

    let reply = ""

    if(props.textLength <5){
        reply = "Text too Short"
    }else if(props.textLength >=5){
        reply ="Text long enough"
    }
    return (
        <div>
            {reply}
        </div>
    )
}

export default Validation
