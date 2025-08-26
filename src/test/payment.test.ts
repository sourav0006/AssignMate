import { createRazorpayOrder, openRazorpayCheckout } from '@/lib/payments';

jest.mock('@/lib/payments', () => ({
  createRazorpayOrder: jest.fn(async (amount: number) => ({ id: 'order_test', amount, currency: 'INR' })),
  openRazorpayCheckout: jest.fn(async () => ({ success: true })),
}));

describe('Payment flow (Razorpay mocked)', () => {
  test('creates order and completes checkout', async () => {
    const order = await createRazorpayOrder(500);
    expect(order.id).toBe('order_test');
    expect(order.amount).toBe(500);
    const result = await openRazorpayCheckout(order);
    expect(result.success).toBe(true);
  });
});


