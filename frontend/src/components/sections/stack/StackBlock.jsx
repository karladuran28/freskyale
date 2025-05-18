const StackBlock = ({name, segments}) => {

  return (
    <section>
      <h2 className="text-lg font-semibold border-b border-gray-400 pb-2 mb-4">
        {name}
      </h2>
      <ul className="space-y-2">
        {segments.map((project, index) => (
          <li key={index} className="opacity-75">{project}</li>
        ))}
      </ul>
    </section>
  )
}

export default StackBlock