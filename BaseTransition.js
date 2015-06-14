import { BaseArray } from './BaseArray';

import { duration } from './transition/duration';
import { tagged } from './selection/tagged';
import { remove } from './selection/remove';
import { delay } from './transition/delay';
import { ease } from './transition/ease';
import { each } from './transition/each';

export class Transition extends BaseArray {
  constructor(input) {
    super(input);
  }

  static factory(groups, ns, id) {
    var trans = Transition.from(groups);
    trans.namespace = ns;
    trans.id = id;

    return trans;
  }
}

Transition.prototype.duration = duration;
Transition.prototype.tagged = tagged;
Transition.prototype.remove = remove;
Transition.prototype.delay = delay;
Transition.prototype.ease = ease;
Transition.prototype.each = each;
