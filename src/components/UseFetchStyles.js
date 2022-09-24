import styled from "styled-components";

export const PostDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    justify-content: center;
    text-align: center;
    align-items: center;
    p{
        border: 1px solid #dda120;
        padding: 0.5rem 0.5rem;
    }
    input{
        width: auto;
        height: 30px;
    }
    h2{
        font-size: 1.4rem;
        font-weight: 400;
    }
`
 export const CustomButton = styled.button`
    width: 100px;
    color: white;
    background-color: #dda120;
    border-radius: 10px;
    padding: 1rem;
    margin: 0.7rem;
`