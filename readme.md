# CALCOLO BIGLIETTO DEL PREZZO DEL TRENO

## TRACCIA

```plaintext
nome repo: js-fizzbuzz

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso le funzioni document.createElement() e append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
```

## SVOLGIMENTO

- Imposto un ciclo for che con una variabile incrementa mi crea 100 ripetizioni.
- Inserisco quindi un if con condizione che in questo caso andrà ad intercettare per la ripetizione con il contatore multiplo di 3 && 5, stampando poi "FizzBuzz"
- Altrimenti se multiplo di 5 soltanto stampo "Buzz"
- Altrimenti se multiplo di 3 soltanto stampo "Fizz"
- Altrimenti stampo il numero del contatore

BONUS 1
BONUS 2
