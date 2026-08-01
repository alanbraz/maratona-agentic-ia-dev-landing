// Kiwify checkout configuration
//
// 1. Create your product on Kiwify (https://dashboard.kiwify.com).
// 2. Set the full price to R$ 2.490,00 and create a 50% coupon (ex: PULLRECAST50).
// 3. Copy the checkout link from the product's "Checkout" tab.
//    It looks like: https://pay.kiwify.com.br/XXXXXXXX
// 4. Paste it below, replacing the placeholder.
//
// Optional: to pre-apply the community coupon so buyers don't have to type it,
// append the coupon param, e.g. "https://pay.kiwify.com.br/XXXXXXXX?coupon=PULLRECAST50"

export const CHECKOUT_URL = "https://pay.kiwify.com.br/L4ZPQQO";

// Community coupon code buyers use for 50% off at checkout.
export const COMMUNITY_COUPON = "PULLRECAST50";
