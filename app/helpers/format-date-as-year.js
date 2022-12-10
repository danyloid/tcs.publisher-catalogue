import { helper } from '@ember/component/helper';

export default helper(function formatDateAsYear([date]) {
  if (!date) return '';
  if (typeof date === 'string') {
    date = new Date(date);
  }

  return typeof date.toLocaleDateString === 'function'
    ? date.toLocaleDateString('en-US', { year: 'numeric' })
    : date;
});
