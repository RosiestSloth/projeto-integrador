import { ActionFunctionArgs, redirect } from "react-router-dom";

export function CreateLoginAction(role: string, redirectPath: string) {
  return async function LoginAction({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const existingSession = false;
      
      if(existingSession) {
        // Encerrar sessão se existir
      }

      // Lógica para fazer a sessão
      // Estou criando uma lógica ficticia
      async function SignIn(email: string, password: string) {
        if(email.toLowerCase() === 'nando' && password === '123') {
          return true;
        } else {
          return false;
        }
      }

      const session = await SignIn(email, password);

      if(session) {
        return redirect(redirectPath);
      } else {
        return {
          type: 'error',
          error: 'error',
          message: 'Login incorreto'
        };
      }
    } catch(err) {
      console.error('Algo deu errado', err);
      return {
        type: 'error',
        error: 'error',
        message: 'Algo deu errado'
      };
    }
  }
}