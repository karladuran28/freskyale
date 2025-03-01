
const NavMenu = () => {

  const navigation = [
    { name: 'Projects', href: '#projectsBlock', current: true },
    { name: 'Experience', href: '#experienceBlock', current: false },
    { name: 'Languages', href: '#languagesBlock', current: false },
    { name: 'Hobbies', href: '#hobbiesBlock', current: false },
  ]

  return (
    <div className="flex fixed top-0 left-0 w-full justify-center bg-gray-950">
      <ul className="flex justify-center">
        {navigation.map((elem, index) => {
          return <li key={index}>
            <a className="block px-13 py-8 hover:bg-slate-700 transition text-lg" href={elem.href}>{elem.name}</a>
          </li>
        })}
      </ul>
    </div>
  )
}

export default NavMenu

