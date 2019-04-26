import {expectType} from 'tsd';
import semverTruncate = require('.');

expectType<string>(semverTruncate('1.2.3-foo', 'patch'));
expectType<string>(semverTruncate('1.2.3', 'minor'));
expectType<string>(semverTruncate('1.2.3', 'major'));
