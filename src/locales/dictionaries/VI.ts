import { Dictionary } from '../interface';

// TypeScript object for Vietnamese translations (VI.ts)
export const VI: Dictionary = {
  common: {
    title: 'Ứng dụng của tôi',
    description: 'Chào mừng đến với ứng dụng của tôi',
    buttons: {
      submit: 'Gửi',
      cancel: 'Hủy',
    },
    navigation: {
      home: 'Trang chủ',
      about: 'Giới thiệu',
      contact: 'Liên hệ',
    },
    language: 'Ngôn ngữ',
    theme: {
      light: 'Sáng',
      dark: 'Tối',
    },
    underDevelopment: {
      title: 'Đang Phát Triển',
      message: 'Tính năng này sẽ sớm ra mắt',
    },
  },
  home: {
    welcome: 'Chào mừng đến với nền tảng của chúng tôi',
    getStarted: 'Bắt đầu ngay',
  },
  // Add auth section
  auth: {
    login: {
      emailLabel: 'Địa chỉ Email',
      passwordLabel: 'Mật khẩu',
      rememberMe: 'Ghi nhớ đăng nhập',
      login: 'Đăng nhập',
      forgotPassword: 'Quên mật khẩu?',
      signUp: 'Đăng ký',
      orContinueWith: 'Hoặc tiếp tục với',
      googleLogin: 'Đăng nhập bằng Google',
      invalidCredentials: 'Email hoặc mật khẩu không hợp lệ',
      loginError: 'Đã xảy ra lỗi trong quá trình đăng nhập. Vui lòng thử lại.',
      googleLoginError: 'Không thể đăng nhập bằng Google',
    },
  },
};
