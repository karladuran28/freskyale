
const Test = () => {
  return (
    <>
    <div 
    className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 px-4 whitespace-nowrap sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left" 
    role="tablist" 
    aria-orientation="horizontal">
      <div className="relative lg:pl-8">
        {/* Icono del lado izquierdo */}
        <svg 
          aria-hidden="true" 
          viewBox="0 0 6 6" 
          className="absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block fill-fuchsia-600 stroke-fuchsia-600"
        >
            <path 
              d="M3 0L6 3L3 6L0 3Z" 
              strokeWidth="2" 
              strokeLinejoin="round">
            </path>
        </svg>
        <div className="relative">
          <div className="text-sm text-pink-400">
            <button 
              className="data-selected:not-data-focus:outline-hidden" 
              id="headlessui-tabs-tab-:Rpjal7qfja:" 
              role="tab" 
              type="button" 
              aria-selected="true" 
              tabIndex="0" 
              data-headlessui-state="selected" 
              data-selected="" 
              aria-controls="headlessui-tabs-panel-:Rdal7qfja:">
                <span className="absolute inset-0"></span>
                Opening Day
            </button>
          </div>
          <time 
            dateTime="2022-04-04" 
            className="mt-1.5 block text-2xl font-semibold tracking-tight text-slate-300">
              April 4
          </time>
        </div>
      </div>
      <div className="relative lg:pl-8">
        <svg 
          aria-hidden="true" 
          viewBox="0 0 6 6" 
          className="absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block fill-transparent stroke-slate-400">
            <path 
              d="M3 0L6 3L3 6L0 3Z" 
              strokeWidth="2" 
              strokeLinejoin="round">
            </path>
        </svg>
        <div className="relative">
          <div className="text-sm text-slate-500">
            <button 
              className="data-selected:not-data-focus:outline-hidden" 
              id="headlessui-tabs-tab-:Rqjal7qfja:" 
              role="tab" 
              type="button" 
              aria-selected="false" 
              tabIndex="-1" 
              data-headlessui-state="" 
              aria-controls="headlessui-tabs-panel-:Rlal7qfja:">
                <span className="absolute inset-0"></span>
                Speakers &amp; Workshops
            </button>
          </div>
          <time 
            dateTime="2022-04-05" 
            className="mt-1.5 block text-2xl font-semibold tracking-tight text-slate-300">
              April 5
          </time>
        </div>
      </div>
    </div>
    </>
  )
}

export default Test