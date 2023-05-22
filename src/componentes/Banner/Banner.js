import './Banner.css'

function Banner(){
    //JSX é como o react lê e transforma em elementos do dom
    //document.createElement('img')
    return(
        <header className="banner">
        <img src="/imagens/banner.png" alt="banner principal da página do Organo"/>
        </header>
    )

}

export default Banner