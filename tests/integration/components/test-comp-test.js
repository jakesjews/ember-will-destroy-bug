import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | test-comp', function(hooks) {
  setupRenderingTest(hooks);

  test('it call destroy on all components', async function(assert) {
    this.set('items', [1,2]);
    await render(hbs`
      {{#each this.items as |item|}}
        <TestComp />
      {{/each}}
    `);
    assert.expect(0);
  });

  test('it does not call destroy on all components', async function(assert) {
    this.set('items', [1]);
    await render(hbs`
      {{#each this.items as |item|}}
        <TestComp />
      {{/each}}
    `);
    this.items.pushObject(2);
    await settled();
    assert.expect(0);
  });
});
