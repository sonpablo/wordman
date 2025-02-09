const defaultDuration = 500;

export const sleep = (duration = defaultDuration): Promise<undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, duration);
  });
};

export const block = (duration = defaultDuration) => {
  const start = performance.now();
  while (performance.now() < start + duration) {}
};

export const makeExpensive = <T extends (...args: any[]) => any>(
  fn: T,
  duration = defaultDuration,
): ((...args: Parameters<T>) => ReturnType<T>) => {
  return (...args: Parameters<T>): ReturnType<T> => {
    block(duration);
    return fn(...args);
  };
};

export const makeExpensivePromise = <T extends (...args: any[]) => any>(
  fn: T,
  duration = defaultDuration,
): ((...args: Parameters<T>) => Promise<ReturnType<T>>) => {
  return async (...args: Parameters<T>): Promise<ReturnType<T>> => {
    await new Promise((resolve) => setTimeout(resolve, duration));
    return fn(...args);
  };
};
