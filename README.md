# BAR MILANO MENU PARSER #
Questo script interpreta un menu letto da un file di testo e ne stampa il contenuto normalizzato in formato testo o markdown.

## Install
```bash
git clone https://git.docebo.info/marco.bianco/bar-milano-menu-parser

npm install && npm link
```

## Run
```bash
menu [[options][date]]
```
dove `date` è un codice data nel formato YYMMDD (i.e. 181013), che corrisponde alla data del menu che si desidera visualizzare, con default a data di oggi.

## Options
| Option | Values | Default | Description |
|---|---|---|---|
| `-f` , `--format` | `md`, `text` | `text` | Formato da visualizzare |

## Sample output
```bash
parser⚡ ⇒ menu
🎡🎃 MENÙ DI MERCOLEDÌ 17 OTTOBRE 🎃🎡
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
Macedonia: 4,20
```

```md
parser⚡ ⇒ menu -f md
# BAR MILANO

#### MENU DI MERCOLEDÌ 17 OTTOBRE

---

### PRIMI

    * ORECCHIETTE DI PASTA FRESCA CON BROCCOLI, PANCETTA E POMODORINI: 6,20
    * RISOTTO CON PERE E TALEGGIO: 6,20
    * ZUPPA DI CECI: 6,20
    * LASAGNE CON PESTO, PATATE E FAGIOLINI: 6,20
    * Mezze Maniche al pomodoro e basilico: 5,20
    * Orzo alla Norma: 5,20

---

### SECONDI

    * Melanzane ripiene con pomodorini, scamorza, uova e parmigiano: 7,20
    * Petto di pollo alla griglia: 7,20
    * Bistecca di roast-beef ai ferri: 7,20
    * Arrosto di vitello: 7,20
    * Frittata con zucchine e mozzarella: 7,20
    * Torta salata con spinaci, prosciutto cotto, mozzarella, uova e mascarpone: 7,20

---

### DOLCI

    * Torta Oreo: 4,20
    * Torta Rocher: 4,20
    * Torta Vegana con mele e lamponi: 4,20
    * Macedonia: 4,20
```

## Tests
Siccome il formato di input cambia frequentemente, sarà necessario adattare le regexp per far lavorare correttamente lo script. 

Con il comando `menu-test` è possibile validare tutti gli output dei menu di esempio (contenuti nella cartella `sampleMenu`). 

Per aggiungere un nuovo sampleMenu, creare un nuovo file in `sampleMenu`, nominato `menu-YYMMDD.txt` dove `YYMMDD` è la data di riferimento per quello specifico menu.

## Contributors
Se stai ancora leggendo, contribuire a questo repo è obbligatorio. L'unica accortezza che devi avere è quella di assicurarti che tutti i test siano verdi, prima di committare le tue modifiche.
