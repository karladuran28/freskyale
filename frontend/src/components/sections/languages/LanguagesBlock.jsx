const LanguagesBlock = ({name, items}) => {
  return (
    <section>
      <h2 className="text-lg font-semibold border-b border-gray-400 pb-2 mb-4">
        {name}
      </h2>
      <ul className="grid grid-cols-2 gap-4">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between">
            <span>{item.name}</span>
            <span className="opacity-60">{item.level}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default LanguagesBlock