import { CaretLeft, MapPin, UserCircle } from "phosphor-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { OccurrenceContext } from "../../../../contexts/OccurrenceContext";
import { FlexContainer } from "../../../../styles/global";
import { Header } from "../../../Home/components/Header";
import { AdressInfo, BackLink, Category, ContainerInfos, ContainerInnerOcurrences, Gallery, LabelsContainer, SelectContainer, Status, TextContainer, UserInfo } from "./style";

export function InnerOcurrence(){
    const { occurrences } = useContext(OccurrenceContext)
    return (
        <>
            <Header />

            <ContainerInnerOcurrences>
                <FlexContainer>
                    <BackLink>
                        <CaretLeft />
                        <Link to={'/ocorrencias'}>Voltar</Link>
                    </BackLink>
                    <div>
                        <SelectContainer>
                            <option value="" disabled selected>Selecione uma opção</option>
                            <option value="Em andamento">Em análise</option>
                            <option value="Em andamento">Em andamento</option>
                            <option value="Em andamento">Finalizado</option>
                        </SelectContainer>
                    </div>
                </FlexContainer>

                <FlexContainer>
                    <ContainerInfos>
                        <UserInfo>
                            <UserCircle size={24} />
                            Ingrid souza
                        </UserInfo>
                        <AdressInfo>
                            <MapPin  size={24}/>
                            Rua josé, centro, 52 -n
                        </AdressInfo>
                    </ContainerInfos>

                    <LabelsContainer>
                        <Category>Ruas e trânsito</Category>
                        <Status>Em andamento</Status>
                    </LabelsContainer>
                </FlexContainer>

                <TextContainer>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged.
                </TextContainer>

                <Gallery>
                    <img src="https://via.placeholder.com/600/09f/fff.png " alt="" />
                    <img src="https://via.placeholder.com/600/09f/fff.png " alt="" />
                    <img src="https://via.placeholder.com/600/09f/fff.png " alt="" />
                    <img src="https://via.placeholder.com/600/09f/fff.png " alt="" />
                </Gallery>
            </ContainerInnerOcurrences>
        </>
    )
}