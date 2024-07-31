import Input from "../lib/common/Input";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/userApi";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationKey: ["loginUser"],
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log(data);
      alert("로그인 성공");
      navigate("/");
      sessionStorage.setItem("refreshToken", data.refresh_token);
      sessionStorage.setItem("accessToken", data.access_token);
    },
    onError: (error) => {
      throw error;
    },
  });

  const onSubmit = (data: any) => {
    mutation.mutate(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          type="email"
          placeholder="Email"
          register={register("email", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "이메일 형식이 올바르지 않습니다.",
            },
          })}
          errors={errors.email}
          width="2/3"
          fontSize="lg"
        />
        <Input
          label="Password"
          type="password"
          placeholder="Password"
          register={register("password", {
            required: "비밀번호를 입력해주세요",
            minLength: {
              value: 8,
              message: "비밀번호는 8자 이상이어야 합니다.",
            },
          })}
          errors={errors.password}
          width="2/3"
          fontSize="lg"
        />
        <button type="submit" className="p-2 text-white bg-blue-500 rounded">
          로그인
        </button>
      </form>
    </>
  );
};

export default SignIn;
