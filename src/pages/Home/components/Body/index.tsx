import { BodyContainer, MapContainer } from "./style";
import { ReactComponent as MapPin1 } from '../../../../assets/map1.svg'
import { ReactComponent as MapPin2 } from '../../../../assets/map2.svg'
import { ReactComponent as MapPin3 } from '../../../../assets/map3.svg'
import { FilterSidebar } from "../../../../components/FilterSidebar";

export function Body(){
    return (
        <BodyContainer>
            <MapContainer>
                <div className="labels">
                    <span className="label">Mapa da cidade</span>
                    <div className="status_label">
                        <span><MapPin1 className="less_than_ten_days" /> Recebidas a menos de 10 dias</span>
                        <span><MapPin2 className="more_than_ten_days" /> Recebidas a mais de 10 dias</span>
                        <span><MapPin3 className="more_than_twenty_days" /> Mais de 20 dias</span>
                    </div>
                </div>
                <div className="map"></div>
            </MapContainer>

            <FilterSidebar />
        </BodyContainer>
    )
}