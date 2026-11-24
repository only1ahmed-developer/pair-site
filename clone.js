/**
 * ======================================================
 *  clone.js   THE ONLY FILE YOU NEED TO EDIT TO REBRAND
 * ======================================================
 *  Everything the site shows (name, logo, colours, layout,
 *  footer, Session ID prefix, WhatsApp message ...) is read
 *  from here. Nothing is hard-coded anywhere else.
 *
 *  You can use these placeholders inside any text below:
 *    {name}       -> brand.name
 *    {botName}    -> brand.botName
 *    {owner}      -> brand.owner
 *    {developer}  -> brand.developer
 *    {year}       -> current year
 *
 *  Leave a text option as '' (empty) to switch that part OFF.
 *  Delete an option completely and the default is used.
 */

module.exports = {

  // ------------------------------------------------------------
  //  BRANDING
  // ------------------------------------------------------------
  brand: {
    name: 'CILLY TECH',          // main brand name (headings, texts, messages)
    botName: 'CILLY XMD',        // bot name shown on the pair page + browser tab
    owner: 'Cilly',                // owner of the brand (use {owner} in texts)
    developer: 'Diest',             // developer name (use {developer} in texts)
    siteTitle: 'CILLY XMD SESSION ID GENERATOR',  // title shown in the top bar (always shown in CAPITALS)
  },

  // ------------------------------------------------------------
  //  LOGO  (two ways, pick one)
  //   1) Put a file named  logo.png  (or logo.jpg / .jpeg / .webp / .svg / .gif)
  //      in the ROOT folder next to this file  -> it is used automatically.
  //   2) Or paste a direct image link below.
  //  If both exist, the file in the root folder wins.
  //  Leave both empty to show no logo.
  // ------------------------------------------------------------
  logo: {
    url: '',
  },

  // ------------------------------------------------------------
  //  SESSION ID (what is generated and sent to WhatsApp)
  // ------------------------------------------------------------
  session: {
    // Text put in front of the Session ID, e.g. 'ADEVOS-X:~'.
    // '' = no prefix (the Session ID is just the plain base64 creds).
    // NOTE: your bot must strip the same prefix when it loads the session.
    prefix: 'CILLY:~',

    // Small footer under the Session ID message in WhatsApp. '' = no footer.
    footer: 'CILLY XMD',

    // Message sent after the Session ID in WhatsApp. '' = send nothing.
    // (WhatsApp formatting works: *bold*, _italic_, > quote)
    message:
      '*Session ID Generated*\n\n' +
      '> POWERED BY {name}',
  },

  // ------------------------------------------------------------
  //  WEBSITE
  // ------------------------------------------------------------
  website: {
    // Small badge above the big title on the home page. '' = hide it.
    badge: 'CILLY XMD SESSION ID GENERATOR - AMAZING ONE',

    // Big title on the home page. '' = hide it.
    title: 'Base64 Session ID Generator',

    // Text under the title. '' = hide it.
    description:
      'Builded with love By Diest',

    // Footer at the bottom of the home page. '' = hide the footer.
    // You may use <b>bold</b> (it is shown in the accent colour).
    footer: 'Powered by <b>CILLY TECH</b> Made by <b>{developer}</b>',
  },

  // ------------------------------------------------------------
  //  THEME  (colour + layout + mode)
  // ------------------------------------------------------------
  theme: {
    // Just type a colour NAME:
    //   green, blue, red, purple, orange, pink, cyan, yellow, teal, gold,
    //   lime, indigo, violet, white ... or any CSS colour name (crimson, tomato,
    //   dodgerblue ...) or a hex code like '#ff0055'.
    color: 'purple',

    // modern | gradient | glass | minimal | cyber
    layout: 'minimal',

    // dark | light     (minimal looks great in 'light')
    mode: 'light',
  },
};
