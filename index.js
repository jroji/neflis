const list = [
	{ description: 'asdasd asd asd asd asd asd asdas', name: 'Star wars IV', featured: false, image: 'https://images-na.ssl-images-amazon.com/images/I/81aA7hEEykL.jpg' },
	{ description: 'asdasd asd asd asd asd asd asdas', name: 'Star wars V', featured: true, image: 'https://m.media-amazon.com/images/I/51nwJJf3IjL.jpg' },
	{ description: 'asdasd asd asd asd asd asd asdas', name: 'Star wars VI', featured: false, image: 'https://images-na.ssl-images-amazon.com/images/I/81g8vEs4ixL.jpg' },
	{ description: 'asdasd asd asd asd asd asd asdas', name: 'Star wars VII', featured: true, image: 'https://i.blogs.es/cacf2b/star-wars-el-despertar-de-la-fuerza-the-force-awakens-episodio-7-la-pelicula-blogdecine/1366_2000.jpg' },
	{ description: 'asdasd asd asd asd asd asd asdas', name: 'Star wars VIII', featured: false, image: 'https://i.blogs.es/de2a44/cartel-los-ultimos-jedi/1366_2000.jpg' },
	{ description: 'asdasd asd asd asd asd asd asdas', name: 'Star wars IX', featured: false, image: 'https://lumiere-a.akamaihd.net/v1/images/image_c671e2ee.jpeg?region=0,0,540,810' },
];


list.forEach(function(film, key){
  const slide = `
    <div class="swiper-slide">
      <p>${key + 1}</p>
      <p>${film.name}</p>
      <img style="width: 100%;" src="${film.image}">
    </div>
  `;

  const wrapper = document.querySelector('.swiper-wrapper');
  wrapper.innerHTML = wrapper.innerHTML + slide;
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
});

document.querySelectorAll('.swiper-slide').forEach(function(slide, key) {
  slide.addEventListener('click', function(e) {
    document.querySelector('.content').innerHTML = `
      <h1>${list[key].name}</h1>
      <img src="${list[key].image}">
      <p>${list[key].description}</p>
    `;
  });
});
