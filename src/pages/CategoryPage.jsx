import React, { useContext } from 'react'
import { useThemeContext } from '../context/ThemeContext';

const CategoryPage = () => {
  // to use the reservior of the context we say:
  const { isDarkMode, toggleTheme } = useContext(useThemeContext); //accessing theme data
  return (
    <div className='min-h-screen bg-blue-500 dark:bg-purple-500 text-black'>CategoryPage</div>
  )
}

export default CategoryPage