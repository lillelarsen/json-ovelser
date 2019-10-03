/*console.log(
    Personer[0].Fornavn, Personer[1].Fornavn, Personer[2].Fornavn, Personer[3].Fornavn
);*/

/*for (let i = 0; i < Personer.length; i++) {
            
        console.log(
            Personer[i].Fornavn, Personer[i].Efternavn
        );

};*/

fetch('js/team.json')
  .then(function(response) {
      return response.json();
  })
  .then(function(data) {
        for (i = 0; i < data.length; i++) {
            console.table(data[i]);
        }
 

const main = document.querySelector('main');

for (let i = 0; i < data.length; i++) {
    
    const article = document.createElement('article');
    const h1 = document.createElement('h1');
    const pAlder = document.createElement('p');
    const pSko = document.createElement('p');
    const pFarve = document.createElement('p');
    const navn = document.createTextNode(`${data[i].Fornavn} ${data[i].Efternavn}`);
    const alder = document.createTextNode(data[i].Alder);
    const sko = document.createTextNode(data[i].Skostørrelse);
    const farve = document.createTextNode(data[i].Hårfarve)

    main.appendChild(article);
    article.appendChild(h1);
    article.appendChild(pAlder);
    article.appendChild(pSko);
    article.appendChild(pFarve);
    h1.appendChild(navn);
    pAlder.appendChild(alder);
    pSko.appendChild(sko);
    pFarve.appendChild(farve);

};

});
