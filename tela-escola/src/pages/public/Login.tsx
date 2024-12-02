import LoginForm from "components/form/formAction/LoginForm";

export default function Login() {
  return (
    <div 
      className="absolute w-full h-full flex justify-center items-center"
    >
      <div className="bg-white rounded-2xl p-8 space-y-8 shadow-2xl shadow-black/30">
        <div className="space-y-2">
          <div className="w-full text-center">
            <span className="font-bold text-4xl">
              Bem vindo(a) a Tela de Login
            </span>
            <p className="text-neutral-500 font-semibold">
              Faça login para acessar o sistema da escola
            </p>
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}