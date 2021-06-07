import React from 'react'
import './footer.css'

export const Footer = () => {
    let footerStyle ={
        position:"Relative",
        top: "70vh",
        width:"100%",
        border: "2px solid red"
    }
    return (
        <footer>
            <div className="bg-dark text-light py-3" style={footerStyle}> 
                
                <p className="text-center"> Copyright &copy; MyTodosList.com </p>
            </div>
        </footer>
    )
}
