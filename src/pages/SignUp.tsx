import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../api/userApi";
import Input from "../lib/common/Input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password"); // 비밀번호 필드 값 확인
  const navigate = useNavigate();

  /**
   * useMutation을 사용하여 회원가입 요청을 보낸다.
   */
  const mutation = useMutation({
    mutationKey: ["registerUser"],
    mutationFn: registerUser,

    onSuccess: () => {
      alert("회원가입 성공");
      navigate("/");
    },
    onError: (error) => {
      alert("회원가입 실패");
      throw error;
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <div className="mt-64">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center w-1/2 p-10 mx-auto border border-gray-300 rounded "
      >
        <Input
          label="Name"
          type="text"
          placeholder="Name"
          name="name"
          register={register("name", {
            required: "이름을 입력해주세요",
            minLength: { value: 2, message: "이름은 2자 이상이어야 합니다." },
          })}
          errors={errors.name}
          width="2/3"
          fontSize="lg"
        />
        <Input
          label="Phone Number"
          type="tel"
          placeholder="Phone Number"
          name="phone_number"
          register={register("phone_number", {
            required: "전화번호는 필수입니다.",
            pattern: {
              value: /^01[0-9]-\d{3,4}-\d{4}$/,
              message: "올바른 전화번호 형식이 아닙니다. 예: 010-1234-5678",
            },
          })}
          errors={errors.phone_number}
          width="2/3"
          fontSize="lg"
        />
        <Input
          label="Email"
          type="email"
          placeholder="Email"
          name="email"
          register={register("email", {
            required: "이메일은 필수입니다.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "올바른 이메일 형식이 아닙니다.",
            },
          })}
          errors={errors.email}
          width="2/3"
          fontSize="lg"
        />
        <Input
          label="New_Password"
          type="password"
          placeholder="Password"
          name="password"
          register={register("password", {
            required: "비밀번호는 필수입니다.",
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message:
                "비밀번호는 최소 8자이며, 문자와 숫자를 포함해야 합니다.",
            },
          })}
          errors={errors.password}
          width="2/3"
          fontSize="lg"
        />
        <Input
          label="Confirm_Password"
          type="password"
          placeholder="Confirm Password"
          name="confirm_password"
          register={register("confirm_password", {
            required: "비밀번호 확인은 필수입니다.",
            validate: (value) =>
              value === password || "비밀번호가 일치하지 않습니다.",
          })}
          errors={errors.confirm_password}
          width="2/3"
          fontSize="lg"
        />
        <button type="submit" className="p-2 text-white bg-blue-500 rounded">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignUp;
