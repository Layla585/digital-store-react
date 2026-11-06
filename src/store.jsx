import React,{createContext,useContext,useEffect,useState} from 'react';
const C=createContext(null);const get=(k,d)=>{try{return JSON.parse(localStorage.getItem('drip_'+k))??d}catch{return d}};
export function StoreProvider({children}){const [users,setUsers]=useState(()=>get('users',[]));const [user,setUser]=useState(()=>get('user',null));const [cart,setCart]=useState(()=>get('cart',[]));const [orders,setOrders]=useState(()=>get('orders',[]));
useEffect(()=>{for(const [k,v] of Object.entries({users,user,cart,orders}))localStorage.setItem('drip_'+k,JSON.stringify(v))},[users,user,cart,orders]);
function register(data){if(users.some(u=>u.email.toLowerCase()===data.email.toLowerCase()))throw Error('Este e-mail já está cadastrado.');const newUser={id:Date.now(),name:data.name,email:data.email,password:data.password};setUsers(x=>[...x,newUser]);setUser({id:newUser.id,name:newUser.name,email:newUser.email})}
function login(email,password){const found=users.find(u=>u.email.toLowerCase()===email.toLowerCase()&&u.password===password);if(!found)throw Error('E-mail ou senha incorretos.');setUser({id:found.id,name:found.name,email:found.email})}
function add(product,size,color){setCart(old=>{const key=`${product.id}-${size}-${color}`;const exists=old.find(x=>x.key===key);return exists?old.map(x=>x.key===key?{...x,qty:x.qty+1}:x):[...old,{key,id:product.id,name:product.name,image:product.image,price:product.priceDiscount,size,color,qty:1}]})}
function quantity(key,delta){setCart(old=>old.map(x=>x.key===key?{...x,qty:x.qty+delta}:x).filter(x=>x.qty>0))}
function checkout(){if(!user)throw Error('Entre na sua conta antes de finalizar o pedido.');if(!cart.length)throw Error('Seu carrinho está vazio.');const order={id:Date.now(),userId:user.id,date:new Date().toLocaleString('pt-BR'),items:cart,total:cart.reduce((s,x)=>s+x.price*x.qty,0),status:'Pedido demonstrativo recebido'};setOrders(x=>[order,...x]);setCart([]);return order.id}
return <C.Provider value={{user,cart,orders,register,login,logout:()=>setUser(null),add,quantity,checkout}}>{children}</C.Provider>}
export const useStore=()=>useContext(C);
