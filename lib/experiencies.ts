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
  school: string;
  town: string;
  schoolType: string;
  stage: string;
  themes: ExperienceTheme[];
  headline: string;
  story: string;
  signature: string;
  /** Mes de publicació, format AAAA-MM */
  date: string;
};

export const experiences: Experience[] = [];
