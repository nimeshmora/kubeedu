export interface LoginFormData {
    email: string;
    password: string;
}

export interface RegisterFormData {
    email: string;
    password: string;
    name: string;
    role: 'student' | 'teacher';
}

export interface AuthResponse {
    token: string;
    message: string;
}
