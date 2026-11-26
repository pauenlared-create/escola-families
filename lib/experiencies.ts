// Experiències publicades a /experiencies.
//
// Les famílies les envien amb el formulari de la pàgina i arriben per correu a
// hola@escoladefamilies.cat. Quan se'n vol publicar una, s'afegeix aquí (les més
// noves a dalt). El text es mostra en l'idioma en què s'ha escrit; deixeu una línia
// en blanc entre paràgrafs.
//
// Exemple:
// {
//   id: "escola-exemple-2026",
//   school: "Escola Exemple",
//   town: "Granollers",
//   schoolType: "Pública",
//   stage: "Primària",
//   themes: ["diversity", "families"],
//   headline: "A l'escola cada infant té el seu pla i ningú no queda enrere",
//   story: "Primer paràgraf…\n\nSegon paràgraf…",
//   signature: "Una mare de 3r de primària",
//   date: "2026-11",
// },

export type ExperienceTheme = "diversity" | "families";

export type Experience = {
  id: string;
  /** Opcionals: si no s'indiquen, la targeta només mostra l'etapa. */
  school?: string;
  town?: string;
  schoolType?: string;
  stage: string;
  themes: ExperienceTheme[];
  headline: string;
  story: string;
  signature: string;
  /** Mes de publicació, format AAAA-MM */
  date: string;
};

export const experiences: Experience[] = [
  {
    id: "matematiques-cicle-superior",
    stage: "Primària (cicle superior)",
    themes: ["diversity", "families"],
    headline: "Cada alumne avançava pel llibre de matemàtiques al seu ritme, i tots en van sortir guanyant",
    story:
      "A cinquè i sisè hi havia la mateixa diversitat que a qualsevol aula: alumnes que encara no sabien restar portant i d'altres que acabaven els exercicis abans que els companys haguessin escrit la data. Cada explicació a tot el grup arribava només a una part de la classe, i tothom perdia temps, cadascú per un motiu diferent.\n\n" +
      "Amb el permís de l'equip directiu, vam convocar les famílies a una reunió extraordinària. No canviàvem els llibres ni el temari, sinó l'organització de la classe: cada alumne avançaria pel llibre al seu ritme, amb un objectiu ajustat a cadascú, i demanaria fer la prova d'un tema quan cregués que l'havia entès. Unes famílies s'hi van il·lusionar i d'altres van desconfiar. Ho vam parlar obertament i vam quedar de tornar-nos a trobar per valorar com anava.\n\n" +
      "Els primers dies van ser durs: molt de xivarri i alumnes perduts perquè ningú no els deia què havien de fer. Però tenien el llibre, un quadern de solucions, exercicis de reforç i d'ampliació, material manipulatiu i, sobretot, els companys. El mestre deixava de ser la primera opció per convertir-se en un recurs, i podia dedicar temps a qui el necessitava, sovint en petit grup.\n\n" +
      "A final de curs, uns set de cada deu alumnes havien acabat el llibre. Alguns l'havien enllestit al tercer trimestre i van començar continguts d'ESO; d'altres, que odiaven les matemàtiques, les van començar a mirar d'una altra manera. Tots van guanyar autonomia i responsabilitat. I una lliçó per a les famílies: els que més van costar d'adaptar-se no eren els alumnes amb més dificultats, sinó els que estaven acostumats que algú els digués què fer a cada moment.",
    signature: "Pau Campderrós, mestre de cicle superior. Experiència recollida al llibre Famílies que canvien escoles.",
    date: "2026-11",
  },
];
