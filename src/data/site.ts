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
  status: string;
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

export type TrustItem = {
  title: string;
  description: string;
  icon: string;
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
    { label: 'Solución', href: '#solucion' },
    { label: 'Funciones', href: '#funciones' },
    { label: 'Demo', href: '#demo' },
    { label: 'Planes', href: '#planes' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' }
  ] satisfies NavItem[],
  hero: {
    badge: 'WhatsApp, llamadas y atención 24/7',
    // Edita aqui el titular principal.
    title: 'Automatiza la atención de tu negocio por WhatsApp y llamadas, 24/7',
    // Edita aqui el subtitulo principal.
    description:
      'Responde clientes, captura oportunidades y vende más con una atención automatizada, clara y profesional.',
    primaryCta: 'Solicitar demo',
    secondaryCta: 'Ver planes',
    trustLabels: ['Disponible 24/7', 'Reservas y leads', 'Derivación humana'],
    channelLabels: ['WhatsApp', 'Llamadas opcionales', 'Hecho para Chile y LatAm'],
    voiceCallout: {
      title: 'Soporte por voz opcional',
      description:
        'Si tu operación lo necesita, ZivenAI también puede automatizar llamadas, calificar casos y derivar a una persona real.'
    },
    heroMessages: [
      {
        from: 'user',
        text: 'Hola, ¿qué horario tienen hoy?',
        time: '09:14'
      },
      {
        from: 'assistant',
        text: 'Hola, hoy atendemos hasta las 22:00. Si quieres, también puedo ayudarte con una reserva o con los precios.',
        time: '09:14'
      },
      {
        from: 'user',
        text: 'Quiero saber si tienen disponibilidad para 2 personas',
        time: '09:15'
      },
      {
        from: 'assistant',
        text: 'Sí, tenemos disponibilidad a las 20:30 y 21:00. ¿Te reservo alguna opción?',
        time: '09:15'
      },
      {
        from: 'user',
        text: 'También quiero saber el valor',
        time: '09:15'
      },
      {
        from: 'assistant',
        text: 'Claro. El menú parte desde $14.900. Si quieres, te envío opciones y dejo tu reserva lista.',
        time: '09:16'
      }
    ] satisfies DemoMessage[]
  },
  useCases: [
    {
      title: 'Restaurantes',
      description: 'Responde horarios, confirma reservas y comparte menús sin depender del equipo en cada consulta.',
      icon: 'utensils'
    },
    {
      title: 'Hoteles',
      description: 'Atiende disponibilidad, tarifas y preguntas frecuentes antes de la reserva con una respuesta más ordenada.',
      icon: 'building'
    },
    {
      title: 'Clínicas',
      description: 'Automatiza información inicial, horarios, derivaciones y primeras consultas de pacientes.',
      icon: 'heart'
    },
    {
      title: 'Salones / estética',
      description: 'Toma reservas, presenta servicios y filtra consultas repetitivas con una atención más profesional.',
      icon: 'sparkles'
    },
    {
      title: 'Servicios locales',
      description: 'Captura datos, entiende la necesidad del cliente y deriva cada lead al área correcta.',
      icon: 'briefcase'
    },
    {
      title: 'Ecommerce pequeño',
      description: 'Resuelve dudas sobre stock, entregas y pagos sin perder velocidad ni consistencia en la atención.',
      icon: 'shopping'
    }
  ] satisfies UseCaseItem[],
  features: [
    {
      title: 'Atención automática 24/7',
      description: 'Tu negocio sigue respondiendo incluso fuera de horario, sin dejar consultas pendientes.',
      icon: 'clock'
    },
    {
      title: 'Respuestas instantáneas por WhatsApp',
      description: 'Da una primera respuesta clara y rápida cuando el cliente todavía está listo para comprar o reservar.',
      icon: 'chat'
    },
    {
      title: 'Captura de leads',
      description: 'Recoge nombre, necesidad y contexto para convertir conversaciones en oportunidades reales.',
      icon: 'leads'
    },
    {
      title: 'Reservas y agendamiento',
      description: 'Facilita confirmaciones, disponibilidad y solicitudes sin fricción para el cliente.',
      icon: 'calendar'
    },
    {
      title: 'Derivación a humano',
      description: 'Cuando la conversación lo requiere, ZivenAI escala el caso a una persona real.',
      icon: 'handoff'
    },
    {
      title: 'Personalización según tu negocio',
      description: 'El asistente responde con tu tono, tus servicios y la información que realmente importa.',
      icon: 'sliders'
    },
    {
      title: 'Implementación simple',
      description: 'Partimos con una configuración guiada para que el sistema empiece a ser útil rápido.',
      icon: 'rocket'
    },
    {
      title: 'Escalable para múltiples conversaciones',
      description: 'Atiende más volumen sin perder consistencia ni saturar al equipo.',
      icon: 'layers'
    },
    {
      title: 'Voz / llamadas automatizadas opcionales',
      description: 'Agrega automatización por voz para responder, filtrar y derivar llamadas cuando tu operación lo necesite.',
      icon: 'phone'
    }
  ] satisfies FeatureItem[],
  demos: [
    {
      title: 'Reserva para restaurante',
      label: 'Demo 01',
      status: 'Reserva confirmada',
      description: 'Una consulta simple termina en una reserva confirmada con menos fricción y mejor experiencia.',
      messages: [
        { from: 'user', text: 'Hola, ¿tienen mesa hoy para 4 personas?', time: '19:02' },
        { from: 'assistant', text: 'Sí, tenemos a las 20:00 y a las 21:15. ¿Cuál prefieres?', time: '19:02' },
        { from: 'user', text: 'A las 20:00 por favor', time: '19:03' },
        { from: 'assistant', text: 'Perfecto. Dejé tu reserva confirmada para 4 personas a las 20:00.', time: '19:03' }
      ]
    },
    {
      title: 'Precios y horarios',
      label: 'Demo 02',
      status: 'Disponible 24/7',
      description: 'El asistente entrega información clave al instante y evita que una consulta simple se enfríe.',
      messages: [
        { from: 'user', text: 'Hola, ¿qué horario tienen hoy y cuánto cuesta?', time: '10:26' },
        { from: 'assistant', text: 'Hoy atendemos hasta las 21:30 y los planes parten desde $199 al mes.', time: '10:26' },
        { from: 'assistant', text: 'Si quieres, también puedo explicarte qué incluye cada opción.', time: '10:27' }
      ]
    },
    {
      title: 'Calificación y derivación',
      label: 'Demo 03',
      status: 'Derivado a humano',
      description: 'ZivenAI entiende el contexto, califica el lead y lo deriva con mejor información para el equipo.',
      messages: [
        { from: 'user', text: 'Necesito ayuda para automatizar las reservas de mi negocio', time: '15:40' },
        { from: 'assistant', text: 'Claro. ¿Tu negocio es restaurante, clínica o servicio local?', time: '15:40' },
        { from: 'user', text: 'Es una clínica dental', time: '15:41' },
        { from: 'assistant', text: 'Perfecto. Ya dejé tu solicitud clasificada y te derivo con una persona del equipo.', time: '15:41' }
      ]
    }
  ] satisfies DemoItem[],
  pricing: {
    note: 'Los valores e integraciones pueden ajustarse según las necesidades de cada negocio.',
    // Edita aqui los precios de cada plan.
    plans: [
      {
        name: 'Plan WSP',
        price: '199',
        description: 'Ideal para negocios que quieren ordenar y automatizar la atención inicial por WhatsApp.',
        features: [
          'Automatización por WhatsApp',
          'Respuestas frecuentes',
          'Captura de leads',
          'Información del negocio',
          'Soporte base'
        ],
        ctaLabel: 'Elegir WSP',
        ctaHref: '#contacto'
      },
      {
        name: 'Plan Voice',
        price: '299',
        description: 'Recomendado para negocios que también necesitan automatizar llamadas con una experiencia clara y profesional.',
        features: [
          'Todo lo del plan WSP',
          'Flujos de voz',
          'Atención automatizada por llamadas',
          'Derivación inteligente'
        ],
        highlighted: true,
        ctaLabel: 'Elegir Voice',
        ctaHref: '#contacto'
      },
      {
        name: 'Plan Full',
        price: '499',
        description: 'La opción más completa para automatizar WhatsApp, voz y procesos más personalizados.',
        features: [
          'WhatsApp + Voz',
          'Flujos personalizados',
          'Prioridad de soporte',
          'Ajustes avanzados',
          'Experiencia más completa para tu negocio'
        ],
        ctaLabel: 'Elegir Full',
        ctaHref: '#contacto'
      }
    ] satisfies PricingPlan[]
  },
  benefits: [
    {
      title: 'Menos tiempo respondiendo lo mismo',
      description: 'Automatiza preguntas repetitivas y libera tiempo para tareas donde sí hace falta una persona.'
    },
    {
      title: 'Más oportunidades captadas',
      description: 'Cada consulta puede transformarse en un lead, una reserva o una conversación comercial mejor encaminada.'
    },
    {
      title: 'Mejor experiencia para tus clientes',
      description: 'Una respuesta clara, rápida y consistente mejora la percepción de tu negocio desde el primer contacto.'
    },
    {
      title: 'Atención incluso fuera de horario',
      description: 'Tu operación sigue respondiendo cuando el equipo no está conectado o está ocupado en otras tareas.'
    }
  ] satisfies BenefitItem[],
  stats: [
    { label: 'Disponible', value: '24/7' },
    { label: 'Respuesta', value: 'En segundos' },
    { label: 'Enfoque', value: 'Negocios reales' },
    { label: 'Canales', value: 'WhatsApp + voz' }
  ] satisfies StatItem[],
  steps: [
    {
      title: 'Cuéntanos sobre tu negocio',
      description: 'Entendemos tus preguntas frecuentes, tu forma de atender y el tipo de cliente que recibes.'
    },
    {
      title: 'Configuramos tu asistente',
      description: 'Ajustamos respuestas, tono, reservas, captación de leads y criterios de derivación.'
    },
    {
      title: 'Empieza a responder clientes automáticamente',
      description: 'Tu negocio comienza a atender con más orden, rapidez y consistencia desde el primer contacto.'
    }
  ] satisfies StepItem[],
  trust: [
    {
      title: 'Personalización según tu negocio',
      description: 'No se trata de una plantilla genérica: ZivenAI responde con información adaptada a tu operación.',
      icon: 'sliders'
    },
    {
      title: 'Implementación acompañada',
      description: 'La configuración se hace contigo para que el resultado sea útil y entendible desde el inicio.',
      icon: 'rocket'
    },
    {
      title: 'Derivación a persona real',
      description: 'Cuando hace falta intervención humana, la conversación puede continuar con tu equipo.',
      icon: 'handoff'
    },
    {
      title: 'Pensado para Chile y LatAm',
      description: 'La propuesta está orientada a negocios reales que venden, reservan y responden por mensajería todos los días.',
      icon: 'globe'
    }
  ] satisfies TrustItem[],
  faqs: [
    {
      question: '¿Necesito conocimientos técnicos?',
      answer: 'No. ZivenAI está pensado para implementarse con acompañamiento y sin exigir procesos técnicos complejos.'
    },
    {
      question: '¿Sirve para cualquier negocio?',
      answer: 'Funciona especialmente bien en negocios con consultas repetitivas, reservas, agendamiento o captación comercial.'
    },
    {
      question: '¿Se puede personalizar?',
      answer: 'Sí. El asistente se ajusta a tu rubro, tono, información clave y forma de atender clientes.'
    },
    {
      question: '¿Puede derivar a una persona real?',
      answer: 'Sí. Cuando la conversación necesita intervención humana, ZivenAI puede escalar el caso a tu equipo.'
    },
    {
      question: '¿También sirve para llamadas?',
      answer: 'Sí. Según el plan, puedes sumar flujos de voz para responder, filtrar y derivar llamadas automáticamente.'
    },
    {
      question: '¿Cómo se implementa?',
      answer: 'Primero entendemos tu negocio, luego configuramos el asistente y finalmente ajustamos el flujo según tu operación real.'
    }
  ] satisfies FaqItem[],
  footerText: 'Automatización con inteligencia artificial para negocios en WhatsApp y voz.'
} as const;
