const Input = ({
  type,
  label,
  value,
  onChange,
  name,
  placeholder,
  required,
  width,
  fontSize,
  register,
  errors,
}: any) => {
  // Tailwind의 width 클래스를 동적으로 생성합니다.
  const widthClass = `w-${width}`;
  const fontSizeClass = `text-${fontSize}`;

  return (
    <div className={`mb-4 ${widthClass}`}>
      <label
        className={`block text-gray-700 font-bold mb-2 ${fontSizeClass}`}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        {...register}
        className={`shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${fontSizeClass} focus:border-blue-400  ${
          errors ? "border-red-500" : ""
        }`}
      />
      {errors && (
        <p className="text-xs italic text-red-500">{errors.message}</p>
      )}
    </div>
  );
};

export default Input;
