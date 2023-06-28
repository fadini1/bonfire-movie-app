interface InputProps {
  id: string;
  value: string;
  label: string;
  type?: string;

  onChange: any;
}

const Input: React.FC<InputProps> = ({
  id, value, label, type, onChange
}) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        type={type}
        value={value}
        id={id} 
        placeholder=" "
        className="block rounded-md w-full md:text-lg text-zinc-400 font-medium
        bg-zinc-800 focus:outline-none focus:ring-0 appearance-none 
        md:pt-5 pt-5 md:pb-2 pb-1 px-3 peer hover:bg-zinc-700/80 transition duration-300"
      />
      <label 
        htmlFor={id}
        className="absolute transform duration-150 -translate-y-3 scale-75
        md:top-3 top-3 left-3 z-10 origin-[0] peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0 peer-focus:scale-75
        peer-focus:-translate-y-3 text-zinc-400 font-semibold md:text-lg"
      >
        {label}  
      </label>
    </div>
  )
}

export default Input;