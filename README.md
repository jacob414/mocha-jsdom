# Running Mocha tests under Node.js with a jsdom

This is a proof of concept project to find a convenient way of running
Mocha tests via the Node.js runner using
[jsdom](https://www.npmjs.org/package/jsdom), to create a more browser
like environment. You might want to do that to test symantic aspects
of your program in Node.js without having to load the entire thing in
a browser, mostly for performance reasons.

The callback based ways described in jsdom's page will have a little
hard time to trigger Mocha to run your suites, so to do this you need
to use the methods described by jsdom's docs as "For the
hardcore". Actually it isn't that difficult, and this little project
shows how to do it.

## How to try:

Manual (at least for now). Clone, then prepare your directory by
running a `npm install`:

    $ npm install

You should see lots of output.

Have a look at the `test.js` file. It initializes a `jsdom` object in
the `describe` function and points a closure local '`document`' to it
in a way that preceding tests will have an environment that reasonably
much resembles a web browser. The `run.sh` script will run the spec.

A somewhat uglier but more realistic simulation for larger codebases
would be to assign the return value of the call to `jsdom.jsdom` to
`global.document`.
