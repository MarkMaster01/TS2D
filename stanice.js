// STANICE.JS - Databáze železničních stanic a zastávek v ČR
const czechStationsDatabase = [
    // Praha a Středočeský kraj
    { name: "Praha hl.n.", lat: 50.0831, lng: 14.4358 },
    { name: "Praha-Smíchov", lat: 50.0622, lng: 14.4081 },
    { name: "Praha-Vršovice", lat: 50.0664, lng: 14.4442 },
    { name: "Praha-Libeň", lat: 50.1011, lng: 14.4828 },
    { name: "Praha-Holešovice", lat: 50.1092, lng: 14.4397 },
    { name: "Praha-Masarykovo n.", lat: 50.0878, lng: 14.4336 },
    { name: "Kolín", lat: 50.0250, lng: 15.2010 },
    { name: "Kutná Hora hl.n.", lat: 49.9625, lng: 15.2978 },
    { name: "Nymburk hl.n.", lat: 50.1931, lng: 15.0442 },
    { name: "Poděbrady", lat: 50.1481, lng: 15.1239 },
    { name: "Beroun", lat: 49.9575, lng: 14.0722 },
    { name: "Mladá Boleslav hl.n.", lat: 50.4003, lng: 14.8964 },
    { name: "Rakovník", lat: 50.1028, lng: 13.7317 },

    // Ústecký a Liberecký kraj
    { name: "Ústí nad Labem hl.n.", lat: 50.6588, lng: 14.0425 },
    { name: "Děčín hl.n.", lat: 50.7731, lng: 14.2012 },
    { name: "Varnsdorf", lat: 50.9125, lng: 14.6542 },
    { name: "Rumburk", lat: 50.9528, lng: 14.5511 },
    { name: "Šluknov", lat: 51.0028, lng: 14.4533 },
    { name: "Teplice v Čechách", lat: 50.6433, lng: 13.8292 },
    { name: "Most", lat: 50.5103, lng: 13.6450 },
    { name: "Chomutov", lat: 50.4578, lng: 13.4189 },
    { name: "Liberec", lat: 50.7611, lng: 15.0469 },
    { name: "Turnov", lat: 50.5828, lng: 15.1489 },
    { name: "Česká Lípa hl.n.", lat: 50.6803, lng: 14.5361 },

    // Pardubický a Královéhradecký kraj
    { name: "Pardubice hl.n.", lat: 50.0317, lng: 15.7562 },
    { name: "Česká Třebová", lat: 49.9015, lng: 16.4435 },
    { name: "Ústí nad Orlicí", lat: 49.9744, lng: 16.3814 },
    { name: "Hradec Králové hl.n.", lat: 50.2144, lng: 15.8118 },
    { name: "Trutnov hl.n.", lat: 50.5603, lng: 15.9128 },
    { name: "Náchod", lat: 50.4136, lng: 16.1603 },
    { name: "Chrudim", lat: 49.9511, lng: 15.7892 },

    // Jihomoravský, Olomoucký a Zlínský kraj
    { name: "Brno hl.n.", lat: 49.1906, lng: 16.6128 },
    { name: "Brno-Židenice", lat: 49.2017, lng: 16.6375 },
    { name: "Břeclav", lat: 48.7589, lng: 16.8831 },
    { name: "Olomouc hl.n.", lat: 49.5925, lng: 17.2783 },
    { name: "Přerov", lat: 49.4447, lng: 17.4489 },
    { name: "Prostějov hl.n.", lat: 49.4703, lng: 17.1239 },
    { name: "Zlín střed", lat: 49.2253, lng: 17.6625 },
    { name: "Otrokovice", lat: 49.2089, lng: 17.5250 },
    { name: "Uherské Hradiště", lat: 49.0689, lng: 17.4589 },

    // Moravskoslezský kraj
    { name: "Ostrava hl.n.", lat: 49.8505, lng: 18.2678 },
    { name: "Ostrava-Svinov", lat: 49.8211, lng: 18.2089 },
    { name: "Opava východ", lat: 49.9328, lng: 17.9058 },
    { name: "Bohumín", lat: 49.9022, lng: 18.3556 },
    { name: "Český Těšín", lat: 49.7436, lng: 18.6231 },
    { name: "Frýdek-Místek", lat: 49.6869, lng: 18.3533 },

    // Jihočeský a Plzeňský kraj
    { name: "Plzeň hl.n.", lat: 49.7436, lng: 13.3871 },
    { name: "Domažlice", lat: 49.4389, lng: 12.9361 },
    { name: "Klatovy", lat: 49.3989, lng: 13.2978 },
    { name: "České Budějovice", lat: 48.9744, lng: 14.4881 },
    { name: "Tábor", lat: 49.4144, lng: 14.6681 },
    { name: "Strakonice", lat: 49.2569, lng: 13.9089 },
    { name: "Písek", lat: 49.3022, lng: 14.1378 },

    // Kraj Vysočina a Karlovarský kraj
    { name: "Jihlava", lat: 49.4069, lng: 15.5978 },
    { name: "Havlíčkův Brod", lat: 49.6028, lng: 15.5842 },
    { name: "Karlovy Vary", lat: 50.2356, lng: 12.8681 },
    { name: "Cheb", lat: 50.0736, lng: 12.3811 }
];