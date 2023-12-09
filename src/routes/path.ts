const path = (root: string, subLink: string) => `${root}${subLink}`;

const ROOTS = "/";
const ROOTS_LISTER = "/lister";
const ROOTS_RECENTS = "/recents";

export const PATHS = {
  root: ROOTS,

  lister: {
    root: ROOTS_LISTER,
    single: (id: string) => path("/lister", `/${id}`),
  },

  recents: {
    root: ROOTS_RECENTS,
  },
};
