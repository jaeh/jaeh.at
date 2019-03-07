module.exports = {
  ROOT: 'src',
  THEME: 'jaeh',
  THEME_VARS: {
    black: '#010101',
    white: '#FEFEFE',
    textColor: '#DEDEDE',
    backgroundColor: '#010101',
    linkColor: '#F57C00',
    linkColorLight: '#FB8C00',
    linkColorDark: '#EF6C00',
    borderColor: '#F57C00',
    maxWidth: '1200px',
  },
  FOR_DEATH_CAN_NOT_HAVE_HIM: true,

  SMTP: {
    USER: process.env.SMTP_USER,
    PASS: process.env.SMTP_PASS,
    TO: 'contact@jaeh.at',
  },
}
