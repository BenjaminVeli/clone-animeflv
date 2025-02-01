import Image from 'next/image'
import React from 'react'
import DragonBall from "../../images/DragonBall.png";

const page = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="container py-5">

        <div className="flex pl-2.5 gap-x-3">
          <Image src={DragonBall} width={40} height={40} alt="Dragon Ball"/>
          <h1 className="title-page">Condiciones de Uso</h1>
        </div>
        <main className="pt-5 px-2.5">
          <div className="p-8 text-white bg-black rounded-md tex-sm">
            <p>En el momento que usted, el usuario, nos facilita información de carácter personal a través de Animeflv.net (en adelante, el “Sitio Web”) se respeta su intimidad y los derechos que le reconoce la normativa sobre protección de datos de carácter personal. Por ello, es importante que entienda que información recabamos acerca de usted durante su visita y qué hacemos con dicha información la cual estará sujeta a la siguiente política sobre el tratamiento de datos personales.</p>
            <br />
            <p>Recomendamos leer detenidamente los siguientes puntos sobre nuestra Política de Privacidad; los que brindarán la total seguridad de que usted esta dentro de un sitio que protege su información e identidad.</p>
            <br />
            <p>Seguridad y protección de datos personales: La seguridad de sus datos personales es una prioridad para este sitio web el cual ofrece seguridad total. Sin embargo, no nos responsabilizamos por las actividades de hackers o terceros que realizan acciones para dañar romper la seguridad que cada sitio brinda. Teniendo en consideración las características técnicas de transmisión de información a través de Internet, ningún sistema es 100% seguro o exento de ataques.
            </p>
            <br />
            <p>Responsabilidad de opiniones: Este sitio web solo se responsabiliza de las publicaciones aquí expuestas a manera de posts, mas no de los comentarios de éstas, ya que son realizados por terceros y/o visitantes del sitio.</p>
            <br />
            <p>Su Privacidad: Este sitio web respeta la privacidad de cada uno de sus visitantes. Toda información ingresada por el usuario a través de nuestro sitio web, será tratada con la mayor seguridad, y sólo será usada de acuerdo con las limitaciones establecidas en este documento.
            </p>
            <br />
            <p>Obtención de información: Este sitio web obtiene los datos personales suministrados directa, voluntaria y conscientemente por cada usuario. La información personal que solicitamos corresponde a datos básicos los cuales serán solicitados a través de los diferentes formularios que se publiquen aquí.</p>
            <br />
            <p>Uso de la información: Al suministrar datos personales, automáticamente estará autorizándonos para usar sus datos personales de conformidad con nuestra Política de Privacidad, lo cual comprende los siguientes eventos: a) para el propósito específico para el cual la ha suministrado; b) para incrementar nuestra oferta al mercado y hacer publicidad de productos que pueden ser de sumo interés para el usuario; incluyendo los llamados para confirmación de su información; c) para personalizar y mejorar nuestros productos y servicios, y d) para enviar e-mails con nuestros boletines, responder inquietudes o comentarios, y mantener informado a nuestros usuarios.
            </p>
            <br />
            <p>Acceso a su información: El sitio web tiene el compromiso permanente de presentar nuevas soluciones que mejoren el valor de sus productos y servicios; con el objeto de ofrecer oportunidades especiales de mercado, como incentivos, promociones y novedades actualizadas. Animeflv no comercializa, vende ni alquila su base de datos a otras empresas.
            </p>
            <br />
            <p>Utilización de “Cookies”: Este sitio web utiliza “cookies” y dirección IP sólo para obtener información general de sus usuarios y para proveerles de un sitio personalizado. Para esto, mantenemos un registro de: browser, sistema operativo usado por el usuario/visitante, nombre del dominio del Proveedor de Servicio de Internet. Adicionalmente mantenemos un registro del número total de visitantes el que nos permite realizar mejoras en nuestro sitio. Los “cookies” permiten entregar un contenido ajustado a los intereses y necesidades de nuestros usuarios/visitantes. También podrían usarse cookies de Terceros que estén presentes en este Weblog, como anunciantes o publicidad del mismo, con el único fin de proveer informaciones adicionales o reelevantes a la Navegación del Usuario en este Sitio Web.
            </p>
            <br />
            <p>Revelación de información: En ningún momento se utiliza o revela a terceros, la información individual de los usuarios así como los datos sobre las visitas, o la información que nos proporcionan: nombre, dirección, dirección de correo electrónico, número telefónico, etc.
            </p>
            <br />
            <p>Modificaciones a nuestra Política de Privacidad: El sitio web se reserva en forma exclusiva el derecho de modificar, rectificar, alterar, agregar o eliminar cualquier punto del presente escrito en cualquier momento y sin previo aviso.</p>
            <br />
            <p>Estadísticas y otros Sitios Afines a Animeflv.</p>
            <br />
            <p>Este blog trabaja diferentes aplicaciones que evidentemente pueden hacer uso de Cookies almacenadas en su Equipo o utilizar algún script para el buen funcionamiento de este blog.</p>
            <br />
            <p>Actualmente estas cookies sólo retiran información estadística, en ningún caso buscan recopilar información de carácter importante.</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default page