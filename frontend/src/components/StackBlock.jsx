const StackBlock = () => {

  const planguages = ["Python", "Javascript", "Typescript", "C#", "Java", "C"]

  return (
    <div>
      <h1>Stack</h1>
      <br />
      <div className="grid grid-cols-3 gap-4">
        {planguages.map((elem, index) => (
          <div
            key={index} 
            className="bg-slate-600/25 p-6 text-center rounded-xl inset-shadow-sm inset-shadow-slate-700/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border-solid border-1"
          >
            <p>{elem}</p>
          </div>
        ))}
        <div>
        </div>
      </div>
    </div>
  )
}

export default StackBlock