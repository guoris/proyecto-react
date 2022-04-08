import card1 from '../../assets/cards/card1.png';
import card2 from '../../assets/cards/card2.png';
import card3 from '../../assets/cards/card3.png';
import card4 from '../../assets/cards/card4.png';
import card5 from '../../assets/cards/card5.png';
import card6 from '../../assets/cards/card6.png';
import card7 from '../../assets/cards/card7.png';
import card8 from '../../assets/cards/card8.png';
import card9 from '../../assets/cards/card9.png';


const product = [
    {
        id: 'DSC10001',
        category: 'juegos',
        title: 'PUBG',
        subtitle: "PlayerUnknown's Battlegrounds",
        price: 999,
        image: card1,
        description: "PLAYERUNKNOWN’S BATTLEGROUNDS es un shooter basado en el modo Battle Royale que está siendo desarrollado a través de la retroalimentación con la comunidad. Comenzando de la nada, los usuarios tienen que luchar uno contra el otro para localizar armas y suministros para ser el único sobreviviente.",
    },
    {
        id: 'DSC10002',
        category: 'juegos',
        title: 'FIFA 22',
        subtitle: "EA SPORTS FIFA 22",
        price: 4500,
        image: card2,
        description: "Powered by Football™. EA SPORTS™ FIFA 22 acerca aún más el juego a la realidad gracias a mejoras significativas en la jugabilidad y una nueva temporada de novedades en todos los modos. ¿Qué es FIFA? Juega al juego del mundo con más de 17 000 jugadores, más de 700 equipos, más de 90 estadios y más de 30 ligas de todo el mundo.",
    },
    {
        id: 'DSC10003',
        category: 'juegos',
        title: 'GTA V',
        subtitle: "Grand Theft Auto V",
        price: 650,
        image: card3,
        description: "Cuando un joven estafador callejero, un ladrón de bancos retirado y un psicópata aterrador se ven involucrados con lo peor y más desquiciado del mundo criminal, del gobierno de los EE. UU. y de la industria del espectáculo, tendrán que llevar a cabo una serie de peligrosos golpes para sobrevivir en una ciudad implacable en la que no pueden confiar en nadie. Y mucho menos los unos en los otros. Grand Theft Auto V para PC ofrece a los jugadores la opción de explorar el galardonado mundo de Los Santos y el condado de Blaine con una resolución de 4K y disfrutar del juego a 60 fotogramas por segundo.",
    },
    {
        id: 'DSC10004',
        category: 'juegos',
        title: 'RUST',
        subtitle: "Rust" ,
        price: 899,
        image: card4,
        description: "El único objetivo de Rust es sobrevivir. Todo quiere que mueras: la vida silvestre de la isla y otros habitantes, el medio ambiente, otros sobrevivientes. Haz lo que sea necesario para que dure otra noche.Rust está en su octavo año y ahora ha tenido más de 300 actualizaciones de contenido, con un parche de contenido garantizado cada mes. Desde correcciones de equilibrio y mejoras periódicas hasta actualizaciones de gráficos e inteligencia artificial hasta agregar contenido como nuevos mapas, instrumentos musicales, trenes y drones, así como temporadas y eventos regulares, siempre hay algo interesante o peligroso (o ambos) sucediendo en la isla.",
    },
    {
        id: 'DSC10005',
        category: 'juegos',
        title: 'Dead by Daylight',
        subtitle: "Dead by Daylight",
        price: 666,
        image: card5,
        description: "Dead by Daylight es un juego de horror de multijugador (4 contra 1) en el que un jugador representa el rol del asesino despiadado y los 4 restantes juegan como supervivientes que intentan escapar de él para evitar ser capturados, torturados y asesinados. Los supervivientes juegan en tercera persona y tienen la ventaja de contar con una mejor percepción del entorno. El asesino juega en primera persona y está más enfocado en su presa. El objetivo del superviviente en cada encuentro es escapar del área de matanza sin que lo capture el asesino, algo que suena más fácil de lo que es, especialmente con un entorno que cambia cada vez que juegas.",
    },
    {
        id: 'DSC10006',
        category: 'juegos',
        title: 'Little Nightmares II',
        subtitle: "Little Nightmares II",
        price: 1499,
        image: card6,
        description: "Sumérgete en una perturbadora aventura que no podrás olvidar jamás, ahora mejorada en 4K sin límite de fotogramas por segundo.",
    },
    {
        id: 'DSC10007',
        category: 'juegos',
        title: 'Little Nightmares I',
        subtitle: "Little Nightmares I",
        price: 999,
        image: card7,
        description: "¡Sumérgete en la enigmática atmósfera de Little Nightmares y enfréntate a los miedos de tu infancia! Ayuda a Seis a escapar de Las Fauces, un misterioso navío donde moran ánimas corrompidas en busca de su próxima comida... Explora la casita de muñecas más perturbadora que jamás hayas visto: escapa de su prisión y diviértete en su patio de recreo. ¡Saca al niño que llevas dentro y da rienda suelta a tu imaginación para encontrar una salida!",
    },
    {
        id: 'DSC10008',
        category: 'juegos',
        title: 'ARK',
        subtitle: "ARK, Survival Evolved",
        price: 330,
        image: card8,
        description: "Como hombre o mujer desnudo, congelado y muriendo de hambre en las costas de una isla misteriosa llamada ARK, debes cazar, recolectar, construir objetos, plantar cultivos, investigar tecnologías y construir refugios para soportar los elementos. Usa tu astucia y recursos para matar o domesticar dinosaurios y otros seres primitivos, y asóciate con otros jugadores o atácalos para sobrevivir, dominar... y escapar!",
    },
    {
        id: 'DSC10009',
        category: 'juegos',
        title: 'Phasmophobia',
        subtitle: "Phasmophobia",
        price: 170,
        image: card9,
        description: "Phasmophobia es un horror psicológico cooperativo en línea para 4 jugadores en el que usted y los miembros de su equipo de investigadores paranormales entrarán en lugares encantados llenos de actividad paranormal y reunirán tanta evidencia de lo paranormal como puedan. Utilizará su equipo de caza de fantasmas para buscar y registrar evidencia de cualquier fantasma que esté rondando el lugar para venderlo a un equipo de eliminación de fantasmas.",
    },
    {
        id: 'DSC100010',
        category: 'juegos',
        title: 'DiRT 4',
        subtitle: "DiRT 4",
        price: 899,
        image: card9,
        description: "¡La serie líder de carreras todoterreno ha vuelto! DiRT 4 te pone al volante de los coches más potentes para hacer carreras de rally, rallycross y landrush en los circuitos más duros del mundo.",
    },
    {
        id: 'DSC100011',
        category: 'juegos',
        title: 'Move or Die',
        subtitle: "Move or Die",
        price: 67,
        image: card9,
        description: "20 segundos, mecánicas de juego en constante cambio y muchos gritos. Estás son las palabras perfectas que describen una partida de Move or Die: el juego destroza-amistades para hasta 4 personas en el que las reglas cambian cada ronda. Quítale el mando a tus amigos mientras jugáis en el sofá, desafía a jugadores de todo el mundo en internet o practica sin conexión contra bots. Elige los modos de juego a los que quieres jugar de una lista interminable, creada por los desarrolladores y la comunidad; cada modo tiene unas mecánicas extravagantes y niveles diseñados para pasar horas divertidísimas en este juego arruina-amistades.",
    },

]

export default product;