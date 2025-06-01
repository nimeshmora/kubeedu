import api, { setAuthToken } from '@/lib/api';
import type { AuthResponse, LoginFormData, RegisterFormData } from '@/types/auth';

export const authService = {
    async login(data: LoginFormData): Promise<AuthResponse> {
        const response = await api.post<AuthResponse>('/auth/login', data);
        setAuthToken(response.data.token);
        return response.data;
    },

    async register(data: RegisterFormData): Promise<AuthResponse> {
        const response = await api.post<AuthResponse>('/auth/register', data);
        setAuthToken(response.data.token);
        return response.data;
    },

    logout() {
        setAuthToken('');
    }
};
