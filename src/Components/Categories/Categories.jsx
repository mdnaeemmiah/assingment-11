
import CategoryBox from './CategoryBox'
import { categories } from './CategoriesData.js'
import Container from '../Share/Container.jsx'
const Categories = () => {
  return (
    <Container>
      <div className='pt-4 flex items-center justify-between overflow-x-auto'>
        {categories.map(item => (
          <CategoryBox key={item.label} label={item.label}  />
        ))}
      </div>
    </Container>
  )
}

export default Categories
