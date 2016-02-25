import IOptions from '../IOptions';
import defaultOptions from '../DefaultOptions';
import * as extend from 'extend';
import Trigger from '../Trigger';

let camelize = require('camelize');

class Options implements IOptions {
  trigger: Trigger[];
  content: string;
  placement: string;
  placementOffset: number;
  optimizePlacement: boolean;
  transitionPlacement: boolean;
  alignment: string;
  alignmentOffset: number;
  viewportPadding: number;
  timeToHoverOnPop: number;
  showDelay: number;
  fadeDuration: number;

  static fromLiteral(opts: { [key: string]: any }): Options {
      return extend(this, opts);
  }

  constructor(opts?: IOptions) {
    this.extendDefault(opts);
  }

  extendDefault(opts: IOptions): Options {
    return extend(this, defaultOptions, opts);
  }

  extend(opts: IOptions): Options {
    return extend(this, opts);
  }

  fromElement(el: Element): Options {
    if (!el) {
      return this;
    }

    for (let i = 0; i < el.attributes.length; i++) {
      let attr = el.attributes[i];
      let opts: IOptions = {};

      // if (this.isOptionAttr(attr.name)) {
      //   let key: string = camelize(attr.name);
      //   (<any>opts)[key] = attr.value;
      // }
    }
  }

}

export default Options;