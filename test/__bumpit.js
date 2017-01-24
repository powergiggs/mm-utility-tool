const expect = require('chai').expect;
const util = require('../utility-tool');

describe('Version Bump Utility', () => {
  it('Test Major', () => {
    const patch = util.bumpIt('1.9.9', 'Major');
    expect(patch).to.be.equal('2.0.0');
  });

  it('Test Minor', () => {
    const patch = util.bumpIt('1.9.9', 'minor');
    expect(patch).to.be.equal('1.10.0');
  });

  it('Test Patch', () => {
    const patch = util.bumpIt('1.9.9', 'patch');
    expect(patch).to.be.equal('1.9.10');
  });
});
