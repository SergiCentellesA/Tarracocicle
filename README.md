# LLEGIU-ME  :speech_balloon:
Aquest és un repositori on he publicat la meva primera pàgina web per a l’assignatura de  Producció i disseny cartogràfic eines web. Aquesta web està publicada a [sergi-centelles.com/Tarracocicle/](https://sergicentellesa.github.io/Tarracocicle/).

## Tema i motivació  :pencil:
- He creat un centre d’investigació que està realitzant un projecte anomenat Tarracocicle.
- Busca demostrar l’importància dels carrils bici a la ciutat de Tarragona.
- He escollit aquesta temàtica i la ciutat de Tarragona per ser la capital de la comarca i pel seu atractiu turístic i urbà. També per com els carrils bici s’han adaptat a aquesta ciutat que ha evolucionat tant en els últims 20 anys.
- He escollit que fos sobre els carrils bici i no sobre un altre mitjà de transport, perquè una investigació dels carrils bici pot proporcionar una comprensió més completa dels seus beneficis en termes de mobilitat urbana, sostenibilitat ambiental, etc.

## Dades i continguts  :file_folder:
Les dades de la pàgina web han sigut extretes de diverses fonts:
- Les imatges han sigut extretes de canva o imatges personals.
- El text de la pàgina web ha sigut redactat completament per mi, menys els arxius PDF de l’apartat de projectes que han estat elaborats per més companys.
- El codi per a fer la pàgina web, ha estat realitzat mitjançant una web base del w3schools i amb ajuda de les presentacions i activitats a classe. 


## Estructura de la Web  :computer:
En aquesta pàgina web, trobareu 5 pàgines diferents:
- Inici: una breu presentació del nostre centre d’investigació i per què hem escollit la ciutat de Tarragona.
- Equip: amb els diversos membres que conformen el centre d’investigació i que han fet possible portar a terme el projecte Tarracocicle.
- Projectes: on es mostren els projectes exitosos que s’han dut a terme al llarg de la nostra existència.
- Mapa: amb els punts crítics on s'hauria de millorar la seva connectivitat amb l’entorn o millorar la seva circulació per Tarragona.
- Formulari de contacte.

L’estructura base de la web és la que es pot observar en les imatges següents:
![Part superior de la web](https://github.com/SergiCentellesA/Tarracocicle1/assets/168576732/82a4b5db-a9dc-4363-b16f-1eaeefeb8688)

![Peu de pàgina de la web](https://github.com/SergiCentellesA/Tarracocicle/assets/168576732/a209fbec-63f2-497f-b349-ddd6a5fab7a2)

- En la primera imatge, veiem la barra de navegació, amb el títol i subtítol de la web i el header de color negre que ens indica en quina pàgina de la web ens trobem.
- En la segona imatge, es veu l’eslògan de la pàgina web, el peu de pàgina (footer) i el botó de tornar a l’inici.
- Totes dues imatges conformen l’estructura base de la pàgina web, però en cada pàgina es trobarà una informació diferent (amb un mapa, imatges, text, etc).


## Web responsive  :page_facing_up:
Per a la realització del responsive de la pàgina web, he realitzat diverses tècniques perquè s’ajusti a tota mena de dispositius electrònics. El principal es el següent:
- Per ajustar la barra de navegació de la web per a dispositius moblis, he utilitzat el següent codi:
![Codi responsive](https://github.com/SergiCentellesA/Tarracocicle/assets/168576732/ec146d89-bd2e-44c3-870d-b0dee653e507)

La funció s'anomena myFunction i dins d’aquesta, s'obté un element del document HTML.

La funció altera la visibilitat d'un element a la pàgina web en alternar la classe w3-show. Si la classe és present, s'amaga; si no ho està, es mostra. L’he utilitzat per a crear efectes de desplegament o col·lapse en elements de navegació o menús.

També he utilitzat el Flexible Grid Layouts en utilitzar unitats relatives com percentatges (%) en lloc d’unitat fixes com píxels (px), per a crear dissenys fluids establint amplades i marges en termes relatius.

- El codi CSS utilitzat per al responsive de la pàgina web és el següent:

![Coid CSS](https://github.com/SergiCentellesA/Tarracocicle/assets/168576732/469bbc83-37d2-4e4d-a46a-c33d3db9082c)

Es pot apreciar com he utilitzat la regla @media (max-width: 768px) que s'aplica quan la pantalla té una amplada màxima de 768 píxels (com en dispositius mòbils). 

També hi ha estils per al Menú de Navegació que es mostra com un bloc.



## Cartografia  :globe_with_meridians:
Per a l’elaboració de la cartografia de la pàgina web, s’ha realitzat mitjançant QGIS 3.34 i el complement qgis2web. En aquest, he situat tres punts crítics de color blau per indicar les zones en les quals s’hauria d’instaurar un carril bici o s’hauria de millorar el que hi ha.
- En el cas del de la plaça Imperial Tàrraco (Punt crític 2), hi ha un carril existent, però s’hauria de millorar, perquè molesta tant a vehicles com a vianants. 
- Quant al de l’Avinguda Roma (Punt crític 3), s’hauria de crear un nou carril bici, ja que és l’Avinguda per la qual entres a Tarragona i arribes fins a la plaça principal d’aquesta. Per tant, es podria connectar el carril bici existent de la plaça imperial Tàrraco amb aquest nou. 
- El punt crític 1, situat a la zona del port de Tarragona, seria una bona opció per instal·lar un carril bici que connectes el Serrallo amb la platja del Miracle, fent així un espai atractiu per als ciclistes.

![Mapa](https://github.com/SergiCentellesA/Tarracocicle1/assets/168576732/1fdf5373-934a-4b0f-b360-6f9817e23ebd)

Detalls del mapa:
- Pots ampliar i minimitzar el mapa.
- En clicar els punts t’indica quin punt crític és.
- La llegenda és interactiva (pots seleccionar i desseleccionar al teu gust).
- Dos tipus de mapa base: el satèl·lit d’ESRI i el d’OpenStreetMap.



## Dificultats/millores  :chart_with_upwards_trend:
Durant l’elaboració de la pàgina web m’he topat amb diverses dificultats que han anat sent resoltes, però algunes d’elles no han sigut possibles.
