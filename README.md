# Desafío técnico FrontEnd React - Flow

El desafío plantea el desarrollo de una aplicación de consulta de clima en la que el usuario pueda visualizar el pronóstico actual y el de los próximo 5 días de la cuidad en la que se encuentra, y a su vez un selector que permita cambiar entre 5 ciudades preseleccionadas.

## Previsualizar la aplicación
Puede encontrar una demo de la aplicacion en https://frontend-react-flow.vercel.app/

## ¿Como levantar el proyecto?

Renombrar `.env.example` a `.env.local` y agregar la API_KEY de OPENWEATHER

Ejecutar en consola
```bash
npm install
npm run dev
```

## Decisiones tomadas

Decidí preguntar por el permiso de localización al abrir el sitio intuyendo que el usuario probablemente quiere ver el clima en su ubicación actual. En caso de rechazar la obtención de la localización, se muestra una ubicación por defecto, permitiéndole luego cambiar a cualquiera de las predefinidas.

## Arreglos post entrega del challenge

Se encuentran en la rama `fixes` arreglos posteriores a la entrega. Especificamente las coordenadas de las ciudades preseleccionadas
