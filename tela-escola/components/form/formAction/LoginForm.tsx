import { Form, useActionData, useNavigation } from "react-router-dom";
import FieldTextLogin from "../fields/FieldTextLogin";
import { useEffect, useState } from "react";
import { IActionData } from "utils/interfaces/IActions";
import Loader01 from "components/loaders/Loader01";

export default function LoginForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const actionData = useActionData() as IActionData;
  const navigation = useNavigation();

  useEffect(() => {
    setLoading(navigation.state === 'submitting');

    if(actionData?.type === "error") {
      console.log(actionData.error);
    }
  }, [navigation.state, actionData]);

  return (
    <Form
      method='POST'
      action=''
    >
      <div className="space-y-4">
        <div className="space-y-5 w-full">
          <FieldTextLogin
            label="E-mail"
            name="email"
            typeField="text"
            placeholder="Digite seu e-mail"
            icon="/svg/email.svg"
            disabledField={ loading }
            messageField={ actionData?.type === "error" ? actionData?.message : '' }
          />
          <FieldTextLogin
            label="Senha"
            name="password"
            typeField="password"
            placeholder="Digite sua senha"
            icon="/svg/password.svg"
            disabledField={ loading }
            messageField={ actionData?.type === "error" ? actionData?.message : '' }
          />
        </div>
        <div className="w-full flex flex-col space-y-5">
          <div className="w-full flex flex-col space-y-3">
            <div className="space-y-2">
              <div className="flex flex-row justify-between w-full">
                <div>
                  <label className="space-x-2">
                    <input
                      type="checkbox"
                      name="lembrarAcesso"
                      value="yes"
                      className="form-checkbox"
                    />
                    <span>Lembrar Acesso</span>
                  </label>
                </div>
                <div className="">
                  <span className="text-blue-500 hover:underline cursor-pointer font-semibold">
                    Esqueceu seu e-mail ?
                  </span>
                </div>
              </div>
              <div className="w-full">
                <p className="text-xl">
                  Não tem conta ? <span className=" hover:underline text-base cursor-pointer">
                    Cadastre sua escola
                    </span>
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button
                type="submit"
                disabled={ loading }
                className="px-4 py-1 min-w-[200px] h-[35px] bg-slate-500 rounded-lg text-white text-lg font-semibold hover:bg-slate-500/90 duration-200 flex justify-center items-center"
              >
                { loading ? <Loader01 /> : 'Login' }
              </button>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}