import { Link } from "react-router-dom";
import { ButtonLogin, SelectContainer } from "../Login/style";
import { ChangePasswordContainer, ChangePasswordModal } from "./style";

export function ChangePassword() {
    return (
        <ChangePasswordContainer>
            <h2>Bom cidadão</h2>
                <ChangePasswordModal>
                    <h3>Recuperar senha</h3>
                    <SelectContainer>
                        <label htmlFor="email">E-mail</label>
                        <input type="text" name="email" id="email" />
                    </SelectContainer>
                    <ButtonLogin>Enviar</ButtonLogin>
                    <Link to={"/"}>Cancelar</Link>
                </ChangePasswordModal>
        </ChangePasswordContainer>
    )
}