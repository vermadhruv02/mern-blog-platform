import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'

axios.defaults.withCredentials = true;

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(5, { message: 'Password must be at least 6 characters' }),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: { email: string; password: string }) => {
    try {
      const response = axios.post('/api/v1/user/login', {
        email: data.email,
        password: data.password,
      });
      console.log('Login successful:', response);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 shadow-md p-6 rounded-2xl w-full max-w-md transition-colors">
      <h2 className="text-2xl font-bold mb-4 text-center text-zinc-900 dark:text-zinc-100">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Email"
          className="mb-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border-zinc-300 dark:border-zinc-700"
          {...register('email')}
        />
        {errors.email && (
          <p className="text-xs text-red-500 mb-2">{errors.email.message as string}</p>
        )}
        <Input
          type="password"
          placeholder="Password"
          className="mb-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border-zinc-300 dark:border-zinc-700"
          {...register('password')}
        />
        {errors.password && (
          <p className="text-xs text-red-500 mb-2">{errors.password.message as string}</p>
        )}
        <Button className="w-full mb-2" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Login'}
        </Button>
      </form>
      <p className="text-sm text-center text-zinc-700 dark:text-zinc-300">
        Don't have an account?{' '}
        <Link to="/register" className="text-blue-600 dark:text-blue-400 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login
