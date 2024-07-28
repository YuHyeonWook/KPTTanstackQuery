import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-end w-full p-8 bg-slate-100">
      <button
        className="p-2 text-base font-medium text-white bg-blue-600 border rounded-md hover:bg-blue-500"
        onClick={() => navigate("/signup")}
      >
        회원가입
      </button>
      <button onClick={() => navigate("/signin")}>로그인</button>
    </div>
  );
}

export default Header;
