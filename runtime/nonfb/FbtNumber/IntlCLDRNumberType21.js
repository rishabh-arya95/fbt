/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @generated SignedSource<<ade345cf5d0e87b69eb9ff795fe24332>>
 *
 * Generated by LanguageCLDRGenScript
 * @codegen-command: flib/intern/scripts/intl/cldr/gencode_all_plurals.sh
 *
 * @flow strict
 */

'use strict';

const IntlVariations = require('IntlVariations');

const IntlCLDRNumberType21 = {
  getVariation(n: number): $Values<typeof IntlVariations> {
    if ((n === 1 || n === 11)) {
      return IntlVariations.NUMBER_ONE;
    } else if ((n === 2 || n === 12)) {
      return IntlVariations.NUMBER_TWO;
    } else if ((n >= 3 && n <= 10 || n >= 13 && n <= 19)) {
      return IntlVariations.NUMBER_FEW;
    } else {
      return IntlVariations.NUMBER_OTHER;
    }
  }
};

module.exports = IntlCLDRNumberType21;
