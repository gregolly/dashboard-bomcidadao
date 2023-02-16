import { NavLink } from "react-router-dom";
import { UserCircle } from 'phosphor-react'
import { HeaderContainer } from "./style";

export function Header() {
    return (
        <HeaderContainer>
            <div>
                <span>
                    <UserCircle size={32} />
                </span>
            </div>
            <nav>
                <NavLink 
                    to={"/home"}
                    className={({ isActive }) =>
                        [
                        "link_nav",
                        isActive ? "active" : null,
                        ]
                        .filter(Boolean)
                        .join(" ")
                    }
                    end
                >
                    Home
                </NavLink>

                <NavLink 
                    to={"/ocorrencias"}
                    className={({ isActive }) =>
                        [
                        "link_nav",
                        isActive ? "active" : null,
                        ]
                        .filter(Boolean)
                        .join(" ")
                    }
                    end
                >
                    Ocorrências
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}