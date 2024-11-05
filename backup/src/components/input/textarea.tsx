
interface TextareaProps extends React.ComponentProps<"textarea"> {
  label?: string;
}
export function Textarea({ label, ...rest }: TextareaProps) {
  const randomUUID = crypto.randomUUID();
  return (
    <div className=" space-y-2 bg">
      <label htmlFor={randomUUID} className="font-bold">
        {label}
      </label>
      <div className="flex items-center border gap-x-2 border-[#0F1B2D] rounded-xl p-3">
        <textarea
          name=""
          id={randomUUID}
          className="outline-none bg-transparent w-full h-full"
          {...rest}
        ></textarea>
      </div>
    </div>
  );
}
