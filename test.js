
colors = require('colors');
jsdiff = require('diff');
fa = require('./lib');
chalk = require('chalk');

menus = [
    {
        filename: './menu-181012.txt',
        expected: `data di oggi: VENERDÌ 12 OTTOBRE
 *** PRIMI ***
##### 🦐 RISO VENERE CON ZUCCHINE, SALMONE E GAMBERI: 7,50
##### - ORECCHIETTE CON POMODORINI, FUNGHI E SALSICCIA: 6,50
##### - PENNE ALLA NORMA: 6,50
##### - VELLUTATA DI ZUCCA, PATATE E CAROTE: 6,50
àààà Fusilli al pomodoro e basilico: 5,50
àààà Orzo con zucchine, melanzane, pomodorini, funghi e salsiccia: 5,50
 *** SECONDI ***
# Cotoletta alla milanese: 7,50
# Roast-beef all’inglese: 7,50
# Petto di pollo alla griglia: 7,50
# Frittelle vegetariane: 7,50
# Frittata con spinaci e parmigiano: 7,50
# Torta salata con verdure miste, mozzarella e parmigiano: 7,50
 *** DOLCI ***
ddd Macedonia: 4,50`
    },
    {
        filename: './menu-181011.txt',
        expected: `data di oggi: GIOVEDÌ 11 OTTOBRE
 *** PRIMI ***
##### 🍷 RISOTTO SMERALDO (con spinaci e pancetta): 6,50
##### 🍷 PENNE ALLA PUTTANESCA: 6,50
##### 🍷 PASTA E FAGIOLI: 6,50
##### 🍷 CANNELLONI RIPIENI DI CARNE, PROSCIUTTO COTTO, MOZZARELLA E PARMIGIANO, CON POMODORO E BESCIAMELLA: 6,50
àààà Fusilli al pomodoro e basilico: 5,50
àààà Orzo con olive, tonno, peperoni e pomodorini: 5,50
 *** SECONDI ***
# Petto di pollo alla griglia: 7,50
# Roast-beef all’inglese: 7,50
# Torta salata con prosciutto cotto, spinaci e mozzarella: 7,50
# Frittata con verdure miste e parmigiano: 7,50
 *** DOLCI ***
ddd Macedonia: 4,50`
    },
    {
        filename: './menu-181010.txt',
        expected: `data di oggi: MERCOLEDÌ 10 OTTOBRE
 *** PRIMI ***
##### - RISOTTO ALLA MONZESE (zafferano e salsiccia): 6,50
##### - RAVIOLI DI CARNE CON SUGO DI BRASATO: 6,50
##### - SPAGHETTI ALLA CARBONARA: 6,50
##### - MINESTRONE DI VERDURE: 6,50
àààà Penne al pomodoro e basilico: 5,50
àààà Orzo con pomodorini, melanzane, zucchine e peperoni: 5,50
 *** SECONDI ***
# Petto di pollo alla griglia: 7,50
# Straccetti di pollo saltati al vino bianco: 7,50
# Bistecca di scamone ai ferri: 7,50
# Focaccia di nostra produzione con pomodorini: 7,50
# Focaccia di nostra produzione farcita con prosciutto cotto, mozzarella, zucchine e pomodorini: 7,50
# Melanzane ripiene con scamorza, pancetta, parmigiano, pomodorini, pecorino e uova: 7,50
# Torta salata con zucchine, mozzarella e pomodorini: 7,50
# Frittata con spinaci e parmigiano: 7,50
 *** DOLCI ***
ddd Torta di mele: 4,50
ddd Cheesecake ai frutti di bosco: 4,50
ddd Cheescake all’oreo: 4,50
ddd Macedonia: 4,50`
    },
    {
        filename: './menu-181009.txt',
        expected: `data di oggi: MARTEDÌ 9 OTTOBRE
 *** PRIMI ***
##### 🍅SPAGHETTI CACIO E PEPE: 6,50
##### 🍅RISOTTO CON PERE E TALEGGIO: 6,50
##### 🍅 ORECCHIETTE DI PASTA FRESCA CON ZUCCHINE, POMODORINI E SCAGLIE DI GRANA: 6,50
##### 🍅 ZUPPA DI LENTICCHIE CON CROSTINI: 6,50
àààà Sedanini al pomodoro e basilico: 5,50
àààà Orzo e Farro con melanzane, pomodorini e ricotta salata: 5,50
 *** SECONDI ***
# Petto di pollo alla griglia: 7,50
# Brasato di vitello al barolo con polenta: 7,50
# Roast-beef all’inglese: 7,50
# Frittata con broccoli e parmigiano: 7,50
# Torta salata di cipolle, peperoni, salsiccia e mozzarella: 7,50
# Omelettes con carciofi, speck e mozzarella: 7,50
 *** DOLCI ***
ddd Cheesecake all’oreo: 4,50
ddd Cheesecake ai frutti di bosco: 4,50
ddd Torta di mele: 4,50
ddd Macedonia: 4,50`
    },
    {
        filename: './menu-181008.txt',
        expected: `data di oggi: LUNEDÌ 8 OTTOBRE
 *** PRIMI ***
##### - RISOTTO CON CAVOLO VIOLETTO, MELE, NOCI E ACETO BALSAMICO: 6,50
##### - TAGLIATELLE DI PASTA FRESCA AL RAGÙ: 6,50
##### - ZUPPA DEL CONTADINO (orzo, farro, legumi misti, sedano, carote, pomodoro): 6,50
##### - NIDI DI RONDINE (girelle di pasta fresca al forno, con prosciutto cotto, mozzarella, pomodoro e besciamella): 6,50
àààà Conchiglie al pomodoro: 5,50
àààà Orzo con zucchine e pomodorini: 5,50
 *** SECONDI ***
# Spezzatino di vitello con patate: 7,50
# Petto di pollo alla griglia: 7,50
# Roast-beef all’inglese: 7,50
# Omelettes con spinaci e mozzarella: 7,50
# Torta salata con zucchine, prosciutto cotto e mozzarella: 7,50
# Frittata con spinaci e parmigiano: 7,50
 *** DOLCI ***
ddd Macedonia: 4,50`
    },
    {
        filename: './menu-181005.txt',
        expected: `data di oggi: VENERDÌ 5 OTTOBRE
 *** PRIMI ***
##### - ORECCHIETTE DI PASTA FRESCA CON VONGOLE, PESTO E POMODORINI: 7,50
##### * SPAGHETTI ALLA MEDITERRANEA CON TONNO, POMODORINI, CAPPERI, OLIVE E RUCOLA: 6,50
##### - ZUPPA DI BORLOTTI CON CROSTINI: 6,50
##### * RISOTTO CON ASPARAGI E SPECK: 6,50
àààà Fusilli al pomodoro e basilico: 5,50
àààà Farro con pomodorini, zucchine e pesto (no aglio): 5,50
 *** SECONDI ***
# Petto di pollo alla griglia: 7,50
# Spezzatino di vitello con patate: 7,50
# Arrosto di vitello: 7,50
# Roast-beef all’inglese: 7,50
# Torta salata con prosciutto cotto, zucchine, brie e mozzarella: 7,50
# Frittata con spinaci e parmigiano: 7,50
 *** DOLCI ***
ddd Macedonia: 4,50`
    },
    {
        filename: './menu-181004.txt',
        expected: `data di oggi: GIOVEDÌ 4 OTTOBRE
 *** PRIMI ***
##### - RISOTTO CON CACIO E PEPE: 6,50
##### - ZUPPA DI FAVE E CICORIA: 6,50
##### - ORECCHIETTE DI PASTA FRESCA CON POMODORINI, RUCOLA E SCAGLIE DI GRANA: 6,50
##### - SPAGHETTI ALLA CARBONARA: 6,50
àààà Conchiglie al pomodoro e basilico: 5,50
àààà Farro con pomodorini, melanzane e scaglie di grana: 5,50
 *** SECONDI ***
## FOCACCIA ARTIGIANALE DI FARINE INTEGRALI BIO DA FARCIRE A VOSTRO PIACERE: 7,00
# Roast-beef all’inglese: 7,50
# Petto di pollo alla griglia: 7,50
# Omelettes con spinaci, prosciutto cotto e brie: 7,50
# Frittata con verdure miste e parmigiano: 7,50
# Torta salata con carciofi, zucchine, prosciutto cotto, mozzarella e brie: 7,50
 *** DOLCI ***
ddd Macedonia: 4,50`
    },
    {
        filename: './menu-181003.txt',
        expected: `data di oggi: MERCOLEDÌ 3 OTTOBRE
 *** PRIMI ***
##### * RISOTTO CON FUNGHI E PORCINI: 6,50
##### * ZUPPA DI LENTICCHIE CON CROSTINI DI PANE: 6,50
##### * MEZZE MANICHE ALLA NORMA: 6,50
##### * RAVIOLI RIPIENI DI CARNE CON PISELLI, PROSCIUTTO E PANNA: 6,50
àààà Farfalle al pomodoro e basilico: 5,50
àààà Farro con patate, pomodorini, scamorza affumicata e prezzemolo: 5,50
 *** SECONDI ***
# Cotoletta alla milanese: 7,50
# Petto di pollo alla griglia: 7,50
# Omelettes con fagiolini, scamorza e parmigiano: 7,50
# Torta salata con zucchine, pomodorini, melanzane, peperoni e mozzarella: 7,50
# Frittata con spinaci e formaggio: 7,50
 *** DOLCI ***
ddd Macedonia: 4,50`
    },
    {
        filename: './menu-181002.txt',
        expected: `data di oggi: MARTEDÌ 2 OTTOBRE
 *** PRIMI ***
##### - RISOTTO CON RADICCHIO E SCAMORZA: 6,50
##### - GNOCCHI FATTI IN CASA CON POMODORO: 6,50
##### - LASAGNE ALLA BOLOGNESE: 6,50
##### - MINESTRONE DI VERDURE FRESCHE: 6,50
##### - FARFALLE ALLA PUTTANESCA: 6,50
àààà Farro con pesto (no aglio), pomodorini, patate e fagiolini: 5,50
 *** SECONDI ***
# Petto di pollo alla griglia: 7,50
# Roast-beef all’inglese: 7,50
# Melanzane impanate farcite con prosciutto cotto, e fontina: 7,50
# Omelettes con zucchine e mozzarella: 7,50
# Torta salata con melanzane, mozzarella e pomodorini: 7,50
# Frittata con carciofi e parmigiano: 7,50
 *** DOLCI ***
ddd Macedonia: 4,50`
    },
    {
        filename: './menu-181001.txt',
        expected: `data di oggi: LUNEDÌ 1 OTTOBRE
 *** PRIMI ***
##### - GNOCCHI FATTI IN CASA AI QUATTRO FORMAGGI CON NOCI: 7,50
##### - MEZZE MANICHE ALLA BOSCAIOLA (salsiccia, funghi, pomodoro): 6,50
##### - RISOTTO CON ASPARAGI E BRIE: 6,50
##### - ZUPPA DI CECI CON CROSTINI: 6,50
àààà Maccheroni al pomodoro e basilico: 5,50
àààà Farro con peperoni, pomodorini, capperi, tonno e olive taggiasche: 5,50
 *** SECONDI ***
# Arrosto di vitello: 7,50
# Petto di pollo alla griglia: 7,50
# Cosce di pollo al forno: 7,50
# Melanzane ripiene con uova, parmigiano, scamorza e pomodorini: 7,50
# Torta salata con peperoni, zucchine, melanzane e mozzarella: 7,50
# Frittata con spinaci, patate e parmigiano: 7,50
# Omelettes con carciofi, mozzarella e prosciutto cotto: 7,50
 *** DOLCI ***
ddd Macedonia: 4,50`
    }

]

let failed = 0
    , passed = 0;

menus.map(menu => {
    let one = fa(menu.filename);
    let other = menu.expected;
    var diff = jsdiff.diffChars(other, one);

    console.log(chalk[diff.length === 1?'green':'red'](menu.filename));
    if(diff.length > 1) {
        failed ++;
        diff.forEach(function(part){
            // green for additions, red for deletions
            // grey for common parts
            var color = part.added ? 'green' :
              part.removed ? 'red' : 'grey';
          
            process.stderr.write(part.value[color]);
          });
           
          console.log();
          console.log(diff);
    } else {
        passed++;
    }
});

console.log(`⚡ ${failed + passed} Tests: ${failed} failed, ${passed} passed.`);
