export interface IFieldText {
  name: string;
  label: string;
  placeholder?: string;
  icon?: string,
  iconSize?: number;
  typeField: 'text' | 'email' | 'password' | 'number';
  maskType?: 'cpf' | 'cnpj' | 'cep' | 'phone';
  max?: number;
  disabledField?: boolean;
  messageField?: string;
}