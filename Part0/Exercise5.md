graph TB
    subgraph "Cómo funciona "
        JS[JavaScript Framework<br/>React] --> Router[Router Virtual]
        Router --> |Detecta cambios URL| Render[Re-renderiza componentes]
        Render --> DOM[Actualiza solo lo necesario]
        DOM --> |Sin recargar página| User[Usuario ve cambios]
    end
    