
#Proiect realizat de : Gușatu Iulia Mariana, SIMPRE, an I
Prof. coordonator : Eduard Budacu


##I.	Introducere

Conceptul de bază de cloud computing datează din anii ’60, când John McCarthy a apreciat că “puterea de calcul va putea fi oferită într-o zi ca o utilitate publică.” Încă din 1966, Douglas Parkhill, în cartea “The Challenge of the Computer Utility”, atinge toate caracteristicile moderne ale conceptului.
Cloud computing reprezintă un ansamblu distribuit de servicii de calcul, aplicații, acces la informații și stocare de date, fără ca utilizatorul să aibă nevoie să cunoască amplasarea și configurația fizică a sistemelor care furnizează aceste servicii.  Expresia cloud computing derivă dintr-o reprezentare grafică, simbolică a Internetului, des întâlnită în formă de nor („the cloud”), folosită atunci când detaliile tehnice ale Internetului pot fi ignorate.  
Numele de cloud este folosit metaphoric, neexistând un nor propriu-zis pe care pot fi stocate fișiere.  Acestea nu mai sunt stocate pe hard disk-ul propriu, ci prin utilizarea serviciilor puse la dispoziție de cloud, sunt stocate pe hard disk-uri deținute de companii de renume precum Google, Amazon, IBM sau Oracle.
Datele trimise prin Internet, sunt preluate de data centere, prin intermediul unui master control data server. Acesta nu va trimite fișierele doar pentru depozitare, ci va crea diferite copii, pe care le va trimite către unități diferite de stocare. Acest principiu poartă denumirea de redundanță și este folosit pentru prevenirea distrugerilor fișierelor în cazul defecțiunii unuia dintre servere. 
Beneficiile utilizării tehnologiei cloud computing sunt următoarele:
o	reducerea semnificativă a costurilor de hardware și software;
o	flexibilitatea dată de posibilitatea de a alege funcțiile și limitele de spațiu dorite;
o	mobilitatea – o mare parte din serviciile cloud pot fi accesate de pe orice device mobil;
o	siguranța – datele sunt protejate, iar pentru companiile care au o nevoie sporită de securitate există opțiunea creării unui cloud privat (prin propriile resurse hardware) sau al unui cloud hibrid (stocarea datelor atât pe un cloud public, cât și pe unul privat).
Pentru implementarea aplicației am ales mediul Amazon Elastic Compute Cloud(Amazon EC2). Acesta este un serviciu web, care oferă capacitate de calcul redimensionabilă, în cloud, permițând construirea și găzduirea sistemelor software.
    

##II.	Descriere problemă

Foarte multe persoane își doresc lecturarea cărților online, de pe device-uri portabile, ușor de accesat și înmagazinat. Din această cauză, am considerat că realizarea unei aplicații de accesare a cărților online prin intermediul unui API furnizat  de Google, este benefică.

##III.	Descriere API

Google books APIs reprezintă modalitatea prin care compania Google încearcă să aducă conținutul cărților fizice la nivelul site-urilor web. Astfel acest serviciu oferă posibilitatea ca aplicația să acceseze conținutul integral al acestora, să extragă conținutul lor și să citească în timp real cărțile disponibile , de tip eBook. De asemenea, permite crearea propriului raft de cărți virtual. 
Prin intermediul Api Viewer-ului integrat, se poate accesa pe propriul site opțiunea de Google Books previews, iar dezvoltatorul are posibilitatea de a controla accesul la acestea.
Site-ul destinat acestui API, îi oferă posibilitatea dezvoltatorului de a vedea modalități de utilizare în cadrul altor aplicații, precum WorldCat, GoogdReads sau multe altele. De asemenea, dezvoltatorul are posibilitatea de a vizualiza documentația acestui API și să înteleagă modalitatea de funcționare și de implementare alui.
Google Books are la bază 4 concepte:
####-	Volumul: reprezentat de datele pe care Google Books le găzduiește în legătură cu o carte sau o revistă. Aceasta este resursa principal când vine vorba de API Books; toate celelalte adnotează sau conțin un volum.
####-	Biblioteca: este formată din mai multe rafturi de cărți, acestea fiind reprezentate de volume. Google Books îi furnizează utilizatorului un set de cărți. Unele dintre aceste rafturi sunt gestionate chiar de către utilizator, dar există și rafturi completate automat, pe baza preferințelor sale, rezultate din activitatea desfășurată.  De asemenea, utilizatorul are posibilitatea de a șterge sau de a modifica rafturile sale, care sunt umplute mereu cu volume. Acestea pot fi publice sau private, în funcție de setările realizate de cel care utilizează aplicația, acțiune care se poate desfășura doar prin intermediul site-ului Google Books.
####-	Recenzia: reprezintă o combinație între un text și un star rating. Un utilizator poate realiza o singură recenzie pentru un anumit volum. Recenziile provin din surse externe și sunt atribuite în mod corespunzător.
####-	Reading position: îndică poziția la care s-a oprit utilizatorul din citit, pentru un volum dat. La fel ca în cazul recenziei, un utilizator poate avea o singură poziție per volum. Aceasta nu există în cazul în care utilizatorul nu a deschis niciodată volumul respectiv. Poziția de citire este capabilă să rețină detalii despre utilizator care au o precizie până la rezoluția unui cuvânt. Pentru utilizator, aceste informații sunt întotdeauna private.
Modelul de date în cazul Book API este reprezentat de prezența a două tipuri de resurse: volumul de resurse și raftul de resurse. Acest model se bazează pe un grup format din astfel de resurse, numit colecție.
Rafturile predefinite de Google pentru fiecare utilizator sunt reprezentate de :Favorites, Purchased, To read, Reading now, Have read, Reviewed, Recently viewd, My eBooks, Books for you.
Operațiile care se pot realiza cu Books API sunt următoarele: listare, inserare, preluare, actualizare și ștergere. De asemenea, invocarea API-ului se poate realiza direct, prin Rest sau prin intermediul JavaScript, folosind REST, dar neavând nevoie de server.
În implementarea aplicației mele, voi folosi pentru invocarea API-ului meu, Rest.
Cel de-al doilea API utilizat este REST API, care utilizează o bază de date stocată de asemenea în cloud. REST reprezintă acronimul pentru transferul reprezentat de stare. Acesta este un stil arhitectural pentru sisteme distribuite și a fost prima data prezentat acum 20 de ani, de către Roy Fielding.
Principiile REST sunt reprezentate de:
####-	Client-server: separarea interfeței utilizatorului de principiile de stocare a datelor, oferă portabilitatea interfeței de-a lungul mai multor platforme și crește scalabilitatea datorită simplificării componentelor serverului
####-	Stateless: toate cererile trimise de către client trebuie să conțină informații complete necesare înțelegerii cererii
####-	Cacheble: Restricțiile din memoria cache impun ca datele dintr-un răspuns la o solicitare să fie etichetate implicit sau explicit ca fiind cacheable sau non-cacheable.
####-	Uniform interface: Prin aplicarea principiului generalității de inginerie software pe interfața componentă, arhitectura generală a sistemului este simplificată și vizibilitatea interacțiunilor este îmbunătățită.
####-	Layered system: permite construirea arhitecturii pe baza unei straturi ierarhice
####-	Code on demand: REST oferă posibilitatea extinderii funcționalităților clientului prin descărcarea și executarea codului sub forma unor scripturi.

##IV.	Flux de date
###4.	Exemple de request/response
Am exemplificat funcționarea request/response cu ajutorul platformei POSTMAN.
Acestea sunt:
####-	POST
 ![](/proiectCloudComputingGusatuIulia/images/exempluPOST.PNG)
Fig. 1. POST

####-	PUT
 ![](/proiectCloudComputingGusatuIulia/images/exempluPUT.PNG)
Fig. 2. PUT
####-	DELETE
 ![](/proiectCloudComputingGusatuIulia/images/exempluDELETE.PNG)
Fig. 3. Delete
####-	GET
 ![](/proiectCloudComputingGusatuIulia/images/exempluGET.PNG)
Fig. 4. GET

###5.	Metode HTTP
Metodele HTTP folosite sunt reprezentate de cele CRUD: POST; PUT; DELETE; GET, exemplificate în cazul REST API și metoda GET, exemplificată în cazul GOOGLE BOOKS API.

###6.	Autentificare și autorizare servicii utilizate

Pentru autentificare și autorizare, mi-am făcut cont pe platforma AWS de la Amazon pentru a accesa mediul de lucru furnizat, Cloud9, iar în cazul GOOGLE BOOKS API, mi-am configurat credențialele și mi-am activat API-ul respective, creându-mi și un API key.
 ![](/proiectCloudComputingGusatuIulia/images/exempluMediuAWS.PNG)
Fig. 5. Cont AWS

 ![](/proiectCloudComputingGusatuIulia/images/exempluAPIKEY.PNG)
Fig. 6. API KEY

##V.	Capturi de ecran
 
 ![](/proiectCloudComputingGusatuIulia/images/BookMania.PNG)
Fig.7. BookMania


##VI.	Referințe 
•	https://gotech.world/serviciile-de-stocare-cloud-cum-functioneaza-si-ce-avantaje-iti-aduc/
•	http://carment.ase.ro/cc/curs/cc-index.html
•	https://developers.google.com/books
•	https://developers.google.com/books/docs/v1/using






