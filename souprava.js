// SOUPRAVA.JS - Definice základní soupravy a obchodu

// 1. ZÁKLADNÍ SOUPRAVA (s touto hráč startuje)
const trainCarsData = [
  { type: 'loco', category: 'loco', targetHeight: 55, color: '#d9534f', label: 'Motorový vůz 810', file: 'https://www.vagonweb.cz/popisy/img/CD/810-b.gif', maxSpeed: 80 }
];

// 2. VOZIDLA K ZAKOUPENÍ V OBCHODU
const availableShopVehicles = [
    { type: 'loco', category: 'loco', targetHeight: 55, label: 'Motorový vůz 810', file: 'https://www.vagonweb.cz/popisy/img/CD/810-b.gif', maxSpeed: 80,  price: 0 },
    { label: 'Motorová jednotka 814 (Regionova)', file: 'https://www.vagonweb.cz/popisy/img/CD/814-2-b.gif', price: 150, maxSpeed: 80, type: 'loco', category: 'loco' },
    { label: 'Vagón Bdmtee 2. třída', file: 'https://www.vagonweb.cz/popisy/img/CD/Bdmtee-n2-a.gif', price: 30, type: 'wagon', category: 'wagon' },
    { label: 'Lokomotiva Vectron', targetHeight: 55, file: 'https://www.vagonweb.cz/popisy/img/CD/384-a.gif', price: 2000, maxSpeed: 160, type: 'loco', category: 'loco' },
    { label: 'Lokomotiva ČD 162', targetHeight: 55, file: 'https://www.vagonweb.cz/popisy/img/CD/162-n2-b.gif', price: 500, maxSpeed: 140, type: 'loco', category: 'loco' },
    { label: 'Lokomotiva ČD 362', targetHeight: 55, file: 'https://www.vagonweb.cz/popisy/img/CD/162-n-b.gif', price: 600, maxSpeed: 140, type: 'loco', category: 'loco' },
    { label: 'Lokomotiva ČD 754', targetHeight: 55, file: 'https://www.vagonweb.cz/popisy/img/CD/754-n2-a.gif', price: 400, maxSpeed: 140, type: 'loco', category: 'loco' },
    { label: 'Lokomotiva ČD 749', targetHeight: 55, file: 'https://www.vagonweb.cz/popisy/img/CD/751-z-a.gif', price: 600, maxSpeed: 140, type: 'loco', category: 'loco' },
    { label: 'Lokomotiva ČD 380', targetHeight: 55, file: 'https://www.vagonweb.cz/popisy/img/CD/380-b.gif', price: 1700, maxSpeed: 140, type: 'loco', category: 'loco' },
    { label: 'Elektrická jednotka 640.1 (RegioPanter)', file: 'https://www.vagonweb.cz/popisy/img/CD/440-0-n-a.gif', price: 600, maxSpeed: 140, type: 'loco', category: 'loco' },
    { label: 'Elektrická jednotka JMK 530 (Ibalgin)', file: 'https://www.vagonweb.cz/popisy/img/CZ-/JMK/530-a.gif', price: 800, maxSpeed: 140, type: 'loco', category: 'loco' },
    { label: 'Vůz  Bfhpvee (Sysel) - konec vlaku', file: 'https://www.vagonweb.cz/popisy/img/CD/Bfhpvee295-n2-a.gif', price: 80, type: 'wagon', category: 'wagon' },
    { label: 'Vůz  Bfhpvee (Sysel) - začátek vlaku', file: 'https://www.vagonweb.cz/popisy/img/CD/Bfhpvee295-n2-b.gif', price: 80, type: 'wagon', category: 'wagon' },
    { label: 'Vagón Bpee 2. třída', file: 'https://www.vagonweb.cz/popisy/img/CD/Bpee237-a.gif', price: 70, type: 'wagon', category: 'wagon' },
    { label: 'Vagón Bdmteeo 2. třída', file: 'https://www.vagonweb.cz/popisy/img/CD/Bdmteeo296-n2-a.gif', price: 80, type: 'wagon', category: 'wagon' },
    { label: 'Vůz Bdtax', file: 'https://www.vagonweb.cz/popisy/img/CD/v-010-n2-a.gif', price: 20, type: 'wagon', category: 'wagon' }
]; 
