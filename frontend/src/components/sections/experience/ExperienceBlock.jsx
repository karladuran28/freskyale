const ExperienceBlock = ({name, items}) => {

  return ( 
    <section>
      <h2 className="text-lg font-semibold border-b border-gray-400 pb-2 mb-4">
        {name}
      </h2>
      <ul className="space-y-6">
        {items.map((item, index) => (
          <li key={index} className="space-y-1">
            <div className="font-medium">{item.role}</div>
            <div className="text-sm opacity-75">{item.company}</div>
            <div className="text-xs opacity-60">{item.period}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ExperienceBlock