---
config:
  theme: redux
  layout: fixed
---
flowchart TB
    A(["Creacion de nota"]) --> B{"Usuario quire crear nota?"}
    B --> C["Si"] & D["No"]
    D --> G["Seguir viendo la pagina"]
    C --> E["Escribir nota"]
    E --> F["Click en boton"]

