# Revisión de cifras sin fuente e integraciones — 16-sep-2026

Registro frase por frase de la tercera ronda (apartados F y G). Sin commit ni push.
Formato: ANTES → AHORA. Lo que no cambia se abrevia con «…».

## 0. Integraciones: qué existe de verdad

Buscado en el agente real (`Automatizaciones/Restaurante-Agente Whatsap-panel de control`,
«Multi-tenant (Antigravity)», 730 commits y todas las ramas), en el backup
`BACKUP-antigravity-20260723-0250`, en el clon archivado de la clínica y en `Automatizaciones/GITHUB`.

- ClinicCloud, Klinikare, Flowww, Koibox: **ninguna línea de código**. Solo anunciadas.
- Agenda: propia, en Supabase (`stylist_schedules`, `appointments`, `schedule_blocks`), visible en
  el panel, más la página `/reservar/[slug]`. No hay conector con el software de la clínica.
- `services/calendar.js`: mock con «TODO: reemplazar por llamada a API real (Calendly, Acuity, etc.)».
- `google_calendar_configs`: tabla creada, ningún código la usa.
- De los 30 logos del cinturón de la home: reales WhatsApp Business y Telegram (avisos a la dueña).
  Instagram solo como enlace en la información del negocio; Google solo el enlace de reseñas
  (`services/review.js`); Stripe era un placeholder retirado del panel. El resto, nada.
- Recordatorios (`services/reminder.js`): solo el de 24 h. No hay recordatorio de 2 h.

## 1. Home

- `app/page.tsx`: fuera `<IntegrationsTicker />` (los 30 logos) y `<ResultsSection />`.
  Los dos componentes se han borrado del repo (`git rm`); se recuperan con git si hiciera falta.
  - ResultsSection contenía: «80% de probabilidad de perder un lead si tardas más de 5 minutos en
    responder / Fuente: MIT Lead Response Management Study», «Tu competencia ya está invirtiendo en
    Meta Ads…», «3.000 € es el LTV medio de un paciente recurrente en clínica estética en España»,
    «Recuperar 3 pacientes inactivos al mes con automatización = 9.000 €/mes adicionales» y
    «Fuente: SEME». No quedaba nada sostenible que no dijeran ya Servicios y Cómo funciona, así que
    se quita el bloque entero.
- `components/Navbar.tsx`: fuera el enlace «Resultados» (#resultados), que apuntaba a ese bloque.
- `components/HeroSection.tsx`: fuera la métrica «95-98% tasa de apertura en WhatsApp». Quedan
  «< 5 seg tiempo de respuesta» y «24/7 atención constante» (rejilla de 3 a 2 columnas).
- `components/FAQSection.tsx`: fuera la pregunta entera
  «¿Se integra con mi software de gestión? — Sí. Nos integramos con los principales software del
  sector como Flowww y Klinikare…».
- `components/ServicesSection.tsx`: «…filtra leads y manda la cita directo al calendario» →
  «…filtra leads y deja la cita reservada en la agenda».
- `components/TimelineSection.tsx`: «Directo en tu calendario. Tú recibes notificación…» →
  «Directo en la agenda. Tú recibes notificación…».

## 2. Landings

`components/ServiceHero.tsx`: la rejilla de métricas se adapta a 1, 2 o 3 métricas y no se pinta si
no hay ninguna.

### /agente-whatsapp-clinicas-esteticas
- Métrica fuera: «95-98% tasa de apertura en WhatsApp».
- «El 40% de las consultas de tu clínica llegan fuera de horario — entre las 19:00 y las 23:00, o en
  fin de semana — justo cuando…» → «Parte de las consultas de tu clínica llega fuera de horario —
  por la noche o en fin de semana — justo cuando…».
- «Si un lead no recibe respuesta en los primeros 5 minutos, tiene un 80% de probabilidades de
  perderse para siempre. Esa cita ya no es tuya.» → «Cuando por fin alguien contesta a la mañana
  siguiente, esa persona puede haber pedido cita ya en otro sitio.»
- «Le mandas la información por email y nadie la abre: el email tiene un 20-25% de apertura, frente
  al 95-98% de WhatsApp. Estás hablando por el canal equivocado.» → «Le mandas la información por
  email cuando la conversación empezó por WhatsApp. Cambias de canal justo cuando esa persona
  quería una respuesta rápida.»
- «…el agente reserva directamente en tu calendario.» → «…el agente reserva la cita en la agenda.»

### /agente-voz-ia-clinicas
- Métrica fuera: «40% de las consultas llegan fuera de horario».
- FAQ: «…coloca la cita en tu calendario y envía la confirmación» → «…coloca la cita en la agenda y
  envía la confirmación».
- «El 40% de las consultas de tu clínica llegan entre las 19:00 y las 23:00, o en fin de semana —
  fuera del horario…» → «Parte de las consultas llega por la tarde-noche o en fin de semana, fuera
  del horario…».
- «Un lead que no recibe respuesta en los primeros 5 minutos tiene un 80% de probabilidades de
  perderse para siempre. Una llamada que nadie coge es justo eso: cero minutos de respuesta.» →
  «Una llamada que nadie coge es una consulta sin respuesta: no sabes qué quería esa persona ni si
  volverá a llamar.»
- «El sector estético pierde entre un 12% y un 19% de las citas por no-shows — y muchas empiezan
  con una llamada mal gestionada…» → «Algunas citas se pierden antes de existir: empiezan con una
  llamada mal gestionada, o que nadie llega a devolver.»
- Paso 4: «Agenda la cita en tu calendario» → «Agenda la cita».
- «La cita queda colocada directamente en tu calendario…» → «…directamente en la agenda…».

### /reactivacion-pacientes-inactivos
- Métricas fuera: «95-98% apertura en WhatsApp frente al 20-25% del email» y «≈ 3.000 € LTV medio de
  un cliente recurrente». Queda «100% automático».
- «Cuando alguien lo intenta, suele ser por email: con un 20-25% de apertura, la mayoría de esos
  mensajes ni siquiera llegan a leerse.» → «Cuando alguien lo intenta, suele ser por email, donde el
  mensaje compite con promociones y newsletters.»
- «El LTV medio de un cliente recurrente en clínica estética ronda los 3.000 €. Cada cliente
  inactivo es…» → «Un cliente recurrente vuelve muchas veces a lo largo de los años. Cada cliente
  inactivo es…».
- «La cita aparece en tu calendario y el cliente vuelve…» → «La cita queda en la agenda y el cliente
  vuelve…».
- «Cada cliente que reactivas vale, de media, cerca de 3.000 € a lo largo del tiempo — dinero que…»
  → «Cada cliente que reactivas puede seguir viniendo durante años — dinero que…».
- FAQ «¿Cuántos clientes puedo recuperar al mes?»: «…recuperar solo 2-3 clientes inactivos al mes ya
  puede suponer miles de euros adicionales…» → «Depende del tamaño de tu base de datos y de cuántas
  personas respondan, así que no damos una cifra de antemano. En la auditoría gratuita lo calculamos
  con tus números: clientes inactivos, ticket medio y visitas al año de un cliente habitual.»

### /recordatorios-automaticos-citas
- Métricas: fuera «95-98%», «Hasta 7.500 €/mes» y «12-19%». Ahora una sola: «24 h — antes de cada
  cita, recordatorio por WhatsApp» (lo que hace `reminder.js`).
- FAQ canal: «…donde tus clientes de verdad leen los mensajes — con un 95-98% de apertura frente al
  20-25% del email.» → «…porque es el canal donde tus clientes ya hablan contigo a diario.»
- FAQ cambio de cita: «…el cambio se refleja en tu calendario…» → «…el cambio queda en la agenda…».
- FAQ fuera entera: «¿Se integra con mi software de gestión? — Sí. Nos integramos con los
  principales programas del sector, como Flowww y Klinikare…».
- FAQ «¿Cuánto bajan realmente los no-shows?»: «Las clínicas que activan los recordatorios
  automáticos suelen ver una caída notable ya desde el primer mes, que sigue bajando a medida que el
  sistema aprende los patrones… La referencia del sector sitúa los no-shows entre el 12% y el 19%…»
  → «Depende de cada clínica, y no te vamos a dar una media sin fuente. Lo que sí hace el sistema es
  recordar cada cita por WhatsApp y pedir confirmación, así que los huecos se detectan con margen
  para ofrecerlos a otra persona. En la auditoría gratuita calculamos el impacto con tus propios
  números: citas al mes, tu tasa actual de no-shows y tu ticket medio.»
- «Entre el 12% y el 19% de las citas de una clínica estética terminan en no-show…» → «Una parte de
  las citas de una clínica estética termina en no-show…».
- «Esos huecos le cuestan a una clínica media hasta 7.500 € al mes — tiempo de profesional…» →
  «Cada hueco cuesta lo que habría facturado esa cita: tiempo de profesional…».
- Paso 3: «…queda reflejado directamente en tu calendario…» → «…directamente en la agenda…».

### /agente-whatsapp-clinicas-dentales
- Métricas fuera: «5 min la ventana para responder antes de perder al paciente» (la regla del MIT) y
  «12-19% de las citas dentales acaban en no-show». Queda «24/7».
- FAQ fuera entera: «¿Se conecta con ClinicCloud, Klinikare, Flowww o Koibox? — Sí. Lee la agenda y
  la ficha del paciente, y escribe la cita directamente ahí…».
- Recall: «Lee de tu software de gestión cuándo fue la última higiene o revisión de cada paciente y
  le escribe…» → «Cuando le toca la higiene o la revisión a cada paciente, le escribe…».
- «Revisiones e higienes se avisan a su tiempo, leyendo directamente de tu agenda.» → «Revisiones e
  higienes se avisan a su tiempo.»

## 3. Calculadora de no-shows (`components/NoShowsCalculator.tsx`)

- La tasa fija del 15 % pasa a ser un control nuevo, «Tu tasa de no-shows (%)», de 1 a 40, con 10
  como valor inicial de ejemplo.
- «Calculamos los no-shows estimados aplicando una tasa media del sector del 15%…» y «Fuente: tasa
  media de no-shows del 12-19% en clínicas privadas españolas según datos de Klinikare y Elsevier
  España (2024). Usamos el 15% como estimación conservadora.» → «El cálculo es citas al día × días de
  trabajo × tu tasa de no-shows × ticket medio. La tasa inicial es solo un valor de ejemplo: para
  saber la tuya, divide las citas del último mes a las que no vino nadie sin avisar entre el total de
  citas programadas.»
- «Reduce tus no-shows un 40% con recordatorios automáticos» → «Reduce tus no-shows con recordatorios
  automáticos por WhatsApp».

## 4. Prompt del chat (`app/api/chat/route.ts`)

«- Integraciones: se conecta al WhatsApp Business que la clínica ya tiene, sin cambiar de número ni
perder el historial, y con los principales programas de gestión del sector, como Flowww y
Klinikare. Si la clínica usa otro, se valora en la auditoría gratuita.» →
«- Integraciones: se conecta al WhatsApp Business que la clínica ya tiene, sin cambiar de número ni
perder el historial, y las citas quedan en la agenda del propio sistema. No está conectado con
ningún programa de gestión: si preguntan por el suyo, dilo con naturalidad y ofrece verlo en la
auditoría gratuita, sin prometer nada.»

## 5. Listado del blog (`app/blog/page.tsx`)

- Título: «Cómo reducir los no-shows en tu clínica dental (y dejar de perder hasta 7.500€ al mes)» →
  «…(y recuperar esos huecos de agenda)».
- Entradillas:
  - «WhatsApp es el canal más usado por los pacientes dentales. Te explicamos cómo usarlo…» →
    «Cómo usar WhatsApp en tu clínica dental para captar pacientes, confirmar citas y reactivar a
    quienes dejaron de venir.»
  - «Los no-shows cuestan hasta 7.500€/mes a clínicas estéticas…» → «Cada no-show es una cita que ya
    no se factura. Te explicamos cómo calcular lo que te cuestan y cómo reducirlos con recordatorios
    automáticos.»
  - «Hay miles de opciones de software para clínicas estéticas…» → «Te explicamos qué software de
    gestión necesita de verdad tu clínica estética según su tamaño y su momento, y por dónde
    empezar.»
  - «Entre el 12% y el 19% de las citas de una clínica dental terminan en no-show. Te contamos 5
    estrategias…» → «Te contamos 5 estrategias para reducir los no-shows en tu clínica dental…».
  - «Los mensajes de WhatsApp se leen entre un 95% y un 98% de las veces, frente al 20-25% del
    email. Te explicamos qué es un chatbot…» → «Te explicamos qué es un chatbot…».
  - «Buena parte de las consultas llegan fuera de horario y los no-shows rondan el 12-19%. Te
    contamos cómo automatizar WhatsApp…» → «Te contamos cómo automatizar WhatsApp en tu clínica
    dental para responder consultas, confirmar citas y reducir cancelaciones.»
  - «WhatsApp Business es la herramienta más usada en clínicas estéticas…» → «Cómo configurar bien
    WhatsApp Business en tu clínica estética y cuándo tiene sentido automatizarlo.»
  - «El 70% de los nuevos pacientes decide su clínica mirando reseñas de Google…» → «Muchos pacientes
    nuevos eligen clínica mirando las reseñas de Google…».
  - «Conseguir un paciente nuevo cuesta 5 veces más que mantener uno…» → «Conseguir que vuelva un
    paciente que ya te conoce cuesta menos que captar uno nuevo…».

## 6. Artículos del blog

Criterios aplicados en los 40 artículos:
- Cifras quitadas: 40 % fuera de horario, 12-19 % y 15 % de no-shows, 7.500 €/mes y sus cuentas
  (20 citas × 22 días × 15 % × 115 €), 95-98 % frente a 20-25 %, 15-30 % de ticket, «cinco veces»,
  «la mitad de la información», Meta Ads (300-500 €, 15-40 €), 200-300 €/mes en Ads y 80-300 € de
  ticket.
- Quitadas también, por ser del mismo tipo: la «reducción de no-shows de hasta un 40 %» y sus
  ejemplos derivados (15 % → 9 %, 150 €, 1.800 €; 25 citas × 15 % × 70 €), «el 70 % de las decisiones
  por reseñas», «20-35 % de reseñas frente al 2-3 % espontáneo», «15-30 % de respuestas en
  reactivación», «captar cuesta entre cinco y diez veces más» y «mover el ticket un 20 %».
- Donde la cifra servía para hacer una cuenta, ahora va la fórmula para que el lector ponga sus
  números.
- Integraciones: fuera toda frase que diga que el agente se conecta, lee o escribe en la agenda o el
  software que ya usa la clínica. Se mantiene lo cierto: se conecta al número de WhatsApp Business
  que ya tiene, sin cambiarlo, y deja la cita reservada.

### Artículos de software y CRM
**software-gestion-clinicas-esteticas**
- DESCRIPTION: «Hay miles de programas para centros de estética. Te explicamos qué necesitas de
  verdad según el tamaño y el momento de tu clínica. Pide tu diagnóstico gratis.» → «Qué software
  de gestión para clínicas estéticas necesitas de verdad según el tamaño y el momento de tu clínica,
  y por dónde empezar sin pagar herramientas de más.»
- FAQ automatización con IA: «…esta capa se añade encima del software que ya usas, conectándose con
  tu calendario y tu WhatsApp, sin obligarte a migrar nada…» → «…Además, el agente trabaja sobre el
  número de WhatsApp Business que la clínica ya tiene, así que tus pacientes siguen escribiendo al
  mismo número de siempre.»
- Tabla, fila del agente: «…agendar sobre tu calendario…» → «…dejar la cita reservada…»; ejemplo
  «Agente de WhatsApp conectado a tu calendario» → «Agente de WhatsApp con IA».
- «…de forma automática, conectándose con la agenda y, si la clínica lo tiene, con el CRM. Lo que
  aporta…» → «…de forma automática. Lo que aporta…».
- «…cómo añadir esa capa de automatización sin sustituir el software que ya usas.» → «…cómo funciona
  esa capa de automatización sobre el número de WhatsApp que tu clínica ya tiene.»
- CTA: «…integrado con el software que ya usa tu clínica.» → «…desde el mismo número de WhatsApp de
  tu clínica.»

**mejor-software-gestion-clinica-estetica**
- FAQ IA: «…agende sobre tu calendario… esa capa se puede añadir por encima del software que ya usas,
  conectándose con tu calendario y tu WhatsApp sin sustituir la herramienta de gestión.» → «…deje la
  cita reservada… esa capa se puede añadir aparte, sobre el número de WhatsApp Business que la
  clínica ya tiene.»
- «…agenda la cita directamente sobre tu calendario… Se conecta con el software que ya usas, en
  lugar de sustituirlo.» → «…agenda la cita… Trabaja con el número de WhatsApp que tu clínica ya
  tiene, así que el paciente sigue escribiendo al mismo sitio.»
- CTA: «…Se conecta por encima del software que ya usas, sin que tengas que cambiar de herramienta.»
  → «…, sin que tengas que cambiar de número de WhatsApp.»
- Criterio 4: «…se integra con tu calendario, tu WhatsApp y tu automatización.» → «…y el resto de
  herramientas que uses.»

**programa-gestion-clinica-estetica**
- FAQ: «…Esa capa suele añadirse por encima, conectada al programa que ya usas.» → «…Si la
  necesitas, lo normal es que sea una pieza aparte del programa.»
- «Hasta un 40% de las consultas de una clínica llegan cuando no hay nadie…» → «Una parte de las
  consultas de una clínica entra cuando no hay nadie para atenderlas —de noche, en fin de semana o
  con la recepción ocupada—…».
- «…agenda la cita directamente sobre el programa que ya usas… conectándose con él en lugar de
  sustituirlo.» → «…deja la cita reservada… todo desde el número de WhatsApp Business de la
  clínica.»
- CTA: «…agenda la cita sobre el programa que ya usas…» → «…agenda la cita…».

**software-gestion-citas-clinica-estetica**
- FAQ no-shows: «…la automatización con IA por encima del software.» → «…un agente con IA que la
  atienda por WhatsApp.»
- Intro: «…añadir automatización con IA por encima.» → «…sumar automatización con IA.»
- «Las clínicas que no confirman la cita… suelen registrar entre un 12% y un 19% de no-shows, un
  porcentaje que baja de forma notable…» → «Si nadie confirma la cita, que el paciente venga depende
  de que se acuerde; un recordatorio con antelación que pida respuesta le da la ocasión de confirmar
  o de avisar a tiempo si no puede venir.»
- «…hasta un 40% de las consultas de una clínica llegan fuera de horario…» → «…una parte de las
  consultas de una clínica llega fuera de horario…».
- H2: «Cuándo añadir automatización con IA a tu software de citas» → «Cuándo complementar tu software
  de citas con IA».
- «…es el canal con mayor tasa de apertura que existe, entre un 95% y un 98%…» → «…es el canal por el
  que muchos pacientes ya escriben a la clínica, y donde esperan que alguien les conteste.»
- «…agendar la cita directamente sobre el mismo calendario que ya usas, sin sustituir tu software de
  citas.» → «…dejar la cita reservada y pasar a una persona del equipo los casos que la necesitan.»
- CTA: «Casi todos los software de citas envían un aviso, pero ninguno gestiona la respuesta del
  paciente. Los recordatorios… se conectan a la agenda que ya usas, piden confirmación…» → «Un aviso
  que nadie contesta no te dice si el paciente va a venir. Los recordatorios automáticos por
  WhatsApp piden confirmación y liberan el hueco si no puede venir.»

**crm-para-clinicas-esteticas**
- FAQ agente vs CRM: «…agendar la cita directamente en el calendario.» → «…agendarle la cita.»
- Intro: «…cómo la IA puede multiplicar los resultados de cualquier CRM a partir del primer mes.» →
  «…qué añade la IA a lo que ya hace un CRM.»
- «…pierdes la mitad de la información relevante.» → «…se te escapa justo la parte de la relación
  con el paciente que más se mueve.»
- H2: «Cómo un CRM conectado con IA multiplica sus resultados» → «Qué añade la IA a lo que hace un
  CRM».
- «La IA convierte el CRM de registro pasivo en sistema que actúa: responde…» → «La IA cubre lo que
  un CRM, por sí solo, no hace: responder…».
- «…registrar la conversación en el CRM para que…» → «…dejar la conversación guardada para que…».
- «El resultado es que el CRM deja de ser un registro pasivo y se convierte en un sistema activo que
  trabaja para convertir leads mientras…» → «El resultado es que el primer contacto y el seguimiento
  dejan de depender de que alguien tenga un hueco libre, mientras…».

**crm-clinicas-esteticas-pequenas**
- «…alrededor del 40% de las consultas llegan cuando la clínica está cerrada…» → «…una parte de las
  consultas llega cuando la clínica está cerrada…».

**mejor-crm-clinicas-dentales**
- Intro: «…para que el CRM trabaje solo.» → «…para atender lo que el CRM no contesta.»
- «En clínicas dentales, alrededor del 40% de las consultas llegan fuera del horario…» → «En
  clínicas dentales es habitual que entren consultas fuera del horario…».
- H2: «Cuándo tiene sentido añadir automatización con IA al CRM» → «Cuándo tiene sentido sumar
  automatización con IA».
- «Un agente con IA conectado al CRM puede responder… El CRM deja de ser solo un archivo de leads…»
  → «Un agente con IA en WhatsApp puede responder esas consultas al instante, resolver las dudas
  habituales, dejar la cita agendada si el paciente ya lo tiene claro y pasar a una persona del
  equipo lo que necesite atención humana. Así, lo que llega con la clínica cerrada no se queda
  esperando a que alguien mire el móvil por la mañana.»
- CTA: «La reactivación automática detecta a los pacientes que dejaron de venir y les escribe por
  WhatsApp, sin migrar nada.» → «La reactivación automática escribe por WhatsApp a los pacientes que
  dejaron de venir.»

**tecnologia-para-clinicas-esteticas**
- FAQ: «…con una tasa de apertura del 95-98%.» → «…y donde les resulta natural escribirte.»
- FAQ: «Las soluciones con IA que se integran con tu agenda y tu CRM suelen tardar algo más…, pero no
  implican cambiar de sistema desde cero.» → «Un agente con IA suele tardar algo más en configurarse…,
  pero trabaja sobre el número de WhatsApp Business que ya tienes.»
- «…WhatsApp tiene una tasa de apertura del 95-98%, muy superior a un email o un SMS, y es el canal…»
  → «…WhatsApp es el canal donde tus pacientes ya hablan contigo de forma natural.»
- «Hasta un 40% de las consultas llegan fuera del horario…» → «Y no pocas consultas llegan fuera del
  horario…».
- «…la automatización con IA encima de todo lo anterior.» → «…cuando lo anterior ya funcione.»
- «…añadir un agente con IA, este se conecta con lo que ya tienes en marcha, en lugar de obligarte a
  empezar de cero.» → «…empieza a atender desde el mismo número de WhatsApp que tus pacientes ya
  conocen.»

### Artículos de no-shows
**como-reducir-no-shows-clinica-dental**
- HEADLINE: «…(y dejar de perder hasta 7.500€ al mes)» → «…(y recuperar esos huecos de agenda)».
- FAQ «¿Cuántos no-shows es normal tener?»: «La media del sector se mueve entre el 12% y el 19%…» →
  «No hay un dato oficial que sirva de referencia: los porcentajes que circulan por internet salen,
  sobre todo, de empresas que venden software, y cada clínica es un mundo. Lo que sí puedes saber es
  el tuyo: cuenta las ausencias sin aviso de los últimos dos o tres meses y divídelas entre las citas
  programadas en ese periodo…».
- FAQ SMS/email: «…el email tiene una tasa de apertura de apenas el 20-25%, frente al 95-98% de
  WhatsApp.» → «…un email se pierde con facilidad entre promociones y boletines, mientras que
  WhatsApp es donde tus pacientes ya conversan a diario.»
- FAQ coste: «…el ahorro en huecos vacíos cubra la inversión en pocas semanas: con una tasa de
  no-shows del 12-19%…» → «La cuenta es fácil de hacer antes de contratar nada: multiplica tus
  no-shows mensuales por tu ticket medio y compáralo con la cuota…».
- Intro: «Entre el 12% y el 19%… hasta 7.500€ al mes…» → «Una parte de las citas… Cada una de esas
  ausencias es un sillón, tiempo de profesional y material que ya estaban reservados para nadie.»
- «…la horquilla… va del 12% al 19%… [varios miles de euros al mes]…» → «Cuántos tienes depende de tu
  clínica, pero basta con que se repitan unas pocas veces por semana para que [la pérdida mensual]…
  se note en la facturación.»
- «…pueden llegar a perder hasta 7.500€ al mes… 20 citas al día × 22 días laborables × 15% × 115€…» →
  «…La cuenta es sencilla: citas al día × días laborables del mes × tu tasa de no-shows × tu ticket
  medio…».
- «…tasas de apertura del 95-98%, frente al 20-25% del email.» → «…WhatsApp es la aplicación en la que
  tus pacientes ya hablan a diario, mientras que el correo se acumula sin abrir…».
- Tabla: cabecera «Tasa de apertura» → «¿Lo acaba leyendo?»; Email «20-25%» → «Muchas veces se queda
  sin abrir»; WhatsApp «95-98%» → «Sí, llega al chat que ya usa a diario».
- Estrategia 1: «WhatsApp tiene una tasa de apertura del 95-98%…» → «Un mensaje de WhatsApp llega a
  la misma aplicación en la que tu paciente habla con su familia y sus amigos…».
- Estrategia 1: «…el envío se conecta con la agenda que ya usas — ClinicCloud o Klinikare, por
  ejemplo — y lee de ahí qué citas hay mañana…» → «Y no hace falta cambiar de número para
  conseguirlo: los avisos salen desde el WhatsApp Business que tu clínica ya tiene…».
- «Reducir la tasa de no-shows a la mitad supone recuperar varios miles de euros… hasta 7.500€… unos
  3.500€…» → «Cada no-show que evitas es una cita que se cobra sin haber tenido que captar a ningún
  paciente nuevo…».

**coste-real-no-shows-clinica-dental**
- FAQ: «La mayoría de clínicas dentales en España se mueven entre el 12% y el 19%…» → «Ese dato vale
  más que cualquier media que leas por ahí…».
- FAQ: «…las estimaciones del sector hablan de pérdidas que pueden llegar hasta los 7.500€ al mes…» →
  «…una cifra general te dirá poco de tu caso. Lo fiable es hacer la cuenta: citas al día × días
  laborables del mes × tu tasa de no-shows × tu precio medio por cita…».
- FAQ: pregunta «¿…reducen tanto los no-shows?» → «¿…reducen los no-shows?»; respuesta con «hasta en
  un 40%» y «entre el 95% y el 98%» → «Atacan la causa más habitual, que es el olvido… Cuánto baja tu
  tasa depende de tus pacientes y de tu agenda: la forma de saberlo es medirla antes de empezar y
  volver a medirla unos meses después…».
- Intro: «…cuánto pierden de media las clínicas dentales en España…» → «…de qué depende que esa cifra
  sea mayor o menor…».
- «Con una tasa de no-shows que… se mueve habitualmente entre el 12% y el 19%…» → «Estos costes
  directos tampoco son un caso aislado…».
- Ejemplo «25 citas diarias… 15%… 70€… más de 5.000€ al mes» → estimación con fórmula sin números.
- H2 «Cuánto pierden de media las clínicas dentales en España» → «De qué depende cuánto pierde tu
  clínica dental»; su párrafo con «7.500€ al mes» → «Una cifra media de pérdidas por no-shows sirve
  de poco, porque la cuenta cambia mucho de una clínica a otra…».
- «…pueden reducir los no-shows hasta en un 40%, gracias a que la tasa de apertura… 95% y el 98%…» →
  «Por WhatsApp, el aviso llega a la aplicación que el paciente abre a lo largo del día y le pide que
  confirme o cambie la cita…»; «…una reducción del 40%…» → «…cada no-show que se evita es una cita que
  vuelve a facturarse…».

**como-reducir-no-shows-clinica-estetica**
- FAQ: «…tratamientos de 80€-300€… hasta 7.500€ al mes…» → «…lo mejor es calcularlo con tus datos:
  citas al mes × tu tasa de no-shows × tu ticket medio…».
- FAQ SMS/email: «…tasas de apertura mucho más bajas… WhatsApp… se abre casi siempre…» → «…se pierden
  con facilidad entre notificaciones y promociones… WhatsApp… es donde el paciente ya conversa cada
  día…».
- FAQ plazo: «…una reducción de alrededor del 40%…» → «Se nota en cuanto los recordatorios… empiezan a
  funcionar… Para medirlo, apunta tu tasa de no-shows del mes anterior…».
- Intro: «…puede valer entre 80€ y 300€…» → «…bloquea tiempo de cabina y de profesional…».
- «La tasa media… entre el 12% y el 19%…» → «No hay una tasa de no-shows que valga para todas las
  clínicas estéticas…».
- «…pérdidas de hasta 7.500€ al mes…» → «La cuenta de lo que te cuesta es directa: citas al mes × tu
  tasa de no-shows × tu ticket medio…».
- «Los mensajes de WhatsApp se abren entre un 95% y un 98%…» → «Es la aplicación en la que tus
  pacientes ya conversan cada día…».
- «Se conecta tu agenda (la que ya usas) con un sistema que…» → «Un sistema conectado al número de
  WhatsApp Business de tu clínica…».
- H2 «Cuánto puedes recuperar desde el primer mes» → «Cuánto puedes recuperar»; ejemplo «40%… 15% al
  9%… 12 citas… 150€… 1.800€» → «Lo que recuperas depende de dos datos que solo tienes tú…» y «anota
  tu tasa de no-shows antes de empezar y compárala…».

**como-reducir-cancelaciones-clinica-estetica**
- Intro: «Entre el 12% y el 19%… hasta 7.500€ al mes…» → «En cualquier clínica estética, una parte de
  las citas acaba en ausencia o en una cancelación sin margen para reaccionar…».
- «…tasa de apertura del 95-98%, frente al 20-25% del email — lo que garantiza…» → «…es donde el
  paciente ya conversa a diario, así que el mensaje tiene muchas más probabilidades de leerse a
  tiempo que un email.»
- «…reducen las cancelaciones de última hora hasta un 40% desde el primer mes…» → «…hacen este envío
  en cada cita y adelantan las cancelaciones a un momento en que todavía se pueden cubrir…».

**lista-espera-clinica-dental**
- FAQ: «…hasta un 40% de las consultas de una clínica llegan así…» → «…cuando nadie puede darles cita
  en el momento…».
- Intro: «Entre el 12% y el 19%…» → «Entre no-shows y cancelaciones, cualquier clínica dental ve cómo se
  le caen citas cada semana.»
- «…hasta un 40% de las consultas llegan fuera del horario…» → «…muchos mensajes llegan cuando la
  clínica ya ha cerrado.»
- «…el canal con un 95-98% de apertura…» → «…la aplicación que el paciente tiene siempre a mano…».
- «Si tu clínica tiene una tasa… del 12-19%…» → «Para saber cuántos huecos se te escapan, suma los
  no-shows y las cancelaciones de un mes normal…».
- «…esa tasa puede reducirse hasta un 40%… recuperar casi por completo.» → «Los recordatorios
  automáticos bien planteados evitan una parte de esas ausencias… puede recuperar.»

**reducir-lista-espera-clinica-estetica**
- FAQ: «…ronda el 12-19%… hasta un 40%…» → «…el impacto económico se reduce. Y si además se envían
  recordatorios automáticos… los dos mecanismos se refuerzan.»
- «Con una tasa de no-shows… entre el 12% y el 19%…» → «Cada semana, las ausencias y los avisos de
  última hora liberan huecos…».
- «Dado que la tasa de apertura de WhatsApp es de entre el 95% y el 98%…» → «Como el aviso llega por
  WhatsApp, a la misma conversación que el paciente ya tiene con la clínica…».
- «…según los datos del sector, puede reducirlos hasta en un 40%.» → «…pidiendo a cada paciente que
  confirme su cita.»

### Artículos dentales y de recordatorios
**automatizacion-clinicas-dentales**
- FAQ 1: «…(12-19% de las citas)… (hasta un 40%)…» → «…citas a las que el paciente no se presenta y
  consultas que llegan fuera de horario sin que nadie las conteste.»
- FAQ 3: pregunta «¿Necesito cambiar de software de gestión para automatizar mi clínica?» → «¿Qué
  necesito para empezar a automatizar mi clínica?»; respuesta «…se conectan a la agenda y al WhatsApp
  que ya usas, sin sustituir tu software actual…» → «Básicamente, el número de WhatsApp Business de
  la clínica y la información que ya tienes… El agente se conecta a ese mismo número, responde a los
  pacientes, les agenda la cita en la agenda del propio sistema y pasa a una persona del equipo los
  casos delicados…».
- FAQ 5: «…que se conectan a la agenda y al WhatsApp que ya usas…» → «…que se ponen en marcha sobre el
  WhatsApp de la clínica…».
- Intro: cifras 12-19 % y 40 % fuera; «…sin necesidad de cambiar tu software de gestión ni contratar…»
  → «…sin necesidad de contratar un equipo técnico.»
- «Un sistema conectado a tu agenda envía un recordatorio…» → «Un sistema de recordatorios envía un
  aviso…».
- «…tasa de apertura del 95-98% — frente al 20-25% del email —…» → «…un canal que los pacientes miran a
  diario — y el email muchas veces se queda sin abrir —…»; «…de hasta un 40%…» → «Así se trabaja para
  [reducir los no-shows]…».
- «Hasta un 40% de las consultas…» → «Muchas de las consultas…».
- «…el sistema se conecta a lo que ya usas — no hace falta cambiar de software de gestión…» → «…el
  agente trabaja sobre el número de WhatsApp que la clínica ya tiene…».

**emails-recordatorio-pacientes-clinica**
- DESCRIPTION: «…Y por qué el 95% de tus pacientes prefiere…» → «…Y por qué a muchos pacientes les llega
  mejor el recordatorio por WhatsApp.»
- FAQ: «…entre el 20% y el 25%… tres de cada cuatro…» → «…el dato fiable es el que te dé tu propia
  herramienta de envío. Lo habitual es que una parte de los recordatorios se quede sin abrir…».
- Intro: «…hasta un 40%… entre el 12% y el 19%…» y «…ronda el 20-25%, frente al 95-98%…» → versiones
  sin cifras.
- «Con una tasa de apertura media del 20-25%… tres de cada cuatro…» → «Parte de los pacientes ni
  siquiera ve el recordatorio…».
- «Mientras un email se abre en el 20-25%… WhatsApp llega al 95-98%…» → «El correo se revisa cuando
  uno se sienta a mirarlo; WhatsApp es la aplicación que el paciente abre a lo largo del día…».
- «…recuperando buena parte de ese 12-19%…» → «…y los huecos que se liberan lleguen a tiempo de
  ofrecerse a otro paciente.»
- CTA: «…hasta un 40% desde el primer mes.» → «…para que tu agenda tenga menos huecos vacíos por
  pacientes que no se presentan.»

**recordatorios-citas-whatsapp-clinica**
- FAQ canal y FAQ «¿Cuánto se reducen…?» («De media, un 40%… 12-19%…») → versiones sin cifras; la
  segunda: «Depende de cada clínica, y la forma fiable de saberlo es medirlo…».
- Intro: «…entre el 12% y el 19%…» y «…reduce los no-shows hasta un 40%.» → sin cifras.
- «…95-98%, frente al 20-25%…» y «si envías cien… unos setenta y cinco no se van a abrir…» →
  descripciones sin cifras.
- «…[esa reducción del 40% en no-shows]» → «…[un plan para reducir los no-shows]».
- «…conectado a tu agenda, que detecta cada cita nueva y dispara…» → «…que dispara los mensajes de
  cada cita en el momento exacto…»; «el sistema lee tu agenda, programa…» → «el sistema programa…».

**automatizar-whatsapp-clinica-dental**
- FAQ 3: «…12-19%…» → «…el paciente que no puede venir avisa en la misma conversación y el hueco
  queda libre con margen.»
- FAQ 4: «…No hace falta cambiar de herramientas…» → «…se conecta al número de WhatsApp que ya tiene
  la clínica. Tu equipo no tiene que aprender un sistema complejo…».
- Intro: «Casi un 40%…» → «Una parte…»; «…la mayoría de pacientes…» → «…muchos pacientes…».
- «Entre un 95% y un 98% de los mensajes de WhatsApp se leen, frente al 20-25%… con diferencia…» →
  «WhatsApp es la aplicación que tus pacientes abren a lo largo del día, mientras que un email puede
  pasar días sin abrirse…».
- «…entre el 12% y el 19% de las citas — un porcentaje que…» → «…y cada uno que se evita se nota…».
- «…ofrecerle huecos reales de tu agenda y dejar la cita puesta ahí mismo.» → «…ofrecerle los huecos
  libres y dejarle la cita agendada en la misma conversación.»
- «…el sistema revisa la agenda, envía…» → «…el sistema envía el recordatorio de cada cita…».
- «…no requiere cambiar las herramientas que ya usas… y acceso a tu sistema de agenda para que las
  citas se reflejen en tiempo real.» → «Para empezar no necesitas mucho: el número de WhatsApp
  Business de la clínica, que sigue siendo el mismo, y la información… Con eso se configura el
  agente, que deja las citas en la agenda de su propio sistema.»
- Fuera «El resto sigue funcionando exactamente igual que antes…».
- Cuánto cuesta: «(recuerda, entre el 12% y el 19% del total)» y «—ese 40%—» fuera.
- CTA: «…deja la cita puesta en tu agenda…» → «…le deja la cita agendada…».

**como-aumentar-facturacion-clinica-dental**
- FAQ no-shows: «Entre el 12% y el 19%… hasta 7.500€… 20 citas… 15%… 115€…» → «Cada cita a la que el
  paciente no se presenta… haz la cuenta con tus propios datos: citas al día × días laborables del
  mes × tu tasa de no-shows × tu ticket medio…».
- FAQ 5: «La clave está en automatizar… el canal que más se lee…» → «Basta con automatizar… un canal
  que los pacientes consultan a diario…».
- «Con un sistema automático que detecta estos patrones y envía…» → «Con un sistema automático que
  envía [mensajes de recuperación por WhatsApp] a esos pacientes…».
- «…como referencia del sector, entre un 12% y un 19%…» → «…porque actúa sobre citas que ya estaban
  vendidas…».
- «…hasta 7.500€ al mes. Sale de una cuenta sencilla — 20 citas… 115€…» → la fórmula sin números.
- «Se automatiza conectando tu software de gestión con WhatsApp, de forma que los mensajes salgan
  solos según el historial…» → «Se automatiza con un sistema que envía los mensajes por el WhatsApp
  de la clínica…».
- «…tasas de apertura de referencia del 95-98%… 20-25%…» → «…WhatsApp es la aplicación en la que los
  pacientes ya conversan a diario…».

**aumentar-ticket-medio-clinica-dental**
- FAQ 3: «…incrementos de entre el 15% y el 30%…» → «…no hay una cifra que sirva para todas: lo
  razonable es anotar tu ticket medio antes de empezar y revisarlo al cabo de unos meses…».
- FAQ 4: «…entre el 95% y el 98%… 20-30% del email…» → «…WhatsApp es donde el paciente ya habla a
  diario, mientras que un email con una propuesta se queda a menudo sin abrir…».
- Intro: «Captar un paciente nuevo cuesta entre cinco y diez veces más…» → «Captar un paciente nuevo
  cuesta publicidad, tiempo y consultas que no siempre acaban en cita; retener a uno que ya te conoce
  cuesta mucho menos.»
- «Mover el ticket medio un 20%…» → «Mover el ticket medio…».
- «WhatsApp tiene una tasa de apertura de entre el 95% y el 98%…» → descripción sin cifra.
- «Hasta el 40% de las consultas…» → «Muchos pacientes escriben al salir de trabajar o en fin de
  semana…».
- Ejemplo 200 pacientes / 80 € → 100 €: se queda, ahora presentado como «Un ejemplo con números
  inventados, solo para ilustrarlo…»; fuera «—un incremento del 25%—» y «4.000 € mensuales».

**whatsapp-para-clinicas-dentales**
- DESCRIPTION: «WhatsApp es el canal más usado por los pacientes dentales…» → «Guía de WhatsApp para
  clínicas dentales: cómo usarlo para captar pacientes, confirmar citas y reactivar a los que llevan
  tiempo sin venir.»
- FAQ 1: «…95-98%, frente al 20-25%…» → «…una aplicación que los pacientes abren a diario…».
- FAQ 2: «La mayoría de clínicas dentales pasan a…» → «Lo habitual es pasar a…».
- Intro y H2: «…el canal favorito de los pacientes dentales…» → «…encaja tan bien con los pacientes
  dentales…».
- «…95-98%… 20-25%…» → «Es la aplicación que tienen abierta a lo largo del día…».
- «…que representan hasta un 40% del total…» fuera; «—entre un 12% y un 19% del total…—» fuera.
- CTA: «…salen de tu agenda en el momento exacto…» → «…se envían en el momento exacto antes de cada
  cita…».

**marketing-clinica-dental**
- «Con una tasa de apertura del 95-98% —muy por encima del 20-25%…—» → «Es una aplicación que los
  pacientes miran a diario y, justo por eso…».
- «…hasta un 40% de las consultas llegan fuera del horario…» → «…las consultas no respetan el horario
  de atención y llegan también por la noche o en fin de semana.»

**resenas-google-clinicas-dentales**
- «La clave está en el canal: con una tasa de apertura de WhatsApp de entre el 95% y el 98%…» → «El
  canal también cuenta: WhatsApp es una aplicación que el paciente mira a lo largo del día…».
- FAQ: «Se estima que alrededor del 70% de las decisiones… están influidas por las reseñas…» → «Quien
  no conoce la clínica suele mirar qué dicen otros pacientes antes de dar el paso.»
- Cuerpo: «Según las estimaciones del sector, alrededor del 70% de las decisiones…» → «Cuando alguien
  compara dos clínicas cercanas, lo que otros pacientes cuentan de cada una pesa en la decisión.»

### Artículos de WhatsApp, marketing y atención
**meta-ads-para-clinicas-esteticas**
- FAQ presupuesto: «…partir de 300-500€ al mes los primeros 30 días…» → «No hay una cifra que valga
  para todas las clínicas. Lo que necesitas es un presupuesto que permita a Meta reunir datos durante
  la fase de aprendizaje… cuántos leads quieres que genere la campaña en ese periodo y multiplicarlo
  por el coste por lead que te puedes permitir…».
- FAQ CPL: pregunta «¿Cuál es un CPL realista…?» → «¿Qué CPL debería buscar mi clínica con Meta Ads?»;
  respuesta «…entre 15€ y 40€…» → «El que salga de tus propios números… lo que te deja un tratamiento
  ÷ leads que necesitas para cerrar una cita…».
- Intro: «…por un coste por lead de entre 15€ y 40€…» → «…sin que tengan que estar buscando nada en ese
  momento.»
- «…desde Flowww, Koibox o Booksy puedes sacar el listado…» → «…si el programa de gestión que usas te
  deja exportar el listado de clientes reales…».
- «El presupuesto mínimo razonable es de 300-500€ al mes…» → «No hay un presupuesto mínimo
  universal…».
- «Un CPL realista… entre 15€ y 40€. Por debajo de 15€… Por encima de 40€…» → «El CPL que puedes
  aceptar no lo marca una media del sector, lo marcan tus números…».

**chatbot-whatsapp-para-clinicas-esteticas**
- FAQ: «…agenda la cita directamente en tu calendario… Para eso se conecta con la agenda que ya usa tu
  clínica, sea Flowww, Koibox o el calendario que tengas montado, y escribe la cita ahí mismo…» →
  «…agenda la cita en esa misma conversación, sobre un hueco que está libre…» (fuera la integración).
- FAQ: «No necesitas cambiar de herramientas ni preparar nada especial» → «No tienes que preparar nada
  especial».
- Intro: «…tasas de apertura de referencia del 95-98%, frente al 20-25%…» → «[WhatsApp es el canal]
  que tus pacientes ya usan a diario para hablar con cualquiera, también con su clínica.»
- «…ofrecer huecos reales de tu agenda…» → «…le ofrece los huecos libres y le reserva la cita dentro
  del mismo chat…»; fuera el párrafo «Para eso se conecta con el software que ya usa tu clínica —
  Flowww o Koibox, por ejemplo — y escribe la cita directamente ahí…».
- «No hace falta cambiar de herramientas, ni migrar tu agenda…» → «Tampoco hay que formar a tu equipo
  en un sistema complejo: lo que le toca es retomar las conversaciones que el agente le pasa…».

**cuanto-cuesta-chatbot-whatsapp-clinica**
- Intro: «…entre un 12% y un 19%… hasta 7.500€ al mes.» → «…cada no-show deja un hueco que ya no se
  puede llenar, y cada consulta que llega fuera de horario y nadie contesta a tiempo puede acabar
  reservando en otra clínica.»
- H3 «Integración con tu agenda y calendario» → «Reserva de citas dentro de la conversación»; «…requiere
  una integración técnica con tu sistema de gestión o calendario…» → «…exige más trabajo técnico que
  limitarse a responder…».
- «…ni integración completa con tu agenda…» → «…ni capacidad de cerrar la cita por su cuenta…».
- H3 «Agentes IA avanzados con agenda integrada» → «Agentes IA avanzados que reservan la cita»;
  «…agenda de citas integrada…» → «…citas reservadas en el propio chat…».
- «…con el hueco real disponible en tu calendario.» → «…sobre un hueco libre.»
- «Entre un 12% y un 19%… 7.500€ al mes… Frente a esas cifras…» → «…Suma las de un mes, multiplícalas
  por lo que vale cada cita y pon el resultado al lado de la cuota mensual del agente…».
- «…entre un 95% y un 98%… 20-25%…» → «…como la consulta se resuelve en el mismo WhatsApp donde la
  persona ha escrito… hay menos pasos…».
- Pregunta al proveedor: «¿Puede el chatbot consultar mi agenda real y dejar citas puestas…?» →
  «¿Puede el chatbot reservar la cita él mismo…?».

**como-fidelizar-pacientes-clinica-estetica**
- DESCRIPTION: «Conseguir un paciente nuevo cuesta 5 veces más que mantener uno…» → «Cómo fidelizar
  pacientes en tu clínica estética: seguimiento post-cita, mensajes por WhatsApp y automatización para
  que vuelvan sin tener que llamarles.»
- Intro: «…cuesta, de media, cinco veces más…» → «Conseguir que vuelva un paciente que ya te conoce
  cuesta mucho menos que convencer a uno nuevo.»
- «Multiplicado por cinco frente a…» → «Con alguien que ya conoce tu clínica… buena parte de ese gasto
  desaparece.»; «…gastando cinco veces más…» → «…pagando otra vez todo lo que cuesta captar a alguien
  nuevo.»
- «…entre un 95% y un 98%… 20-25%…» → «[el canal que tus pacientes ya tienen a mano]: es donde hablan a
  diario con su gente…».
- «…como casi un 40% de las consultas… llegan fuera de horario…» → «…como el paciente puede contestar
  a cualquier hora, también con la clínica cerrada…».

**clinica-estetica-por-whatsapp**
- FAQ: «Cada cita que se reserva, cambia o cancela por WhatsApp queda reflejada en la agenda de la
  clínica…» → «Cada cita que se reserva por WhatsApp queda anotada en la agenda del sistema, en lugar
  de repartida entre chats, notas y memoria…».
- Intro: «Entre el 95% y el 98%… 20-25%…» fuera; «El 40% de las consultas…» → «Y una parte de las
  consultas…».
- «…ofrece huecos reales de tu agenda…» → «…le reserva la cita en un hueco libre…».
- «Ese 40% de consultas…» → «Las consultas que antes llegaban cuando no había nadie…».

**que-es-un-agente-de-voz-ia-para-clinicas**
- FAQ: pregunta «¿Puede agendar citas directamente en mi calendario…?» → «¿Puede agendar la cita
  durante la llamada…?»; respuesta «…en el calendario que ya usa tu clínica…» → «Puede agendarla
  durante la propia llamada…».
- Intro: «Casi un 40% de las llamadas…» → «Mucha gente llama a su clínica cuando puede, no cuando la
  clínica está abierta…».
- «Puede agendar directamente en tu calendario…» → «Puede dejar la cita reservada en la misma
  llamada…».
- H3 «3. Agenda directamente en tu calendario» → «3. Reserva la cita en la misma llamada»; «…en el
  calendario de tu clínica, con el hueco real disponible…» → «…sobre un hueco libre…».
- «…sin tocar tu número de teléfono ni tu forma de trabajar actual.» → «…sin tocar tu número de
  teléfono.»
- «…ese 40% de llamadas…» y «…esa tasa de no-shows del 12-19%…» → versiones sin cifras.

**inteligencia-artificial-clinicas-esteticas**
- FAQ: «…tu equipo sigue usando WhatsApp y la agenda como ya hace.» → «…sigue atendiendo desde el
  mismo número de WhatsApp.»
- FAQ: «Casi un 40%…» → «Una parte de las consultas…».
- «…con los datos que explican por qué importan.» → «…y por qué importa cada una.»
- «Casi un 40%…», «…95% y un 98%… 20-25%…», «Entre el 12% y el 19%… miles de euros…» → versiones sin
  cifras.

**como-captar-clientes-clinica-estetica-sin-presupuesto**
- FAQ seguimiento: «El 40% de las consultas…» → «Un paciente escribe cuando le viene bien, y esa hora
  no siempre coincide con la de la clínica.»
- FAQ reseñas: «…tiene tasas de conversión del 20-35%, frente al 2-3% espontáneo.» → «…le pone muy
  fácil dejar la reseña en ese momento, cuando sin ese empujón casi nadie se acuerda de hacerlo.»
- «…se abren entre el 95% y el 98%… lo que garantiza…» → «Los mensajes llegan a la aplicación que tus
  pacientes ya abren a diario…».
- Fuera «El resultado habitual es entre un 15% y un 30% de respuestas positivas en la primera
  campaña.»
- «El 40% de las consultas de una clínica llegan fuera de horario…» → «Parte de los mensajes…».

**chatbot-whatsapp-vs-recepcionista-clinica**
- «…entre un 95% y un 98%… hasta un 40%…» → «…una parte de las consultas que recibe una clínica llega
  fuera de su horario…».
- «…ese 40% de consultas fuera de horario…» → «…las consultas que…».
- Fuera «Estas situaciones son extremadamente comunes — recuerda que hasta el 40%…».

**mejor-chatbot-whatsapp-clinica-estetica**
- FAQ precio: «…y se integran con tu agenda.» → «…y pasan a tu equipo los casos que lo piden.»
- Intro: «Entre un 95% y un 98%… 20-25%… hasta un 40%…» → «…es donde tus pacientes ya escriben,
  también cuando tu clínica está cerrada…».
- «…tu agenda…» → «…tus horarios…» (último párrafo y CTA).

**marketing-digital-clinicas-esteticas**
- FAQ: «Con 200-300€/mes en Google Ads o Meta Ads…» → «No hay una cifra única: depende de tu zona, del
  tratamiento que anuncies y de cuánto puedes pagar por cada lead…».
- «…tasas de apertura de referencia del 95-98%, frente al 20-25%…» fuera.
- «…es prácticamente seguro que lo va a leer…» → «…la conversación ya está abierta…».
- «…— Flowww, Koibox o el que sea —…» fuera.

**como-reactivar-pacientes-inactivos-clinica**
- FAQ: «…dado que se lee entre un 95% y un 98%…» → «…porque el mensaje aparece en la misma aplicación
  donde la persona habla con los suyos.»
- «…entre un 20% y un 25% de probabilidades de ser siquiera abierta…» → «…compite con todo lo demás
  que llega al correo, y es fácil que ni siquiera se abra…».
- «…20% y el 25%… 95% y un 98%…» → «…es la aplicación donde tus pacientes hablan a diario…».
- «…casi un 40% llegan fuera del horario…» → «…pueden atenderse aunque lleguen fuera del horario…».
- «…puede suponer varios miles de euros en ingresos…» → «…son ingresos que…».

**agente-ia-recepcion-clinica**
- FAQ: «…no requiere cambiar de software de gestión: se conecta a la agenda y los canales que ya usa la
  clínica…» → «La puesta en marcha es rápida: se conecta al número de WhatsApp que ya usa la
  clínica…».
- «…hasta un 40% de las consultas…» → «…los pacientes también escriben fuera de ese horario…».
- «…entre el 12% y el 19%…» → «…cada no-show es una cita que se pierde después de haberla
  conseguido…».

**whatsapp-business-clinicas-esteticas**
- DESCRIPTION: «WhatsApp Business es la herramienta más usada en clínicas estéticas…» → «WhatsApp
  Business para clínicas estéticas: cómo configurarlo bien, qué límites tiene usarlo a mano y cuándo
  tiene sentido automatizarlo con IA.»
- FAQ: «…tasa de apertura del 95-98%… hasta un 40%…» → «…escriben a su clínica igual que escriben a
  cualquiera… esos mensajes llegan también fuera del horario…».
- «Hasta un 40% de las consultas…» → «Y las consultas no esperan a que la clínica abra…».

**experiencia-paciente-clinica-estetica**
- «…hasta un 40% de las consultas…» → «…los pacientes potenciales no escriben solo en horario de
  atención…».
- «…se leen entre un 95% y un 98%…» → «El canal natural para esto es WhatsApp, porque es donde el
  paciente ya habla con su clínica…».

**chatbot-whatsapp-clinicas-rgpd**
- «…el canal que más abren tus pacientes —entre un 95% y un 98%…—» → «…un canal que tus pacientes usan
  a diario y por el que te cuentan cosas personales…».
- «…casi un 40% de las consultas…» → «…también a las consultas que hoy llegan fuera de horario…».

**como-conseguir-resenas-google-clinica-estetica**
- Intro: «El 70% de las decisiones de reservar un tratamiento estético se toman mirando las reseñas de
  Google.» → «Mucha gente decide dónde reservar un tratamiento estético mirando las reseñas de
  Google.»
- «…tasa de apertura del 95-98% — frente al 20-25%…» → «…le llega al paciente en la aplicación que ya
  lleva en la mano…».
- «…cuando una cita se marca como completada en el software de agenda, se dispara…» → «…cuando termina
  la cita, se programa un mensaje de WhatsApp…»; «…detecta el cierre de la cita, espera…» → «…espera
  el tiempo configurado tras la cita…».
- «El resultado en clínicas que han implementado este sistema es consistente: entre el 20% y el 35%…
  la tasa espontánea ronda el 2-3%.» → «Un paciente satisfecho rara vez deja la reseña por iniciativa
  propia; pedírsela en el momento adecuado, con el enlace a mano, es lo que cambia eso.»

## 7. Pendiente de decisión (no tocado)

Funciones del producto que la web afirma y no he podido confirmar en el código:
- Recordatorio 2 h antes de la cita (`/recordatorios-automaticos-citas`, `/`, artículos): el código
  solo envía el de 24 h.
- Agente de voz (landing `/agente-voz-ia-clinicas` y artículo): el agente no tiene voz; en la web solo
  hay una demo con Vapi.
- Respuesta a DMs de Instagram y widget de chat en la web del cliente (`ServicesSection`).
- Lista de espera automática, reprogramar o cancelar citas desde el chat, detectar pacientes
  inactivos «analizando tu base de datos», programa de referidos con código.
- SMS como canal de recordatorio.
- Métricas «< 5 seg», «100% automático» y «100% de las llamadas, atendidas siempre».
- «Tu equipo no cambia de herramienta» (clinica-estetica-por-whatsapp): si el equipo ve las citas en
  el panel de Cero Manual, sí cambia.
- Guía «mejor chatbot»: pide al proveedor que «agende citas reales en tu calendario (actual)», algo
  que nuestro producto no hace.

Cifras y afirmaciones sin fuente que siguen publicadas:
- Umbrales de consultas al mes (15-20, 20-30, 25-30, menos de 30) en los artículos de CRM.
- Momento de pedir reseña: 30-60 min, 45 min y 60 min según el artículo; «ahorro de una a tres horas
  diarias»; «coste simbólico de 10-15 €»; plazos de Google Ads y SEO (1-2 semanas, 3-6 meses).
- En reseñas: «por debajo de 20 reseñas con media 4,5» y «80 reseñas a 4,3 aparece antes que 10 a
  5,0».
- Meta Ads: «puede doblar la tasa de conversión» y «el canal de pago más rentable».
- Promesas «desde el primer mes / primera semana» en varios titulares, H2 y CTA.
- Tendencias sin dato: «WhatsApp se ha convertido en el canal principal», «el canal que más
  convierte», «cada vez más clínicas», «el canal de captación más barato».
- «Cuota mensual según volumen de conversaciones» como modelo de precio: confirmar.
- «Auditoría gratuita» y «diagnóstico gratuito»: confirmar la oferta y unificar el nombre.
