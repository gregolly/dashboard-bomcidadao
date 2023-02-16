import { Link } from "react-router-dom";
import { ButtonLogin, ContainerLogin, ContainerLoginModal, SelectContainer } from "./style";

export function Login() {
    return(
        <>
            <ContainerLogin>
                    <h2>Bom cidadão</h2>
                    <ContainerLoginModal>
                        <h3>Acesse com sua conta</h3>
                        <SelectContainer>
                            <label htmlFor="userOrEmail">Usuário ou e-mail</label>
                            <input type="text" name="userOrEmail" id="userOrEmail" />
                        </SelectContainer>
                        <SelectContainer>
                            <label htmlFor="password">Senha</label>
                            <input type="password" name="password" id="password" />
                        </SelectContainer>
                        <ButtonLogin>Entrar</ButtonLogin>
                        <Link to={"/changePassword"}>Esqueceu a senha?</Link>
                    </ContainerLoginModal>
            </ContainerLogin>
        </>
    )
}