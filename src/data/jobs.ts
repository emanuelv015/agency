export interface Job {
  id: string;
  title: string;
  company: string;
  country: string;
  city: string;
  sector: string;
  salary: string;
  housing: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

export const jobs: Job[] = [
  // Olanda
  {
    id: 'nl-1',
    title: 'Operator Depozit - Jumbo',
    company: 'Jumbo',
    country: 'Olanda',
    city: 'Amsterdam',
    sector: 'Logistică',
    salary: '2.200-2.500 EUR/lună',
    housing: 'Cazare gratuită asigurată',
    description: 'Culegere și ambalare comenzi online pentru Jumbo. Program flexibil, condiții excelente.',
    requirements: ['Experiență în depozit (preferabil)', 'Disponibilitate pentru ture de noapte', 'Bună condiție fizică'],
    benefits: ['Cazare gratuită', 'Transport asigurat', 'Asigurări medicale', 'Contract pe perioadă nedeterminată']
  },
  {
    id: 'nl-2',
    title: 'Muncitor Producție - Albert Heijn',
    company: 'Albert Heijn',
    country: 'Olanda',
    city: 'Rotterdam',
    sector: 'Producție',
    salary: '2.100-2.400 EUR/lună',
    housing: 'Cazare gratuită asigurată',
    description: 'Lucru în centrul de distribuție Albert Heijn. Pregătire produse pentru magazine.',
    requirements: ['Experiență în producție', 'Capacitate de lucru în echipă', 'Disponibilitate weekend'],
    benefits: ['Cazare gratuită', 'Bonusuri performanță', 'Formare profesională', 'Posibilitate avansare']
  },
  {
    id: 'nl-3',
    title: 'Operator Stivuitor - CEVA Logistics',
    company: 'CEVA Logistics',
    country: 'Olanda',
    city: 'Utrecht',
    sector: 'Logistică',
    salary: '2.300-2.600 EUR/lună',
    housing: 'Cazare gratuită asigurată',
    description: 'Operator stivuitor în depozit mare. Lucru cu echipamente moderne.',
    requirements: ['Permis stivuitor (B1/B2)', 'Experiență minimă 1 an', 'Atent la detalii'],
    benefits: ['Cazare gratuită', 'Salariu atractiv', 'Program stabil', 'Mediu de lucru sigur']
  },
  // Polonia
  {
    id: 'pl-1',
    title: 'Muncitor Producție Auto - Hutchinson',
    company: 'Hutchinson',
    country: 'Polonia',
    city: 'Łódź',
    sector: 'Auto',
    salary: '4.500-5.200 PLN/lună (≈1.000-1.200 EUR)',
    housing: 'Cazare gratuită asigurată',
    description: 'Producție componente auto. Lucru în echipă, mediu modern și sigur.',
    requirements: ['Experiență în producție', 'Capacitate de lucru în echipă', 'Disponibilitate pentru ture'],
    benefits: ['Cazare gratuită', 'Bonusuri lunare', 'Asigurări', 'Formare continuă']
  },
  {
    id: 'pl-2',
    title: 'Operator Depozit - DHL',
    company: 'DHL',
    country: 'Polonia',
    city: 'Varșovia',
    sector: 'Logistică',
    salary: '4.800-5.500 PLN/lună (≈1.100-1.250 EUR)',
    housing: 'Cazare gratuită asigurată',
    description: 'Sortare și expediere pachete în centrul DHL. Program flexibil.',
    requirements: ['Bună condiție fizică', 'Disponibilitate pentru ture', 'Capacitate de lucru rapid'],
    benefits: ['Cazare gratuită', 'Transport asigurat', 'Bonusuri', 'Contract stabil']
  },
  {
    id: 'pl-3',
    title: 'Muncitor Construcții',
    company: 'Diverse',
    country: 'Polonia',
    city: 'Cracovia',
    sector: 'Construcții',
    salary: '5.000-6.000 PLN/lună (≈1.150-1.350 EUR)',
    housing: 'Cazare gratuită asigurată',
    description: 'Lucrări de construcție și renovare. Proiecte variate, condiții bune.',
    requirements: ['Experiență în construcții', 'Bună condiție fizică', 'Disponibilitate deplasare'],
    benefits: ['Cazare gratuită', 'Salariu atractiv', 'Overtime plătit', 'Echipament asigurat']
  },
  // Germania
  {
    id: 'de-1',
    title: 'Muncitor Producție - Industrie Auto',
    company: 'Diverse',
    country: 'Germania',
    city: 'Berlin',
    sector: 'Auto',
    salary: '2.800-3.200 EUR/lună',
    housing: 'Cazare gratuită asigurată',
    description: 'Producție componente auto în fabrici moderne. Condiții excelente, program stabil.',
    requirements: ['Experiență în producție', 'Capacitate de lucru în echipă', 'Disponibilitate pentru ture'],
    benefits: ['Cazare gratuită', 'Salariu atractiv', 'Asigurări complete', 'Posibilitate avansare']
  },
  {
    id: 'de-2',
    title: 'Operator Depozit - Logistică',
    company: 'Diverse',
    country: 'Germania',
    city: 'Hamburg',
    sector: 'Logistică',
    salary: '2.600-3.000 EUR/lună',
    housing: 'Cazare gratuită asigurată',
    description: 'Lucru în depozite mari, sortare și expediere mărfuri. Mediu modern.',
    requirements: ['Bună condiție fizică', 'Disponibilitate pentru ture', 'Capacitate de lucru rapid'],
    benefits: ['Cazare gratuită', 'Transport asigurat', 'Bonusuri', 'Contract stabil']
  },
  {
    id: 'de-3',
    title: 'Muncitor Agricol - Seră',
    company: 'Diverse',
    country: 'Germania',
    city: 'Munich',
    sector: 'Agricultură',
    salary: '2.400-2.800 EUR/lună',
    housing: 'Cazare gratuită asigurată',
    description: 'Lucru în sere moderne, cultivare legume și flori. Mediu plăcut.',
    requirements: ['Experiență în agricultură (preferabil)', 'Bună condiție fizică', 'Disponibilitate dimineață'],
    benefits: ['Cazare gratuită', 'Mediu de lucru plăcut', 'Salariu stabil', 'Asigurări']
  },
  // Belgia
  {
    id: 'be-1',
    title: 'Operator Depozit - Retail',
    company: 'Diverse',
    country: 'Belgia',
    city: 'Bruxelles',
    sector: 'Retail',
    salary: '2.300-2.700 EUR/lună',
    housing: 'Cazare gratuită asigurată',
    description: 'Lucru în depozite retail, pregătire comenzi pentru magazine.',
    requirements: ['Bună condiție fizică', 'Disponibilitate pentru ture', 'Capacitate de lucru rapid'],
    benefits: ['Cazare gratuită', 'Transport asigurat', 'Bonusuri', 'Contract stabil']
  },
  {
    id: 'be-2',
    title: 'Muncitor Producție Alimentară',
    company: 'Diverse',
    country: 'Belgia',
    city: 'Antwerp',
    sector: 'Alimentară',
    salary: '2.200-2.600 EUR/lună',
    housing: 'Cazare gratuită asigurată',
    description: 'Producție alimentară, ambalare și preparare produse. Condiții de igienă excelente.',
    requirements: ['Certificat igienă alimentară (preferabil)', 'Atent la detalii', 'Disponibilitate pentru ture'],
    benefits: ['Cazare gratuită', 'Mediu de lucru sigur', 'Salariu stabil', 'Asigurări']
  },
  // Franța
  {
    id: 'fr-1',
    title: 'Operator Depozit - Logistică',
    company: 'Diverse',
    country: 'Franța',
    city: 'Paris',
    sector: 'Logistică',
    salary: '2.200-2.600 EUR/lună',
    housing: 'Cazare gratuită asigurată',
    description: 'Lucru în depozite mari, sortare și expediere. Mediu modern și eficient.',
    requirements: ['Bună condiție fizică', 'Disponibilitate pentru ture', 'Capacitate de lucru rapid'],
    benefits: ['Cazare gratuită', 'Transport asigurat', 'Bonusuri', 'Contract stabil']
  },
  {
    id: 'fr-2',
    title: 'Muncitor Construcții',
    company: 'Diverse',
    country: 'Franța',
    city: 'Lyon',
    sector: 'Construcții',
    salary: '2.400-2.900 EUR/lună',
    housing: 'Cazare gratuită asigurată',
    description: 'Lucrări de construcție și renovare. Proiecte variate, condiții bune.',
    requirements: ['Experiență în construcții', 'Bună condiție fizică', 'Disponibilitate deplasare'],
    benefits: ['Cazare gratuită', 'Salariu atractiv', 'Overtime plătit', 'Echipament asigurat']
  },
  // Spania
  {
    id: 'es-1',
    title: 'Muncitor Agricol - Seră',
    company: 'Diverse',
    country: 'Spania',
    city: 'Valencia',
    sector: 'Agricultură',
    salary: '1.800-2.200 EUR/lună',
    housing: 'Cazare gratuită asigurată',
    description: 'Lucru în sere moderne, cultivare legume și fructe. Climat plăcut.',
    requirements: ['Experiență în agricultură (preferabil)', 'Bună condiție fizică', 'Disponibilitate dimineață'],
    benefits: ['Cazare gratuită', 'Mediu de lucru plăcut', 'Salariu stabil', 'Asigurări']
  },
  {
    id: 'es-2',
    title: 'Operator Depozit - Logistică',
    company: 'Diverse',
    country: 'Spania',
    city: 'Madrid',
    sector: 'Logistică',
    salary: '1.900-2.300 EUR/lună',
    housing: 'Cazare gratuită asigurată',
    description: 'Lucru în depozite, sortare și expediere. Mediu modern.',
    requirements: ['Bună condiție fizică', 'Disponibilitate pentru ture', 'Capacitate de lucru rapid'],
    benefits: ['Cazare gratuită', 'Transport asigurat', 'Bonusuri', 'Contract stabil']
  },
  // Austria
  {
    id: 'at-1',
    title: 'Muncitor Producție - Industrie',
    company: 'Diverse',
    country: 'Austria',
    city: 'Viena',
    sector: 'Producție',
    salary: '2.500-2.900 EUR/lună',
    housing: 'Cazare gratuită asigurată',
    description: 'Producție industrială, lucru cu mașini moderne. Condiții excelente.',
    requirements: ['Experiență în producție', 'Capacitate de lucru în echipă', 'Disponibilitate pentru ture'],
    benefits: ['Cazare gratuită', 'Salariu atractiv', 'Asigurări complete', 'Posibilitate avansare']
  },
  {
    id: 'at-2',
    title: 'Operator Depozit - Retail',
    company: 'Diverse',
    country: 'Austria',
    city: 'Graz',
    sector: 'Retail',
    salary: '2.300-2.700 EUR/lună',
    housing: 'Cazare gratuită asigurată',
    description: 'Lucru în depozite retail, pregătire comenzi. Mediu modern.',
    requirements: ['Bună condiție fizică', 'Disponibilitate pentru ture', 'Capacitate de lucru rapid'],
    benefits: ['Cazare gratuită', 'Transport asigurat', 'Bonusuri', 'Contract stabil']
  }
];

