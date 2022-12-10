import Component from '@glimmer/component';

export const includesNormalized = (s, q) => {
  if (!s || !s.toLocaleUpperCase || !q || !q.toLocaleUpperCase) return false;
  return s.toLocaleUpperCase().includes(q.toLocaleUpperCase());
};

export default class SharedGridFilterComponent extends Component {
  get results() {
    let { entities, attr, query } = this.args;

    if (query) {
      entities = entities.filter((e) => includesNormalized(e[attr], query));
    }

    return entities;
  }
}
