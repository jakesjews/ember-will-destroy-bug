import Component from "@glimmer/component";

export default class TestComp extends Component {
  constructor(owner, args) {
    super(owner, args);
    console.log('created');
  }

  willDestroy() {
    console.log('destroying');
  }
}

