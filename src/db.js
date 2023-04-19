export const typeChanel = [
  {
    typeId: 1,
    title: "Correo Electronico",
  },
  {
    typeId: 2,
    title: "Mensaje de texto",
  },
  {
    typeId: 3,
    title: "WhatsApp",
  },
];

export const typeMessages = [
  {
    typeId: 4,
    title: "Invitacion",
  },
  {
    typeId: 5,
    title: "Recordatorio",
  },
  {
    typeId: 6,
    title: "Personalizado",
  },
];

export const data = {
  message: {
    id: 1,
    type: "message",
    title: "Seleccion de tipo de mensaje",
    options: typeMessages,
  },
  chanel: {
    id: 2,
    type: "chanel",
    title: "Seleccion de canales",
    options: typeChanel,
  },
};

export const sendMessage = [
  {
    typeMessageId: 4,
    subject: "Invitacion a proceso",
    message:
      " Hola, [userName] hemos visto tu perfil y nos parece interesante. Encuentra mas informacion aqui: [Link]",
  },
  {
    typeMessageId: 5,
    subject: "Recordatorio de proceso",
    message:
      " Hola, [userName] te recordamos que tienes un proceso en curso. Encuentra mas informacion aqui: [Link]",
  },
  {
    typeMessageId: 6,
    subject: "",
    message: "",
  },
];
