const CONFIG = {

    // 1. NEGOCI
    COOK:           "cookies_belles",
    NOM:            "Can Bellès",
    LOGO:           "logo/logoBLL.png",
    LOGO_T:         "logo/logoBLL.png",
    SLOGAN:         "CUINA TRADICIONAL MEDITERRÀNIA",
    TELEFON:        "938174363",            TELEFON_LABEL:   "Telèfon",     TELEFON_ICO: "📞",
    MOBIL:          "",
    WHATSAPP:       "https://wa.me/",       WHATSAPP_LABEL:  "💬 Escríbenos por WhatsApp",
    EMAIL:          "info@canbelles.com",   EMAIL_LABEL:     "e-Mail",       EMAIL_ICO: "✉️",
    ADRECA:         "C/Amalia Soler, 179  08720  Vilafranca del Penedès",
                                            ADRECA_LABEL: "Adreça",       ADRECA_ICO: "📍",
    INSTAGRAM:      "https://www.instagram.com/canbelles/",
    FACEBOOK:       "",
    EMAIL_SUPORT:   "info@alterwebstudio.com",
    //-------------------------------------------------------------------------------------------------------------------------

    // 2. RUTES
    REPO_URL:       "https://altervector.github.io/amrmotorbike/",
    BASE_URL:       "./",
    BASE_WORKER:    "https://belles.altervector.workers.dev",
    URL_OFICIAL:    "https://www.canbelles.com",
    ASSETS:         "https://avsets.pages.dev/",
    URL_MAPS:       "https://www.google.com/maps/place/Restaurante+Can+Bell%C3%A9s/@41.3390178,1.6931701,2519m/data=!3m1!1e3!4m6!3m5!1s0x12a479f2cc28706d:0xa04c5f618f2a9ad5!8m2!3d41.3390178!4d1.6931701!16s%2Fg%2F1tdr5b77?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D",
    URL_RESSENYES:  "https://www.google.com/maps/place/Restaurante+Can+Bell%C3%A9s/@41.3390178,1.6931701,2519m/data=!3m1!1e3!4m6!3m5!1s0x12a479f2cc28706d:0xa04c5f618f2a9ad5!8m2!3d41.3390178!4d1.6931701!16s%2Fg%2F1tdr5b77?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D",

    // 3. IMATGES 
    BACKGROUND:      "", // ← canviar en el css .html{}
    BLOC_HERO:       "images/belles/hero-belles.png", 
    QR:              "qr/qr-belles.png",
    //-------------------------------------------------------------------------------------------------------------------------

    // 4. TEXTOS---------------------------------------------------------------------------------------------------------------
    NAV_INICI:        "Inici",
    NAV_MENUS:        "Menús",
    NAV_CARTA:        "Carta",
    NAV_VINS:         "Vins i Caves",
    NAV_RESERVES:     "Reserves",

    HERO_BOTO:      "Qui som...",

    QUI_SOM:            "Qui som...",
    QUI_DESC1:          "Can Bellés és el fruit del projecte d'una empresa familiar que va obrir les portes l'any 2007 amb l'objectiu d'oferir als nostres clients un menjar de qualitat en un ambient agradable.",
    QUI_DESC2:          "En la nostra carta trobareu plats típics de la cuina casolana mediterrània, que imprimeixen el caràcter de les nostres tapes, arrossos, carns i peixos a la brasa i les nostres postres casolanes.",
    QUI_DESC3:          "Si ens vols venir a conéixer, estem al carrer",
    //-------------------------------------------------------------------------------------------------------------------------

    // 5. SERVEIS (graella)
    QUE_FEM_SRV:        "La nostra cuina..",
    QUE_FEM1:            "Des de el nostre petit racó al cor del Penedès, a Can Bellés fem una aposta clara per la cuina tradicional catalana i el producte de proximitat.",
    QUE_FEM2:            "Amb la cuina de brasa com a bandera, oferim als nostres comensals una experiència gastronòmica de sabors arrelats a la nostra tradició.",
    //-------------------------------------------------------------------------------------------------------------------------

    // 6. MAPS MENUS-------------------------------------------------------------------------------------------------------------------------
    MENUS_CANBELLES: [
        { titol: "La nostra Carta",          desc: "",                                                                                                          img: "images/belles/carta.png",       accio: "obrirModalCarta()" },
        { titol: "Els nostres Vins i Caves", desc: "",                                                                                                          img: "images/belles/vins.jpg",        accio: "obrirModalVins()" },
        { titol: "Menú Diari",               desc: "De dilluns a divendres, de 13:00h a 15:30h, oferim un menú diari variat amb productes de temporada. Primer plat, segon plat i postres amb begudes i pa inclosos.", img: "images/belles/carta.png",       accio: "obrirModalMenuDiari()" },
        { titol: "Menú Cap de Setmana",      desc: "Dissabtes de 13:00h fins a les 15:30h. Divendres i dissabtes de 20:45h fins a les 23:30h.",                  img: "images/belles/menucds.png",     accio: "obrirModalMenuCDS()" },
        { titol: "Menús per a Grups",        desc: "A Can Bellés disposem de menús per a grups de totes les mides que s'adapten a les seves necessitats.",       img: "images/belles/menugrups.png",   accio: "obrirModalMenuGrups()" },
    ],

    CAPTURES: {
        carta:     "images/canbelles/captura-carta.jpg",
        vins:      "images/canbelles/captura-vins.jpg",
        menuDiari: "images/canbelles/captura-menu-diari.jpg",
        menuCDS:   "images/canbelles/captura-menu-cds.jpg",
        menuGrups: "images/canbelles/captura-menu-grups.jpg",
    },
    //------------------------------------------------------------------------------------------------------------------------

    // 7. ON SOM-----------------------------------------------------------------------------------------------------------   
    ON_SOM:            "On som...",
    ON_SOM_TIT:        "T'esperem a ",
    
    HORA_0:         "Horari",   HR: "🕐",
    HORA_1:         "De dilluns a dissabte de 13:00h a 15:30h.",
    HORA_2:         "Divendres i dissabte de  13:00h a 15:30h - 20:45 a 23:30h",
    HORA_3:         "Diumenge: Tancat",
    //-------------------------------------------------------------------------------------------------------------------------

    // 8. SEGURETAT
    SITIOS_SEGUROS: ["alterwebstudio.com", "altervector.com", "pages.dev", "altervector.github.io", "amrmotorbike.es","amrmotorbike.com", "localhost", "127.0.0.1"],
};