// import './Person.css'
import styled from 'styled-components'

const StyledDiv = styled.div`
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    width: 60%;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
        background-color: gray;
    }

`;


const Person = (props) => {

    // const style = {
    //     '@media (min-width: 500px)': {
    //         width:'450px',
    //         backgroundColor: 'gray'
    //     }
    // }

    return (
        // <div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.click}> I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>    
    )
}

export default Person


