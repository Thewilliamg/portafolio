import foodimg from "../img/foodlover.png";
import spotify from "../img/spotif.png"
import monrusa from "../img/monrusa.png"
import cinema1 from "../img/cinema1.png"
import cinema2 from "../img/cinema2.png"
import cinema3 from "../img/cinema3.png"

const liClassprojectsCards = `w-1/5 h-full flex rounded-xl overflow-hidden` 
const divprojectsCard = `w-full hover:bg-orange-700 h-full bg-orange-600 box-content rounded-md p-4 flex justify-center items-center flex-col`

const Projects = () => {

    return (
        <div className={`flex flex-col items-center h-[90%] justify-start gap-12 bg-[#021d34] text-[#82acce]`}>
            <container className="flex w-full h-full justify-center">
                <div id="cards" className="flex flex-col items-center h-2/3">
                    <h1 className="text-5xl font-bold h-1/5">/proyectosDesarrollados</h1>
                    <div className="flex gap-6 px-5 h-4/5 justify-center">

                        <a name="card_a" href="https://github.com/Thewilliamg/foodLover" target="_blank" rel="noreferrer" alt="Ver codigo" className={liClassprojectsCards}>
                            <div name="card" className={divprojectsCard}>
                                <h2 className="font-bold text-3xl mb-3 text-[#021d34]">FoodLover</h2>
                                <img className="w-5/6" src={foodimg} alt="food" />
                                <div name="icons" className="w-full flex justify-center gap-4 mb-4 mt-2 items-center">
                                    <img className="w-[25px]" src="https://cdn-icons-png.flaticon.com/512/174/174854.png" alt="html" />
                                    <img className="w-[30px] h-[30px]" src="https://cdn.icon-icons.com/icons2/1488/PNG/512/5351-css3_102605.png" alt="css" />
                                </div>
                                <small className="w-full block font-semibold text-[#021d34]">Landing creada para presentar los deliciosos platillos que prepara nuestro restaurante insignia.</small>
                            </div>
                        </a>
                        <a name="card_a" href="https://github.com/Thewilliamg/proyectoJavascript" target="_blank" rel="noreferrer" alt="Ver codigo" className={liClassprojectsCards}>
                            <div name="card" className={divprojectsCard}>
                                <h2 className="font-bold text-3xl mb-3 text-[#021d34]">Spotify</h2>
                                <img className="w-5/6" src={spotify} alt="food" />
                                <div name="icons" className="w-full flex justify-center mt-2 mb-4 items-center gap-4">
                                    <img className="w-[25px]" src="https://cdn-icons-png.flaticon.com/512/174/174854.png" alt="html" />
                                    <img className="w-[30px] h-[30px]" src="https://cdn.icon-icons.com/icons2/1488/PNG/512/5351-css3_102605.png" alt="css" />
                                    <img className="w-[25px] h-[24px]" src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="js" />
                                </div>
                                <small className="w-full block font-semibold text-[#021d34]">En este proyecto lo que realizamos fue usar algunos objetos disponibles de la API de Spotify. El reto de este proyecto fue consumir los endpoints en funcion a un parametro dado.</small>
                            </div>
                        </a>

                        <a name="card_a" href="https://github.com/Thewilliamg/ExerciseMERN" target="_blank" alt="Ver codigo" rel="noreferrer" className={liClassprojectsCards}>
                            <div name="card" className={divprojectsCard}>
                                <h2 className="font-bold text-3xl mb-3 text-[#021d34]">Montañas Rusas</h2>
                                <img className="w-5/6" src={monrusa} alt="food" />
                                <div name="icons" className="w-full flex justify-center mt-2 mb-4 items-center gap-4">
                                    <img className="w-[25px]" src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="mongo" />
                                    <img className="w-[25px] h-[25px] rounded-3xl" src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" alt="express" />
                                    <img className="w-[25px] h-[24px] rounded-md" src="https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256" alt="react" />
                                    <img className="w-[30px] h-[28px] rounded-md" src="https://img.icons8.com/?size=512&id=54087&format=png" alt="node" />
                                </div>
                                <small className="w-full block font-semibold text-[#021d34]">Este fue mi primer proyecto MERN, usando estructura cliente y servidor por separado. El reto de este proyecto estuvo en la implementacion de React para el frontEnd.</small>
                            </div>
                        </a>

                        <a name="card_a" href="https://github.com/Thewilliamg/ProyectoMongoII" target="_blank" rel="noreferrer" alt="Ver codigo" className={liClassprojectsCards}>
                            <div name="card" className={divprojectsCard}>
                                <h2 className="font-bold text-3xl mb-2 text-[#021d34]">Interface de Cine</h2>
                                    <div className="w-full flex gap-2 justify-center">
                                        <img className="w-1/4" src={cinema1} alt="cine1" />
                                        <img className="w-1/4" src={cinema2} alt="cine2" />
                                        <img className="w-1/4" src={cinema3} alt="cine3" />
                                    </div>
                                <div name="icons" className="w-full flex justify-center mt-2 mb-4 items-center gap-4">
                                    <img className="w-[26px]" src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="mongo" />
                                    <img className="w-[24px] h-[24px] rounded-3xl" src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" alt="express" />
                                    <img className="w-[25px] h-[24px] rounded-md" src="https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256" alt="react" />
                                    <img className="w-[26px] h-[16px] rounded-md" src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png" alt="tail" />
                                    <img className="w-[30px] h-[28px] rounded-md" src="https://img.icons8.com/?size=512&id=54087&format=png" alt="node" />
                                </div>
                                <small className="w-full block font-semibold text-[#021d34]">Este proyecto tuvo una logica interesante, aparte de usar una base de datos y usar endpoints generados con expressJS para gestionarla.</small>
                            </div>
                        </a>

                        <div className={`${liClassprojectsCards}' cursor-text'`}>
                            <div name="card" className={divprojectsCard}>
                                <h2 className="font-bold text-3xl mb-2 text-[#021d34]">Multiservicios</h2>
                                    <div className="w-full flex gap-2 justify-center text-center mb-4 mt-4">
                                        Imagen no disponible por politicas de privacidad del proyecto.
                                    </div>
                                <div name="icons" className="w-full flex justify-center mt-2 mb-4 items-center gap-4">
                                    <img className="w-[75px] h-[20px] rounded-md" src="https://media.licdn.com/dms/image/D5612AQEtLHikuaA1gw/article-cover_image-shrink_720_1280/0/1706687959492?e=2147483647&v=beta&t=hBDJWC6C-r81kzZAuPTbdqLPPcwk193WcdI0w1Xj4KA" alt="swagger" />
                                    <img className="w-[24px] h-[24px] rounded-md" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_plain_logo_icon_146316.png" alt="typescript" />
                                    <img className="w-[25px] h-[24px] rounded-md" src="https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256" alt="react" />
                                    <img className="w-[26px] h-[16px] rounded-md" src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png" alt="tail" />
                                </div>
                                <small className="w-full block font-semibold text-[#021d34]">Proyecto privado con un equipo de trabajo para desarrollar una pagina de control de servicios, participando en la documentacion Swagger y la algoritmia del frontEnd. La duracion de este reto ha sido de 3 meses en los que se mantenian objetivos semanales en el marco de la metodologia SCRUM.</small>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='text-center text-sm fixed bottom-5'>Esta pagina fue desarrollada con React y Tailwind CSS.</div>
            </container>
        </div>
    );
};

export default Projects;