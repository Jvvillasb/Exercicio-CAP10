import './styles.scss'
import { ReactComponent as Arrow } from 'core/assets/images/arrow.svg'
import EyesOpened  from 'core/assets/images/eyesOpened.png'
import EyesClosed  from 'core/assets/images/eyesClosed.png'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { makeLogin } from 'core/utils/request'
import { saveSessionData } from 'core/utils/auth'
import { useHistory, useLocation } from 'react-router'

type FormState = {
    username: string;
    password: string;
}
type LocationState = {
    from :string;
}

const LoginCard = () => {
    const [hasError, setHasError] = useState(false);
    const [hidePassword, setHidePassword]=useState(false);
    const { register, handleSubmit, errors } = useForm<FormState>();
    const history = useHistory();
    const location = useLocation<LocationState>();
    let { from } = location.state || { from: {pathname:"/movies"}};
    
    const onSubmit = (data: FormState) => {
        console.log(data)
        makeLogin(data)
                  .then(response => {
                    console.log(response)
                    saveSessionData(response.data);
                    setHasError(false)
                    history.replace(from);
                  })
                  .catch((erro)=>{
                      console.log(erro)
                      setHasError(true)
                  })
        ;
    }

    return (
        <div className="card-login-main">
           
            <h1 className="card-login-title">
                LOGIN
           </h1>

           {hasError && (
                    <div className="alert alert-warning">
                        Usuário ou senha inválido!
                    </div>
            )}

           <input
                className="card-login-input"
                type="text"
                placeholder="Email"
                name="username"
                ref={register({
                    required: "Campo obrigatório",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email inválido"
                    }
                  })}
                />
                {errors.username && (
                <div className="invalid-feedback-default d-block">
                        {errors.username.message}
                </div>
                )}

            <input
                className="card-login-input card-login-password"
                type={hidePassword ? "text" : "password"}
                placeholder="Senha"
                name="password"
                    ref={register({ required: "Campo obrigatório"})}
                    />
            <button 
                className="card-login-hide-password" 
                onClick={() => setHidePassword(!hidePassword)}
            >
                <img src={hidePassword ?  EyesClosed : EyesOpened} alt="" />
            </button>
            {errors.password && (
                    <div className="invalid-feedback-default d-block">
                            {errors.password.message}
                    </div>
            )}

            <div className="card-login-btn-container">
                <button 
                    className="card-login-btn"
                    onClick={handleSubmit(onSubmit)}
                >
                    LOGAR
                </button>
                <div className="card-login-btn-incon-arrow">
                    <Arrow />
                </div> 
            </div>

        </div>
    )
}
export default LoginCard;