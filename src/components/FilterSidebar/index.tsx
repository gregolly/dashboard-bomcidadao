import { useContext } from "react";
import { OccurrenceContext } from "../../contexts/OccurrenceContext";
import { DropdownContainer, SelectContainer, SidebarContainer } from "./style";

export function FilterSidebar() {
    const { occurrences, handleCategoryChange, handleStatusChange, selectedCategory, selectedStatus } = useContext(OccurrenceContext)

    return (
        <SidebarContainer>
                <span className="label">Filtros</span>
                <DropdownContainer>
                    <label htmlFor="situacao">Situação</label>
                    <SelectContainer 
                        id="situacao" 
                        name="situacao" 
                        value={selectedStatus}
                        onChange={handleStatusChange}
                    >
                        <option value="" disabled selected>Selecione uma opção</option>
                        { occurrences.map((occurrence) => (
                            <option key={occurrence.id} value={occurrence.status}>{occurrence.status}</option>
                        ))}
                    </SelectContainer>
                </DropdownContainer>
                <DropdownContainer>
                    <label htmlFor="categorias">Categorias</label>
                    <SelectContainer 
                        id="categorias" 
                        name="categorias"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                    >
                        <option value="" disabled selected>Selecione uma opção</option>
                        { occurrences.map((occurrence) => (
                            <option key={occurrence.id} value={occurrence.category}>{occurrence.category}</option>
                        ))}
                    </SelectContainer>
                </DropdownContainer>
                {/* <DropdownContainer>
                    <label htmlFor="ano">Ano</label>
                    <SelectContainer id="ano" name="ano">
                        <option value="" disabled selected>Selecione uma opção</option>
                        <option value="Em andamento">Em andamento</option>
                        <option value="Em analise">Em análise</option>
                        <option value="Finalizado">Finalizado</option>
                    </SelectContainer>
                </DropdownContainer>
                <DropdownContainer>
                    <label htmlFor="mes">Mes</label>
                    <SelectContainer id="mes" name="mes">
                        <option value="" disabled selected>Selecione uma opção</option>
                        <option value="Em andamento">Em andamento</option>
                        <option value="Em analise">Em análise</option>
                        <option value="Finalizado">Finalizado</option>
                    </SelectContainer>
                </DropdownContainer> */}

                <button>Filtrar</button>
            </SidebarContainer>
    )
}