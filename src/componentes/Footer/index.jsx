import './footer.css'

const Footer = ()=> {
 
 
    return <footer className='footer' style={{backgroundImage:"url(/images/rectangle-1.svg)"}}>
        <div className='redes'>
            <a href='/'>
                <img src="/images/facebook.png" alt="facebook" />
            </a>
            <a href='/'>
                <img src="/images/twitter.png" alt="twitter" />
            </a>
            <a href='/'>
                <img src="/images/instagram.png" alt="instagram" />
            </a>
        </div>
        <img src="/images/logo.png" alt='org' />
        <strong>Desarrollado por Leonardo Basualdo en conjunto con Alura</strong>
    </footer>   
}


export default Footer;