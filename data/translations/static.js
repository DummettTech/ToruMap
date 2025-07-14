import {
  getScheduleTranslationData,
  getCurrentAndNextData,
  formatBoothPopupText,
} from "../../lib/languageUtils";

const scheduleData = getScheduleTranslationData();

export const en = {
  artStands: {
    group: {
      name: "Art Stands",
      popup: `Zoom in to see more!`,
    },
    northWall: {
      booths: [
        {
          name: "DRAKOSHACREATIONS",
          popup: formatBoothPopupText({
            name: "DRAKOSHACREATIONS",
            socials: [
              {
                platform: "Instagram",
                name: "@drakoshacreations",
                link: "https://www.instagram.com/drakoshacreations",
              },
            ],
          }),
        },
        {
          name: "HARUEMPATHY",
        },
        {
          name: "Felaulait",
        },
        {
          name: "Remi",
          popup: formatBoothPopupText({
            name: "Remi",
            socials: [
              {
                platform: "Website",
                name: "RemiDoesArt.carrd",
                link: "https://remidoesart.carrd.co/",
              },
            ],
          }),
        },
        {
          name: "VIKOBELO\n&\nkatja vasileva",
        },
        {
          name: "RaptorJules",
          popup: formatBoothPopupText({
            name: "RaptorJules",
            socials: [
              {
                platform: "Instagram",
                name: "@raptorjules",
                link: "https//instagram.com/raptorjules",
              },
              {
                platform: "Bluesky",
                name: "@raptorjules",
                link: "https://bsky.app/profile/raptorjules.bsky.social",
              },
              {
                platform: "webtoon",
                name: "@raptorjules",
                link: "https://www.webtoons.com/p/community/en/u/Raptorjules",
              },
              {
                platform: "Spotify",
                name: "Mil-Liminal",
                link: "https://open.spotify.com/show/2N206VWT5SPC3EqISTkXrB",
              },
            ],
          }),
        },
        {
          name: "Super Gay Productions -\nShady Stand",
          popup: formatBoothPopupText({
            name: "Super Gay Productions",
            socials: [
              {
                platform: "Website",
                link: "https://supergayproductions.com/",
                name: "SupergayProductions.com",
              },
            ],
          }),
        },
        {
          name: "BunnyBeans",
          popup: formatBoothPopupText({
            name: "BunnyBeans",
            socials: [
              {
                platform: "Website",
                link: "https://bunnybeansbusiness.carrd.co/",
                name: "BunnyBeansBusinessCarrd",
              },
              {
                platform: "Instagram",
                link: "https://www.instagram.com/bunnybeans_social/",
                name: "@bunnybeans_social",
              },
              {
                platform: "Bluesky",
                link: "https://bsky.app/profile/bunny-beans.bsky.social",
                name: "@bunnybeans",
              },
            ],
          }),
        },
        {
          name: "Vernilleart",
        },
        {
          name: "Mariiblossom",
          popup: formatBoothPopupText({
            name: "Mariiblossom",
            socials: [
              {
                platform: "Website",
                name: "Mariiblossom.carrd",
                link: "https://mariiblossom.carrd.co/",
              },
              {
                platform: "Instagram",
                name: "@mariiblossom",
                link: "https://www.instagram.com/mariiblossom",
              },
            ],
          }),
        },
        {
          name: "Micamandrake",
        },
        {
          name: "Ingri\nNedkvitne",
        },
        {
          name: "Sunncean",
          popup: formatBoothPopupText({
            name: "Sunncean",
            socials: [
              {
                name: "@sunncean",
                platform: "Tumblr",
                link: "https://www.tumblr.com/sunncean",
              },
              {
                name: "@sunncean",
                platform: "Instagram",
                link: "https://www.instagram.com/sunncean/",
              },
            ],
          }),
        },
        {
          name: "Doctor Hale's Apothecary\nand\nCuriosities",
        },
        {
          name: "Twisted\nToadstools",
          popup: formatBoothPopupText({
            name: "Twisted Toadstools",
            socials: [
              {
                platform: "Instagram",
                name: "@yarningbyjulie",
                link: "https://instagram.com/yarningbyjulie",
              },
            ],
          }),
        },
        {
          name: "Octogear\nIllustration",
        },
      ],
    },
    southWall: {
      booths: [
        {
          name: "Neicha's\nart",
          popup: formatBoothPopupText({
            name: "Neicha's art",
            socials: [
              {
                platform: "Twitch",
                name: "navnesen",
                link: "https://twitch.tv/navnesen",
              },
              {
                platform: "Instagram",
                name: "@neichasart",
                link: "https://instagram.com/neichasart",
              },
              {
                platform: "Bluesky",
                name: "@neichasart",
                link: "https://bsky.app/profile/neichasart.bsky.social",
              },
              {
                platform: "Twitter",
                name: "@neichasart",
                link: "https://twitter.com/neichasart",
              },
            ],
          }),
        },
        {
          name: "Mørkalven",
        },
        {
          name: "Oliver\nLevang",
          popup: formatBoothPopupText({
            name: "Oliver Levang",
            socials: [
              {
                name: "oliverlevang.com",
                link: "https://oliverlevang.com/",
                platform: "Website",
              },
              {
                name: "@oliverlevang",
                link: "https://instagram.com/oliverlevang",
                platform: "Instagram",
              },
              {
                name: "@oliverlevang",
                link: "https://twitter.com/oliverlevang",
                platform: "Twitter",
              },
            ],
          }),
        },
        {
          name: "Vinter",
          popup: formatBoothPopupText({
            name: "Vinter",
            socials: [
              {
                platform: "Instagram",
                link: "https://instagram.com/vinterc",
                name: "@vinterc",
              },
              {
                platform: "Twitter",
                link: "https://twitter.com/vinterc",
                name: "@VinterC",
              },
              {
                platform: "Tapas",
                link: "https://tapas.io/series/Love-Spells",
                name: "Love Spells",
              },
            ],
          }),
        },
        {
          name: "Fairytales from\nthe North",
          popup: formatBoothPopupText({
            name: "Fairytales from the North",
            socials: [
              {
                platform: "Instagram",
                link: "https://instagram.com/fairytalesfromthenorth",
                name: "@fairytalesfromthenorth ",
              },
              {
                platform: "Instagram",
                link: "https://www.instagram.com/tacooutsider/",
                name: "@tacooutsider",
              },
              {
                platform: "Instagram",
                link: "https://www.instagram.com/midnight_c_artist/",
                name: "@midnight_c_artist",
              },
            ],
          }),
        },
        {
          name: "Suncloud\nArt",
        },
        {
          name: "Hollow\nThread",
        },
        {
          name: "FountainHeartShop",
          popup: formatBoothPopupText({
            name: "FountainHeartShop",
            socials: [
              {
                platform: "Website",
                name: "Fountainheartshop.com",
                link: "https://fountainheartshop.com/",
              },
              {
                platform: "Instagram",
                name: "@fountainheartshop",
                link: "https://www.instagram.com/fountainheartshop",
              },
            ],
          }),
        },
      ],
    },
    cosmo: {
      booths: [
        {
          name: "Sandviknes\nDesigns",
          popup: formatBoothPopupText({
            name: "Sandviknes Designs",
            socials: [
              {
                name: "Sandviknes Designs",
                link: "https://sandviknes-designs.sumupstore.com/",
                platform: "Website",
              },
              {
                name: "@amoryllis_studios",
                link: "https://instagram.com/amoryllis_studios",
                platform: "Instagram",
              },
              {
                name: "@Amoryllisstudios",
                link: "https://bsky.app/profile/amoryllisstudios.bsky.social",
                platform: "Bluesky",
              },
            ],
          }),
        },
        {
          name: "Probably\nHandmade",
          popup: formatBoothPopupText({
            name: "",
            socials: [
              {
                platform: "Instagram",
                name: "@probably_handmade",
                link: "https://instagram.com/probably_handmade",
              },
              {
                platform: "Bluesky",
                name: "@riwonart",
                link: "https://bsky.app/profile/riwonart.bsky.social",
              },
            ],
          }),
        },
        {
          name: "North\nHylian",
          popup: formatBoothPopupText({
            name: "North Hylian",
            socials: [
              {
                platform: "TikTok",
                name: "@north_hylian",
                link: "https://www.tiktok.com/@north_hylian",
              },
              {
                platform: "Instagram",
                name: "@north_hylian",
                link: "https://instagram.com/North_Hylian",
              },
            ],
          }),
        },
        {
          name: "Soldugg 3D",
        },
        {
          name: "Erna Klùver",
        },
        {
          name: "Black Crane Creations",
          popup: formatBoothPopupText({
            name: "Black Crane Creations",
            socials: [
              {
                platform: "Website",
                name: "BlackCraneCrations",
                link: "https://blackcranecreations.bigcartel.com/",
              },
              {
                platform: "Etsy",
                name: "BlackCraneCreations",
                link: "https://www.etsy.com/shop/BlackCraneCreations",
              },
              {
                platform: "Instagram",
                name: "@blackcranecreations",
                link: "https://www.instagram.com/blackcranecreations/",
              },
            ],
          }),
        },
        {
          name: "Emeraldus\nog\nKessi",
          popup: formatBoothPopupText({
            name: "Emeraldus og Kessi",
            socials: [
              {
                name: "Emeraldusdeisgn",
                platform: "Website",
                link: "https://www.emeraldusdesign.com/",
              },
              {
                name: "@kasandra.hs",
                platform: "Instagram",
                link: "https://www.instagram.com/kasandra.hs",
              },
            ],
          }),
        },
        {
          name: '"Linnpuzzle\'s Art"\n&\n"Ainthra\'s Craft"',
        },
        {
          name: "What Crosstitch",
          popup: formatBoothPopupText({
            name: "What Crosstitch",
            socials: [
              {
                link: "https://instagram.com/whatcrosstitch",
                name: "@whatcrosstitch",
                platform: "Instagram",
              },
            ],
          }),
        },
        {
          name: "Lev Zy",
          popup: formatBoothPopupText({
            name: "",
            socials: [
              {
                platform: "TikTok",
                name: "@lev_zy",
                link: "https://www.tiktok.com/@lev_zy",
              },
              {
                platform: "Instagram",
                name: "@lev_zyy",
                link: "https://instagram.com/lev_zyy",
              },
              {
                platform: "Twitter",
                name: "@lev_zy",
                link: "https://twitter.com/lev_zy",
              },
            ],
          }),
        },
        {
          name: "Tanukified",
        },
        {
          name: "Pixiqing",
        },
        {
          name: "KaiSi Amigurumi",
        },
        {
          name: "Greywolf\nCraft",
          popup: formatBoothPopupText({
            name: "Greywolf Craft",
            socials: [
              {
                name: "Rsellaeg",
                platform: "Facebook",
                link: "https://www.facebook.com/Rsellaeg",
              },
            ],
          }),
        },
        {
          name: "LonaBeCrafting",
        },
        {
          name: "Livvydarling",
          popup: formatBoothPopupText({
            name: "Livvydarling",
            socials: [
              {
                name: "@livlingborn ",
                platform: "Instagram",
                link: "https://instagram.com/livlingborn",
              },
            ],
          }),
        },
        {
          name: "Sivicious' Mockery\n+\nKreturidesku",
          popup: formatBoothPopupText({
            name: "Sivicious' Mockery + Kreturidesku",
            socials: [
              {
                platform: "Instagram",
                name: "@sivicious_mockery",
                link: "https://instagram.com/sivicious_mockery",
              },
            ],
          }),
        },
      ],
    },
    otherCosmo: [
      { name: "Nerdeportalen" },
      {
        name: "Amai",
        popup: formatBoothPopupText({
          name: "Amai",
          socials: [
            {
              name: "@amai_shop",
              platform: "Instagram",
              link: "https://www.instagram.com/amai_shop",
            },
            {
              platform: "Facebook",
              name: "AMAI",
              link: "https://www.facebook.com/amaishopse/",
            },
          ],
        }),
      },
      { name: "Rainbow island" },
      { name: "Outland" },
      { name: "TikoCosplay" },
      { name: "Poki-Haven" },
    ],
  },
  infoStand: {
    name: "Info Stand",
  },
  selfieHunt: {
    name: "Selfie Hunt",
  },
  hexcon: {
    name: "Hexcon",
  },
  toruship: {
    name: "Toruship",
  },
  medic: {
    name: "Medic",
  },
  cosplayHelp: {
    name: "Cosplay Help",
  },
  tickets: {
    name: "Tickets & Merch",
  },
  auroraB: [
    {
      name: "DICETROLLS",
      popup: formatBoothPopupText({
        name: "DICETROLLS",
        socials: [
          {
            platform: "Website",
            name: "Dicetrolls.no",
            link: "https://www.dicetrolls.no/",
          },
          {
            platform: "TikTok",
            name: "@dicetrolls0",
            link: "https://www.tiktok.com/@dicetrolls0",
          },
          {
            platform: "Instagram",
            link: "https://www.instagram.com/dicetrolls",
            name: "@dicetrolls",
          },
        ],
      }),
    },
    {
      name: "NORWEGIAN GARRISON",
      popup: formatBoothPopupText({
        name: "NORWEGIAN GARRISON",
        socials: [
          {
            name: "Norwegian Garrison.no",
            platform: "Website",
            link: "https://norwegiangarrison.no/",
          },
          {
            name: "@501stNorwegianGarrison",
            platform: "Instagram",
            link: "https://www.instagram.com/501stnorwegiangarrison/",
          },
        ],
      }),
    },
    {
      name: "TFU",
    },
  ],
  auroraC: [
    {
      name: "bystudiobeans",
    },
    {
      name: "Ecchi Ink",
    },
    {
      name: "Bizziton craft\n&\nWhitespaceProps",
      popup: formatBoothPopupText({
        name: "BizzitonCrafts & WhitespaceProps",
        socials: [
          {
            name: "BizzitonCrafts",
            platform: "Website",
            link: "https://www.bizziprops.shop/",
          },
          {
            name: "Norwegian Garrison.no",
            platform: "Website",
            link: "https://norwegiangarrison.no/",
          },
          {
            name: "@BizzitonCrafts",
            platform: "Instagram",
            link: "https://instagram.com/BizzitonCrafts",
          },
          {
            name: "@501stNorwegianGarrison",
            platform: "Instagram",
            link: "https://www.instagram.com/501stnorwegiangarrison/",
          },
        ],
      }),
    },
  ],
  lectureRoom1: {
    name: () => getCurrentAndNextData("Cosmos C", scheduleData.cosmosC),
    popup: "TBD",
  },
  lectureRoom2: {
    name: () => getCurrentAndNextData("Cosmos D", scheduleData.cosmosD),
    popup: "TBD",
  },
  stage: {
    name: () => getCurrentAndNextData("Events Stage", scheduleData.comsos),
    popup: "TBD",
  },
  arcade: {
    name: "Arcade & Breach Demo",
    popup: `Somewhere to cool off and relax!`,
  },
  toilet: {
    name: "Toilet",
  },
  coolRoom: {
    name: "Polaris\nCool Room",
    popup: `Area to chill out and relax!`,
  },
  sirius: {
    name: () =>
      getCurrentAndNextData(`Sirius\nD&D & Warhammer`, scheduleData.sirius),
    popup: "TBD",
  },
  vega: {
    name: () =>
      getCurrentAndNextData("Vega\nWorkshop and Quiz", scheduleData.vega),
    popup: "TBD",
  },
  infoDesk: {
    name: "Info Desk",
  },
};

export const no = {
  artStands: {
    group: {
      name: "Art Stands",
      popup: `Zoom inn for mer!`,
    },
    northWall: {
      booths: [
        {
          name: "DRAKOSHACREATIONS",
        },
        {
          name: "HARUEMPATHY",
        },
        {
          name: "Felaulait",
        },
        {
          name: "Remi",
        },
        {
          name: "VIKOBELO\n&\nkatja vasileva",
        },
        {
          name: "RaptorJules",
        },
        {
          name: "Super Gay Productions -\nShady Stand",
        },
        {
          name: "BunnyBeans",
        },
        {
          name: "Vernilleart",
        },
        {
          name: "Mariiblossom",
        },
        {
          name: "Micamandrake",
        },
        {
          name: "Ingri\nNedkvitne",
        },
        {
          name: "Sunncean",
        },
        {
          name: "Doctor Hale's Apothecary\nand\nCuriosities",
        },
        {
          name: "Twisted\nToadstools",
        },
        {
          name: "Octogear\nIllustration",
        },
      ],
    },
    southWall: {
      booths: [
        {
          name: "Neicha's\nart",
        },
        {
          name: "Mørkalven",
        },
        {
          name: "Oliver\nLevang",
        },
        {
          name: "Vinter",
        },
        {
          name: "Fairytales from\nthe North",
        },
        {
          name: "Suncloud\nArt",
        },
        {
          name: "Hollow\nThread",
        },
        {
          name: "FountainHeartShop",
        },
      ],
    },
    cosmo: {
      booths: [
        {
          name: "Sandviknes\nDesigns",
        },
        {
          name: "Probably\nHandmade",
        },
        {
          name: "North\nHylian",
        },
        {
          name: "Soldugg 3D",
        },
        {
          name: "Erna Klùver",
        },
        {
          name: "Black Crane Creations",
        },
        {
          name: "Emeraldus\nog\nKessi",
        },
        {
          name: '"Linnpuzzle\'s Art"\n&\n"Ainthra\'s Craft"',
        },
        {
          name: "What Crosstitch",
        },
        {
          name: "Lev Zy",
        },
        {
          name: "Tanukified",
        },
        {
          name: "Pixiqing",
        },
        {
          name: "KaiSi Amigurumi",
        },
        {
          name: "Greywolf\nCraft",
        },
        {
          name: "LonaBeCrafting",
        },
        {
          name: "Livvydarling",
        },
        {
          name: "Sivicious' Mockery\n+\nKreturidesku",
        },
      ],
    },
    otherCosmo: [
      { name: "Nerdeportalen" },
      { name: "Outland" },
      { name: "TikoCosplay" },
      { name: "Poki-Haven" },
    ],
  },
  infoStand: {
    name: "Info Stand",
  },
  selfieHunt: {
    name: "Selfie Hunt",
  },
  hexcon: {
    name: "Hexcon",
  },
  toruship: {
    name: "Toruship",
  },
  medic: {
    name: "Medic",
  },
  cosplayHelp: {
    name: "Cosplay Help",
  },
  tickets: {
    name: "Tickets",
  },
  auroraB: [
    {
      name: "DICETROLLS",
    },
    {
      name: "NORWAY GARRISON",
    },
    {
      name: "TFU",
    },
  ],
  auroraC: [
    {
      name: "bystudiobeans",
    },
    {
      name: "Ecchi Ink",
    },
    {
      name: "Bizziton craft\n&\nwhitspace props",
    },
  ],
  lectureRoom1: {
    name: () => getCurrentAndNextData("Cosmos C", scheduleData.cosmosC),
    popup: "TBD",
  },
  lectureRoom2: {
    name: () => getCurrentAndNextData("Cosmos D", scheduleData.cosmosD),
    popup: "TBD",
  },
  stage: {
    name: () => getCurrentAndNextData("Eventstadiet", scheduleData.comsos),
    popup: "TBD",
  },
  arcade: {
    name: "Arkade og Breach Demo",
    popup: `Kos deg med arkadespillene!<br>
        Et sted hvor spillere kan ha det gøy!`,
  },
  toilet: {
    name: "Toalett",
  },
  coolRoom: {
    name: "Polaris\nCool Room",
    popup: `Et sted å kjøle seg ned og slappe av!`,
  },
  sirius: {
    name: () =>
      getCurrentAndNextData(`Sirius\nD&D og Warhammer`, scheduleData.sirius),
    popup: "TBD",
  },
  vega: {
    name: () =>
      getCurrentAndNextData("Vega\nWorkshop og Quiz", scheduleData.vega),
    popup: "TBD",
  },
  infoDesk: {
    name: "Info Desk",
  },
};
