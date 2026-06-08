export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth bg-[#FAF7F2] text-[#2F2633]">
      <section className="mx-auto flex max-w-6xl flex-col px-6 pt-8 pb-20">
        <header className="flex items-center justify-between">
  <div className="flex items-center gap-3">
  <img
  src="/logo-escola-families.png"
  alt="Escola de Famílies"
  className="h-16 w-auto"
/>
</div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-[#5F5267] md:flex">
            <a href="#familyari">FamilyAri</a>
            <a href="#families-plus">Families+1</a>
            <a href="#projecte">Sobre el projecte</a>
            <a href="#contacte">Contacte</a>
            <button className="rounded-full bg-white px-4 py-2 shadow-sm">
              CA | ES
            </button>
          </nav>
        </header>

        <div className="grid gap-12 pt-16 pb-20 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8B6FA3]">
              Comprendre per connectar
            </p>

            <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Darrere de moltes dificultats familiars no hi ha manca d’amor.
            </h1>

           <p className="mt-6 max-w-xl text-3xl font-bold leading-tight text-[#7B5FA3] md:text-4xl">
  Hi ha manca de temps, de conversa i de comprensió.
</p>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6B5E72]">
              Escola de Famílies crea eines i espais per ajudar famílies,
              escoles i comunitats educatives a enfortir el vincle entre pares,
              mares, fills i filles.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#familyari"
                className="rounded-full bg-[#7B5FA3] px-6 py-3 text-center font-semibold text-white shadow-sm"
              >
                Descobreix FamilyAri
              </a>

              <a
                href="#families-plus"
                className="rounded-full bg-white px-6 py-3 text-center font-semibold text-[#4B3A59] shadow-sm"
              >
                Coneix Families+1
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white p-4 shadow-xl">
  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
    <img
      src="/hero-familia-sofa.jpg"
      alt="Adult i infant conversant en un sofà"
      className="h-full w-full object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

    <div className="absolute bottom-6 left-6 right-6">
      <p className="text-xl font-semibold leading-snug text-white">
        Espais per parlar, escoltar i comprendre’ns millor.
      </p>
    </div>
  </div>
</div>
        </div>
      </section>

      <section id="familyari" className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-4">
  <img
    src="/familyari-icon.png"
    alt="FamilyAri"
    className="h-16 w-16 rounded-2xl"
  />

  <div>
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B6FA3]">
      Per al dia a dia
    </p>

    <h2 className="text-3xl font-bold md:text-4xl">
      FamilyAri
    </h2>
  </div>
</div>
           <p className="mt-4 text-2xl font-bold leading-tight text-[#4B3A59]">
  Entén què hi ha darrere del seu comportament.
</p>

<p className="mt-4 text-lg leading-8 text-[#6B5E72]">
  FamilyAri t’acompanya en el dia a dia per comprendre millor les
  emocions, els límits, les pantalles, la convivència i els reptes
  propis de cada etapa.
</p>

<p className="mt-4 text-lg leading-8 text-[#6B5E72]">
  No ofereix receptes universals: intenta comprendre cada família
  abans d’acompanyar-la.
</p>

<p className="mt-6 text-sm font-semibold text-[#4B3A59]">
  Disponible per a iPhone i Android.
</p>

<div className="mt-4 flex flex-wrap items-center gap-3">
  <a
    href="https://apps.apple.com/es/app/familyari/id6771475913"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/app-store-badge.svg"
      alt="Descarrega-la a l'App Store"
      className="h-11 w-auto"
    />
  </a>

  <a
    href="https://play.google.com/store/apps/details?id=com.familyari.app&pcampaignid=web_share"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/google-play-badge.png"
      alt="Disponible a Google Play"
      className="h-11 w-auto"
    />
  </a>
</div>
          </div>
<div className="flex justify-center">
  <img
    src="/familyari-captura.png"
    alt="Captura de FamilyAri"
    className="max-h-[620px] w-auto rounded-[2rem] shadow-xl"
  />
</div>        </div>
      </section>

      <section id="families-plus" className="px-6 py-20">
  <div className="mx-auto max-w-6xl">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8B6FA3]">
      Per a escoles, AFAs i famílies
    </p>

    <h2 className="text-3xl font-bold md:text-4xl">
      Families+1: converses que deixen empremta.
    </h2>

    <div className="mt-6 max-w-4xl space-y-5 text-lg leading-8 text-[#6B5E72]">
      <p>
        El +1 representa l'arribada del primer mòbil.
      </p>

      <p>
        Families+1 neix per acompanyar les famílies en aquest moment de canvi:
        tant si el primer dispositiu encara no ha arribat com si ja forma part
        del dia a dia familiar i s'ha convertit en una font de discussions.
      </p>

      <p>
        Quan arriba el mòbil, apareixen noves preguntes sobre l'autonomia, la
        confiança, els límits, les xarxes socials, els videojocs o el temps de
        pantalla. I sovint aquestes preguntes afecten tota la família.
      </p>

      <p>
        Els infants i adolescents necessiten comprendre que la sobreexposició a
        les pantalles i les xarxes socials pot tenir efectes sobre el seu
        benestar, les seves relacions, el seu descans o la seva autoestima.
      </p>

      <p>
        Al mateix temps, les famílies necessiten comprendre que el mòbil també
        respon a necessitats legítimes de socialització, autonomia i pertinença
        al grup, especialment en aquesta etapa de la vida.
      </p>

      <p>
        Quan cada part pot entendre millor les preocupacions i les necessitats
        de l'altra, és més fàcil construir acords, establir límits des del
        respecte i prendre decisions compartides que afavoreixin el benestar de
        tota la família.
      </p>
    </div>

    <div className="mt-10 grid gap-5 md:grid-cols-3">
      <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
        <div className="text-3xl">🏫</div>
        <h3 className="mt-4 text-xl font-bold">1. Sessió amb l'alumnat</h3>
        <p className="mt-3 text-[#6B5E72]">
          Explorem què representa el mòbil per als infants i adolescents, quines
          necessitats hi ha al darrere i quins riscos cal conèixer.
        </p>
      </div>

      <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
        <div className="text-3xl">👨‍👩‍👧</div>
        <h3 className="mt-4 text-xl font-bold">2. Sessió amb les famílies</h3>
        <p className="mt-3 text-[#6B5E72]">
          Compartim preocupacions, dubtes i criteris per acompanyar l'ús del
          mòbil sense caure només en la prohibició, el control o la permissivitat.
        </p>
        <p className="mt-3 text-sm leading-6 text-[#8B6FA3]">
          Es pot realitzar presencialment o en format online, habitualment fora
          de l'horari escolar.
        </p>
      </div>

      <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
        <div className="text-3xl">💬</div>
        <h3 className="mt-4 text-xl font-bold">3. Sessió conjunta</h3>
        <p className="mt-3 text-[#6B5E72]">
          Creem un espai de trobada per escoltar les dues mirades, generar
          comprensió mútua i facilitar acords familiars més conscients.
        </p>
      </div>
    </div>

    <div className="mt-10 rounded-[2rem] bg-white p-8 text-center shadow-sm">
      <p className="text-xl font-semibold leading-8 text-[#4B3A59]">
        Perquè sovint el problema no és només el mòbil. És tot allò que el mòbil
        posa damunt la taula.
      </p>
    </div>
  </div>
</section>

      <section id="projecte" className="bg-white px-6 py-20">
  <div className="mx-auto max-w-5xl">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8B6FA3]">
      Sobre el projecte
    </p>

  <h2 className="text-3xl font-bold md:text-4xl">
  Per què neix Escola de Famílies?
</h2>

<h3 className="mt-8 text-2xl font-bold text-[#4B3A59]">
  Educar avui no és una tasca senzilla.
</h3>

<div className="mt-6 space-y-6 text-lg leading-8 text-[#6B5E72]">
  <p>
    Les famílies conviuen amb presses, pantalles, exigències laborals,
    preocupacions econòmiques i una realitat social que canvia a gran
    velocitat. Moltes vegades intentem educar amb referències que vam rebre
    dels nostres pares i mares, però descobrim que algunes ja no donen
    resposta als reptes actuals.
  </p>

      <p>
        Al mateix temps, compartim moltes hores amb els nostres fills i filles,
        però no sempre trobem moments per escoltar-nos de veritat, comprendre
        què els preocupa o parlar d'allò que és important.
      </p>

      <p>
        Amb els anys, cada família construeix les seves dinàmiques, les seves
        maneres de comunicar-se i també els seus silencis. Alguns temes es
        converteixen en converses difícils que es repeteixen una vegada i una
        altra sense acabar d'avançar.
      </p>

      <p>No és fàcil trobar l'equilibri.</p>

      <p>
        I quan aquest equilibri es trenca, qui més ho acostuma a notar són els
        infants i adolescents.
      </p>
    </div>

    <div className="mt-14">
      <h3 className="text-2xl font-bold text-[#4B3A59]">
        Quan una conversa necessita un espai diferent
      </h3>

      <div className="mt-6 space-y-5 text-lg leading-8 text-[#6B5E72]">
        <p>És en aquests moments quan una mirada externa pot ser útil.</p>

        <p>No perquè tingui totes les respostes.</p>

        <p>No perquè vingui a dir qui té raó.</p>

        <p>
          Sinó perquè pot ajudar a crear les condicions necessàries perquè
          aparegui una conversa diferent, on cada persona pugui sentir-se
          escoltada i compresa.
        </p>
      </div>
    </div>

    <div className="mt-14">
      <h3 className="text-2xl font-bold text-[#4B3A59]">
        Dues iniciatives, un mateix objectiu
      </h3>

      <div className="mt-6 space-y-5 text-lg leading-8 text-[#6B5E72]">
        <p>
          Per això Escola de Famílies neix amb la voluntat d'acompanyar les
          famílies, crear espais de reflexió i afavorir converses que ajudin a
          construir relacions més sanes, conscients i respectuoses.
        </p>

        <p>No perquè existeixin receptes universals.</p>

        <p>
          Sinó perquè creiem que quan una família comprèn millor què està
          passant, està en millors condicions per acompanyar els seus fills i
          filles.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-[1.5rem] bg-[#F8F4FB] p-6">
          <h4 className="text-xl font-bold text-[#4B3A59]">FamilyAri</h4>

          <p className="mt-3 text-[#6B5E72]">
            Una eina d'acompanyament familiar que ajuda a reflexionar sobre
            situacions quotidianes relacionades amb la criança, les emocions,
            els límits, les pantalles o la convivència.
          </p>
        </div>

        <div className="rounded-[1.5rem] bg-[#F8F4FB] p-6">
          <h4 className="text-xl font-bold text-[#4B3A59]">Families+1</h4>

          <p className="mt-3 text-[#6B5E72]">
            Una proposta pensada per generar espais de diàleg entre pares,
            mares, fills i filles dins de les comunitats educatives.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-2xl font-bold text-[#4B3A59]">
          Quan entenem millor què viu l'altra persona, és més fàcil
          connectar-hi.
        </p>
      </div>
    </div>
  </div>
</section>

      <section id="contacte" className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#7B5FA3] p-10 text-center text-white">
          <h2 className="text-3xl font-bold">Parlem?</h2>
          <p className="mt-4 text-lg leading-8 text-white/85">
            Si formes part d’una AFA, una escola o simplement vols conèixer
            millor el projecte, ens encantaria escoltar-te.
          </p>
          <a
		href="mailto:hola@escoladefamilies.cat"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-semibold text-[#4B3A59]"
          >
            Contactar
          </a>
        </div>
      </section>
    </main>
  );
}