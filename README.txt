README.txt

Idé: Programmet skal få en tekst som input, endre dårlige ord/uttrykk til bedre og mer akademiske ord/uttrykk og gir dette som output. Ord som er endres skal markeres, og brukeren kan endre de markerte ordene til andre synonyme ord, eller beholde til orginale ordet.

OBS: 
Programmet og nettsiden er langt ifra ferdig. Spesielt når det kommer til korpus for oppslag mot endring av ord.

Slik fungerer programmet stegvis
1. Programmet får en tekst som input
2. Programmet scanner dokumentet
3. Programmet slår opp hvert ord mot "nor.js"
4. "nor.js" er et tekstdokument med ord som bør byttes ut, og alternativer til ord som heller burde brukes
5. Programmet setter sammen en ny tekst som er input teksten med mer akademiske ord/uttrykk.