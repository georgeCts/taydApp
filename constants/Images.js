// local imgs
const Onboarding          = require('../assets/imgs/getPro-bg-1.png');
const Logo                = require('../assets/imgs/tayd-logo.png');
const LogoTayder          = require('../assets/imgs/tayd-logo-tayder.png');
const TaydLogo            = require('../assets/imgs/tayd-logo2.png');
const TaydLogoLarge       = require('../assets/imgs/tayd-logo3.png');
const TaydLogoGris        = require('../assets/imgs/tayd-logo-gris.png');
const TaydRegistro        = require('../assets/imgs/tayd-registro.png');
const TaydAyuda           = require('../assets/imgs/tayd-ayuda.jpg');
const TaydAyudaCita       = require('../assets/imgs/tayd-ayuda-cita.jpg');
const ProfileBackground   = require('../assets/imgs/tayd-lights.jpg');
const ProfilePicture      = require('../assets/imgs/profile-img.jpg');
const LightsBackground    = require('../assets/imgs/tayd-lights.jpg');
const BlackLightsBackground = require('../assets/imgs/tayd-black-lights.png');
const RegisterTayderBackground  = require('../assets/imgs/fondo-tyd-01.jpg');
const TayderInfoBackground  = require('../assets/imgs/fondo-tarjeta-tayder.jpg');

const Agendar             = require('../assets/imgs/tayd-agendar.jpg');
const AgendaInicio        = require('../assets/imgs/tayd-agenda-inicio.jpg');
const AgendaFecha         = require('../assets/imgs/tayd-agenda-fecha.jpg');
const AgendaInsumos       = require('../assets/imgs/tayd-agenda-insumos.jpg');
const AgendaCheckout      = require('../assets/imgs/tayd-agenda-checkout.jpg');

const MetodoPagoAddCard   = require('../assets/imgs/tayd-metodo-pago.jpg');

const Inicio001           = require('../assets/imgs/Inicio001.png');
const Inicio002           = require('../assets/imgs/Inicio002.png');
const Inicio003           = require('../assets/imgs/Inicio003.png');
const Inicio004           = require('../assets/imgs/Inicio004.png');

const Slide001            = require('../assets/imgs/slide1.png');
const Slide002            = require('../assets/imgs/slide2.png');
const Slide003            = require('../assets/imgs/slide3.png');
const Slide004            = require('../assets/imgs/slide4.jpg');

const CarouselIndicador01 = require('../assets/imgs/IND--01.png');
const CarouselIndicador02 = require('../assets/imgs/IND--02.png');
const CarouselIndicador03 = require('../assets/imgs/IND--03.png');
const CarouselIndicador04 = require('../assets/imgs/IND--04.png');
const CarouselIndicador05 = require('../assets/imgs/IND--05.png');
const CarouselIndicador06 = require('../assets/imgs/IND--06.png');
const CarouselIndicador07 = require('../assets/imgs/IND--07.png');
const CarouselIndicador08 = require('../assets/imgs/IND--08.png');

const Icons = {
  Usuario_L   : require('../assets/icons/L-Usuario.png'),
  Password_L  : require('../assets/icons/L-Password.png'),

  Inicio      : require('../assets/icons/T-Inicio.png'),
  Inicio_G    : require('../assets/icons/T-Inicio-gris.png'),
  Agenda      : require('../assets/icons/T-Agenda.png'),
  Agenda_G    : require('../assets/icons/T-Agenda-gris.png'),
  Historial   : require('../assets/icons/T-Historial.png'),
  Historial_G : require('../assets/icons/T-Historial-gris.png'),
  Ingreso     : require('../assets/icons/T-Ingreso.png'),
  Ingreso_G   : require('../assets/icons/T-Ingreso-gris.png'),
  Ayuda: require('../assets/icons/T-Ayuda.png'),
  Ayuda_G: require('../assets/icons/T-Ayuda-gris.png'),
  Camara      : require('../assets/icons/camara.png'),

  Grupo1      : require('../assets/icons/grupo-1.png'),
  Grupo2      : require('../assets/icons/grupo-2.png'),
  Grupo3      : require('../assets/icons/grupo-3.png'),
  Grupo4      : require('../assets/icons/grupo-4.png'),
  Grupo5      : require('../assets/icons/grupo-1.png'),
  Grupo6      : require('../assets/icons/grupo-1.png'),

  CamaraMarco : require('../assets/icons/marco_camara.png'),
  CamaraBoton : require('../assets/icons/boton_camara.png'),

  INE         : require('../assets/icons/INE.png'),
  RFC         : require('../assets/icons/RFC.png'),
  CLABE       : require('../assets/icons/CLABE.png'),
  MujerPerfil : require('../assets/icons/mujer_perfil.png'),

  Ubicacion   : require('../assets/icons/T-Ubicacion.png'),
  Perfil      : require('../assets/icons/T-perfil.png'),
  Pagos       : require('../assets/icons/T-Pagos.png'),
  Idioma      : require('../assets/icons/T-Idioma.png'),
  Compartir   : require('../assets/icons/T-Compartir.png'),
  Ingreso     : require('../assets/icons/T-Ingresos.png'),
  Cupon       : require('../assets/icons/T-Cupon.png'),
  Cupones     : require('../assets/icons/T-Cupones.png'),
  Salir       : require('../assets/icons/T-Salir.png'),
  Contrasena  : require('../assets/icons/T-contrasena.png'),
  Nombre      : require('../assets/icons/T-Nombre.png'),
  Apellido    : require('../assets/icons/T-Apellido.png'),
  Telefono    : require('../assets/icons/T-Telefono.png'),
  Correo      : require('../assets/icons/T-Mail.png'),
  Calendario  : require('../assets/icons/T-Calendar.png'),
  Close01     : require('../assets/icons/T-Close-01.png'),
  TarjetaBancaria         : require('../assets/icons/T-TarjetaBancaria.png'),
  TarjetaBancariaGris     : require('../assets/icons/T-TarjetaBancaria-gris.png'),
  TarjetaBancariaCCV      : require('../assets/icons/T-TarjetaBancaria-CCV.png'),
  TarjetaBancariaCCVGris  : require('../assets/icons/T-TarjetaBancaria-CVV-gris.png'),
  TarjetaBancariaFecha    : require('../assets/icons/T-TarjetaBancaria-FechaVencimiento.png'),
  TarjetaBancariaFechaGris: require('../assets/icons/T-TarjetaBancaria-FechaVencimiento-gris.png'),
  FlechaArriba            : require('../assets/icons/T-Subir.png'),
  FlechaAbajo             : require('../assets/icons/T-Bajar.png'),

  Habitacion    : require('../assets/icons/T-Recamara.png'),
  Habitacion_G  : require('../assets/icons/T-Habitacion-gris.png'),
  Bano          : require('../assets/icons/T-Bano.png'),
  Bano_G        : require('../assets/icons/T-Bano-gris.png'),
  Medio_Bano    : require('../assets/icons/T-MedioBano.png'),
  Medio_Bano_G  : require('../assets/icons/T-Bano-gris.png'),
  Sala          : require('../assets/icons/T-Sala.png'),
  Sala_G        : require('../assets/icons/T-Sala-gris.png'),
  Comedor       : require('../assets/icons/T-Comedor.png'),
  Comedor_G     : require('../assets/icons/T-Comedor-gris.png'),
  Cocina        : require('../assets/icons/T-Cocina.png'),
  Cocina_G      : require('../assets/icons/T-Cocina-gris.png'),
  Garage        : require('../assets/icons/T-Garage.png'),
  Garage_G      : require('../assets/icons/T-Garage-gris.png'),
  Patio         : require('../assets/icons/T-Patio.png'),
  Patio_G       : require('../assets/icons/T-Patio-gris.png'),
  LavadoServ    : require('../assets/icons/T-LavadoServicio.png'),
  LavadoServ_G  : require('../assets/icons/T-Patio-gris.png'),
  Terraza       : require('../assets/icons/T-Terraza.png'),
  Terraza_G     : require('../assets/icons/T-Patio-gris.png'),

  Casa        : require('../assets/icons/T-casa.png'),
  Departamento: require('../assets/icons/T-Depa.png'),
  Oficina     : require('../assets/icons/T-Ofi.png'),
};

export default {
  Onboarding,
  Logo,
  TaydLogo,
  TaydLogoLarge,
  TaydLogoGris,
  TaydRegistro,
  TaydAyuda,
  TaydAyudaCita,
  LogoTayder,
  ProfileBackground,
  ProfilePicture,
  Icons,
  LightsBackground,
  BlackLightsBackground,
  RegisterTayderBackground,
  TayderInfoBackground,
  
  Agendar,
  AgendaInicio,
  AgendaFecha,
  AgendaInsumos,
  AgendaCheckout,

  MetodoPagoAddCard,

  Inicio001,
  Inicio002,
  Inicio003,
  Inicio004,

  Slide001,
  Slide002,
  Slide003,
  Slide004,

  CarouselIndicador01,
  CarouselIndicador02,
  CarouselIndicador03,
  CarouselIndicador04,
  CarouselIndicador05,
  CarouselIndicador06,
  CarouselIndicador07,
  CarouselIndicador08,
};
