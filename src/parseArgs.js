export const parseArgs = () => {
  const args = process.argv.slice(2);
  const parsedArgs = args.reduce((acc, argString) => {
    const [arg, value] = argString.split("=");
    if (arg.startsWith("--") && value) {
      return { ...acc, [arg.slice(2)]: value };
    }
    return acc;
  }, {});
  return parsedArgs;
};
