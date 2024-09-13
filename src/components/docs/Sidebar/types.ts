export type Entry = {
  label: string;
  url: string;
  entries?: Entry[];
};

export type Group = {
  title: string;
  entries: Entry[];
};
