import '../styles/Categories.css'

function Categories({categories, activeCategory, setActiveCategory}) {

    return (
        <div className='lmj-categories'>
            <select 
                className='lmj-categories-select' 
                onChange={(e) => setActiveCategory(e.target.value)}
                value={activeCategory}
            >  
                <option value=''> ---- </option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    )
}


export default Categories;