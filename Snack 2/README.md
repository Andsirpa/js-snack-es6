# Snack 2:

Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame.
Per preparare l'aula di un nuovo corso abbiamo bisogno dei seguenti dati:
Un array di stringhe contenente il loro nome tutto in maiuscolo. ES (Marco della Rovere => MARCO DELLA ROVERE);
Un array di oggetti "studente" che hanno un totale di voti superiore a 70
Un array di oggetti "studente" che hanno un totale di voti superiore a 70 e id superiore a 120
Questo è l'elenco degli studenti:
| Id  | Name                  | Grades |
| --- | --------------------- | ------ |
| 213 | Marco della Rovere    | 78     |
| 110 | Paola Cortellessa     | 96     |
| 250 | Andrea Mantegna       | 48     |
| 145 | Gaia Borromini        | 74     |
| 196 | Luigi Grimaldello     | 68     |
| 102 | Piero della Francesca | 50     |
| 120 | Francesca da Polenta  | 84     |


# Svolgimento 

- scrivo l'array degli studenti

- creo un array di stringhe in maiuscolo
    - uso il .map per la modifica

- creo un areray per gli studenti con voti > 70
    - uso il .filter per prendere solo gli studenti che rispettano la condizione

- creo un array per gli studenti con voti > 70 e con ID > 120
    - anche qui uso un .filter

- stampo in console
