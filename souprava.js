// SOUPRAVA.JS - Definice základní soupravy a obchodu

// 1. ZÁKLADNÍ SOUPRAVA (s touto hráč startuje)
const trainCarsData = [
  { type: 'loco',  targetHeight: 70, color: '#d9534f', label: '810', file: 'https://www.vagonweb.cz/popisy/img/CD/810-b.gif', maxspeed: 80 }
];

// 2. VOZIDLA K ZAKOUPENÍ V OBCHODU
const availableShopVehicles = [
    { label: 'Motorová jednotka 814 (Regionova)', file: 'https://www.vagonweb.cz/popisy/img/CD/814-2-b.gif', price: 150, maxspeed: 80, type: 'HV' },
    { label: 'Vagón Bdmtee 2. třída', file: 'https://www.vagonweb.cz/popisy/img/CD/Bdmtee-n2-a.gif', price: 30, type: 'vagón' },
    { label: 'Lokomotiva Vectron', file: 'https://www.vagonweb.cz/popisy/img/CD/384-a.gif', price: 1500, maxspeed: 160, type: 'HV'},
    { label: 'Lokomotiva ČD 162', file: 'https://www.vagonweb.cz/popisy/img/CD/162-n2-b.gif', price: 500, maxspeed: 140, type: 'HV'},
    { label: 'Lokomotiva ČD 362', file: 'https://www.vagonweb.cz/popisy/img/CD/162-n-b.gif', price: 600, maxspeed: 140, type: 'HV'},
    { label: 'Vagón Bpee 2. třída', file: 'https://www.vagonweb.cz/popisy/img/CD/Bpee237-a.gif', price: 30, type: 'vagón' },
    { label: 'Vůz Bdtax', file: 'https://www.vagonweb.cz/popisy/img/CD/v-010-n2-a.gif', price: 20, type: 'vagón' } // Lze kombinovat i s lokálními soubory
];
