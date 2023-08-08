import { Link } from 'wouter'
import ghostChatLogo from '../assets/ghost-chat-logo.png'

const Home = () => {
  return (
    <main className="Home">
      <section className="hero">
        <div>
          <img
            className="h-16 sm:h-24"
            src={ghostChatLogo}
            alt="ghost-chat-logo"
          />
        </div>

        <div>
          <p className="flex mb-2 gap-2">
            <a
              className="button secondary w-full"
              href="#read-more"
              rel="noreferrer"
            >
              Leer Más
            </a>
            <a
              className="button secondary w-full"
              href="https://paulbarahona.com/#contact"
              target="_blank"
              rel="noreferrer"
            >
              Contáctame
            </a>
          </p>
          <p>
            <Link className="button" to="/login">
              ¡Vamos a probarla!
            </Link>
          </p>
        </div>
      </section>

      <section id="read-more">
        <p>
          👻 <strong>Ghost Chat</strong> es una plataforma de comunicación en{' '}
          <strong>tiempo real</strong> diseñada para conectar a individuos de
          manera informal en un entorno de chat interactivo. Esta aplicación, es
          un proyecto destinado para <strong>mi portafolio</strong>, permite a
          cualquier persona ingresar con un nombre de usuario de su elección y
          participar en conversaciones con otros usuarios conectados en ese
          momento.
        </p>
        <p>
          La arquitectura de Ghost Chat se basa en una{' '}
          <strong>conexión bidireccional</strong> a través de{' '}
          <strong>websockets</strong> 🌐. Esta tecnología facilita una
          comunicación fluida entre el servidor y los clientes, permitiendo la
          transmisión instantánea de datos en ambas direcciones en cualquier
          momento.
        </p>
        <p>
          En el desarrollo frontend, Ghost Chat está moldeado con tecnologías
          líderes como <strong>React</strong> ⚛️, acompañado de{' '}
          <strong>Tailwind CSS</strong> para la refinación estética del código
          💅. El enrutado se construye con la herramienta{' '}
          <strong>Wouter</strong> 🛤️, mientras que la integración de los
          websockets se logra a través de la biblioteca{' '}
          <strong>socket.io-client</strong> 🔌.
        </p>
        <p>
          En el servidor, la aplicación aprovecha los módulos nativos de{' '}
          <strong>HTTP</strong>
          para crear la infraestructura, junto con las utilidades de{' '}
          <strong>path</strong> y <strong>file-system (fs)</strong> para el
          manejo de archivos y respuestas a solicitudes 📁🌐. La funcionalidad
          de los websockets está creada con <strong>socket.io en</strong> el
          backend 🚀.
        </p>
      </section>

      <section>
        <h2>Características de Ghost Chat:</h2>
        <ul>
          <li>
            ✅ Implementación de un sistema de prevención de nombres de usuario
            duplicados, garantizando la singularidad en las sesiones 🚫🔄.
          </li>
          <li>
            ✅ Las sesiones de los usuarios se almacenan de manera confiable en
            el almacenamiento local para una experiencia continua 📦.
          </li>
          <li>
            ✅ La aplicación redirige automáticamente a los usuarios no
            autenticados a la página de inicio de sesión, fortaleciendo la
            seguridad 🔒.
          </li>
          <li>
            ✅ Se mantiene un registro detallado de las actividades de los
            usuarios al conectarse y desconectarse, añadiendo transparencia 📝.
          </li>
          <li>
            ✅ La restricción de 255 caracteres por mensaje contribuye a la
            agilidad y la calidad de las conversaciones ✉️.
          </li>
          <li>
            ✅ Los mensajes se mantienen en modo efímero, en sintonía con la
            experiencia de chat en tiempo real; al recargar la página o cerrar
            la sesión, los mensajes se desvanecen, brindando una sensación de
            frescura en cada interacción 🔄❌.
          </li>
        </ul>
      </section>

      <section>
        <p>
          Ghost Chat no solo presenta estas características actuales, sino que
          también tiene un potencial. Entre las futuras mejoras planeadas se
          encuentran:
        </p>
        <ul>
          <li>
            ❇️ La gestión de sesiones inactivas para permitir que otros usuarios
            puedan conectarse con nombres de usuario inactivos después de un
            período de tiempo de 5 días ⏰
          </li>
          <li>
            ❇️ La incorporación de la capacidad de compartir imágenes y enlaces
            📷🔗
          </li>
          <li>
            ❇️ La opción de comunicarse mediante el formato markdown, añadiendo
            una dimensión más rica a las conversaciones 📝👁️‍🗨️.
          </li>
        </ul>
      </section>

      <section>
        <p>
          Esta plataforma, aunque dirigida inicialmente a desarrolladores y
          personas interesadas en explorar mi labor en el desarrollo web, aspira
          a ser una experiencia de chat en tiempo real atractiva y en constante
          evolución para todos los que deseen formar parte de ella 🚀🌟.
        </p>
      </section>

      <footer>
        Hecho con ❤️ por{' '}
        <a
          className="font-semibold"
          href="https://paulbarahona.com/#contact"
          target="_blank"
          rel="noreferrer"
        >
          Paul Barahona
        </a>
      </footer>
    </main>
  )
}

export default Home
