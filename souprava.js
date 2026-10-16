// SOUPRAVA.JS - Definice základní soupravy a obchodu

// 1. ZÁKLADNÍ SOUPRAVA (s touto hráč startuje)
const trainCarsData = [
  { 
    type: 'loco', 
    category: 'loco', 
    targetHeight: 55, 
    color: '#d9534f', 
    label: 'Motorový vůz 810', 
    file: 'https://www.vagonweb.cz/popisy/img/CD/810-b.gif', 
    maxSpeed: 80 
  }
];

// 2. VOZIDLA K ZAKOUPENÍ V OBCHODU
const availableShopVehicles = [
    { label: 'Motorová jednotka 814 (Regionova)', file: 'https://www.vagonweb.cz/popisy/img/CD/814-2-b.gif', price: 150, maxSpeed: 80, type: 'loco', category: 'loco' },
    { label: 'Vagón Bdmtee 2. třída', file: 'https://www.vagonweb.cz/popisy/img/CD/Bdmtee-n2-a.gif', price: 30, type: 'wagon', category: 'wagon' },
    { label: 'Lokomotiva Vectron', file: 'https://www.vagonweb.cz/popisy/img/CD/384-a.gif', price: 1500, maxSpeed: 160, type: 'loco', category: 'loco' },
    { label: 'Lokomotiva ČD 162', file: 'https://www.vagonweb.cz/popisy/img/CD/162-n2-b.gif', price: 500, maxSpeed: 140, type: 'loco', category: 'loco' },
    { label: 'Lokomotiva ČD 362', file: 'https://www.vagonweb.cz/popisy/img/CD/162-n-b.gif', price: 600, maxSpeed: 140, type: 'loco', category: 'loco' },
    { label: 'Vagón Bpee 2. třída', file: 'https://www.vagonweb.cz/popisy/img/CD/Bpee237-a.gif', price: 30, type: 'wagon', category: 'wagon' },
    { label: 'Vůz Bdtax', file: 'https://www.vagonweb.cz/popisy/img/CD/v-010-n2-a.gif', price: 20, type: 'wagon', category: 'wagon' }
]; 
