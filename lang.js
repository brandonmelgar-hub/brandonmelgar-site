/* brandonmelgar.com  EN | ES toggle
   Swaps visible text on the main pages between English and Spanish.
   Add a page: put <script src="lang.js" defer></script> before </body>
   and add that page's strings to ES below. Anything not listed stays English.
   Client review quotes are left in the language the client wrote them in. */
(function () {
  "use strict";

  var ES = {
    /* ---------- nav and shared ---------- */
    "What's It Worth": "¿Cuánto vale mi casa?",
    "Buying + Selling": "Comprar + Vender",
    "Buyer's Guide": "Guía del comprador",
    "Seller's Guide": "Guía del vendedor",
    "Selling in Studio City": "Vender en Studio City",
    "Work With Brandon": "Trabaja con Brandon",
    "Neighborhoods": "Vecindarios",
    "Sold + Built": "Vendidas + Construidas",
    "My Story": "Mi historia",
    "Follow along · Cup of Equity · @cup.of.equity.la": "Sígueme · Cup of Equity · @cup.of.equity.la",
    "Follow along · Cup of Equity · @cup.of.equity.la": "Sígueme · Cup of Equity · @cup.of.equity.la",
    "🎃 Here from Instagram? Every Halloween house in Burbank and Toluca Lake is right here. See the full list →": "🎃 ¿Vienes de Instagram? Todas las casas de Halloween en Burbank y Toluca Lake están aquí. Ver la lista completa →",

    /* ---------- home ---------- */
    "Brandon Melgar | Studio City & San Fernando Valley REALTOR®": "Brandon Melgar | REALTOR® en Studio City y el Valle de San Fernando",
    "Most agents": "La mayoría de los agentes",
    "sell": "venden",
    "houses.": "casas.",
    "I": "Yo también",
    "build": "las construyo",
    "them too.": ".",
    "Born and raised in Studio City, in a family of lenders. I help families move, and I rebuild houses the market gave up on.": "Nací y crecí en Studio City, en una familia de prestamistas. Ayudo a las familias a mudarse y reconstruyo casas que el mercado dio por perdidas.",
    "See homes I sold and built": "Ve las casas que vendí y construí",
    "Who I am": "Quién soy",
    "I grew up": "Crecí",
    "here.": "aquí.",
    "I grew up in Woodbridge, in Studio City. My dad added a bedroom and a bathroom onto our house, and I still remember the smell of sawdust while they were framing it.": "Crecí en Woodbridge, en Studio City. Mi papá le agregó una recámara y un baño a nuestra casa, y todavía recuerdo el olor a aserrín mientras armaban la estructura.",
    "That is the first thing I ever remember loving. Not houses exactly. The building of them. I still walk my yorkie Bruno through Woodbridge Park most weekends, same neighborhood, though he pushes for Beeman Park and he has opinions about which.": "Es lo primero que recuerdo haber amado. No las casas exactamente, sino construirlas. Todavía paseo a mi yorkie Bruno por Woodbridge Park casi todos los fines de semana, en el mismo vecindario, aunque él insiste en Beeman Park y tiene sus opiniones sobre cuál es mejor.",
    "My dad has been a mortgage lender my whole life and my sister is one too, so real estate is the only language my family speaks. My dad was always buying property, and I got into this to help him build his portfolio.": "Mi papá ha sido prestamista hipotecario toda su vida y mi hermana también lo es, así que los bienes raíces son el único idioma que habla mi familia. Mi papá siempre estaba comprando propiedades, y yo entré a esto para ayudarle a crecer su portafolio.",
    "So I do two things. I help families cross into the next part of their life, and I buy overlooked houses and give them a second chance. That is where Cup of Equity comes from. Equity is not a word I picked because it sounded good. It is the thing I do.": "Así que hago dos cosas. Ayudo a las familias a pasar a la siguiente etapa de su vida, y compro casas que nadie quiso y les doy una segunda oportunidad. De ahí viene Cup of Equity. Equity no es una palabra que elegí porque sonara bien. Es justo lo que hago.",
    "More of the story": "Más de mi historia",
    "Selected work": "Trabajos destacados",
    "Some": "Algunas",
    "I sold.": "las vendí.",
    "I built.": "las construí.",
    "See more homes": "Ver más casas",
    "What clients say": "Lo que dicen los clientes",
    "In their": "En sus",
    "words.": "palabras.",
    "190+ Google reviews": "Más de 190 reseñas en Google",
    "I have been a licensed REALTOR® since 2017. I work as part of Segovia Real Estate Group, a team serving Los Angeles since 2002, so you get me, and you get a bench that has closed hundreds of transactions.": "Soy REALTOR® con licencia desde 2017. Trabajo como parte de Segovia Real Estate Group, un equipo que sirve a Los Ángeles desde 2002, así que me tienes a mí y también a un equipo que ha cerrado cientos de transacciones.",
    "Google review": "Reseña de Google",
    "Found his mother her home.": "Le encontró casa a su mamá.",
    "Cricia Cruz · Google review": "Cricia Cruz · Reseña de Google",
    "Sold one home and bought another.": "Vendió una casa y compró otra.",
    "Read the reviews on Google": "Lee las reseñas en Google",
    "How I price": "Cómo fijo el precio",
    "The same house. One street": "La misma casa. A una calle",
    "apart.": "de distancia.",
    "Two houses that look the same can be worth very different numbers depending on which street they sit on. I map these neighborhoods block by block, so you know which side you are standing on before you write an offer.": "Dos casas que se ven iguales pueden valer cifras muy distintas según la calle en la que estén. Mapeo estos vecindarios cuadra por cuadra, para que sepas de qué lado estás antes de hacer una oferta.",
    "The blog": "El blog",
    "What is your street worth?": "¿Cuánto vale tu calle?",

    /* new block: every chapter (home) */
    "Every chapter": "Cada capítulo",
    "Your family's real estate team": "El equipo de bienes raíces de tu familia",
    "for every chapter.": "para cada capítulo.",
    "Getting started, building, or securing what you have built, we are the family that helps at any stage.": "Ya sea que estés empezando, construyendo o asegurando lo que has construido, somos la familia que te ayuda en cualquier etapa.",
    "Getting started": "Empezando",
    "First home, first rental, first investment. We walk you through every step in plain words.": "Primera casa, primera renta, primera inversión. Te acompañamos en cada paso con palabras claras.",
    "Building": "Construyendo",
    "Move up, add a unit, or buy the house nobody else wanted. We run the numbers with you.": "Mudarte a algo mejor, agregar una unidad o comprar la casa que nadie quiso. Hacemos las cuentas contigo.",
    "Securing": "Asegurando",
    "Downsize, simplify, or pass the home to your kids, so you can live well.": "Reducir tu espacio, simplificar o pasarle la casa a tus hijos, para que vivas bien.",
    "Born into a family of lenders and builders, backed by a team that has served Los Angeles since 2002.": "Nacido en una familia de prestamistas y constructores, con el respaldo de un equipo que sirve a Los Ángeles desde 2002.",
    "Own your home and are 55 or older? Prop 19 may let you take your low property tax with you when you move.": "¿Eres dueño de tu casa y tienes 55 años o más? La Prop 19 podría permitirte llevar tu impuesto predial bajo a tu próxima casa.",
    "See how it works": "Mira cómo funciona",
    ", or": ", o",
    "download the Next Chapter booklet": "descarga el folleto Next Chapter (en inglés)",

    /* ---------- seller's guide ---------- */
    "The Valley Seller's Guide | Brandon Melgar": "La guía del vendedor del Valle | Brandon Melgar",
    "The Valley Seller's Guide": "La guía del vendedor del Valle",
    "What moves your number, and what to leave alone.": "Lo que mueve tu cifra y lo que conviene dejar quieto.",
    "What actually moves your number": "Lo que realmente mueve tu cifra",
    "including an honest list of what to fix and what to leave alone.": "incluida una lista honesta de lo que conviene arreglar y lo que no.",
    "What's inside": "Qué incluye",
    "Why your pocket sets your price, not your city.": "Por qué tu microvecindario fija tu precio, no tu ciudad.",
    "The single most expensive thing sellers get wrong.": "Lo más caro que los vendedores hacen mal.",
    "What actually moves your number.": "Lo que realmente mueve tu cifra.",
    "Why the first two weeks carry more weight than the next two months.": "Por qué las primeras dos semanas pesan más que los siguientes dos meses.",
    "What to fix and what to skip.": "Qué arreglar y qué dejar.",
    "Including which renovations usually do not pay you back. Most agents will not tell you this part.": "Incluye qué remodelaciones normalmente no se recuperan. La mayoría de los agentes no te cuenta esta parte.",
    "What it costs to sell": "Lo que cuesta vender",
    "and why you should see a net sheet before you ever see a list price.": "y por qué debes ver una hoja de neto antes de ver un precio de lista.",
    "Get the Seller's Guide": "Obtén la Guía del vendedor",
    "First name": "Nombre",
    "Email": "Correo electrónico",
    "Phone (so I can text you)": "Teléfono (para enviarte un mensaje)",
    "Property address (optional, but it lets me be specific)": "Dirección de la propiedad (opcional, pero me permite ser más específico)",
    "When are you thinking about selling?": "¿Cuándo estás pensando vender?",
    "In the next 3 months": "En los próximos 3 meses",
    "3 to 12 months": "De 3 a 12 meses",
    "A year or more out": "Dentro de un año o más",
    "Just want to know the number": "Solo quiero saber la cifra",
    "Send me the Seller's Guide": "Envíame la Guía del vendedor",
    "Sent straight to your inbox. No spam, no drip campaign.": "Llega directo a tu correo. Sin spam y sin campañas de seguimiento.",
    "Got it.": "Listo.",
    "I'll get back to you personally, usually same day.": "Te responderé personalmente, normalmente el mismo día.",
    "Almost there.": "Casi listo.",
    "My form handoff is not finished yet, so it did not save automatically. Tap below and it sends me everything you just typed. I answer personally, usually same day.": "El envío automático del formulario no se completó, así que no se guardó solo. Toca abajo y me llega todo lo que escribiste. Respondo personalmente, normalmente el mismo día.",
    "Send it to me by email": "Envíamelo por correo",
    "or text (818) 201-8506": "o mándame un mensaje al (818) 201-8506",

    /* new block: Prop 19 (seller's guide) */
    "Selling a long held home? Prop 19 matters.": "¿Vendes una casa que tienes desde hace años? La Prop 19 importa.",
    "If you are 55 or older, severely disabled, or a victim of wildfire or natural disaster, Prop 19 lets you sell and carry your low property tax base to your next home, anywhere in California, up to three times. Buy or build within two years of the sale. If the new home costs more, you keep your old base and only the difference is added.": "Si tienes 55 años o más, una discapacidad grave, o fuiste víctima de un incendio forestal o desastre natural, la Prop 19 te permite vender y llevar tu base de impuesto predial bajo a tu próxima casa, en cualquier parte de California, hasta tres veces. Compra o construye dentro de los dos años de la venta. Si la nueva casa cuesta más, conservas tu base anterior y solo se suma la diferencia.",
    "If the home will pass to your children, the rules changed in 2021. It has to be your main home, and your child has to move in within one year and file the homeowners' exemption. A lot of families still plan around the old rules, and it gets expensive.": "Si la casa pasará a tus hijos, las reglas cambiaron en 2021. Tiene que ser tu vivienda principal, y tu hijo debe mudarse dentro de un año y presentar la exención para propietarios. Muchas familias todavía planean con las reglas anteriores, y eso sale caro.",
    "We are the family that helps at any stage, so this is a conversation to have early, long before you list. I am a REALTOR, not a tax advisor or attorney. I bring the numbers and the deadlines, and your CPA and attorney make the calls that are theirs to make.": "Somos la familia que ayuda en cualquier etapa, así que esta es una conversación para tener temprano, mucho antes de poner tu casa a la venta. Soy REALTOR, no asesor fiscal ni abogado. Yo traigo los números y las fechas límite, y tu contador y tu abogado toman las decisiones que les corresponden.",
    "See the full Prop 19 guide": "Ver la guía completa de la Prop 19 (en inglés)",
    "Download the Next Chapter booklet (PDF)": "Descargar el folleto Next Chapter (PDF, en inglés)",

    /* ---------- buyer's guide ---------- */
    "The Valley Buyer's Guide | Brandon Melgar": "La guía del comprador del Valle | Brandon Melgar",
    "The Valley Buyer's Guide": "La guía del comprador del Valle",
    "What to know before you tour a single house.": "Lo que debes saber antes de visitar una sola casa.",
    "How buying actually works in the Valley": "Cómo funciona realmente comprar en el Valle",
    "written by someone who grew up here. Not a brochure.": "escrito por alguien que creció aquí. No es un folleto.",
    "The three things to do before you tour a single house.": "Las tres cosas que debes hacer antes de visitar una sola casa.",
    "Most buyers start on Zillow. That's backwards, and it costs months.": "La mayoría de los compradores empiezan en Zillow. Es al revés, y cuesta meses.",
    "What the process really looks like.": "Cómo es realmente el proceso.",
    "Offer to acceptance, acceptance to close, and every date that actually matters in between.": "De la oferta a la aceptación, de la aceptación al cierre, y cada fecha que realmente importa en medio.",
    "The three inspections I tell every buyer to order.": "Las tres inspecciones que le pido a cada comprador.",
    "Including the one buyers skip and regret, which can run five figures.": "Incluida la que los compradores se saltan y luego lamentan, y que puede costar cinco cifras.",
    "The real money picture.": "El panorama real del dinero.",
    "Down payment, earnest money, closing costs, and how LA property tax reassessment changes your monthly number.": "Enganche, depósito de buena fe, costos de cierre, y cómo la reevaluación del impuesto predial en Los Ángeles cambia tu pago mensual.",
    "Get the Buyer's Guide": "Obtén la Guía del comprador",
    "When are you hoping to buy?": "¿Cuándo esperas comprar?",
    "Just researching": "Solo estoy investigando",
    "Send me the Buyer's Guide": "Envíame la Guía del comprador",

    /* ---------- my story ---------- */
    "My Story, Brandon Melgar": "Mi historia, Brandon Melgar",
    "I grew up in Woodbridge, in Studio City. My dad bought a classic two bedroom two bath, and then he added another bedroom and another bath. I still remember the smell of sawdust while they were cutting and framing it.": "Crecí en Woodbridge, en Studio City. Mi papá compró una casa clásica de dos recámaras y dos baños, y luego le agregó otra recámara y otro baño. Todavía recuerdo el olor a aserrín mientras cortaban y armaban la estructura.",
    "That is the first thing I ever remember loving. Not houses exactly. The building of them.": "Es lo primero que recuerdo haber amado. No las casas exactamente, sino construirlas.",
    "I still walk my yorkie Bruno through Woodbridge Park most weekends. Same neighborhood. He gets a vote on Beeman Park instead, and he has opinions about which.": "Todavía paseo a mi yorkie Bruno por Woodbridge Park casi todos los fines de semana. Mismo vecindario. Él vota por Beeman Park, y tiene sus opiniones sobre cuál es mejor.",
    "Real estate is the only language my family speaks": "Los bienes raíces son el único idioma que habla mi familia",
    "My dad has been a mortgage broker and a lender my entire life. My sister is a lender too. This is not a career I went out and found. It is what was talked about at the dinner table for as long as I can remember.": "Mi papá ha sido corredor hipotecario y prestamista toda su vida. Mi hermana también es prestamista. Esta no es una carrera que salí a buscar. Es de lo que se hablaba en la mesa desde que tengo memoria.",
    "My dad was also always buying property. I got into real estate to help him build his portfolio, and that is where I learned the thing that still drives me: a house is a place to live, and it is also a tool.": "Mi papá también siempre estaba comprando propiedades. Entré a los bienes raíces para ayudarle a crecer su portafolio, y ahí aprendí lo que todavía me mueve: una casa es un lugar para vivir, y también es una herramienta.",
    "What I actually do": "Lo que realmente hago",
    "I help people cross.": "Ayudo a la gente a cruzar.",
    "Renting the first place. Buying the first house. Outgrowing it. Downsizing once the kids are gone. Every one of those is somebody standing at the edge of a big moment, and I get to help them across. I think of myself as a bridge. I am honored to be a small part of people's stories, and that is the part I am actually passionate about. Not transactions. People crossing.": "Rentar el primer lugar. Comprar la primera casa. Quedarse chico. Reducir el espacio cuando los hijos se van. Cada uno de esos es alguien parado al borde de un gran momento, y yo tengo el privilegio de ayudarle a cruzar. Me veo como un puente. Me honra ser una pequeña parte de las historias de la gente, y eso es lo que realmente me apasiona. No las transacciones. La gente cruzando.",
    "But a roof is only half of it.": "Pero un techo es solo la mitad.",
    "Handled right, a house is the thing that catapults a family to the next step of their life. That is what growing up around lenders and landlords taught me, and it is the part most people never get told. I want my clients to have somewhere to live and something that works for them.": "Bien manejada, una casa es lo que lanza a una familia al siguiente paso de su vida. Eso me enseñó crecer entre prestamistas y propietarios, y es la parte que casi nadie le cuenta a la gente. Quiero que mis clientes tengan un lugar donde vivir y algo que trabaje a su favor.",
    "And I give houses a second chance.": "Y les doy a las casas una segunda oportunidad.",
    "When a house has been overlooked, I buy it, take it apart, and put it back together. I have done it for myself, for my family, and for clients. A house the whole street drove past becomes a house somebody wants to live in, and the block is better for it. That is value I am bringing back to my own community, not just a sale.": "Cuando una casa ha sido pasada por alto, la compro, la desarmo y la vuelvo a armar. Lo he hecho para mí, para mi familia y para clientes. Una casa que toda la calle ignoraba se convierte en una casa donde alguien quiere vivir, y la cuadra mejora. Es valor que le devuelvo a mi propia comunidad, no solo una venta.",
    "I love building homes that families will grow in and make memories in. That is the whole thing, and it started with the sawdust.": "Me encanta construir casas donde las familias crecerán y harán recuerdos. Eso es todo, y empezó con el aserrín.",
    "That is also where Cup of Equity comes from. Equity is not a word I picked because it sounded good. It is the thing I do.": "De ahí también viene Cup of Equity. Equity no es una palabra que elegí porque sonara bien. Es justo lo que hago.",
    "If you are buying, selling, or just thinking about it, message me. Free, no pressure, I answer personally.": "Si vas a comprar, vender, o solo lo estás pensando, escríbeme. Es gratis, sin presión, y respondo personalmente.",
    "Read what clients say": "Lee lo que dicen los clientes",
    "Quick facts": "Datos rápidos",
    "Grew up in the Woodbridge neighborhood of Studio City. Still lives in the Valley.": "Creció en el vecindario de Woodbridge, en Studio City. Sigue viviendo en el Valle.",
    "Licensed since 2017.": "Con licencia desde 2017.",
    "Comes from a family of lenders. His father and sister are both in mortgage.": "Viene de una familia de prestamistas. Su papá y su hermana trabajan en hipotecas.",
    "Works across Studio City, Sherman Oaks, Valley Village, Burbank, Toluca Lake and Encino.": "Trabaja en Studio City, Sherman Oaks, Valley Village, Burbank, Toluca Lake y Encino.",
    "Buys overlooked houses, rebuilds them, and sells them.": "Compra casas que nadie quiso, las reconstruye y las vende.",
    "Common questions": "Preguntas frecuentes",
    "What areas does Brandon Melgar serve?": "¿Qué zonas atiende Brandon Melgar?",
    "Studio City, Sherman Oaks, Valley Village, Burbank, Toluca Lake, and Encino in the San Fernando Valley.": "Studio City, Sherman Oaks, Valley Village, Burbank, Toluca Lake y Encino, en el Valle de San Fernando.",
    "Is Brandon Melgar actually from Studio City?": "¿Brandon Melgar realmente es de Studio City?",
    "Yes. He grew up in the Woodbridge neighborhood of Studio City, went to school there, and still lives in the Valley. His father added a bedroom and a bathroom onto the family house when he was a kid, which is where his interest in building started.": "Sí. Creció en el vecindario de Woodbridge, en Studio City, fue a la escuela ahí y sigue viviendo en el Valle. Su papá le agregó una recámara y un baño a la casa de la familia cuando era niño, y de ahí empezó su interés en construir.",
    "What makes Brandon Melgar different from other Studio City agents?": "¿Qué hace diferente a Brandon Melgar de otros agentes de Studio City?",
    "He grew up in Studio City in a family of lenders. His father has been a mortgage broker his entire life and his sister is a lender too, so he treats a house as a financial tool and not only a place to live. He also buys overlooked houses, rebuilds them from the studs, and sells them, which means he has worked the building side and not only the selling side.": "Creció en Studio City en una familia de prestamistas. Su papá ha sido corredor hipotecario toda su vida y su hermana también es prestamista, así que trata una casa como una herramienta financiera y no solo como un lugar para vivir. También compra casas que nadie quiso, las reconstruye desde la estructura y las vende, lo que significa que ha trabajado del lado de la construcción y no solo de la venta.",
    "Is Brandon Melgar a buyer's agent or seller's agent?": "¿Brandon Melgar es agente de compradores o de vendedores?",
    "Both, he represents buyers and sellers across the San Fernando Valley.": "De ambos. Representa a compradores y vendedores en todo el Valle de San Fernando.",
    "How do I contact Brandon Melgar?": "¿Cómo contacto a Brandon Melgar?",
    "(818) 201-8506, or message him directly, he answers personally.": "Al (818) 201-8506, o escríbele directamente. Él responde personalmente.",

    /* ---------- testimonials ---------- */
    "What Clients Say About Working With Brandon": "Lo que dicen los clientes sobre trabajar con Brandon",
    "What Clients Say": "Lo que dicen los clientes",
    "Real reviews from Google. Every one of these names me specifically.": "Reseñas reales de Google. Cada una me menciona por nombre.",
    "· March 2022": "· marzo de 2022",
    "(Sold her parents' home. They were in their 80s.)": "(Vendió la casa de sus padres. Ellos tenían más de 80 años.)",
    "· August 2021": "· agosto de 2021",
    "· February 2021": "· febrero de 2021",
    "(Sold one home and bought another with the team.)": "(Vendió una casa y compró otra con el equipo.)",
    "The team behind the work I'm part of": "El equipo detrás del trabajo del que formo parte",
    ", rated": ", con calificación de",
    "5.0 across 190+ Google reviews": "5.0 en más de 190 reseñas de Google",
    ", serving Los Angeles since 2002. When you work with me you get me, and you get a team that has closed hundreds of transactions.": ", al servicio de Los Ángeles desde 2002. Cuando trabajas conmigo, me tienes a mí y a un equipo que ha cerrado cientos de transacciones.",
    "See all Segovia reviews on Google": "Ver todas las reseñas de Segovia en Google",

    /* ---------- what's my house worth ---------- */
    "What's My House Worth? Studio City & Sherman Oaks Home Value | Brandon Melgar": "¿Cuánto vale mi casa? Valor de tu casa en Studio City y Sherman Oaks | Brandon Melgar",
    "What's My House Worth?": "¿Cuánto vale mi casa?",
    "Not what your ZIP code is worth. What your street is worth.": "No lo que vale tu código postal. Lo que vale tu calle.",
    "Zillow can tell you what Studio City is doing. It cannot tell you what your block is doing.": "Zillow puede decirte qué está haciendo Studio City. No puede decirte qué está haciendo tu cuadra.",
    "Send me your address and I will tell you which micro neighborhood you are actually in, what it has done in the last 90 days, and what that means for your number.": "Mándame tu dirección y te diré en qué microvecindario estás realmente, qué ha hecho en los últimos 90 días y qué significa eso para tu cifra.",
    "Studio City is not one market. It is 22 micro neighborhoods, and the difference between two of them can be millions of dollars. I mapped every one of them myself, street by street. I call them pockets. That is the thing I can do that a valuation tool cannot.": "Studio City no es un solo mercado. Son 22 microvecindarios, y la diferencia entre dos de ellos puede ser de millones de dólares. Yo mismo mapeé cada uno, calle por calle. Les llamo pockets. Eso es algo que yo puedo hacer y una herramienta de valuación no.",
    "What you get back": "Lo que recibes",
    "Your micro neighborhood, named.": "Tu microvecindario, con nombre.",
    "Which one you are in and where its boundaries actually fall.": "En cuál estás y dónde caen realmente sus límites.",
    "What it is doing right now.": "Qué está haciendo ahora mismo.",
    "Recent sales on comparable streets, not a city wide average that includes neighborhoods with nothing in common with yours.": "Ventas recientes en calles comparables, no un promedio de toda la ciudad que incluye vecindarios que no tienen nada en común con el tuyo.",
    "What it means for your price.": "Qué significa para tu precio.",
    "A real range, and the honest reasoning behind it.": "Un rango real, y el razonamiento honesto detrás.",
    "And if you want it, what it would be worth fixed up.": "Y si lo quieres, cuánto valdría arreglada.",
    "I build homes, so I can tell you what is worth doing before you list and what is not. That part is free too.": "Yo construyo casas, así que puedo decirte qué vale la pena hacer antes de vender y qué no. Esa parte también es gratis.",
    "Free, no obligation, and I'm not going to put you on a drip campaign. If you're two years out from selling, say so and I'll tell you what to watch.": "Gratis, sin compromiso, y no te voy a meter en una campaña de seguimiento. Si te faltan dos años para vender, dímelo y te diré qué observar.",
    "Get your free analysis": "Obtén tu análisis gratis",
    "Property address": "Dirección de la propiedad",
    "Where are you at?": "¿En qué punto estás?",
    "Just curious what it's worth": "Solo tengo curiosidad de cuánto vale",
    "Thinking about selling in the next 1 to 2 years": "Pensando vender en los próximos 1 a 2 años",
    "Ready to sell now": "Listo para vender ahora",
    "I want to know what it is worth if I fix it up first": "Quiero saber cuánto valdría si la arreglo primero",
    "I am 55+ and want my Prop 19 numbers too": "Tengo 55 o más y quiero también mis números de la Prop 19",
    "Actually looking to buy around here": "En realidad busco comprar por aquí",
    "Send me my analysis": "Envíame mi análisis",
    "Brandon answers these personally. Usually same day.": "Brandon responde estos personalmente. Normalmente el mismo día."
  };

  var KEY = "lang";
  var current = "en";
  var originals = [];            /* [node, original text] */
  var origTitle = document.title;

  function norm(t) {
    return t.replace(/\s+/g, " ").trim().replace(/[‘’]/g, "'");
  }

  function store(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }

  function walk(fn) {
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode && n.parentNode.nodeName;
        if (p === "SCRIPT" || p === "STYLE" || p === "NOSCRIPT") return NodeFilter.FILTER_REJECT;
        return n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var n; while ((n = w.nextNode())) fn(n);
  }

  function toSpanish() {
    walk(function (n) {
      var t = n.nodeValue, k = norm(t);
      if (Object.prototype.hasOwnProperty.call(ES, k)) {
        var lead = t.match(/^\s*/)[0], trail = t.match(/\s*$/)[0], v = ES[k];
        if (/^[.,;:!?]/.test(v)) lead = "";
        originals.push([n, t]);
        n.nodeValue = lead + v + trail;
      }
    });
    var tk = norm(origTitle);
    if (Object.prototype.hasOwnProperty.call(ES, tk)) document.title = ES[tk];
  }

  function toEnglish() {
    originals.forEach(function (p) { p[0].nodeValue = p[1]; });
    originals = [];
    document.title = origTitle;
  }

  function set(lang, persist) {
    if (lang === current) return;
    if (lang === "es") toSpanish(); else toEnglish();
    current = lang;
    document.documentElement.setAttribute("lang", lang);
    if (persist) store(lang);
    var b = document.getElementById("langbtn");
    if (b) {
      b.textContent = lang === "es" ? "English" : "Español";
      b.setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");
    }
  }

  function addButton() {
    var css = document.createElement("style");
    css.textContent =
      ".langbtn{background:none;border:1px solid rgba(255,255,255,.45);color:#fff;font:600 12px/1 Inter,system-ui,sans-serif;" +
      "letter-spacing:.08em;text-transform:uppercase;padding:7px 12px;border-radius:2px;cursor:pointer;white-space:nowrap}" +
      ".langbtn:hover,.langbtn:focus-visible{border-color:#C9A96E;color:#C9A96E;outline:none}" +
      "@media(min-width:1181px){.nav>.langbtn{order:9}}";
    document.head.appendChild(css);
    var host = document.querySelector(".nav") || document.querySelector(".navlinks");
    if (!host) return;
    var b = document.createElement("button");
    b.id = "langbtn"; b.type = "button"; b.className = "langbtn";
    b.textContent = "Español";
    b.setAttribute("aria-label", "Cambiar a español");
    b.addEventListener("click", function () { set(current === "es" ? "en" : "es", true); });
    var tog = host.querySelector(".navtoggle");
    if (tog && tog.parentNode === host) host.insertBefore(b, tog); else host.appendChild(b);
  }

  /* debugging aid: window.__langMissing() lists visible text still in English while in Spanish */
  window.__langMissing = function () {
    var out = [];
    walk(function (n) { var k = norm(n.nodeValue); if (k.length > 2 && !Object.prototype.hasOwnProperty.call(ES, k)) out.push(k); });
    return out;
  };

  function init() {
    addButton();
    var q = /[?&]lang=(es|en)\b/.exec(location.search);
    var want = q ? q[1] : read();
    if (want === "es") set("es", !!q);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
