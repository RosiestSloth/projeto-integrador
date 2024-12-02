import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { IHookFormZod } from "utils/interfaces/IHookFormZod";

export default function HookFormZod({
  schema,
  onSubmit,
  children,
}: IHookFormZod) {
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      enderecos: [],
    },
  }); 

  return (
    <FormProvider { ...methods }>
      <form
        onSubmit={ methods.handleSubmit(onSubmit) }
      >
        { children }
      </form>
    </FormProvider>
  );
}