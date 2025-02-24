import { create } from 'zustand';

export const useJobForm = create((set) => ({
  form1: {
    title: '',
    type: '',
    salary: '',
    description: '',
  },
  form2: {
    company: '',
    location: '',
    experienceLevel: '',
    currency: '',
  },
  postedJobs: [], 
  setForm1: (values) => set((state) => ({ form1: { ...state.form1, ...values } })),
  setForm2: (values) => set((state) => ({ form2: { ...state.form2, ...values } })),
  addPostedJob: (job) => set((state) => ({ postedJobs: [...state.postedJobs, job] })),
  resetForm: () =>
    set({
      form1: { title: '', type: '', salary: '', description: '' },
      form2: { company: '', location: '', experienceLevel: '', currency: '' },
    }),
}));