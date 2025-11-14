---
config:
  theme: redux
  layout: dagre
---
flowchart TB
 subgraph SPA["SPA"]
        B2["Escribe nota"]
        A2(["Usuario crea nota"])
        C2@{ label: "Click en 'Guardar'" }
        D2["JavaScript envía solo datos"]
        E2["Servidor guarda"]
        F2@{ label: "Servidor responde 'OK'" }
        G2["JS actualiza solo esa parte del DOM"]
        H2["Usuario ve la nota SIN recargar"]
  end
    A2 --> B2
    B2 --> C2
    C2 --> D2
    D2 --> E2
    E2 --> F2
    F2 --> G2
    G2 --> H2
    C2@{ shape: rect}
    F2@{ shape: rect}
