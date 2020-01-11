
const assert = require('assert');

describe('webpack.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base.js')

    it('entry', () => {
        assert.equal(baseConfig.entry.index, '/Users/lvbo/github_code/my_code/js/wepack-learn/chapter04/myproject/builder-webpack/test/smoke/template/src/index/index.js');
        assert.equal(baseConfig.entry.search, '/Users/lvbo/github_code/my_code/js/wepack-learn/chapter04/myproject/builder-webpack/test/smoke/template/src/search/index.js');
    });
});