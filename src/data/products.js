// Catálogo demonstrativo: cada modelo usa sua própria fotografia.
// Marcas, preços e disponibilidade de cores devem ser confirmados antes de vendas reais.
const catalog = [
  {name:'Tênis modelo 01',image:'/product-thumb-1.jpeg',gallery:['/product-thumb-1.jpeg']},
  {name:'Tênis modelo 02',image:'/product-thumb-2.jpeg',gallery:['/product-thumb-2.jpeg']},
  {name:'Tênis modelo 03',image:'/product-thumb-3.jpeg',gallery:['/product-thumb-3.jpeg']},
  {name:'Tênis modelo 04',image:'/product-thumb-4.jpeg',gallery:['/product-thumb-4.jpeg']},
  {name:'Tênis modelo 05',image:'/product-thumb-5.jpeg',gallery:['/product-thumb-5.jpeg']},
];
export const products = catalog.map((item,i)=>({
  id:i+1,...item,gender:'Unissex',category:'Tênis',brand:'Não informada',
  price:200+(i%3)*40,priceDiscount:100+(i%3)*20,discount:50,
  description:'Modelo ilustrativo. Confirme marca, preço e disponibilidade antes da venda.',
  sizes:['38','39','40','41','42'],
  colors:['#1f1f1f','#c92071','#b5b6f2']
}));
export const collections=[
 {title:'Novo drop Supreme',discount:'30% OFF',image:'/collection-1.png',background:'#dce7f6'},
 {title:'Coleção Adidas',discount:'30% OFF',image:'/collection-2.png',background:'#e0e7ef'},
 {title:'Novo Beats Bass',discount:'30% OFF',image:'/collection-3.png',background:'#e4eaf2'}
];
