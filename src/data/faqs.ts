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
      "Sí. Para referencias estándar enviamos muestras de 5 a 10 unidades sin coste, con el flete cotizado según transportadora y destino. Indícalo en el formulario de cotización o escríbenos por WhatsApp con la referencia y el uso previsto.",
  },
  {
    question: "¿Qué plazo de despacho tienen?",
    answer:
      "En La Dorada entregamos el mismo día para pedidos confirmados y referencias disponibles. Fuera de La Dorada, la disponibilidad de entrega y el plazo de tránsito dependen de la transportadora y el destino: como referencia del sector, 2–5 días hábiles en ciudades principales y 3–8 días hábiles en otros municipios. Si la referencia está bajo pedido, el alistamiento habitual es de 5–8 días hábiles y se suma al tránsito. En la cotización confirmamos disponibilidad, transportadora, costo y fecha.",
  },
  {
    question: "¿Hacen entregas el mismo día en La Dorada?",
    answer:
      "Sí. Para pedidos confirmados y referencias disponibles, entregamos el mismo día en La Dorada, Caldas. Si la referencia está bajo pedido, primero confirmamos el alistamiento. Para Puerto Salgar, Honda, Mariquita, Guaduas, Fresno, Victoria, Norcasia, Puerto Boyacá y otros municipios cercanos, coordinamos con transportadora y confirmamos el plazo antes de despachar.",
  },
  {
    question: "¿Cuánto tarda y cuánto cuesta un envío fuera de La Dorada?",
    answer:
      "La disponibilidad de entrega y el plazo dependen de la transportadora y del destino; el flete también depende del peso y el volumen. Como referencia del sector, los envíos a ciudades principales tardan 2–5 días hábiles y los de otros municipios, 3–8 días hábiles; las zonas apartadas pueden tardar más. Lo informamos antes de confirmar el pedido.",
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
      "Para clientes empresariales trabajamos con transferencia bancaria y factura electrónica. En La Dorada, la entrega es el mismo día para pedidos confirmados y referencias disponibles; fuera de La Dorada, la disponibilidad, el plazo y el flete dependen de la transportadora, el destino, el peso y el volumen. Lo confirmamos antes de facturar.",
  },
  {
    question: "¿Puedo devolver material?",
    answer:
      "El material estándar sin abrir puede devolverse dentro de los 5 días hábiles siguientes a la recepción, con autorización previa y flete de retorno a cargo del cliente. No admitimos devoluciones de material a medida, cortado o manipulado, salvo defecto de fabricación. Las reclamaciones por diferencias visibles deben comunicarse dentro de las 48 horas siguientes a la entrega.",
  },
];
