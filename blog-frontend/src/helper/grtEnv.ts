export const getEnv: (envname: string) => string | undefined = (envname) => {
  const env = import.meta.env;
  return env[envname];
};
