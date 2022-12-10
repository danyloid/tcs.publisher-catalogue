import { helper } from '@ember/component/helper';

export default helper(function and([...args]) {
  let r = true;
  for (let i = 0; i < args.length; i++) {
    r = r && !!args[i];
  }
  return r;
});
