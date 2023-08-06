<!-- markdown-link-check-disable -->

Crediti traduzione: Ryoma123 e Paper Jack

# Scrivere una guida
Allora, vuoi scrivere i suggerimenti per un gioco? Fantastico. Ogni titolo dovrebbe avere suggerimenti privi di anticipazioni! Il miglior punto di partenza è [questo repository](https://github.com/nice-game-hints/template), che contiene le istruzioni necessarie per la stesura di una guida e presenta anche degli esempi pratici.

<p class="hidden">
Riempire questo file README.md con quello che si desidera comunicare a un collaboratore e ricordarsi che questo documento non c'è nel sito www.nicegamehints.com.

Copia questo repository (cliccando il tasto verde con su scritto "Clone or download") per iniziare a creare i vostri suggerimenti.
</p>

# Concetti di un game hint repository
Il concetto dietro i suggerimenti Nice Game Hints (NGH) è l'idea che ogni videogioco abbia svariate **guide** e **sottoguide** dai molteplici suggerimenti, che il lettore può rivelare uno per uno. Oltretutto, tali lavori sono scritti utilizzando il linguaggio di [markdown](https://guides.github.com/features/mastering-markdown/).

## index.md - Metadati relativi al gioco
L'unico documento richiesto obbligatoriamente è `index.md`, perché definisce il nome del gioco e altri metadati. Di seguito, un piccolo esempio:
```markdown
---
title: Deponia Doomsday
keywords: deponia doomsday, guida
author: Juho Rutila
praise: https://www.buymeacoffee.com/jrutila
---

Benvenuti ai suggerimenti gratuiti per Deponia Doomsday! Seleziona una guida.
```

La parte tra le linee `---` è costituita da metadati:
 - **title**: Il nome del gioco mostrato nella pagina, nel titolo della pagina ecc;
 - **keywords**: Un elenco di parole chiave per aiutare i motori di ricerca e vengono ripetute sotto ogni guida del gioco;
 - **author**: Il tuo nome;
 - **praise**: Qui potete inserire un link per www.buymeacoffee.com, per chiedere ai lettori una donazione;

Il resto del testo è un markdown che viene mostrato nella prima pagina della guida.

## File di una guida
Tale documento è semplicemente un .md contenente i suggerimenti con le intestazioni. Di seguito, un breve esempio:
```markdown
---
title: Come si ottiene la carta stagnola?
keywords: carta stagnola, patate al forno
---

Questo testo è la prima cosa che viene mostrata al lettore ed è visibile anche nelle anteprime dei motori di ricerca (anche conosciuti come snippet).

# Mostra il primo indizio
Tutto ciò che si trova fino alla successiva riga `#` fa parte del primo suggerimento. Volendo si possono usare le notazioni in markdown.

# Mostra il secondo indizio
Questo è il contenuto del secondo suggerimento. Ecco un'immagine:
![Il testo dell'immagine non viene visualizzato](picture_file_name.png)

## Dimmi la soluzione
I due hashtag indicano che questo testo contiene delle anticipazioni. Il pulsante è rosso in modo che il lettore se ne accorga.
```

Anche in questo caso, il file di una guida inizia con dei metadati obbligatori:
 - **title**: Titolo della guida visualizzato nei pulsanti delle sottoguide e come titolo della pagina, ad esempio nelle inserzioni di Google.
 - **keywords**: Una lista di parole chiavi che aiutano i motori di ricerca.

Il seguente testo viene mostrato immediatamente all'utente, quindi non svelate subito la soluzione! Per di più, viene anche visualizzato nelle anteprime delle pagine nei risultati di Google, ma, attenzione, gli indizi effettivi non vengono mostrati.

Ogni riga con `#` (l'intestazione in markdown) indica un suggerimento nella guida. Il testo viene visualizzato nel pulsante dell'indizio, quindi non deve essere troppo lungo. Volendo, può essere semplice come "Suggerimento 1", "Suggerimento 2" ecc.

Ogni riga "##" indica un suggerimento che rivelerà uno spoiler successivo. Questi suggerimenti ricevono un trattamento speciale nell'interfaccia utente.

È possibile utilizzare la sintassi base del markdown: https://guides.github.com/features/mastering-markdown/

## Sottoguide
Le guide sono formate da una struttura a cartelle, in cui tutte le directory e i file .md al di sotto creano le sottoguide. Ma le cartelle inferiori necessitano di un file `index.md`. Di seguito, la raffigurazione di quanto spiegato:
```
📦 Ramificazione del repository
 ┣ 📜 index.md
 ┣ 📂 prima-parte-del-gioco
 ┃ ┣ 📜 index.md
 ┃ ┣ 📜 sottoguida.md
 ┃ ┗ 📂 sottoguida-per-prima-parte
 ┃   ┗ 📜 index.md
 ┣ 📂 seconda-parte-del-gioco
 ┃ ┣ 📜 index.md
 ┃ ┣ 📜 another.md
 ┃ ┗ 📜 benother.md
```

Il nome del file è visibile nella barra degli indirizzi del browser e in altri punti. Le sottoguide sono elencate in base al metadata `order` e vengono ordinate dal numero più basso a quello più alto. Se questo elemento viene omesso, le guide vegono elencate in ordine alfabetico. Per esempio, se si vuole disporre `benother.md` prima di `another.md`:
```markdown
filename: another.md
---
title: Secondo oggetto
order: 50
---
```

```markdown
filename: benother.md
---
title: Primo oggetto
order: 20
---
```

## Collegamenti tra le guide
Il collegamento ad una guida specifica avviene, ovviamente, con la sintassi del linguaggio markdown e specificando la singola parole del file, ma ciò significa che i nomi di questi oggetti devono avere parole uniche. Ecco un esempio:
```markdown
---
title: Come si ottiene la carta stagnola?
---

Guida per la carta stagnola.

# Mostra il primo indizio
Per prima cosa, è necessaria [una patata bollente](patata). Questo creerà un link ad un altro file della guida, che però si trova nella stessa cartella.

# Mostra il secondo indizio
Successivamente, occorre [un pelapatate](../pelapatate/index.md). Questo collegamento rimanderà a un'altra sottoguida che si trova nella cartella principale. È preferibile utilizzare il collegamento a parola singola spiegato poc'anzi.

# Mostra il terzo indizio
Infine, ottenete [il permesso di sbucciare le patate](/quarta-parte-del-gioco/permesso.md). Questo creerà un collegamento partendo dalla radice strutturata delle cartelle della guida. È preferibile utilizzare il collegamento a parola singola spiegato poc'anzi.
```

## Collegamento tra le guide a specifici suggerimenti
Per collegarsi a certi indizi di un'altra guida bisogna scrivere i link con le parentesi graffe. Ecco un piccolo esempio:
```markdown
---
title: Indizi collegati
---

Intro

# Primo indizio
Questo è il primo suggerimento e deve essere saltato.

# Secondo indizio {#secondo}
Questo è il secondo suggerimento che desideriamo arrivi direttamente al lettore

```

Per collegarsi direttamente al secondo indizio:
```markdown
---
title: Come si ottiene la carta stagnola?
---

Guida per la carta stagnola.

# Mostra il primo indizio
Vai al [secondo suggerimento dell'altra guida](guide#second). Questo rimanda al secondo suggerimento presente in un altro file.

```


## Indizio veloce
È possibile scrivere suggerimenti rapidi all'interno di un file. Questo consiglio veloce viene mostrato in un pulsante con un punto interrogativo che rivelerà il suggerimento in un pop-up.

Per scriverlo bisogna usare la seguente sintassi: `^[ footnote notation ]`

```markdown
---
title: Esempio di suggerimento rapido
---

In questo suggerimento è necessario utilizzare alcuni utensili per mangiare. ^[ Nel cassetto della cucina si trova una forchetta. ]

# Ho un utensile
La forchetta? Fate Attenzione. ^[ Infilare la forchetta nella presa elettrica. ]

# Mostra
Cliccare sul punto interrogativo a destra per vedere un'immagine. ^[ ![Il testo dell'immagine non viene visualizzato](picture_inside_quickhint.png) ]
```

## Cartelli
I cartelli sono citazioni dirette del gioco e possono aiutare il giocatore a risolvere l'enigma. Sono nascoste alla vista finché l'utente non li apre.

```markdown
---
title: Esempio di un cartello
---

> Personaggio: Questo è un testo del gioco

> Un altro Personaggio: aggiungere una riga vuota se ci sono più cartelli

Di seguito, il testo effettivo che viene mostrato all'utente. I testi dei cartelli di cui sopra sono inizialmente nascosti.

# Primo indizio
E il primo suggerimento
```

## Link alle sottoguide
È anche possibile mostrare un collegamento nell'elenco delle sottoguide, che punta a un altro file.

```markdown
---
linkTitle: Questa è una sottoguida che rimanda a un'altra guida
link: /full/path/to/guide.md
```

## Obiettivi
È possibile creare una cartella speciale con il nome di `_achievements` in cui scrivere i suggerimenti graduali per i vari obiettivi. Questa cartella può trovarsi ovunque, ma suggerisco di crearla nella cartella pricipale o in quella dei capitoli del gioco.
```
📦 Ramificazione del repository
 ┣ 📜 index.md
 ┣ 📂 prima-parte-del-gioco
 ┃ ┣ 📜 index.md
 ┃ ┣ 📜 sottoguida.md
 ┣ 📂 _obiettivi
 ┃ ┣ 📜 index.md
 ┃ ┣ 📜 sono-pronto.md
 ┃ ┣ 📜 sono-pronto.png
 ┃ ┣ 📜 già-fatto.md
 ┃ ┣ 📜 già-fatto.png
 ```
Nell'esempio precedente ci sono due obiettivi: `sono-pronto` e `già-fatto`. Il file png è una piccola immagine del obiettivo che viene mostrata nell'elenco dei risultati. uesto genere di file è più o meno simile a quello dei suggerimenti. Oltre agli altri metadati, è necessario scrivere anche un `sottotitolo`, che verrà mostrato all'utente nell'elenco dei traguardi.

### Collegamento agli obiettivi delle guide
È possibile avere un collegamento diretto da una guida ad un obiettivo, perché capita spesso che siano legati a specifici enigmi o aree del gioco. Perciò è possibile collegarsi ad un obiettivo aggiungendo un metadato `achievements` come quello seguente:

```markdown
---
title: Quest'area fantastica
achievements: sono-pronto,già-fatto
order: 50
---
```

## background.webp
È possibile aggiungere un file chiamato `background.webp` nella cartella principale della guida. Questa immagine sarà usata come sfondo della guida.

## small_bg.jpg
È possibile aggiungere un file chiamato `small_bg.jpg` nella cartella principale della guida. Questa immagine sarà usata come immagine di sfondo nell'elenco. Tale immagine dev'essere un jpg 500x300.

## Esempi?
Sfoglia l'[archivio di Nice Game Hints](https://github.com/nice-game-hints) per trovare degli esempi. Le guide di Deponia sono ottime per iniziare!

# Testare la guida
È possibile testare la guida scritta in www.nicegamehints.com. Per prima cosa è necessario che la guida si trovi localmente nella nostra directory, almeno nel caso in cui abbiamo scritto il tutto in locale; successivamente dobbiamo servire la directory via http.

Avete tre opzioni:

## 1. Eseguire con docker-compose
Basta eseguire `docker-compose up -d`, che caricherà un'immagine e la eseguirà.

## 2. Eseguire con docker
Su Windows:
```
docker run --rm -p 8080:8080 -v /$(pwd):/site ghcr.io/nice-game-hints/ngh-serve:latest
```

Su Linux:
```
docker run --rm -p 8080:8080 -v .:/site ghcr.io/nice-game-hints/ngh-serve:latest
```

## 3. Eseguire con http-server
Installare (https://www.npmjs.com/package/http-server) con `npm install -g http-server`

Dopo aver installato il server http, andate alla radice della vostra guida ed eseguite:
```
http-server --cors -d true -c-1 .
```

Il risultato dovrebbe essere simile a questo:
```
Starting up http-server, serving .
Available on:
  http://192.168.64.1:8080
  http://180.97.36.27:8080
  http://127.0.0.1:8080
Hit CTRL-C to stop the server
```
Tenere presente la porta del server http (nell'esempio è 8080).

## Visualizzare la guida nella UI di Nice Game Hints
È possibile verificare se il server http funziona navigando con il proprio browser (tenendo conto del numero della porta) all'indirizzo http://localhost:8080/index.md, si dovrebbe vedere l'indice grezzo del file.

Se il server http funziona correttamente e si vede il file, si può provare a navigare all'indirizzo http://www.nicegamehints.com/guide/local:8080/ (notare il numero di porta).

Regolate i cookie (disabilitateli tutti, tranne quelli obbligatori) per vedere la guida in forma pura. La navigazione potrebbe avere dei problemi (soprattutto quando si naviga *indietro*). Controllare l'url e rimuovere i caratteri "/" in eccesso se si finisce in una pagina 404.

# Pubblicare la guida
Si prega di creare un [issue](https://github.com/nice-game-hints/template/issues) a questo repository che riguarda la pubblicazione e vi aiuterò a risolverlo.

Crediti traduzione: Ryoma123 e Paper Jack
<!-- markdown-link-check-enable -->
