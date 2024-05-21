import create from 'zustand';

const authStore = create((set) => ({
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
  token: localStorage.getItem('token'),
  login: (token) => {
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('token', token);
    set({ isAuthenticated: true, token });
  },
  logout: () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('token');
    set({ isAuthenticated: false, token: null });
  },
}));

export default authStore;
