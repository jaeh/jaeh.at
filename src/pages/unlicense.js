module.exports = {
  View: (state, actions) => [
    Header.View,
    div({ class: 'page license' }, [
      h3('Licensing'),

      p(`
        If there is no license attached to code i wrote,
        then i consider it to be free as in freedom and in the public domain.
      `),
      p(`
        For those who like (or need) legalese i attach the contents of the unlicense here.
      `),
      p([
        span('If you entered my page through a link and want to know more, just use '),
        Link({ to: '/' }, 'this link'),
        span(' to read more about me.'),
      ]),

      h3('Unlicense'),

      p(`This is free and unencumbered software released into the public domain.`),

      p(`
        Anyone is free to copy, modify, publish, use, compile, sell, or
        distribute this software, either in source code form or as a compiled
        binary, for any purpose, commercial or non-commercial, and by any means.
      `),
      p(`
        In jurisdictions that recognize copyright laws, the author or authors
        of this software dedicate any and all copyright interest in the
        software to the public domain. We make this dedication for the benefit
        of the public at large and to the detriment of our heirs and
        successors. We intend this dedication to be an overt act of
        relinquishment in perpetuity of all present and future rights to this
        software under copyright law.
      `),
      p(`
        THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
        IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
        OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
        ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
        OTHER DEALINGS IN THE SOFTWARE.
      `),
      p([
        span('For more information, please refer to '),
        Link({ to: 'https://unlicense.org' }, 'unlicense.org'),
      ]),
    ]),
  ],
}