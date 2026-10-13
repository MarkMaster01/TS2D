// SOUPRAVA.JS - Definice základní soupravy a obchodu

// 1. ZÁKLADNÍ SOUPRAVA (s touto hráč startuje)
const trainCarsData = [
  { type: 'loco',  targetHeight: 70, color: '#d9534f', label: '810', file: 'https://www.vagonweb.cz/popisy/img/CD/810-b.gif' }
];

// 2. VOZIDLA K ZAKOUPENÍ V OBCHODU
const availableShopVehicles = [
    { label: 'Motorová jednotka Regionova', file: 'https://www.vagonweb.cz/popisy/img/CD/814-2-b.gif', price: 150 },
    { label: 'Vagón Bdmtee 2. třída', file: 'https://www.vagonweb.cz/popisy/img/CD/Bdmtee-n2-a.gif', price: 30 },
    { label: 'Lokomotiva Vectron', file: 'https://www.vagonweb.cz/popisy/img/CD/384-a.gif', price: 1500 },
    { label: 'Lokomotiva ČD 162', file: 'https://www.vagonweb.cz/popisy/img/CD/384-a.gif', price: 500 },
    { label: 'Lokomotiva ČD 362', file: 'https://www.vagonweb.cz/popisy/img/CD/384-a.gif', price: 600 },
    { label: 'Vagón Bpee 2. třída', file: 'https://www.vagonweb.cz/popisy/img/CD/Bpee237-a.gif', price: 30 },
    { label: 'Vůz Bdtax', file: 'https://www.vagonweb.cz/popisy/img/CD/v-010-n2-a.gif', price: 20 } // Lze kombinovat i s lokálními soubory
];
