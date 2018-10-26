const menus = [
  {
    datecode: '181018',
    expected: `🎡🎡 MENÙ DI GIOVEDÌ 18 OTTOBRE 🎡🎡

 *** PRIMI ***

- TAGLIATELLE AL RAGÙ BIANCO: 6,20
- MINESTRONE DI VERDURE: 6,20
- RISOTTO “SMERALDO” CON CREMA DI SPINACI E PANCETTA: 6,20
- MACCHERONI CON POMODORINI E PESTO: 6,20
Penne al pomodoro e basilico: 5,20
Orzo con verdure miste e scamorza: 5,20

 *** SECONDI ***

FOCACCIA ARTIGIANALE DI FARINE INTEGRALI BIO, DA FARCIRE A VOSTRO PIACERE: 7,00
Cotoletta impanata: 7,20
Petto di pollo alla griglia: 7,20
Polpette con pecorino, parmigiano, uova e pomodoro: 7,20
Frittata con broccoli e parmigiano: 7,20
Torta salata con zucchine, funghi, prosciutto cotto e scamorza: 7,20

 *** DOLCI ***

Torta oreo: 4,20
Torta rocher: 4,20
Torta vegana con mele e lamponi: 4,20
Macedonia: 4,20`,
  },
  {
    datecode: '181015',
    expected: `🎡 MENÙ DI LUNEDÌ 15 OTTOBRE 🎠

 *** PRIMI ***

- GNOCCHI FATTI IN CASA ALLA BOSCAIOLA (funghi, salsiccia e pomodoro): 7,20
- RAVIOLI DI MAGRO CON BURRO E SALVIA: 6,20
- RISOTTO CON ZUCCHINE E SPECK: 6,20
- ZUPPA DI LENTICCHIE CON CROSTINI: 6,20
Maccheroni al pomodoro e basilico: 5,20
Farro con peperoni, pomodori, olive, fagioli e tonno: 5,20

 *** SECONDI ***

Cotoletta di patate farcita con prosciutto cotto e fontina: 7,20
Cosce di pollo al forno: 7,20
Petto di pollo alla griglia: 7,20
Torta salata con cotto, mozzarella, spinaci, uova e mascarpone: 7,20
Frittata con verdure miste e parmigiano: 7,20
Omelettes con spinaci e mozzarella: 7,20

 *** DOLCI ***

Macedonia: 4,20`,
  },
  {
    datecode: '181012',
    expected: `🤗 MENÙ DI VENERDÌ 12 OTTOBRE 🤗

 *** PRIMI ***

🦐 RISO VENERE CON ZUCCHINE, SALMONE E GAMBERI: 7,20
- ORECCHIETTE CON POMODORINI, FUNGHI E SALSICCIA: 6,20
- PENNE ALLA NORMA: 6,20
- VELLUTATA DI ZUCCA, PATATE E CAROTE: 6,20
Fusilli al pomodoro e basilico: 5,20
Orzo con zucchine, melanzane, pomodorini, funghi e salsiccia: 5,20

 *** SECONDI ***

Cotoletta alla milanese: 7,20
Roast-beef all’inglese: 7,20
Petto di pollo alla griglia: 7,20
Frittelle vegetariane: 7,20
Frittata con spinaci e parmigiano: 7,20
Torta salata con verdure miste, mozzarella e parmigiano: 7,20

 *** DOLCI ***

Macedonia: 4,20`,
  },
  {
    datecode: '181011',
    expected: `MENÙ DI GIOVEDÌ 11 OTTOBRE

 *** PRIMI ***

🍷 RISOTTO SMERALDO (con spinaci e pancetta): 6,20
🍷 PENNE ALLA PUTTANESCA: 6,20
🍷 PASTA E FAGIOLI: 6,20
🍷 CANNELLONI RIPIENI DI CARNE, PROSCIUTTO COTTO, MOZZARELLA E PARMIGIANO, CON POMODORO E BESCIAMELLA: 6,20
Fusilli al pomodoro e basilico: 5,20
Orzo con olive, tonno, peperoni e pomodorini: 5,20

 *** SECONDI ***

FOCACCIA ARTIGIANALE DI FARINE INTEGRALI BIO DA FARCIRE A VOSTRO PIACERE: 7,00
Petto di pollo alla griglia: 7,20
Roast-beef all’inglese: 7,20
Torta salata con prosciutto cotto, spinaci e mozzarella: 7,20
Frittata con verdure miste e parmigiano: 7,20

 *** DOLCI ***

Torta di mele: 4,20
Cheescake ai frutti di bosco: 4,20
Cheescake all’oreo: 4,20
Macedonia: 4,20`,
  },
  {
    datecode: '181010',
    expected: `🍔 MENÙ DI MERCOLEDÌ 10 OTTOBRE 🍔

 *** PRIMI ***

- RISOTTO ALLA MONZESE (zafferano e salsiccia): 6,20
- RAVIOLI DI CARNE CON SUGO DI BRASATO: 6,20
- SPAGHETTI ALLA CARBONARA: 6,20
- MINESTRONE DI VERDURE: 6,20
Penne al pomodoro e basilico: 5,20
Orzo con pomodorini, melanzane, zucchine e peperoni: 5,20

 *** SECONDI ***

Petto di pollo alla griglia: 7,20
Straccetti di pollo saltati al vino bianco: 7,20
Bistecca di scamone ai ferri: 7,20
Focaccia di nostra produzione con pomodorini: 7,20
Focaccia di nostra produzione farcita con prosciutto cotto, mozzarella, zucchine e pomodorini: 7,20
Melanzane ripiene con scamorza, pancetta, parmigiano, pomodorini, pecorino e uova: 7,20
Torta salata con zucchine, mozzarella e pomodorini: 7,20
Frittata con spinaci e parmigiano: 7,20

 *** DOLCI ***

Torta di mele: 4,20
Cheesecake ai frutti di bosco: 4,20
Cheescake all’oreo: 4,20
Macedonia: 4,20`,
  },
  {
    datecode: '181009',
    expected: `MENÙ DI MARTEDÌ 9 OTTOBRE

 *** PRIMI ***

🍅SPAGHETTI CACIO E PEPE: 6,20
🍅RISOTTO CON PERE E TALEGGIO: 6,20
🍅 ORECCHIETTE DI PASTA FRESCA CON ZUCCHINE, POMODORINI E SCAGLIE DI GRANA: 6,20
🍅 ZUPPA DI LENTICCHIE CON CROSTINI: 6,20
Sedanini al pomodoro e basilico: 5,20
Orzo e Farro con melanzane, pomodorini e ricotta salata: 5,20

 *** SECONDI ***

Petto di pollo alla griglia: 7,20
Brasato di vitello al barolo con polenta: 7,20
Roast-beef all’inglese: 7,20
Frittata con broccoli e parmigiano: 7,20
Torta salata di cipolle, peperoni, salsiccia e mozzarella: 7,20
Omelettes con carciofi, speck e mozzarella: 7,20

 *** DOLCI ***

Cheesecake all’oreo: 4,20
Cheesecake ai frutti di bosco: 4,20
Torta di mele: 4,20
Macedonia: 4,20`,
  },
  {
    datecode: '181008',
    expected: `🍒 MENÙ DI LUNEDÌ 8 OTTOBRE 🍒

 *** PRIMI ***

- RISOTTO CON CAVOLO VIOLETTO, MELE, NOCI E ACETO BALSAMICO: 6,20
- TAGLIATELLE DI PASTA FRESCA AL RAGÙ: 6,20
- ZUPPA DEL CONTADINO (orzo, farro, legumi misti, sedano, carote, pomodoro): 6,20
- NIDI DI RONDINE (girelle di pasta fresca al forno, con prosciutto cotto, mozzarella, pomodoro e besciamella): 6,20
Conchiglie al pomodoro: 5,20
Orzo con zucchine e pomodorini: 5,20

 *** SECONDI ***

Spezzatino di vitello con patate: 7,20
Petto di pollo alla griglia: 7,20
Roast-beef all’inglese: 7,20
Omelettes con spinaci e mozzarella: 7,20
Torta salata con zucchine, prosciutto cotto e mozzarella: 7,20
Frittata con spinaci e parmigiano: 7,20

 *** DOLCI ***

Macedonia: 4,20`,
  },
  {
    datecode: '181005',
    expected: `🦐 MENÙ DI VENERDÌ 5 OTTOBRE 🦐

 *** PRIMI ***

- ORECCHIETTE DI PASTA FRESCA CON VONGOLE, PESTO E POMODORINI: 7,20
* SPAGHETTI ALLA MEDITERRANEA CON TONNO, POMODORINI, CAPPERI, OLIVE E RUCOLA: 6,20
- ZUPPA DI BORLOTTI CON CROSTINI: 6,20
* RISOTTO CON ASPARAGI E SPECK: 6,20
Fusilli al pomodoro e basilico: 5,20
Farro con pomodorini, zucchine e pesto (no aglio): 5,20

 *** SECONDI ***

Petto di pollo alla griglia: 7,20
Spezzatino di vitello con patate: 7,20
Arrosto di vitello: 7,20
Roast-beef all’inglese: 7,20
Torta salata con prosciutto cotto, zucchine, brie e mozzarella: 7,20
Frittata con spinaci e parmigiano: 7,20

 *** DOLCI ***

Macedonia: 4,20`,
  },
  {
    datecode: '181004',
    expected: `🎃 MENÙ DI GIOVEDÌ 4 OTTOBRE 🎃

 *** PRIMI ***

- RISOTTO CON CACIO E PEPE: 6,20
- ZUPPA DI FAVE E CICORIA: 6,20
- ORECCHIETTE DI PASTA FRESCA CON POMODORINI, RUCOLA E SCAGLIE DI GRANA: 6,20
- SPAGHETTI ALLA CARBONARA: 6,20
Conchiglie al pomodoro e basilico: 5,20
Farro con pomodorini, melanzane e scaglie di grana: 5,20

 *** SECONDI ***

FOCACCIA ARTIGIANALE DI FARINE INTEGRALI BIO DA FARCIRE A VOSTRO PIACERE: 7,00
Roast-beef all’inglese: 7,20
Petto di pollo alla griglia: 7,20
Omelettes con spinaci, prosciutto cotto e brie: 7,20
Frittata con verdure miste e parmigiano: 7,20
Torta salata con carciofi, zucchine, prosciutto cotto, mozzarella e brie: 7,20

 *** DOLCI ***

Macedonia: 4,20`,
  },
  {
    datecode: '181003',
    expected: `🍅 MENÙ DI MERCOLEDÌ 3 OTTOBRE 🍅

 *** PRIMI ***

* RISOTTO CON FUNGHI E PORCINI: 6,20
* ZUPPA DI LENTICCHIE CON CROSTINI DI PANE: 6,20
* MEZZE MANICHE ALLA NORMA: 6,20
* RAVIOLI RIPIENI DI CARNE CON PISELLI, PROSCIUTTO E PANNA: 6,20
Farfalle al pomodoro e basilico: 5,20
Farro con patate, pomodorini, scamorza affumicata e prezzemolo: 5,20

 *** SECONDI ***

Cotoletta alla milanese: 7,20
Petto di pollo alla griglia: 7,20
Omelettes con fagiolini, scamorza e parmigiano: 7,20
Torta salata con zucchine, pomodorini, melanzane, peperoni e mozzarella: 7,20
Frittata con spinaci e formaggio: 7,20

 *** DOLCI ***

Macedonia: 4,20`,
  },
  {
    datecode: '181002',
    expected: `🌰 MENÙ DI MARTEDÌ 2 OTTOBRE 🌰

 *** PRIMI ***

- RISOTTO CON RADICCHIO E SCAMORZA: 6,20
- GNOCCHI FATTI IN CASA CON POMODORO: 6,20
- LASAGNE ALLA BOLOGNESE: 6,20
- MINESTRONE DI VERDURE FRESCHE: 6,20
- FARFALLE ALLA PUTTANESCA: 6,20
Farro con pesto (no aglio), pomodorini, patate e fagiolini: 5,20

 *** SECONDI ***

Petto di pollo alla griglia: 7,20
Roast-beef all’inglese: 7,20
Melanzane impanate farcite con prosciutto cotto, e fontina: 7,20
Omelettes con zucchine e mozzarella: 7,20
Torta salata con melanzane, mozzarella e pomodorini: 7,20
Frittata con carciofi e parmigiano: 7,20

 *** DOLCI ***

Macedonia: 4,20`,
  },
  {
    datecode: '181001',
    expected: `☔️ MENÙ DI LUNEDÌ 1 OTTOBRE ☔️

 *** PRIMI ***

- GNOCCHI FATTI IN CASA AI QUATTRO FORMAGGI CON NOCI: 7,20
- MEZZE MANICHE ALLA BOSCAIOLA (salsiccia, funghi, pomodoro): 6,20
- RISOTTO CON ASPARAGI E BRIE: 6,20
- ZUPPA DI CECI CON CROSTINI: 6,20
Maccheroni al pomodoro e basilico: 5,20
Farro con peperoni, pomodorini, capperi, tonno e olive taggiasche: 5,20

 *** SECONDI ***

Arrosto di vitello: 7,20
Petto di pollo alla griglia: 7,20
Cosce di pollo al forno: 7,20
Melanzane ripiene con uova, parmigiano, scamorza e pomodorini: 7,20
Torta salata con peperoni, zucchine, melanzane e mozzarella: 7,20
Frittata con spinaci, patate e parmigiano: 7,20
Omelettes con carciofi, mozzarella e prosciutto cotto: 7,20

 *** DOLCI ***

Macedonia: 4,20`,
  },
  {
    datecode: '181017',
    expected: `🎡🎃 MENÙ DI MERCOLEDÌ 17 OTTOBRE 🎃🎡

 *** PRIMI ***

- ORECCHIETTE DI PASTA FRESCA CON BROCCOLI, PANCETTA E POMODORINI: 6,20
- RISOTTO CON PERE E TALEGGIO: 6,20
- ZUPPA DI CECI: 6,20
- LASAGNE CON PESTO, PATATE E FAGIOLINI: 6,20
Mezze Maniche al pomodoro e basilico: 5,20
Orzo alla Norma: 5,20

 *** SECONDI ***

Melanzane ripiene con pomodorini, scamorza, uova e parmigiano: 7,20
Petto di pollo alla griglia: 7,20
Bistecca di roast-beef ai ferri: 7,20
Arrosto di vitello: 7,20
Frittata con zucchine e mozzarella: 7,20
Torta salata con spinaci, prosciutto cotto, mozzarella, uova e mascarpone: 7,20

 *** DOLCI ***

Torta Oreo: 4,20
Torta Rocher: 4,20
Torta Vegana con mele e lamponi: 4,20
Macedonia: 4,20`,
  },
  {
    datecode: '181019',
    expected: `🎡🎠 MENÙ DI VENERDÌ 19 OTTOBRE 🎡🎠

 *** PRIMI ***

- SPAGHETTI CON TONNO, VONGOLE E CAPPERI: 7,20
- PASSATO DI VERDURE CON RISO: 6,20
- RISOTTO CON ZUCCHINE E SPECK: 6,20
- RAVIOLI RIPIENI DI SPINACI, RICOTTA E SCORZA DI LIMONE, CON BURRO E SALVIA: 6,20
Mezze Maniche al pomodoro e basilico: 5,20
Orzo con ratatouille di verdure e pesto: 5,20

 *** SECONDI ***

Brasato di vitello con polenta: 7,20
Petto di pollo alla griglia: 7,20
Roast-beef all’inglese: 7,20
Focaccia farcita con zucchine, melanzane, peperoni, spinaci, mozzarella, speck e pomodorini: 7,20
Frittelle vegetariane: 7,20
Frittata con spinaci e mozzarella: 7,20

 *** DOLCI ***

Torta Rocher: 4,20
Torta vegana con mele e lamponi: 4,20
Macedonia: 4,20`,
  },
  {
    datecode: '181022',
    expected: `🎠🎠🎠 MENÙ DI LUNEDÌ 22 OTTOBRE 🎡🎡🎡

 *** PRIMI ***

- TROFIE CON PESTO (no aglio),: 6,20
- ZUPPA DI CANNELLINI: 6,20
- RISOTTO CON ZOLA E NOCI: 6,20
- SPAGHETTI ALLA CARBONARA: 6,20
Maccheroni al pomodoro e basilico: 5,20
Orzo con melanzane, zucchine e peperoni: 5,20

 *** SECONDI ***

Petto di pollo alla griglia: 7,20
Scaloppine al vino bianco: 7,20
Melanzane impanate farcite con fontina e prosciutto cotto: 7,20
Frittata con verdure miste e parmigiano: 7,20
Torta salata con spinaci e parmigiano: 7,20
Omelettes con spinaci e mozzarella: 7,20

 *** DOLCI ***

Macedonia: 4,20`
  }
];

module.exports = menus;