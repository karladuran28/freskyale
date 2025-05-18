const ScrollingText = ({message}) => {
  return (
    <div className="relative h-full flex justify-center overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 animate-scroll-up">
        {message.split('').map((x, index) => 
          (x!== ' ' 
            ? <p key={index} className="text-center text-2xl">{x}</p> 
            : <p key={index}>&nbsp;</p>)
        )}
      </div>
    </div>
  );
};

export default ScrollingText;