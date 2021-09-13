import nosotros from '../assets/img/mapa.png'

const Entrada = () => {
    return (
        <main className="contenido-principal contenedor">
        <h2 className="text-center">Entrada Blog</h2>
    
        <article className="entrada contenido-entrada-blog">
          <div className="imagen">
            <img src={nosotros} alt="imagen nosotros" />
          </div>
          <div className="entrada-meta">
            <p>Fecha: <span>22 Octubre 2022</span></p>
            <p>Escrito por: <span>NuestroMundo</span></p>
          </div>
          <div className="entrada-blog">
          <p>
            Desde 2011, con la entrada de Sudán del Sur, el órgano tiene 193 países miembros, considerados "Estados soberanos", con sus propias fronteras y gobiernos independientes. También cuenta con dos "Estados observadores", el Vaticano y Palestina, lo que da un total de 195 países.
            </p>
            <p>
            Palestina, sin embargo, no es reconocida como Estado soberano por algunos de los países de la propia ONU. Por eso, algunas listas muestran sólo 194 países en la organización.
            </p>
            <p classNameName="text-center">
            Kosovo, el doloroso conflicto en Europa que aún no se ha resuelto
            </p>
            <p>
            "Entrar en la ONU es crucial para que un territorio sea considerado un país. Kosovo, por ejemplo, es reconocido por 112 países de la ONU, es miembro del Banco Mundial y del Fondo Monetario Internacional (FMI). Pero por no estar en la ONU, todavía es considerado un país de reconocimiento parcial ", explica Alex Jeffrey, profesor de geografía humana de la Universidad de Cambridge.

La adición de un nuevo país tiene que ser aprobada por al menos nueve de los 15 miembros del Consejo de Seguridad, sin que ninguno de los cinco miembros permanentes (China, Estados Unidos, Reino Unido, Francia y Rusia) utilice su poder de veto.

Pero más allá de los intereses de la comunidad internacional, los asuntos de política interna de cada país también influyen en qué país será reconocido y cuál no.
            </p>
            <p classNameName="text-center">
            ¿Sobreviviría Cataluña como un Estado independiente de España?
                </p>
            <p>
            "España, por ejemplo, no reconoce a Kosovo porque eso puede dar fuerza a los movimientos separatistas en su propio país, como en Cataluña. Países como Rusia, China, Irán y Pakistán tampoco quieren reconocer nuevos Estados por miedo a fortalecer sus propios grupos separatistas. Entonces Kosovo difícilmente va a ser miembro de la ONU", dice a BBC News Mundo Fiona McConnell, doctora en Geografía Humana y profesora de la Universidad de Oxford.
            </p>
          </div>
        </article>
      </main>
    )
}

export default Entrada
