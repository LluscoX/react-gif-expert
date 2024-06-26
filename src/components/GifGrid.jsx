import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrid = ({ category }) => {

    //ESTE ES UN HOOK PERSONALIZADO(CUSTOM HOOKS)
    const { images, isLoading } = useFetchGifs(category);
    
    console.log({images, isLoading})
    
    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && (<h2>Cargando... </h2>)
            }

            <div className="card-grid">
                {
                    images.map(img => {
                        return <GifItem
                            key={img.id}
                            {...img} //---------Eso nos lalma a todas las propiedades de img, osea del API 
                        //-----lo mismo que lo de aca abajo
                        // title = {img.title}
                        // url={img.url}
                        />
                    })
                }
            </div>


        </>
    )
}
