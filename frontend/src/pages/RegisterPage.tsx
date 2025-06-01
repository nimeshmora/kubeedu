import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { authService } from '@/services/auth.service';
import type { RegisterFormData } from '@/types/auth';

export default function RegisterPage() {
    const navigate = useNavigate();
    const [error, setError] = useState<string>('');
    const form = useForm<RegisterFormData>();

    const onSubmit = async (data: RegisterFormData) => {
        try {
            await authService.register(data);
            navigate('/dashboard');
        } catch (err) {
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <Card className="w-[400px]">
                <CardHeader>
                    <CardTitle className="text-2xl text-center">Register for KubeEdu</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="Enter your email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your  name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Enter your password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Role</FormLabel>
                                        <FormControl>
                                            <select
                                                className="w-full p-2 border rounded"
                                                {...field}
                                            >
                                                <option value="student">Student</option>
                                                <option value="teacher">Teacher</option>
                                            </select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            <Button type="submit" className="w-full">Register</Button>
                            <p className="text-center text-sm">
                                Already have an account?{' '}
                                <Button variant="link" onClick={() => navigate('/login')}>
                                    Login here
                                </Button>
                            </p>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
