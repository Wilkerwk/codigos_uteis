//Criar objeto de icones do Mondrian - utilizados para conparadores em cards de produtos.
document.querySelectorAll(`#cro img[src]`).forEach((item)=>{
    var arr = item.getAttribute(`src`);    
    var arr1 = arr.split(`/`);
    var arr2 = arr1[arr1.length-1].split(`.`);      
        files.push({
            id: arr2[0],
            name: arr,
        });
});
