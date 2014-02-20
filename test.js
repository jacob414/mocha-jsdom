var jsdom = require('jsdom'),
    should = require('should');

describe("With describe at top", function() {
  var document = jsdom.jsdom("<div id=\"a-div\">With content.</div>",
                             jsdom.level(1, 'core'));

  it("Should now have a browser-like experience", function() {
    should.exist(document.getElementById('a-div'));
  });
});
