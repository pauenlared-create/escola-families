// app/page.tsx  (o pages/index.tsx si usas Pages Router)
"use client";

import { useState } from "react";
import Image from "next/image";

// ─── Traduccions ────────────────────────────────────────────────────────────

const translations = {
  ca: {
    nav: {
      familyari: "FamilyAri",
      familiesPlus: "Families+1",
      projecte: "Sobre el projecte",
      contacte: "Contacte",
    },
    hero: {
      subtitle: "Comprendre per connectar",
      h1: "Darrere de moltes dificultats familiars no hi ha manca d'amor.",
      h2: "Hi ha manca de temps, de conversa i de comprensió.",
      body: "Escola de Famílies crea eines i espais per ajudar famílies, escoles i comunitats educatives a enfortir el vincle entre pares, mares, fills i filles.",
      cta1: "Descobreix FamilyAri",
      cta2: "Coneix Families+1",
      imgCaption: "Espais per parlar, escoltar i comprendre'ns millor.",
      imgAlt: "Mare i filla adolescent conversant en un sofà de casa",
    },
    familyari: {
      label: "Per al dia a dia",
      title: "FamilyAri",
      h3: "Perquè educar avui no és una tasca senzilla.",
      lead: "FamilyAri t'acompanya, dia a dia, en l'educació dels teus fills i filles.",
      p1: "T'ajuda a entendre què hi ha darrere del seu comportament i a trobar respostes adaptades a la realitat de la teva família.",
      p2: "Et permet comprendre millor les emocions, les conductes i el desenvolupament de cada infant o adolescent, i millorar la comunicació, posar límits o gestionar reptes quotidians com les pantalles o la convivència.",
      p3: "Aprèn del context de cada família i evoluciona a mesura que coneix millor cada infant o adolescent, per ajudar-vos a comprendre com funciona el seu cervell, perquè cada realitat és única.",
      p4: "És fàcil de fer servir i posa el potencial de la IA al servei de totes les famílies. Les seves respostes es fonamenten en els darrers avenços en psicologia del desenvolupament i neurociència, i en estratègies de disciplina positiva.",
      available: "Disponible per a iPhone i Android.",
      ctaAppStore: "Descarrega-la a l'App Store",
      ctaGooglePlay: "Disponible a Google Play",
      ctaContact: "Contacta'ns per saber-ne més",
    },
    familiesPlus: {
      label: "Per a escoles, AFAs i famílies",
      title: "Families+1: converses que deixen empremta.",
      p1: "Families+1 neix per acompanyar les famílies en un dels moments de canvi més importants de la infància i l'adolescència: l'arribada del primer dispositiu mòbil.",
      p2: "Quan apareix el primer mòbil, també apareixen noves preguntes sobre l'autonomia, la confiança, els límits, les xarxes socials, els videojocs o el temps de pantalla. Sovint, aquestes preguntes acaben generant tensions que afecten tota la família.",
      p3: "Els joves necessiten comprendre que la sobreexposició a les pantalles i a les xarxes socials pot tenir conseqüències en el seu benestar, les seves relacions o el seu descans. Al mateix temps, les famílies necessiten entendre que aquest primer dispositiu també respon a necessitats legítimes de socialització, autonomia i pertinença al grup.",
      p4: "Per això, Families+1 crea espais de conversa entre alumnes i famílies dins dels centres educatius. Treballem per comprendre les necessitats i preocupacions de cada part, afavorir el diàleg i construir acords des del respecte, l'empatia i la corresponsabilitat.",
      p5: "Creiem que quan cada membre de la família comprèn millor el punt de vista de l'altre, resulta més fàcil establir límits, prendre decisions compartides i enfortir la convivència familiar.",
      s1title: "1. Escoltem els infants",
      s1p1: "Conversem amb infants i adolescents per entendre com viuen l'arribada del primer mòbil, què els il·lusiona, què els preocupa i quines necessitats hi ha darrere de la seva demanda.",
      s1p2: "Alhora els convidem i els ajudem a posar-se en la pell dels seus pares, i viure en primera persona les seves preocupacions.",
      s2title: "2. Escoltem les famílies",
      s2p1: "Conversem amb les famílies sobre les seves inquietuds, els límits, l'autonomia, la seguretat digital, la convivència i els canvis que sovint apareixen amb l'arribada del primer mòbil.",
      s2p2: "Procurem fer-los entendre quines són les necessitats i les expectatives dels seus fills, i com poden protegir-los sense perdre-les de vista.",
      s3title: "3. Ens trobem",
      s3p1: "Pares, mares i alumnes participen en un taller conjunt per comprendre millor les necessitats i preocupacions de l'altra part, construir ponts, afavorir el diàleg, adquirir compromisos i construir acords que ajudin a protegir la salut d'uns i altres i cuidar la convivència familiar.",
      ctaContact: "Sol·licita el programa per al teu centre",
      s1imgAlt: "Sessió amb alumnes de 1r d'ESO en cercle",
      s2imgAlt: "Sessió amb famílies assegudes en cercle",
      s3imgAlt: "Sessió conjunta presencial amb connexió online",
    },
    projecte: {
      label: "Sobre el projecte",
      title: "Per què neix Escola de Famílies?",
      h3a: "Educar avui no és una tasca senzilla.",
      p1: "Les famílies conviuen amb presses, pantalles, exigències laborals, preocupacions econòmiques i una realitat social que canvia a gran velocitat. Moltes vegades intentem educar amb referències que vam rebre dels nostres pares i mares, però descobrim que algunes ja no donen resposta als reptes actuals.",
      p2: "Alhora, moltes famílies comparteixen moltes hores amb els seus fills i filles, però no sempre troben moments per escoltar-se de veritat, comprendre què els preocupa o parlar d'allò que és important.",

p3: "Amb els anys, cada família construeix les seves dinàmiques, les seves maneres de comunicar-se i també els seus silencis. Alguns temes es converteixen en converses difícils que es repeteixen una vegada i una altra sense acabar d'avançar.",

p4: "Per altra banda, l'arribada dels primers dispositius personals a la vida de molts infants i adolescents coincideix amb una etapa en què necessiten més autonomia, intimitat i espais propis. Quan aquest procés no va acompanyat d'una reflexió compartida i d'uns límits clars, és fàcil que apareguin dificultats de comunicació, aïllament, conflictes recurrents o una sensació de desconnexió entre els membres de la família.",

p5: "No és fàcil trobar l'equilibri.",
      h3b: "Quan una conversa necessita una altra mirada",

p6: "Hi ha situacions que no es resolen perquè ens faltin idees o perquè no estimem prou els nostres fills i filles.",

p7: "De vegades, allò que ens falta és un espai on poder parar, escoltar-nos i mirar el que està passant des d'una altra perspectiva.",

p8: "Quan un tema genera discussions repetides, preocupació o distància entre les persones, sovint és difícil sortir dels mateixos arguments. Cadascú defensa el seu punt de vista, però costa entendre què hi ha darrere de les paraules, les emocions o les conductes de l'altra persona.",

p9: "En aquests moments, la presència d'una tercera persona pot ser de gran ajuda.",

p10a: "No perquè tingui totes les respostes.",

p10b: "No perquè vingui a decidir què és correcte o incorrecte.",

p10c: "Sinó perquè pot actuar com a interlocutor, facilitador o dinamitzador d'una conversa que sovint necessita noves preguntes, nous punts de vista i un espai segur on totes les persones se sentin escoltades.",

p10d: "Moltes vegades, els canvis més importants no arriben quan trobem una solució perfecta, sinó quan aconseguim entendre millor què està vivint l'altra persona.",

p10e: "Per això, a Escola de Famílies no busquem donar receptes. Busquem crear les condicions perquè les famílies puguin conversar, comprendre's millor i construir els seus propis acords.",
h3docent: "El que observem cada dia a les escoles",
pDoc1: "Com a docent, he tingut l'oportunitat d'acompanyar infants i adolescents de totes les edats i observar, tant a través de la meva pròpia experiència com de les converses amb molts altres professionals de l'educació, alguns dels reptes que planteja l'ús excessiu de les pantalles i la tecnologia.",

pDoc2: "Cada vegada trobem més infants molt petits amb dificultats de llenguatge, amb poca tolerància a l'espera o amb menys oportunitats d'haver desenvolupat habilitats motrius bàsiques a través del joc, la manipulació i l'exploració de l'entorn.",

pDoc3: "A mesura que creixen, també observem nens i nenes que tenen dificultats per relacionar-se, gestionar la frustració, mantenir l'atenció o gaudir d'activitats que requereixen temps, esforç i paciència.",

pDoc4: "Durant l'adolescència, aquests reptes poden adoptar formes diferents: joves que se senten sols malgrat estar permanentment connectats, que passen moltes hores tancats a la seva habitació, que experimenten ansietat davant les relacions socials o que mostren una creixent desconnexió de la vida familiar.",

pDoc5: "Les pantalles no són l'única causa d'aquestes situacions ni tots els infants i adolescents les viuen de la mateixa manera. Però cada vegada hi ha més evidències i experiències compartides que ens indiquen que val la pena reflexionar sobre el paper que la tecnologia ocupa a les nostres vides i sobre com podem acompanyar-ne l'ús de manera més conscient.",

pDoc6: "D'aquesta preocupació, però també de la convicció que les famílies no han d'afrontar aquests reptes soles, neix Escola de Famílies.",
      h3c: "Dues iniciatives, un mateix objectiu",
      p10: "Per això Escola de Famílies neix amb la voluntat d'acompanyar les famílies, crear espais de reflexió i afavorir converses que ajudin a construir relacions més sanes, conscients i respectuoses.",
      p11: "No perquè existeixin receptes universals.",
      p12: "Sinó perquè creiem que quan una família comprèn millor què està passant, està en millors condicions per acompanyar els seus fills i filles.",
      card1title: "FamilyAri",
      card1body: "Una eina d'acompanyament familiar que ajuda a reflexionar sobre situacions quotidianes relacionades amb la criança, les emocions, els límits, les pantalles o la convivència.",
      card2title: "Families+1",
      card2body: "Una proposta pensada per generar espais de diàleg entre pares, mares, fills i filles dins de les comunitats educatives.",
      closing: "Quan entenem millor què viu l'altra persona, és més fàcil connectar-hi.",
    },
    contacte: {
      title: "Parlem?",
      body: "Si formes part d'una AFA, una escola o simplement vols conèixer millor el projecte, ens encantaria escoltar-te.",
      namePlaceholder: "El teu nom",
      emailPlaceholder: "El teu correu electrònic",
      messagePlaceholder: "Explica'ns una mica el teu context o la teva consulta…",
      submit: "Enviar missatge",
      or: "o escriu-nos directament a",
    },
  },
  es: {
    nav: {
      familyari: "FamilyAri",
      familiesPlus: "Families+1",
      projecte: "Sobre el proyecto",
      contacte: "Contacto",
    },
    hero: {
      subtitle: "Comprender para conectar",
      h1: "Detrás de muchas dificultades familiares no hay falta de amor.",
      h2: "Hay falta de tiempo, de conversación y de comprensión.",
      body: "Escola de Famílies crea herramientas y espacios para ayudar a familias, escuelas y comunidades educativas a fortalecer el vínculo entre padres, madres, hijos e hijas.",
      cta1: "Descubre FamilyAri",
      cta2: "Conoce Families+1",
      imgCaption: "Espacios para hablar, escuchar y comprendernos mejor.",
      imgAlt: "Madre e hija adolescente conversando en un sofá en casa",
    },
    familyari: {
      label: "Para el día a día",
      title: "FamilyAri",
      h3: "Porque educar hoy no es una tarea sencilla.",
      lead: "FamilyAri te acompaña, día a día, en la educación de tus hijos e hijas.",
      p1: "Te ayuda a entender qué hay detrás de su comportamiento y a encontrar respuestas adaptadas a la realidad de tu familia.",
      p2: "Te permite comprender mejor las emociones, las conductas y el desarrollo de cada niño o adolescente, y mejorar la comunicación, poner límites o gestionar retos cotidianos como las pantallas o la convivencia.",
      p3: "Aprende del contexto de cada familia y evoluciona a medida que conoce mejor a cada niño o adolescente, para ayudaros a entender cómo funciona su cerebro, porque cada realidad es única.",
      p4: "Es fácil de usar y pone el potencial de la IA al servicio de todas las familias. Sus respuestas se basan en los últimos avances en psicología del desarrollo y neurociencia, y en estrategias de disciplina positiva.",
      available: "Disponible para iPhone y Android.",
      ctaAppStore: "Descárgala en el App Store",
      ctaGooglePlay: "Disponible en Google Play",
      ctaContact: "Contáctanos para saber más",
    },
    familiesPlus: {
      label: "Para escuelas, AMPAs y familias",
      title: "Families+1: conversaciones que dejan huella.",
      p1: "Families+1 nace para acompañar a las familias en uno de los momentos de cambio más importantes de la infancia y la adolescencia: la llegada del primer dispositivo móvil.",
      p2: "Cuando aparece el primer móvil, también aparecen nuevas preguntas sobre la autonomía, la confianza, los límites, las redes sociales, los videojuegos o el tiempo de pantalla. A menudo, estas preguntas acaban generando tensiones que afectan a toda la familia.",
      p3: "Los jóvenes necesitan comprender que la sobreexposición a las pantallas y las redes sociales puede tener consecuencias en su bienestar, sus relaciones o su descanso. Al mismo tiempo, las familias necesitan entender que este primer dispositivo también responde a necesidades legítimas de socialización, autonomía y pertenencia al grupo.",
      p4: "Por eso, Families+1 crea espacios de conversación entre alumnos y familias dentro de los centros educativos. Trabajamos para comprender las necesidades y preocupaciones de cada parte, favorecer el diálogo y construir acuerdos desde el respeto, la empatía y la corresponsabilidad.",
      p5: "Creemos que cuando cada miembro de la familia comprende mejor el punto de vista del otro, resulta más fácil establecer límites, tomar decisiones compartidas y fortalecer la convivencia familiar.",
      s1title: "1. Escuchamos a los jóvenes",
      s1p1: "Conversamos con niños y adolescentes para entender cómo viven la llegada del primer móvil, qué les ilusiona, qué les preocupa y qué necesidades hay detrás de su demanda.",
      s1p2: "Al mismo tiempo, los invitamos y ayudamos a ponerse en la piel de sus padres, y a vivir en primera persona sus preocupaciones.",
      s2title: "2. Escuchamos a las familias",
      s2p1: "Conversamos con las familias sobre sus inquietudes, los límites, la autonomía, la seguridad digital, la convivencia y los cambios que a menudo aparecen con la llegada del primer móvil.",
      s2p2: "Procuramos hacerles entender cuáles son las necesidades y expectativas de sus hijos, y cómo pueden protegerlos sin perderlas de vista.",
      s3title: "3. Nos encontramos",
      s3p1: "Padres, madres y alumnos participan en un taller conjunto para comprender mejor las necesidades y preocupaciones de la otra parte, construir puentes, favorecer el diálogo, adquirir compromisos y construir acuerdos que ayuden a proteger la salud de unos y otros y cuidar la convivencia familiar.",
      ctaContact: "Solicita el programa para tu centro",
      s1imgAlt: "Sesión con alumnos de 1º de ESO en círculo",
      s2imgAlt: "Sesión con familias sentadas en círculo",
      s3imgAlt: "Sesión conjunta presencial con conexión online",
    },
    projecte: {
      label: "Sobre el proyecto",
      title: "¿Por qué nace Escola de Famílies?",
      h3a: "Educar hoy no es una tarea sencilla.",
      p1: "Las familias conviven con prisas, pantallas, exigencias laborales, preocupaciones económicas y una realidad social que cambia a gran velocidad. Muchas veces intentamos educar con referencias que recibimos de nuestros padres y madres, pero descubrimos que algunas ya no dan respuesta a los retos actuales.",
     p2: "Al mismo tiempo, muchas familias comparten muchas horas con sus hijos e hijas, pero no siempre encuentran momentos para escucharse de verdad, comprender qué les preocupa o hablar de aquello que es importante.",

p3: "Con los años, cada familia construye sus propias dinámicas, sus maneras de comunicarse y también sus silencios. Algunos temas se convierten en conversaciones difíciles que se repiten una y otra vez sin llegar a avanzar.",

p4: "Por otra parte, la llegada de los primeros dispositivos personales a la vida de muchos niños, niñas y adolescentes coincide con una etapa en la que necesitan más autonomía, intimidad y espacios propios. Cuando este proceso no va acompañado de una reflexión compartida y de unos límites claros, es fácil que aparezcan dificultades de comunicación, aislamiento, conflictos recurrentes o una sensación de desconexión entre los miembros de la familia.",

p5: "No es fácil encontrar el equilibrio.",
   

 h3docent: "Lo que observamos cada día en las escuelas",

pDoc1: "Como docente, he tenido la oportunidad de acompañar a niños, niñas y adolescentes de todas las edades y observar, tanto a través de mi propia experiencia como de las conversaciones con muchos otros profesionales de la educación, algunos de los retos que plantea el uso excesivo de las pantallas y la tecnología.",

pDoc2: "Cada vez encontramos más niños y niñas muy pequeños con dificultades de lenguaje, con poca tolerancia a la espera o con menos oportunidades de haber desarrollado habilidades motrices básicas a través del juego, la manipulación y la exploración de su entorno.",

pDoc3: "A medida que crecen, también observamos niños y niñas que tienen dificultades para relacionarse, gestionar la frustración, mantener la atención o disfrutar de actividades que requieren tiempo, esfuerzo y paciencia.",

pDoc4: "Durante la adolescencia, estos retos pueden adoptar formas diferentes: jóvenes que se sienten solos a pesar de estar permanentemente conectados, que pasan muchas horas encerrados en su habitación, que experimentan ansiedad ante las relaciones sociales o que muestran una creciente desconexión de la vida familiar.",

pDoc5: "Las pantallas no son la única causa de estas situaciones ni todos los niños, niñas y adolescentes las viven de la misma manera. Pero cada vez existen más evidencias y experiencias compartidas que nos indican que merece la pena reflexionar sobre el papel que la tecnología ocupa en nuestras vidas y sobre cómo podemos acompañar su uso de una manera más consciente.",

pDoc6: "De esta preocupación, pero también de la convicción de que las familias no deben afrontar estos retos solas, nace Escuela de Familias.",

 h3b: "Cuando una conversación necesita otra mirada",

p6: "Hay situaciones que no se resuelven porque nos falten ideas o porque no queramos lo suficiente a nuestros hijos e hijas.",

p7: "A veces, lo que falta es un espacio donde poder detenernos, escucharnos y observar lo que está ocurriendo desde otra perspectiva.",

p8: "Cuando un tema genera discusiones repetidas, preocupación o distancia entre las personas, suele resultar difícil salir de los mismos argumentos. Cada uno defiende su punto de vista, pero cuesta comprender qué hay detrás de las palabras, las emociones o las conductas de la otra persona.",

p9: "En esos momentos, la presencia de una tercera persona puede ser de gran ayuda.",

p10a: "No porque tenga todas las respuestas.",

p10b: "No porque venga a decidir quién tiene razón.",

p10c: "Sino porque puede actuar como interlocutor, facilitador o dinamizador de una conversación que a menudo necesita nuevas preguntas, nuevos puntos de vista y un espacio seguro donde todas las personas se sientan escuchadas.",

p10d: "Muchas veces, los cambios más importantes no llegan cuando encontramos una solución perfecta, sino cuando logramos comprender mejor lo que está viviendo la otra persona.",

p10e: "Por eso, en Escuela de Familias no buscamos dar recetas. Buscamos crear las condiciones para que las familias puedan conversar, comprenderse mejor y construir sus propios acuerdos.",
      h3c: "Dos iniciativas, un mismo objetivo",
      p10: "Por eso Escola de Famílies nace con la voluntad de acompañar a las familias, crear espacios de reflexión y favorecer conversaciones que ayuden a construir relaciones más sanas, conscientes y respetuosas.",
      p11: "No porque existan recetas universales.",
      p12: "Sino porque creemos que cuando una familia comprende mejor qué está pasando, está en mejores condiciones para acompañar a sus hijos e hijas.",
      card1title: "FamilyAri",
      card1body: "Una herramienta de acompañamiento familiar que ayuda a reflexionar sobre situaciones cotidianas relacionadas con la crianza, las emociones, los límites, las pantallas o la convivencia.",
      card2title: "Families+1",
      card2body: "Una propuesta pensada para generar espacios de diálogo entre padres, madres, hijos e hijas dentro de las comunidades educativas.",
      closing: "Cuando entendemos mejor qué vive la otra persona, es más fácil conectar con ella.",
    },
    contacte: {
      title: "¿Hablamos?",
      body: "Si formas parte de un AMPA, una escuela o simplemente quieres conocer mejor el proyecto, nos encantaría escucharte.",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu correo electrónico",
      messagePlaceholder: "Cuéntanos un poco tu contexto o tu consulta…",
      submit: "Enviar mensaje",
      or: "o escríbenos directamente a",
    },
  },
};

type Lang = "ca" | "es";

// ─── Component ──────────────────────────────────────────────────────────────

export default function Home() {
  const [lang, setLang] = useState<Lang>("ca");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formSent, setFormSent] = useState(false);
  const [formSending, setFormSending] = useState(false);
  const [formError, setFormError] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const t = translations[lang];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSending(true);
    setFormError(false);
    try {
      const res = await fetch("https://formsubmit.co/ajax/hola@escoladefamilies.cat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: "Nou missatge des de escoladefamilies.cat",
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setFormSent(true);
      setFormState({ name: "", email: "", message: "" });
    } catch {
      setFormError(true);
    } finally {
      setFormSending(false);
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hola@escoladefamilies.cat");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      // El navegador no permet copiar automàticament; l'usuari sempre pot fer-ho a mà
    }
  };

  return (
    <>
      <style>{`html { scroll-behavior: smooth; }`}</style>

      <main className="min-h-screen bg-[#FAF7F2] text-[#2F2633]">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="mx-auto flex max-w-6xl flex-col px-6 pt-8 pb-20">

          {/* Header */}
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-escola-families.png"
                alt="Escola de Famílies"
                width={200}
                height={64}
                className="h-16 w-auto"
                priority
              />
            </div>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-6 text-sm font-medium text-[#5F5267] md:flex">
              <a href="#familyari" className="hover:text-[#7B5FA3] transition-colors">{t.nav.familyari}</a>
              <a href="#families-plus" className="hover:text-[#7B5FA3] transition-colors">{t.nav.familiesPlus}</a>
              <a href="#projecte" className="hover:text-[#7B5FA3] transition-colors">{t.nav.projecte}</a>
              <a href="#contacte" className="hover:text-[#7B5FA3] transition-colors">{t.nav.contacte}</a>

              {/* Language switcher */}
              <div className="flex overflow-hidden rounded-full border border-[#D5C9E0] bg-white text-xs font-semibold">
                <button
                  onClick={() => setLang("ca")}
                  className={`px-3 py-1.5 transition-colors ${lang === "ca" ? "bg-[#7B5FA3] text-white" : "text-[#5F5267] hover:bg-[#F8F4FB]"}`}
                >
                  CA
                </button>
                <button
                  onClick={() => setLang("es")}
                  className={`px-3 py-1.5 transition-colors ${lang === "es" ? "bg-[#7B5FA3] text-white" : "text-[#5F5267] hover:bg-[#F8F4FB]"}`}
                >
                  ES
                </button>
              </div>
            </nav>

            {/* Mobile: language + hamburger */}
            <div className="flex items-center gap-3 md:hidden">
              <div className="flex overflow-hidden rounded-full border border-[#D5C9E0] bg-white text-xs font-semibold">
                <button
                  onClick={() => setLang("ca")}
                  className={`px-3 py-1.5 transition-colors ${lang === "ca" ? "bg-[#7B5FA3] text-white" : "text-[#5F5267]"}`}
                >
                  CA
                </button>
                <button
                  onClick={() => setLang("es")}
                  className={`px-3 py-1.5 transition-colors ${lang === "es" ? "bg-[#7B5FA3] text-white" : "text-[#5F5267]"}`}
                >
                  ES
                </button>
              </div>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Obrir menú"
                className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full bg-white shadow-sm"
              >
                <span className={`block h-0.5 w-5 bg-[#4B3A59] transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-5 bg-[#4B3A59] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-5 bg-[#4B3A59] transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
              </button>
            </div>
          </header>

          {/* Mobile menu drawer */}
          {menuOpen && (
            <nav className="mt-4 flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-lg text-sm font-medium text-[#5F5267] md:hidden">
              {[
                { href: "#familyari", label: t.nav.familyari },
                { href: "#families-plus", label: t.nav.familiesPlus },
                { href: "#projecte", label: t.nav.projecte },
                { href: "#contacte", label: t.nav.contacte },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#7B5FA3] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}

          {/* Hero grid */}
          <div className="grid gap-12 pt-16 pb-20 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8B6FA3]">
                {t.hero.subtitle}
              </p>
              <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                {t.hero.h1}
              </h1>
              <p className="mt-6 max-w-xl text-3xl font-bold leading-tight text-[#7B5FA3] md:text-4xl">
                {t.hero.h2}
              </p>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#6B5E72]">
                {t.hero.body}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#familyari"
                  className="rounded-full bg-[#7B5FA3] px-6 py-3 text-center font-semibold text-white shadow-sm hover:bg-[#6A4E8F] transition-colors"
                >
                  {t.hero.cta1}
                </a>
                <a
                  href="#families-plus"
                  className="rounded-full bg-white px-6 py-3 text-center font-semibold text-[#4B3A59] shadow-sm hover:bg-[#F8F4FB] transition-colors"
                >
                  {t.hero.cta2}
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white p-4 shadow-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/hero-familia-sofa.jpg"
                  alt={t.hero.imgAlt}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xl font-semibold leading-snug text-white">
                    {t.hero.imgCaption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAMILYARI ────────────────────────────────────────────────── */}
        <section id="familyari" className="bg-white px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-4">
                <Image
                  src="/familyari-icon.png"
                  alt="FamilyAri"
                  width={64}
                  height={64}
                  className="rounded-2xl"
                />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B6FA3]">
                    {t.familyari.label}
                  </p>
                  <h2 className="text-3xl font-bold md:text-4xl">{t.familyari.title}</h2>
                </div>
              </div>

              <p className="mt-4 text-2xl font-bold leading-tight text-[#4B3A59]">{t.familyari.h3}</p>
              <p className="mt-4 text-xl font-semibold leading-8 text-[#4B3A59]">{t.familyari.lead}</p>
              <p className="mt-4 text-lg leading-8 text-[#6B5E72]">{t.familyari.p1}</p>
              <p className="mt-4 text-lg leading-8 text-[#6B5E72]">{t.familyari.p2}</p>
              <p className="mt-4 text-lg leading-8 text-[#6B5E72]">{t.familyari.p3}</p>
              <p className="mt-4 text-lg leading-8 text-[#6B5E72]">{t.familyari.p4}</p>

              <p className="mt-6 text-sm font-semibold text-[#4B3A59]">{t.familyari.available}</p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a href="https://apps.apple.com/es/app/familyari/id6771475913" target="_blank" rel="noopener noreferrer">
                  <Image src="/app-store-badge.svg" alt={t.familyari.ctaAppStore} width={160} height={44} className="h-11 w-auto" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.familyari.app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                  <Image src="/google-play-badge.png" alt={t.familyari.ctaGooglePlay} width={160} height={44} className="h-11 w-auto" />
                </a>
              </div>

              <div className="mt-6">
                <a
                  href="#contacte"
                  className="inline-block rounded-full border border-[#7B5FA3] px-6 py-3 text-sm font-semibold text-[#7B5FA3] hover:bg-[#7B5FA3] hover:text-white transition-colors"
                >
                  {t.familyari.ctaContact}
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/familyari-captura.png"
                alt="Captura de FamilyAri"
                width={300}
                height={620}
                className="max-h-[620px] w-auto rounded-[2rem] shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* ── FAMILIES+1 ───────────────────────────────────────────────── */}
        <section id="families-plus" className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8B6FA3]">
              {t.familiesPlus.label}
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">{t.familiesPlus.title}</h2>

            <div className="mt-6 max-w-4xl space-y-5 text-lg leading-8 text-[#6B5E72]">
              <p>{t.familiesPlus.p1}</p>
              <p>{t.familiesPlus.p2}</p>
              <p>{t.familiesPlus.p3}</p>
              <p>{t.familiesPlus.p4}</p>
              <p>{t.familiesPlus.p5}</p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">

              {/* Sessió 1 */}
              <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-sm">
                <div className="relative h-64 w-full">
                  <Image
                    src="/families1-infants.png"
                    alt={t.familiesPlus.s1imgAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#7B5FA3]">{t.familiesPlus.s1title}</h3>
                  <p className="mt-4 text-[#6B5E72]">{t.familiesPlus.s1p1}</p>
                  <p className="mt-4 text-[#6B5E72]">{t.familiesPlus.s1p2}</p>
                </div>
              </div>

              {/* Sessió 2 */}
              <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-sm">
                <div className="relative h-64 w-full">
                  <Image
                    src="/families1-families.png"
                    alt={t.familiesPlus.s2imgAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#4E9A61]">{t.familiesPlus.s2title}</h3>
                  <p className="mt-4 text-[#6B5E72]">{t.familiesPlus.s2p1}</p>
                  <p className="mt-4 text-[#6B5E72]">{t.familiesPlus.s2p2}</p>
                </div>
              </div>

              {/* Sessió 3 */}
              <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-sm">
                <div className="relative h-64 w-full">
                  <Image
                    src="/families1-trobada.png"
                    alt={t.familiesPlus.s3imgAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#D98A2B]">{t.familiesPlus.s3title}</h3>
                  <p className="mt-4 text-[#6B5E72]">{t.familiesPlus.s3p1}</p>
                </div>
              </div>

            </div>

            {/* CTA Families+1 */}
            <div className="mt-10 text-center">
              <a
                href="#contacte"
                className="inline-block rounded-full bg-[#7B5FA3] px-8 py-4 font-semibold text-white shadow-sm hover:bg-[#6A4E8F] transition-colors"
              >
                {t.familiesPlus.ctaContact}
              </a>
            </div>
          </div>
        </section>

        {/* ── SOBRE EL PROJECTE ─────────────────────────────────────────── */}
        <section id="projecte" className="bg-white px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8B6FA3]">
              {t.projecte.label}
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">{t.projecte.title}</h2>

            <h3 className="mt-8 text-2xl font-bold text-[#4B3A59]">{t.projecte.h3a}</h3>
            <div className="mt-6 space-y-6 text-lg leading-8 text-[#6B5E72]">
              <p>{t.projecte.p1}</p>
              <p>{t.projecte.p2}</p>
              <p>{t.projecte.p3}</p>
              <p>{t.projecte.p4}</p>
              <p>{t.projecte.p5}</p>
            </div>
<div className="mt-14">
  <h3 className="text-2xl font-bold text-[#4B3A59]">
    {t.projecte.h3docent}
  </h3>

  <div className="mt-6 space-y-5 text-lg leading-8 text-[#6B5E72]">
    <p>{t.projecte.pDoc1}</p>
    <p>{t.projecte.pDoc2}</p>
    <p>{t.projecte.pDoc3}</p>
    <p>{t.projecte.pDoc4}</p>
    <p>{t.projecte.pDoc5}</p>
    <p>{t.projecte.pDoc6}</p>
  </div>
</div>
            <div className="mt-14">
              <h3 className="text-2xl font-bold text-[#4B3A59]">{t.projecte.h3b}</h3>
              <div className="mt-6 space-y-5 text-lg leading-8 text-[#6B5E72]">
                <p>{t.projecte.p6}</p>
<p>{t.projecte.p7}</p>
<p>{t.projecte.p8}</p>
<p>{t.projecte.p9}</p>
<p>{t.projecte.p10a}</p>
<p>{t.projecte.p10b}</p>
<p>{t.projecte.p10c}</p>
<p>{t.projecte.p10d}</p>
<p>{t.projecte.p10e}</p>
              </div>
            </div>
            <div className="mt-14">
              <h3 className="text-2xl font-bold text-[#4B3A59]">{t.projecte.h3c}</h3>
              <div className="mt-6 space-y-5 text-lg leading-8 text-[#6B5E72]">
                <p>{t.projecte.p10}</p>
                <p>{t.projecte.p11}</p>
                <p>{t.projecte.p12}</p>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-[1.5rem] bg-[#F8F4FB] p-6">
                  <h4 className="text-xl font-bold text-[#4B3A59]">{t.projecte.card1title}</h4>
                  <p className="mt-3 text-[#6B5E72]">{t.projecte.card1body}</p>
                </div>
                <div className="rounded-[1.5rem] bg-[#F8F4FB] p-6">
                  <h4 className="text-xl font-bold text-[#4B3A59]">{t.projecte.card2title}</h4>
                  <p className="mt-3 text-[#6B5E72]">{t.projecte.card2body}</p>
                </div>
              </div>

              <div className="mt-10 text-center">
                <p className="text-2xl font-bold text-[#4B3A59]">{t.projecte.closing}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACTE ─────────────────────────────────────────────────── */}
        <section id="contacte" className="px-6 py-20">
          <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#7B5FA3] p-10 text-white">
            <h2 className="text-3xl font-bold text-center">{t.contacte.title}</h2>
            <p className="mt-4 text-center text-lg leading-8 text-white/85">{t.contacte.body}</p>

            {formSent ? (
              <div className="mt-8 rounded-2xl bg-white/20 p-6 text-center">
                <p className="text-lg font-semibold">
                  {lang === "ca" ? "Missatge enviat! Ens posarem en contacte aviat." : "¡Mensaje enviado! Nos pondremos en contacto pronto."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="mt-8 space-y-4">
                <input
                  type="text"
                  required
                  placeholder={t.contacte.namePlaceholder}
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full rounded-xl bg-white/20 px-4 py-3 text-white placeholder-white/60 outline-none focus:bg-white/30 transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder={t.contacte.emailPlaceholder}
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full rounded-xl bg-white/20 px-4 py-3 text-white placeholder-white/60 outline-none focus:bg-white/30 transition-colors"
                />
                <textarea
                  rows={4}
                  required
                  placeholder={t.contacte.messagePlaceholder}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full rounded-xl bg-white/20 px-4 py-3 text-white placeholder-white/60 outline-none focus:bg-white/30 transition-colors resize-none"
                />
                {formError && (
                  <p className="text-sm text-white bg-red-500/40 rounded-xl px-4 py-3">
                    {lang === "ca"
                      ? "Hi ha hagut un problema en enviar el missatge. Torna-ho a provar o escriu-nos directament a hola@escoladefamilies.cat."
                      : "Ha habido un problema al enviar el mensaje. Inténtalo de nuevo o escríbenos directamente a hola@escoladefamilies.cat."}
                  </p>
                )}
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                  <button
                    type="submit"
                    disabled={formSending}
                    className="w-full rounded-full bg-white px-6 py-3 font-semibold text-[#4B3A59] hover:bg-white/90 transition-colors sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formSending
                      ? lang === "ca" ? "Enviant…" : "Enviando…"
                      : t.contacte.submit}
                  </button>
                  <p className="text-sm text-white/70">
                    {t.contacte.or}{" "}
                    <a href="mailto:hola@escoladefamilies.cat" className="underline text-white">
                      hola@escoladefamilies.cat
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="ml-2 underline text-white/80 hover:text-white transition-colors"
                    >
                      {emailCopied
                        ? lang === "ca" ? "Copiat!" : "¡Copiado!"
                        : lang === "ca" ? "(copiar)" : "(copiar)"}
                    </button>
                  </p>
                </div>
              </form>
            )}
          </div>
        </section>

      </main>
    </>
  );
}
