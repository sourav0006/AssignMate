import '@testing-library/jest-dom';

// Polyfill for next/image and other Next.js specific modules if needed
jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn(), replace: jest.fn(), prefetch: jest.fn() }),
}));


