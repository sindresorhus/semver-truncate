import {expectType} from 'tsd';
import semverTruncate from './index.js';

expectType<string>(semverTruncate('1.2.3-foo', 'patch'));
expectType<string>(semverTruncate('1.2.3', 'minor'));
expectType<string>(semverTruncate('1.2.3', 'major'));
