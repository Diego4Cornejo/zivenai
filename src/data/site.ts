export type NavItem = {
  label: string;
  href: string;
};

export type UseCaseItem = {
  title: string;
  description: string;
  icon: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: string;
};

export type DemoMessage = {
  from: 'user' | 'assistant';
  text: string;
  time: string;
};

export type DemoItem = {
  title: string;
  label: string;
  description: string;
  messages: DemoMessage[];
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
  ctaHref: string;
};

export type BenefitItem = {
  title: string;
  description: string;
};

export type StatItem = {
  label: string;
  value: string;
};

export type StepItem = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const siteData = {
  // Edita aqui el nombre del producto.
  brandName: 'ZivenAI',
  // Edita aqui el email de contacto.
  contactEmail: 'contacto@zivenai.com',
  // Edita aqui los enlaces principales de CTA.
  ctaLinks: {
    primary: '#contacto',
    secondary: '#planes',
    contact: 'mailto:contacto@zivenai.com'
  },
  navItems: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Solucion', href: '#solucion' },
    { label: 'Funciones', href: '#funciones' },
    { label: 'Demo', href: '#demo' },
    { label: 'Planes', href: '#planes' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' }
  ] satisfies NavItem[],
  hero: {
    badge: 'Automatizacion inteligente para WhatsApp y llamadas',
    // Edita aqui el titular principal.
    title: 'Automatiza la atencion de tu negocio por WhatsApp y llamadas con IA',
    // Edita aqui el subtitulo principal.
    description:
      'Responde clientes, captura oportunidades y vende mas, 24/7, con una experiencia moderna y automatizada en chat y voz.',
    primaryCta: 'Solicitar demo',
    secondaryCta: 'Ver planes',
    trustLabels: ['WhatsApp + voz', 'Atencion automatica', 'Listo para crecer'],
    channelLabels: ['WhatsApp', 'Llamadas', 'Derivacion humana'],
    voiceCallout: {
      title: 'Canales activos',
      description: 'Atiende por mensajeria y tambien por voz desde una sola experiencia automatizada.'
    },
    heroMessages: [
      {
        from: 'user',
        text: 'Hola, que horario tienen hoy?',
        time: '09:14'
      },
      {
        from: 'assistant',
        text: 'Hola, somos ZivenAI. Hoy atendemos hasta las 22:00. Te gustaria reservar o consultar precios?',
        time: '09:14'
      },
      {
        from: 'user',
        text: 'Quiero saber si tienen disponibilidad para 2 personas',
        time: '09:15'
      },
      {
        from: 'assistant',
        text: 'Si, tenemos disponibilidad a las 20:30 y 21:00. Te reservo?',
        time: '09:15'
      },
      {
        from: 'user',
        text: 'Tambien quiero saber el valor',
        time: '09:15'
      },
      {
        from: 'assistant',
        text: 'Claro. El menu parte desde $14.900. Quieres que te envie las opciones?',
        time: '09:16'
      }
    ] satisfies DemoMessage[]
  },
  useCases: [
    {
      title: 'Restaurantes',
      description: 'Gestiona reservas, horarios, menus y consultas frecuentes sin saturar al equipo.',
      icon: 'utensils'
    },
    {
      title: 'Hoteles',
      description: 'Responde disponibilidad, tarifas y preguntas previas a la reserva por chat o llamada.',
      icon: 'building'
    },
    {
      title: 'Clinicas',
      description: 'Automatiza informacion general, confirmaciones y primeras consultas de pacientes en texto y voz.',
      icon: 'heart'
    },
    {
      title: 'Salones / estetica',
      description: 'Toma reservas, comparte servicios y mantiene una atencion mas ordenada.',
      icon: 'sparkles'
    },
    {
      title: 'Servicios locales',
      description: 'Califica interesados, organiza solicitudes y deriva al equipo correcto por WhatsApp o llamadas.',
      icon: 'briefcase'
    },
    {
      title: 'Ecommerce pequeno',
      description: 'Atiende preguntas sobre stock, entregas y pagos con una experiencia consistente.',
      icon: 'shopping'
    }
  ] satisfies UseCaseItem[],
  features: [
    {
      title: 'Atencion automatica 24/7',
      description: 'Tu negocio sigue respondiendo incluso fuera de horario en chat y voz.',
      icon: 'clock'
    },
    {
      title: 'Respuestas instantaneas por WhatsApp',
      description: 'Reduce tiempos de espera y mejora la experiencia del cliente.',
      icon: 'chat'
    },
    {
      title: 'Captura de leads',
      description: 'Ordena datos de contacto y oportunidades desde la primera conversacion.',
      icon: 'leads'
    },
    {
      title: 'Reservas y agendamiento',
      description: 'Facilita confirmaciones y solicitudes sin friccion.',
      icon: 'calendar'
    },
    {
      title: 'Derivacion a humano cuando sea necesario',
      description: 'Escala la conversacion cuando el caso requiere apoyo del equipo.',
      icon: 'handoff'
    },
    {
      title: 'Respuestas personalizadas segun tu negocio',
      description: 'Cada flujo se adapta a tu rubro, tono y procesos.',
      icon: 'sliders'
    },
    {
      title: 'Implementacion simple',
      description: 'Partimos rapido, sin exigir procesos tecnicos complejos.',
      icon: 'rocket'
    },
    {
      title: 'Escalable para multiples conversaciones',
      description: 'Atiende mas consultas sin perder consistencia operacional.',
      icon: 'layers'
    },
    {
      title: 'Voz / llamadas automatizadas',
      description: 'Agrega flujos de voz para responder, filtrar y derivar llamadas automaticamente.',
      icon: 'phone'
    }
  ] satisfies FeatureItem[],
  demos: [
    {
      title: 'Reserva para restaurante',
      label: 'Demo 01',
      description: 'Convierte una consulta simple en una reserva confirmada con menos friccion.',
      messages: [
        { from: 'user', text: 'Hola, tienen mesa hoy para 4?', time: '19:02' },
        { from: 'assistant', text: 'Si, tenemos a las 20:00 y 21:15. Cual prefieres?', time: '19:02' },
        { from: 'user', text: 'A las 20:00 por favor', time: '19:03' },
        { from: 'assistant', text: 'Perfecto. Te dejo reservada una mesa para 4 a las 20:00.', time: '19:03' }
      ]
    },
    {
      title: 'Atencion por llamada automatizada',
      label: 'Demo 02',
      description: 'Muestra como una llamada puede responder, calificar y derivar sin depender de una persona disponible.',
      messages: [
        { from: 'user', text: 'Llamada entrante: Hola, necesito saber si atienden hoy', time: '10:26' },
        { from: 'assistant', text: 'Hola, gracias por llamar. Hoy atendemos hasta las 21:30. Quieres consultar precios o agendar?', time: '10:26' },
        { from: 'user', text: 'Quiero consultar precios', time: '10:27' },
        { from: 'assistant', text: 'Perfecto. Te comparto los valores base y, si quieres, te derivo con una persona del equipo.', time: '10:27' }
      ]
    },
    {
      title: 'Calificacion de lead',
      label: 'Demo 03',
      description: 'Filtra necesidades, recoge contexto y deriva oportunidades con mejor informacion.',
      messages: [
        { from: 'user', text: 'Necesito ayuda para automatizar mis reservas', time: '15:40' },
        { from: 'assistant', text: 'Claro. Tu negocio es restaurante, hotel o servicio local?', time: '15:40' },
        { from: 'user', text: 'Es una clinica dental', time: '15:41' },
        { from: 'assistant', text: 'Perfecto. Te conecto con una propuesta adaptada a clinicas.', time: '15:41' }
      ]
    }
  ] satisfies DemoItem[],
  pricing: {
    note: 'Los valores e integraciones pueden ajustarse segun las necesidades de cada negocio.',
    // Edita aqui los precios de cada plan.
    plans: [
      {
        name: 'Plan WSP',
        price: '199',
        description: 'La base ideal para automatizar conversaciones por WhatsApp.',
        features: [
          'Automatizacion por WhatsApp',
          'Respuestas frecuentes',
          'Captura de leads',
          'Informacion del negocio',
          'Soporte base'
        ],
        ctaLabel: 'Elegir WSP',
        ctaHref: '#contacto'
      },
      {
        name: 'Plan Voice',
        price: '299',
        description: 'Ideal para negocios que quieren automatizar llamadas entrantes con una experiencia clara y profesional.',
        features: [
          'Todo lo del plan WSP',
          'Flujos de voz',
          'Atencion automatizada por llamadas',
          'Derivacion inteligente'
        ],
        highlighted: true,
        ctaLabel: 'Elegir Voice',
        ctaHref: '#contacto'
      },
      {
        name: 'Plan Full',
        price: '499',
        description: 'La experiencia mas completa para negocios que quieren automatizar WhatsApp y llamadas con mas personalizacion.',
        features: [
          'WhatsApp + Voz',
          'Flujos personalizados',
          'Prioridad de soporte',
          'Ajustes avanzados',
          'Experiencia mas completa para tu negocio'
        ],
        ctaLabel: 'Elegir Full',
        ctaHref: '#contacto'
      }
    ] satisfies PricingPlan[]
  },
  benefits: [
    {
      title: 'Menos tiempo respondiendo lo mismo',
      description: 'Automatiza preguntas repetitivas y deja mas espacio para tareas de mayor valor.'
    },
    {
      title: 'Mas oportunidades captadas',
      description: 'Cada consulta recibe respuesta rapida y puede convertirse en una venta o reserva.'
    },
    {
      title: 'Mejor experiencia para tus clientes',
      description: 'Una conversacion clara, ordenada y disponible por chat o voz mejora la percepcion de marca.'
    },
    {
      title: 'Atencion incluso fuera de horario',
      description: 'Tu negocio sigue operativo cuando el equipo no esta conectado, tanto en WhatsApp como en llamadas.'
    }
  ] satisfies BenefitItem[],
  stats: [
    { label: 'Disponible', value: '24/7' },
    { label: 'Respuesta', value: 'En segundos' },
    { label: 'Canales', value: 'WhatsApp + Voz' },
    { label: 'Enfoque', value: 'Negocios reales' }
  ] satisfies StatItem[],
  steps: [
    {
      title: 'Cuentanos sobre tu negocio',
      description: 'Entendemos tus procesos, preguntas frecuentes y objetivos comerciales.'
    },
    {
      title: 'Configuramos tu asistente',
      description: 'Adaptamos conversaciones, tono, flujos y criterios de derivacion.'
    },
    {
      title: 'Empieza a responder clientes automaticamente',
      description: 'Activas una experiencia mas ordenada para atender, vender y captar leads.'
    }
  ] satisfies StepItem[],
  faqs: [
    {
      question: 'Necesito conocimientos tecnicos?',
      answer: 'No. ZivenAI esta pensado para implementarse de forma guiada y simple.'
    },
    {
      question: 'Sirve para cualquier negocio?',
      answer: 'Funciona especialmente bien en negocios con alto volumen de consultas repetitivas, reservas o seguimiento comercial.'
    },
    {
      question: 'Se puede personalizar?',
      answer: 'Si. El asistente puede ajustarse a tu tono, informacion, procesos y tipo de clientes.'
    },
    {
      question: 'Puede derivar a una persona real?',
      answer: 'Si. Cuando corresponde, la conversacion puede escalarse a un miembro del equipo.'
    },
    {
      question: 'Tambien sirve para llamadas?',
      answer: 'Si. ZivenAI puede incluir automatizacion por voz para responder, filtrar y derivar llamadas segun tu operacion.'
    },
    {
      question: 'Como se implementa?',
      answer: 'Partimos con una breve definicion del flujo, configuramos el asistente y luego hacemos ajustes segun tu operacion.'
    }
  ] satisfies FaqItem[],
  footerText: 'Automatizacion con inteligencia artificial para negocios en WhatsApp y voz.'
} as const;
