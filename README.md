# ZivenAI

Landing page premium en `Astro + Tailwind CSS` para `ZivenAI`, lista para despliegue estatico en `GitHub Pages`.

## Requisitos

- `Node.js 20+`
- `npm`

## Instalar dependencias

```bash
npm install
```

## Ejecutar en local

```bash
npm run dev
```

El sitio quedara disponible en la URL local que indique Astro.

## Compilar para produccion

```bash
npm run build
```

El sitio estatico se genera en `dist/`.

## Estructura principal

```text
src/
  components/
  data/site.ts
  layouts/MainLayout.astro
  pages/index.astro
public/
  favicon.svg
```

## Donde editar rapido el contenido

La mayoria del contenido editable esta centralizado en [`src/data/site.ts`](/Users/diegocornejo/Documents/PROGRAMACION/zivenai/src/data/site.ts).

Edita ahi:

- nombre del producto
- titulares principales
- links de CTA
- email de contacto
- textos de secciones
- demos conversacionales
- preguntas frecuentes
- precios y planes

Comentarios incluidos en ese archivo:

- `Edita aqui el nombre del producto`
- `Edita aqui el email de contacto`
- `Edita aqui los enlaces principales de CTA`
- `Edita aqui el titular principal`
- `Edita aqui el subtitulo principal`
- `Edita aqui los precios de cada plan`

## Configuracion para GitHub Pages

Este proyecto ya esta configurado para salida estatica en [`astro.config.mjs`](/Users/diegocornejo/Documents/PROGRAMACION/zivenai/astro.config.mjs).

Variables importantes:

- `SITE`: dominio principal de GitHub Pages, por ejemplo `https://tuusuario.github.io`
- `BASE_PATH`: ruta base del repositorio, por ejemplo `/zivenai`

La configuracion por defecto usa:

```bash
SITE=https://tu-usuario.github.io
BASE_PATH=/zivenai
```

## Como ajustar correctamente el base path

Si publicas en un repositorio llamado `zivenai`, GitHub Pages normalmente servira tu sitio en:

```text
https://tuusuario.github.io/zivenai/
```

En ese caso:

```bash
SITE=https://tuusuario.github.io
BASE_PATH=/zivenai
```

Si cambias el nombre del repositorio, debes cambiar `BASE_PATH` para que coincida exactamente con el nombre del repo.

## Deploy manual en GitHub Pages

1. Sube este proyecto a GitHub.
2. Ve a `Settings > Pages`.
3. En `Source`, usa `GitHub Actions`.
4. Haz push a la rama `main`.

El workflow incluido en [`deploy.yml`](/Users/diegocornejo/Documents/PROGRAMACION/zivenai/.github/workflows/deploy.yml) construye el sitio y lo publica automaticamente.

## Deploy automatico con GitHub Actions

Ya se incluye el workflow:

- instala dependencias
- ejecuta `npm run build`
- publica `dist/` en GitHub Pages

El workflow calcula automaticamente:

- `SITE=https://<owner>.github.io`
- `BASE_PATH=/nombre-del-repo`

## Scripts disponibles

```bash
npm run dev
npm run build
npm run preview
```

## Notas

- El sitio es completamente estatico.
- No usa backend, base de datos ni logica server-side.
- Todo el contenido visible esta en espanol.
- Los componentes estan separados para facilitar cambios futuros.
