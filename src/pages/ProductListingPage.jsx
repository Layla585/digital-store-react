import React,{useMemo,useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import Layout from '../components/Layout';
import {FilterGroup,ProductListing} from '../components/Shop';
import {products} from '../data/products';

export default function ProductListingPage(){
 const [params]=useSearchParams();
 const [sort,setSort]=useState('');
 const [brands,setBrands]=useState([]);
 const [genders,setGenders]=useState([]);
 const [showFilters,setShowFilters]=useState(true);
 const filter=(params.get('filter')||'').trim().toLocaleLowerCase('pt-BR');
 const category=params.get('category');
 const filtered=useMemo(()=>{
  const list=products.filter(p=>
   (!filter||(p.name+' '+p.description+' '+p.brand).toLocaleLowerCase('pt-BR').includes(filter)) &&
   (!category||p.category.toLocaleLowerCase('pt-BR')===category.toLocaleLowerCase('pt-BR')) &&
   (!brands.length||brands.includes(p.brand)) &&
   (!genders.length||genders.includes(p.gender))
  );
  if(sort==='low')list.sort((a,b)=>a.priceDiscount-b.priceDiscount);
  if(sort==='high')list.sort((a,b)=>b.priceDiscount-a.priceDiscount);
  return list;
 },[filter,category,brands,genders,sort]);
 const toggle=(setter,value,checked)=>setter(old=>checked?[...new Set([...old,value])]:old.filter(v=>v!==value));
 const clear=()=>{setBrands([]);setGenders([]);setSort('')};
 return <Layout><div className="container listing-page">
  <div className="listing-heading"><h1>{filter?`Resultados para “${params.get('filter')}”`:category?`Categoria: ${category}`:'Todos os produtos'}</h1><span>{filtered.length} produtos encontrados</span></div>
  <button type="button" className="filter-toggle" aria-expanded={showFilters} onClick={()=>setShowFilters(v=>!v)}>{showFilters?'Ocultar filtros':'Mostrar filtros'}</button>
  <div className="listing-layout"><aside className="filters">
   <label className="sort-label">Ordenar por<select value={sort} onChange={e=>setSort(e.target.value)}><option value="">Selecione</option><option value="low">Menor preço</option><option value="high">Maior preço</option></select></label>
   {showFilters&&<div className="filter-panel"><h2>Filtrar por</h2>
    <FilterGroup title="Marca" options={[...new Set(products.map(p=>p.brand))].map(v=>({text:v,value:v}))} selected={brands} onChange={(value,checked)=>toggle(setBrands,value,checked)}/>
    <FilterGroup title="Gênero" options={['Masculino','Feminino','Unissex'].map(v=>({text:v,value:v}))} selected={genders} onChange={(value,checked)=>toggle(setGenders,value,checked)}/>
    <button type="button" className="clear-filters" onClick={clear}>Limpar filtros</button>
   </div>}
  </aside><div className="listing-results">{filtered.length?<ProductListing products={filtered}/>:<div className="empty"><p>Nenhum produto encontrado com os filtros selecionados.</p><button type="button" className="clear-filters" onClick={clear}>Limpar filtros</button></div>}</div></div>
 </div></Layout>;
}
