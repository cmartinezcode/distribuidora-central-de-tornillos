export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "¿Cuál es el pedido mínimo y en qué presentaciones venden?",
    answer:
      "Todos los tornillos se venden en presentaciones de 100 unidades, 1.000 unidades o caja cerrada. El pedido mínimo es de 100 unidades por referencia. La cantidad de unidades de la caja cerrada se confirma por WhatsApp antes de cotizar. Puedes combinar varias referencias en una sola solicitud; no se sirven unidades sueltas fuera de estas presentaciones.",
  },
  {
    question: "¿Dónde veo los precios?",
    answer:
      "Las referencias del catálogo se trabajan bajo pedido y no tienen precio publicado. Envíanos la lista con medidas y cantidades: la cotización confirma el precio por volumen, la presentación, el flete y el plazo antes de facturar.",
  },
  {
    question: "¿Qué plazo de despacho tienen?",
    answer:
      "En La Dorada entregamos a domicilio el mismo día para pedidos confirmados y referencias disponibles. Fuera de La Dorada, la disponibilidad de entrega a domicilio y el plazo de tránsito dependen de la transportadora y el destino: como referencia del sector, 2–5 días hábiles en ciudades principales y 3–8 días hábiles en otros municipios. Si la referencia está bajo pedido, el alistamiento habitual es de 5–8 días hábiles y se suma al tránsito. En la cotización confirmamos disponibilidad, transportadora, costo y fecha.",
  },
  {
    question: "¿Hacen entregas el mismo día en La Dorada?",
    answer:
      "Sí. Para pedidos confirmados y referencias disponibles, entregamos a domicilio el mismo día en La Dorada, Caldas. Si la referencia está bajo pedido, primero confirmamos el alistamiento. Para Puerto Salgar, Honda, Mariquita, Guaduas, Fresno, Victoria, Norcasia, Puerto Boyacá y otros municipios cercanos, coordinamos con transportadora y confirmamos el plazo antes de despachar.",
  },
  {
    question: "¿Cuánto tarda y cuánto cuesta un despacho fuera de La Dorada?",
    answer:
      "La disponibilidad de entrega a domicilio y el plazo dependen de la transportadora y del destino; el flete también depende del peso y el volumen. Como referencia del sector, los despachos a ciudades principales tardan 2–5 días hábiles y los de otros municipios, 3–8 días hábiles; las zonas apartadas pueden tardar más. Lo informamos antes de confirmar el pedido.",
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
      "Para clientes empresariales trabajamos con transferencia bancaria y factura electrónica. En La Dorada, la entrega a domicilio es el mismo día para pedidos confirmados y referencias disponibles; fuera de La Dorada, la disponibilidad, el plazo y el flete dependen de la transportadora, el destino, el peso y el volumen. Lo confirmamos antes de facturar.",
  },
  {
    question: "¿Puedo devolver material?",
    answer:
      "El material estándar sin abrir puede devolverse dentro de los 5 días hábiles siguientes a la recepción, con autorización previa y flete de retorno a cargo del cliente. No admitimos devoluciones de material a medida, cortado o manipulado, salvo defecto de fabricación. Las reclamaciones por diferencias visibles deben comunicarse dentro de las 48 horas siguientes a la entrega.",
  },
];
