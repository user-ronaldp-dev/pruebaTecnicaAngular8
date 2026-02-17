# Arquitectura de la Aplicación

## Pantallas

La aplicación posee 2 pantallas principales:

- **Pantalla Login**
- **Dashboard** con la información del usuario


## Inicio de Sesion
1.- Usuario: eve.holt@reqres.in
2.- Password: cityslicka  


## Componentes del Dashboard

El Dashboard utiliza 5 componentes:

1. **Navbar** - Incluye el botón de Cerrar sesión
2. **Componente de Notificaciones**
3. **Datos del Cliente** - Nombre, apellido y foto
4. **Datos de Registro** - Información de registro del cliente
5. **Datos de Contacto** - Email, teléfono y dirección

## Comunicación entre Componentes

### Flujo de Datos con @Input

El Dashboard carga la información del API y la distribuye mediante `@Input` a los siguientes componentes:

- Datos del cliente
- Datos de registro del cliente
- Datos de contacto del cliente

### Flujo de Datos con @ViewChild

El componente **DatosDeContactoComponent** carga la información completa de la Dirección (país, estado, ciudad, calles, codigo postal, coordenadas y zona horarias) accediendo al método `abrir()` del componente **ModalInfoComponent** por medio de `@ViewChild`.


### Flujo de Datos con @Output

Al clickear el botón "Cerrar Sesión", el componente  **Navbar** emite un evento por `@Output` hacia el componente padre **Dashboard** para cerrar la sesión con el método `onLogout()`

### Comunicación con Services

El Dashboard se comunica con el componente de Notificaciones por medio de un **Service** (`BannerNotificationService`).
La Pantalla Login se comunica con el componente de Notificaciones por medio de un **Service** (`NotificationService`).

## Uso de la clase abstracta (NotificationBaseComponent)

Esta clase abstracta se utiliza con `ToastNotificationComponent` y `BannerNotificationComponent` proporcionando a ambos componentes métodos tales como:
1. `getNotificationService()` para que cada componente hijo defina qué servicio de notificaciones utilizar.
2. Métodos para agregar (`addNotification`) y eliminar (`removeNotification`) notificaciones de la lista.

