export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "¿Cuál es el pedido mínimo?",
    answer:
      "El pedido mínimo es de una caja por referencia. La cantidad de unidades por caja se confirma en la cotización, porque la presentación puede variar según la referencia y el volumen. Puedes combinar varias referencias en una sola solicitud, pero no se sirven unidades sueltas de referencias suministradas en caja completa.",
  },
  {
    question: "¿Dónde veo los precios?",
    answer:
      "Las referencias del catálogo se trabajan bajo pedido y no tienen precio publicado. Envíanos la lista con medidas y cantidades: la cotización confirma el precio por volumen, la presentación, el flete y el plazo antes de facturar.",
  },
  {
    question: "¿Puedo pedir una muestra antes de comprar?",
    answer:
      "Sí. Para referencias estándar enviamos muestras de 5 a 10 unidades sin coste, con el flete a cargo del cliente. Indícalo en el formulario de cotización o escríbenos por WhatsApp con la referencia y el uso previsto.",
  },
  {
    question: "¿Qué plazo de despacho tienen?",
    answer:
      "Las referencias se trabajan bajo pedido y suelen estar disponibles en 5–8 días hábiles. En la cotización confirmamos el plazo exacto de cada línea según presentación, cantidad y ciudad de despacho, junto con la transportadora.",
  },
  {
    question: "¿Los productos tienen certificado de material?",
    answer:
      "Podemos solicitar certificado de material y trazabilidad de lote para las referencias que lo permitan, sujeto a disponibilidad del fabricante. Indícalo al enviar la cotización y lo preparamos junto con la remisión y la factura electrónica.",
  },
  {
    question: "¿Hacen medidas especiales?",
    answer:
      "Sí. Estudiamos referencias o medidas no listadas en el catálogo. Envíanos la especificación con tipo de cabeza, punta, diámetro, longitud, material y cantidad; respondemos con viabilidad, precio y plazo.",
  },
  {
    question: "¿Cómo se paga y cómo se despacha?",
    answer:
      "Para clientes empresariales trabajamos con transferencia bancaria y factura electrónica. El flete se cotiza según volumen, destino y transportadora; lo confirmamos junto con el plazo antes de facturar.",
  },
  {
    question: "¿Puedo devolver material?",
    answer:
      "El material estándar sin abrir puede devolverse dentro de los 5 días hábiles siguientes a la recepción, con autorización previa y flete de retorno a cargo del cliente. No admitimos devoluciones de material a medida, cortado o manipulado, salvo defecto de fabricación. Las reclamaciones por diferencias visibles deben comunicarse dentro de las 48 horas siguientes a la entrega.",
  },
];
