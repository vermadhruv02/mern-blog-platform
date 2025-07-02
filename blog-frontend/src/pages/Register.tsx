'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link } from 'react-router-dom'


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import axios from 'axios'

axios.defaults.withCredentials = true;


const formSchema = z
  .object({
    fullName: z.string().min(2, { message: 'Full name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    username: z.string(),
    // phone: z.string().optional(),
    password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
    confirmPassword: z
      .string()
      .min(8, { message: 'Confirm password must be at least 8 characters' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

function RegisterForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      username: '',
      // phone: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {

      const res = await axios.post('/api/v1/user/register', {
        fullName: data.fullName,
        email: data.email,
        username: data.username,
        // phone: data.phone,
        password: data.password,
      })
      if (res.status === 201) {
        console.log('Registration successful:', res.data, res)
        // Handle success (e.g., redirect to login or show a success message)
      } else {
        console.error('Registration failed:', res.data)
        // Handle failure (e.g., show an error message)
      }
    } catch (error) {
      console.error('Registration error:', error)
      // Handle error (e.g., show a notification)
    }
    console.log('Form Data:', data)
  }

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-900 px-4 transition-colors">
      <div className="bg-white dark:bg-zinc-900 shadow-md p-6 rounded-2xl w-full max-w-xl transition-colors">
        <h2 className="text-2xl font-bold mb-4 text-center text-zinc-900 dark:text-zinc-100">Register</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-900 dark:text-zinc-100">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border-zinc-300 dark:border-zinc-700" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-900 dark:text-zinc-100">Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border-zinc-300 dark:border-zinc-700" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-900 dark:text-zinc-100">Username </FormLabel>
                  <FormControl>
                    <Input placeholder="john_doe" className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border-zinc-300 dark:border-zinc-700" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone (optional)</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+1234567890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-900 dark:text-zinc-100">Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border-zinc-300 dark:border-zinc-700" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-900 dark:text-zinc-100">Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border-zinc-300 dark:border-zinc-700" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
        </Form>
        <div className="text-sm text-center text-zinc-700 dark:text-zinc-300 mt-4">
          <p className="text-sm text-center text-zinc-700 dark:text-zinc-300 mt-4">
            Already have an account?{' '}
          </p>
          <Link to="/login" className="text-blue-600 dark:text-blue-400 hover:underline mt-">Login</Link>
        </div>
      </div>
    </div>

  )
}

export default RegisterForm
