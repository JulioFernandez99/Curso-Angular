### Iniciar proyecto

```bash

```

### Signals

```ts
    private tasksSignal = signal<Task[]>([]);
    tasks = computed(() => this.tasksSignal());
```

“¿tasks es una signal que guarda la instancia de la clase TaskService para no tener que suscribirse?”

tasks no guarda la instancia del servicio, sino que guarda el estado de la lista de tareas, y permite que Angular actualice automáticamente la vista cuando ese estado cambia — sin necesidad de subscribe() en el componente.

### ¿Qué significa "reactivo"?

Reactividad significa que una parte de tu aplicación reacciona automáticamente cuando los datos cambian, sin necesidad de que tú lo actualices manualmente.

### ¿Para qué sirve la reactividad?

Para sincronizar la interfaz de usuario (UI) con los datos sin tener que escribir mucho código manual.

Para que tus componentes sean más declarativos y predecibles.

Para que puedas reutilizar lógica (por ejemplo, computar valores derivados).

### osea que un valor reactivo es que propaga los cambios cuando se actualiza?

¡Exactamente! ✅

Un valor reactivo es un valor que, cuando cambia, propaga automáticamente esos cambios a todo lo que dependa de él. No tienes que decirle explícitamente a los demás que algo cambió; ellos ya están “escuchando” o “reaccionando” al cambio.