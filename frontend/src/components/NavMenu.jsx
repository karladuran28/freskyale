import '../css/NavMenu.css'

const NavMenu = () => {

  const navigation = [
    { name: 'Projects', href: '#', current: true },
    { name: 'Experience', href: '#', current: false },
    { name: 'Languages', href: '#', current: false },
    { name: 'Hobbies', href: '#', current: false },
  ]

  return (
    <ul className='navMenu-container'>
      {navigation.map((elem, index) => {
        return <li key={index}><a href={elem.href}>{elem.name}</a></li>
      })}
    </ul>
  )
}

export default NavMenu

