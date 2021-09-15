import './styles.scss'
import { ReactComponent as LoginImage } from 'core/assets/images/loginImage.svg'
import LoginCard from './Components/LoginCard'

const Login = () =>{
    
    return (
        <div className="login-main">
           
            <div className="login-main-information"> 
                <h1 className="login-main-information-title">
                    Avalie Filmes
                </h1>
                <h3 className="login-main-information-subtitle">
                    Diga o que você achou do seu filme favorito
                </h3>
                <div className="login-main-image">
                    <LoginImage/>
                </div>
                
            </div>
            
            <LoginCard />
            
        </div>
    )
}
export default Login;