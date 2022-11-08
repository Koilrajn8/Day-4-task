var xhr = new XMLHttpRequest();

xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.send();

xhr.onload= function(){

    if(xhr.status>=200 && xhr.status<=300){
      let data = JSON.parse(this.response);
      // console.log(data[1]);

      const data2=data.map((data)=>`
      Flag: ${data.flag}
      `)
      console.log(data2);

      document.getElementById("data").innerText=data2;

    
    }
  };
