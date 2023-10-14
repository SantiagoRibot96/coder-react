import ProductImg from '../ProductImg/ProductImg'
import ProductButton from '../ProductButton/ProductButton'
import ProductInfo from '../ProductInfo/ProductInfo'
import './ProductCard.css'

const ProductCard = () => {
  return (
    <div className='product-card'>
        <ProductImg/>
        <ProductInfo/>
        <ProductButton/>
    </div>
  )
}

export default ProductCard