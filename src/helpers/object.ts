import _, { camelCase, snakeCase } from 'lodash';

export const snakize = <T>(obj: Record<string, any>) => {
  // @ts-ignore
  _.mapKeys(obj, function(value, key) {
    return _.snakeCase(key);
  });
};