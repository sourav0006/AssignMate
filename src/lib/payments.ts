export type RazorpayOrder = {
  id: string;
  amount: number;
  currency: string;
};

export async function createRazorpayOrder(amount: number): Promise<RazorpayOrder> {
  // Placeholder for actual API call; in tests we'll mock this
  return { id: `order_${Math.random().toString(36).slice(2)}`, amount, currency: 'INR' };
}

export async function openRazorpayCheckout(order: RazorpayOrder): Promise<{ success: boolean }> {
  // In production integrate Razorpay SDK. Here we just simulate success.
  await new Promise((r) => setTimeout(r, 50));
  return { success: true };
}


