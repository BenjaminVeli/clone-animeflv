import Image from 'next/image'
import DragonBall from "../../images/DragonBall.png";

export const metadata = {
  title: "Sobre AnimeFLV.Net",
}

const page = () => {
  return (
    <div className="relative flex items-center justify-center min-h-[70vh]">
      <div className="container">
        <div className="flex pl-2.5 gap-x-3">
          <Image src={DragonBall} width={40} height={40} alt="Dragon Ball"/>
          <h1 className="title-page">Sobre AnimeFLV</h1>
        </div>
        <main className="pt-5 px-2.5">
          <div className="p-8 text-white bg-black rounded-md tex-sm">
            <p>AnimeFLV.NET, tiene como objetivo brindarte un amplio catálogo de animes que no son transmitidos en los canales de TV en señal abierta, teniendo como fin el compartir con todos nuestros seguidores la mayor cantidad de episodios y series anime que salen cada año.
            </p>
            <br />
            <p>Conocemos nuestras limitaciones y es por ello que siempre intentamos innovar en la calidad del servicio, tratamos mes a mes de hacer alianzas comerciales con las mejores empresas a modo de poder brindarte una mejor experiencia y evolucionar como plataforma para así muy pronto visualizar vídeos de <strong>Anime Online de manera Legal</strong>.</p>
            <br />
            <p>Cada mes estamos implementando mejoras y hacemos todo lo posible por mejorar día a día. En nuestra <strong>FanPage AnimeFLV</strong> podrán enterarse de cualquier novedad en el sitio web, actualmente no contamos con publicidad intrusiva de tal modo que nuestros usuarios puedan navegar sin ningún problema en nuestra plataforma.</p>
            <br />
            <p>Además de ser un sitio web para visualizar Episodios de Anime, alojados en servidores externos fuera de AnimeFLV, intentamos ser un referente para compartir la cultura asiática. De tal modo que en un futuro no muy lejano se vienen actualizaciones bastante buenas que los dejarán realmente sorprendidos.</p>
            <br />
            <p>Estamos convencidos de que somos la Web Número 1 de Anime en Línea en Español y todo esto es gracias a vuestro apoyo para con nosotros.</p>
            <br />
            <p>Por último muchas personas nos han preguntado ¿Porqué? el término <strong>FLV</strong>, el <strong>término FLV se hizo popular por los años 2008-2010</strong> cuando los vídeos en línea no superaban la calidad de 480p (Por lo general eran 360p), el formato más popular en ese momento era el formato FLV, ya que cada episodio podía pesar hasta 16MB siendo muy rápido al reproducir, dicho esto tiene sentido, ya que por esos años la banda ancha era casi nula en toda latinoamérica y es así como nació el Término, <strong>AnimeFLV</strong>.</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default page