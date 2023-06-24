function About() {
  return (
    <div className="container mx-auto w-full h-fit text-left flex flex-col gap-y-8 items-start justify-start">
        <h1 className="px-4 py-2 bg-schema-dark/20 dark:bg-schema-light/20 rounded-xl">Christian Marín && Pikasso</h1>
        <p className="px-4">Les presento esta aplicación con inspiración de Pinterest y su layout. <br /> Encontramos una galería de imagenes donde támbien podemos buscar más resultados segun nuestra busqueda. <br /> No obstante, támbien podemos ver estas imagenes en un tamaño mas grande dentro de un <i>Modal</i> ademas podemos descargarlas y usarlas con propositos personales y no de business.</p>

        <h2 className="px-4 py-2 bg-schema-dark/20 dark:bg-schema-light/20 rounded-xl mt-2">
          Simple stack
        </h2>
        <p className="px-4"><strong>react</strong> {"(framework de js)"} <br /> <strong>tailwindcss</strong> {"(framework de css)"} <br /> <strong>react-router-dom</strong> {"(para el routing de la página)"} <br /> <strong>axios && unsplash api</strong> {"(axios para las llamadas api y unsplash api como base de datos)"} <br /> <strong>framer-motion</strong> {"(para animaciones)"}</p>

    </div>
  )
}

export default About;