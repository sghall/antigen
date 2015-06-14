import { BaseArray } from './BaseArray';
import { tagged } from './selection/tagged';
import { remove } from './selection/remove';
import { duration } from './transition/duration';
import { delay } from './transition/delay';
import { ease } from './transition/ease';
import { each } from './transition/each';
import { select } from './transition/select';
import { transition } from './transition/transition';

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

Transition.prototype.tagged = tagged;
Transition.prototype.duration = duration;
Transition.prototype.delay = delay;
Transition.prototype.remove = remove;
Transition.prototype.ease = ease;
Transition.prototype.each = each;
Transition.prototype.select = select;
Transition.prototype.transition = transition;
