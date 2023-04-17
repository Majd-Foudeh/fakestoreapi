const card =document.getElementById("products");

function product(title, price, description, image) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;

}
let arr=[]
fetch('https://fakestoreapi.com/products?limit=20')
    .then(res => res.json())
    .then((data) => {
        data.map(data=> {
            card.innerHTML+=`
           
            <div class="card p-3 " style="width: 18rem;  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;">
                <img src="${data.image}" height="220rem" width="100%" alt="${data.title}">
                <div class="card-body d-flex flex-column justify-content-between">
                  <h5 class="card-title">${data.title}</h5>
                
                  <b class="fs-5">${data.price}$</b>
                  <a href="#" class="btn btn-info d-flex flex-row justify-content-center fw-medium">More about it</a>
                </div>
              </div>
    `
        })
    });    
    





       // Create 20 objects from the retrieved data
        // const products = [];
        // for (let i = 0; i < 20; i++) {
        //   const { title, price, description, image } = data[i];
        //   const item = new product(title, price, description, image);
        //   products.push(item);
        // }