import React , { useState, useEffect} from 'react';
import URL from './UrlBase';
import Storecode from './Storecode';
import axios from 'axios';


const Menu = () => {

  
useEffect(() => {
    
    axios.get(URL +`index.php/store_management/loadStoredata?store_code=${Storecode}`).then(response => {
        //  console.log(response);
        //  console.log(response.data);
       setCategory(response.data.store_category);
       setProducts(response.data.store_product);
       setAllProducts(response.data.store_product);
       const rerender = [{
           product_detail : response.data.store_product
       }]

       setDummyprod(rerender);

      }).catch(error => {
       console.log(error);
      });
  
}, [])

const [category, setCategory] = useState([]);
// console.log(category);
const [selected , setSelected] = useState(0);
const [Allproduct, setAllProducts] = useState([]);
const [product, setProducts] = useState([]);
// console.log(product);

const [dummyprod, setDummyprod] = useState([]);

const pick = (catid) => {
    const data = dummyprod[0].product_detail;
      
    const pList = data.filter(item => {
        const itemData = `${item.store_product_cat_id}`;
        const textData = catid;
        return itemData.indexOf(textData) > -1;
    })

    setProducts(pList);
    setSelected(catid);
    // setSelectedCategory(category.category_id)
}

const allClick = () => {
    setProducts(Allproduct);
}




    return (
        <>
        <div>
            
            <div class="categories">
                <section class="category-section">
            <button class="category black" onClick={allClick}><span>All</span></button>
           
            {/* <button class="button button-filter" onClick={allClick} data-filter="" >All</button> */}
            {
                 category.map((cat) => {
                    return  <button class={selected == cat.category_id ? 'category active' : 'category' } onClick={() => pick(cat.category_id)} data-filter="" key={cat.category_id}>{cat.category_name}</button>
                })
            }
            </section>
            </div>
            <div className="menu__container bd-grid">
            {
                product.map((prod) => { 
                    return  <div className="menu__content">
                                    <img src={URL + prod.location} alt="" className="menu__img"></img>
                                    <h3 className="menu__name">{prod.store_product_name}</h3>
                                    {/* <span className="menu__detail">Delicious dish</span> */}
                                    <span className="menu__preci">Php{prod.price}</span>
                                    <a href="#" className="button menu__button"><i className='bx bx-cart-alt'></i></a>
                        </div>
                
                    
               })
            } 
                </div>
        </div>
        </>
    )
}

export default Menu
{/**/}