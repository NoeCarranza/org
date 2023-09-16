import "./footer.css"

const Footer = () =>{
    return <footer className="footer" style={{backgroundImage: "url(./img/footer2.jpg)"}}>
        <div className="redes">
            <a href='https://github.com/NoeCarranza'>
                <img src="/img/facebook.png" alt="fb"/>
            </a>
            <a href='https://github.com/NoeCarranza'>
                <img src="/img/twitter.png" alt="twitter"/>
            </a>
            <a href='https://github.com/NoeCarranza'>
                <img src="/img/instagram.png" alt="instagram"/>
            </a>
        </div>
        <div className="desarrollado">
        <strong>Desarrollado por:</strong>
        <img className="firma"src="/img/firma.png" alt="firma"/>
        </div>

    </footer>
}

export default Footer