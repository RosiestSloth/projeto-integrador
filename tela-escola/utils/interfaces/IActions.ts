export interface IActionData {
  type?: 'error' | 'success';
  error?: any;
  session?: any;
  message?: string;
  redirect?: any;
}