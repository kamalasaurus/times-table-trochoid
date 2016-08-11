# Times Table Trochoid

![times-table-trochoid](/times-table-trochoid.gif)

Apparently this thing is called a times table.  Or a trochoid.  Or a
cycloid (which is a subset of trochoids).

The algorithm's pretty simple.  This awesome dude tells you how to do
it: https://youtu.be/qhbuKbxJsk8.

Otherwise, this was primarily practice on how to use the `with` keyword
in Javascript, which is widely regarded as a Bad Part of Javascript as
per Crockford.

However, my understanding is that it is favored in Demoscene because it
doesn't allocate additional memory for the references passed into it.
That's pretty cool.

Basically, all keys passed into the `with` directive as `with({key1: ...,
key2: ..., ...}` take precedence even over `var` declarations inside a
`with` block.  Meaning even declaring `var key1` inside the scope will
be ignored and `key1` will continue to point at the `key1` passed into
the with block.  But it lets you do math without invoking the `Math`
object all the time.  That's pretty sweet.

That said, I would never use it in code that I expected other people to
read or maintain.  Neither should you.  Yeah.

