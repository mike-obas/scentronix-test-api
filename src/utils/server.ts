export interface ServerType {
  url: string;
  priority: number;
}

export const servers = [
  {
    url: "https://does-not-work.perfume.new",
    priority: 1,
  },
  {
    url: "https://gitlab.com",
    priority: 4,
  },
  {
    url: "http://app.scnt.me",
    priority: 3,
  },
  {
    url: "https://offline.scentronix.com",
    priority: 2,
  },
];

export function newAbortSignal(timeout: number) {
  const abortController = new AbortController();
  setTimeout(() => abortController.abort(), timeout || 0);
  return abortController.signal;
}

export const getLowestPriority = (array: any) => {
  const removeNull = array.filter((item: ServerType) => item !== null);
  const ascOrderArr = removeNull.reduce(function (
    prev: ServerType,
    current: ServerType
  ) {
    return prev.priority < current.priority ? prev : current;
  });
  return ascOrderArr;
};
