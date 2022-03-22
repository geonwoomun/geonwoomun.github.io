export const createURL = ({
  nowPath,
  params,
}: {
  nowPath: string;
  params?: {
    [key: string]: string;
  };
}) => {
  if (!params) {
    return nowPath;
  }

  const refinedParams = Object.entries(params).reduce((acc, [key, value]) => {
    if (key && value) {
      acc.push([key, value]);
      return acc;
    }
    return acc;
  }, [] as [string, string][]);

  return (
    nowPath +
    refinedParams.reduce((acc, [key, value], index) => {
      if (index === 0) {
        return `${acc}${key}=${value}`;
      }
      return `${acc}&${key}=${value}`;
    }, '?')
  );
};
