import { MapPin, UserCircle } from "phosphor-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FilterSidebar } from "../../../components/FilterSidebar";
import { OccurrenceContext } from "../../../contexts/OccurrenceContext";
import { ContainerOcurrence, OcurrenceWrappper, TableContainer, TableHead, TableRow } from "../style";

export function TableOccurrences() {
    const { filteredList } = useContext(OccurrenceContext)

    return (
        <>
            <ContainerOcurrence>
                <OcurrenceWrappper>
                    <h3>Todas as ocorrências</h3>
                    <TableContainer>
                            <thead>
                                <tr>
                                    <TableHead>Nome</TableHead>
                                    <TableHead>Descrição</TableHead>
                                    <TableHead>Situação e Categorias</TableHead>
                                </tr>
                            </thead>
                            {filteredList?.map((occurrence) => (
                                <tbody>
                                    <TableRow key={occurrence.id}>
                                        <td>
                                            <span style={
                                                { 
                                                    display: "flex", 
                                                    alignItems: "center", 
                                                    gap: "4px", 
                                                    marginBottom: "8px" 
                                                }
                                                }>
                                                    <UserCircle size={24} />
                                                    { occurrence.occurenceUser }
                                            </span>
                                            <span style={
                                                { 
                                                    display: "flex", 
                                                    alignItems: "center", 
                                                    gap: "4px", 
                                                    color: "rgba(0, 0, 0, 0.7)",
                                                    fontSize: "0.875rem"
                                                }
                                            }>
                                                <MapPin size={20} /> { occurrence.occurenceAddress } | {" "}
                                                <span>{ occurrence.createdAt }</span>
                                            </span>
                                        </td>
                                        <td style={
                                            {
                                                fontSize: "0.875rem",
                                                fontWeight: "bold"
                                            }
                                        }>
                                            { occurrence.description }
                                        </td>
                                        <td>
                                            <span style={
                                                {
                                                    fontSize: "0.875rem",
                                                    background: "rgba(0, 176, 80, 0.2)",
                                                    padding: "2px 10px",
                                                    borderRadius: "50px",
                                                    display: "block",
                                                    marginBottom: "8px",
                                                    width: "115px"
                                                }
                                            }>
                                                { occurrence.category }
                                            </span>
                                            <span style={
                                                {
                                                    fontSize: "0.875rem",
                                                    background: "rgba(171, 34, 46, 0.2)",
                                                    padding: "2px 10px",
                                                    borderRadius: "50px"
                                                }
                                            }>
                                                { occurrence.status }
                                            </span>
                                        </td>
                                        <td>
                                            <Link className="inner_link" to={'/internas'}>Ver mais</Link>
                                        </td>
                                    </TableRow>
                                </tbody>
                            ))}
                    </TableContainer>
                </OcurrenceWrappper>

                <FilterSidebar />
            </ContainerOcurrence>
        </>
    )
}