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
  FamilyAri t’acompanya en el dia a dia amb l'educació dels teus fills i filles. És una eina per comprendre millor les emocions, les conductes i el desenvolupament de cada infant o adolescent T'ajuda a millorar la comunicació, establir límits o gestionar aspectes del dia a dia com poden ser les pantalles, la convivència i els reptes propis de cada etapa.
</p>

<p className="mt-4 text-lg leading-8 text-[#6B5E72]">
  FamilyAri aprèn del context de cada família i evoluciona aprenent les coses que funcionen i les que no per a cada individu, perquè cadascú és únic i irrepetible. És una eina fàcil de fer servir que posa el potencial de la IA al servei de totes les famílies. Les seves respostes es fonamenten en els darrers avenços en psicologia del desenvolupament, neurociència i amb estratégies enmarcades en la discilplina positiva.
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

    <p className="mt-6 text-lg leading-8 text-[#6B5E72]">
  Families+1 neix per acompanyar les famílies en un dels moments de canvi
  més importants de la infància i l'adolescència: l'arribada del primer
  dispositiu mòbil.
</p>

<p className="mt-4 text-lg leading-8 text-[#6B5E72]">
  Quan apareix el primer mòbil, també apareixen noves preguntes sobre
  l'autonomia, la confiança, els límits, les xarxes socials, els videojocs
  o el temps de pantalla. Sovint, aquestes preguntes acaben generant
  tensions que afecten tota la família.
</p>

<p className="mt-4 text-lg leading-8 text-[#6B5E72]">
  Els joves necessiten comprendre que la sobreexposició a les pantalles i
  a les xarxes socials pot tenir conseqüències en el seu benestar, les
  seves relacions o el seu descans. Al mateix temps, les famílies
  necessiten entendre que aquest primer dispositiu també respon a
  necessitats legítimes de socialització, autonomia i pertinença al grup.
</p>

<p className="mt-4 text-lg leading-8 text-[#6B5E72]">
  Per això, Families+1 crea espais de conversa entre alumnes i famílies
  dins dels centres educatius. Treballem per comprendre les necessitats i
  preocupacions de cada part, afavorir el diàleg i construir acords des
  del respecte, l'empatia i la corresponsabilitat.
</p>

<p className="mt-4 text-lg leading-8 text-[#6B5E72]">
  Creiem que quan cada membre de la família comprèn millor el punt de vista
  de l'altre, resulta més fàcil establir límits, prendre decisions
  compartides i enfortir la convivència familiar.
</p>
    

   <div className="mt-12 grid gap-8 md:grid-cols-3">

  <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-sm">
    <img
      src="/families1-infants.jpg"
      alt="Escoltem els infants"
      className="h-64 w-full object-cover"
    />

    <div className="p-6">
      <h3 className="text-2xl font-bold text-[#7B5FA3]">
        1. Escoltem els infants
      </h3>

      <p className="mt-4 text-[#6B5E72]">
        Conversem amb infants i adolescents per entendre com viuen
        l'arribada del primer mòbil, què els il·lusiona, què els preocupa
        i quines necessitats hi ha darrere de la seva demanda.
      </p>
    </div>
  </div>

  <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-sm">
    <img
      src="/families1-families.jpg"
      alt="Escoltem les famílies"
      className="h-64 w-full object-cover"
    />

    <div className="p-6">
      <h3 className="text-2xl font-bold text-[#4E9A61]">
        2. Escoltem les famílies
      </h3>

      <p className="mt-4 text-[#6B5E72]">
        Conversem amb les famílies sobre les seves inquietuds, els límits,
        l'autonomia, la seguretat digital, la convivència i els canvis que
        sovint apareixen amb l'arribada del primer mòbil.
      </p>
    </div>
  </div>

  <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-sm">
    <img
      src="/families1-trobada.jpg"
      alt="Ens trobem"
      className="h-64 w-full object-cover"
    />

    <div className="p-6">
      <h3 className="text-2xl font-bold text-[#D98A2B]">
        3. Ens trobem
      </h3>

      <p className="mt-4 text-[#6B5E72]">
        Ens trobem per comprendre millor les necessitats i preocupacions de
        l'altra part, afavorir el diàleg i construir acords que ajudin a
        cuidar la convivència familiar.
      </p>
    </div>
  </div>

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