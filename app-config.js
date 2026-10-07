/* Jireh Trades Content Hub: app settings. None of this is a secret. Access is enforced by firestore.rules
   (who can read/write cards) and by Google Drive sharing (who can upload into the folders). */
window.HUB_CONFIG = {
  appName: "Jireh Trades Content Hub",

  /* Google Cloud OAuth 2.0 Web client ID for the Drive upload (NOT the Firebase apiKey).
     Google Cloud console > APIs & Services > Credentials > the "Content Hub web" client.
     null until Patrick pastes it; the upload button explains itself until then. */
  googleClientId: "912348829745-ptkn90f7gpmcv4fpigma3c3vjf95ugsf.apps.googleusercontent.com",

  /* Drive scope. "drive.file" is the narrow one (files this app creates). If the spike shows Google
     refusing to create files inside an existing folder with it, switch to the full "drive" scope. */
  driveScope: "https://www.googleapis.com/auth/drive.file",

  /* Folders inside "The Comp - Content Production (Tushar)". IDs survive the move into a Shared Drive,
     but re-check them after the move (README, step 0). */
  drive: {
    root:     "10a4Jttu-XxZ8uqv-co1HFEsXyMMlqVmU",
    raw:      "1h57IYXM3UfpY34-Smf297Tp9Co4sUJv_",   // 03 Raw Footage  (Angel uploads here, one subfolder per script)
    finished: "18GefwCgXOgYrHnbK8E4XHtt_6MjCmoCt",   // 04 Finished     (Tushar uploads here)
    broll:    "1EHVF-eVjmvq9SwugoEAYbaMhTudhBovn",   // 05 B-Roll
    brand:    "1Jxp6tj_7RMPd0EqHz06vP4TLiOVfCmF5",   // 01 Brand Kit
    reference:"1O3VWP81_t-KYV642sbwdekq9HQSVMeFg",   // 02 Reference
    startHere:"1MBE0dQtRzNiukzqj0nl7nJU_S6emxlED"    // 00 Start Here
  },

  /* Who is who. Lowercase. Must match the allowlist in firestore.rules.
     admin  = writes scripts, moves anything, sees everything (Patrick)
     talent = films: sees the Film Queue, uploads footage, marks filmed (Angel)
     editor = edits: works Filmed > Editing > Review, uploads finished files (Tushar + ops manager) */
  roles: {
    "patrick@focalpointmarketingagency.com": "admin",
    "jireh@thecomptrading.com": "talent",
    "jirehtrades@gmail.com": "talent",
    "contact.tushar.theoret@gmail.com": "editor",
    "samridhibobal05@gmail.com": "editor"
  },

  /* Resources tab. Docs live in Patrick's Drive and are shared with the team. */
  resources: [
    {group:"Read first", items:[
      {label:"START HERE: Tushar x The Comp (hub doc)", url:"https://docs.google.com/document/d/1cAQS9HeVdvl3Lba55IwcqvIukoy0GotXKb2ql0sMpXk/edit", who:"editor"},
      {label:"Onboarding Pack (Angel in 60s, ICP, story, content rules, deliverables)", url:"https://docs.google.com/document/d/1lkB09hoFxskpekPInw21bnOvMOaNrgzPl4R7SPclqts/edit", who:"all"},
      {label:"Music and audio note (original audio only)", url:"https://docs.google.com/document/d/1uDWspWIrJyrtBDXzERx8772Up80iykJ_npP2zkKdXOY/edit", who:"all"}
    ]},
    {group:"Drive folders", items:[
      {label:"03 Raw Footage (Angel drops here)", url:"https://drive.google.com/drive/folders/1h57IYXM3UfpY34-Smf297Tp9Co4sUJv_", who:"all"},
      {label:"04 Finished (Tushar delivers here)", url:"https://drive.google.com/drive/folders/18GefwCgXOgYrHnbK8E4XHtt_6MjCmoCt", who:"all"},
      {label:"05 B-Roll", url:"https://drive.google.com/drive/folders/1EHVF-eVjmvq9SwugoEAYbaMhTudhBovn", who:"all"},
      {label:"01 Brand Kit (logo, fonts, colors, photos)", url:"https://drive.google.com/drive/folders/1Jxp6tj_7RMPd0EqHz06vP4TLiOVfCmF5", who:"all"},
      {label:"02 Reference (the reel to match, approved carousels and stories)", url:"https://drive.google.com/drive/folders/1O3VWP81_t-KYV642sbwdekq9HQSVMeFg", who:"all"}
    ]},
    {group:"Accounts", items:[
      {label:"Instagram @jireh_trades", url:"https://www.instagram.com/jireh_trades/", who:"all"},
      {label:"TikTok @jireh_trades", url:"https://www.tiktok.com/@jireh_trades", who:"all"},
      {label:"thecomp.info", url:"https://thecomp.info", who:"all"}
    ]}
  ],

  /* Filming checklist shown on the Film Queue. Short on purpose. */
  filmChecklist: [
    "Phone vertical, eye level, you fill the middle third of the frame.",
    "Face the window or a lamp. No light behind you.",
    "Quiet room. Record 3 seconds of silence before you start talking.",
    "Say the hook first, then the script. If you stumble, pause 2 seconds and restart the line (do not stop recording).",
    "Record each hook version as its own short clip after the main take.",
    "Upload straight from the Hub. Then tap Mark filmed."
  ]
};
