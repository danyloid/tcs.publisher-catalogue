import { helper } from '@ember/component/helper';

export default helper(function formatDateIso([date]) {
  if (!date) return '';
  if (typeof date === 'string') {
    date = new Date(date);
  }

  return typeof date.toISOString === 'function'
    ? date.toISOString().substr(0, 10) // hacky but will do the work, this herlper is about date only
    : date;
});
