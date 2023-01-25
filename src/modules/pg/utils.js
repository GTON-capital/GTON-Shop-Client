import { PAY_TOKENS_WITH_PRICES } from '@/common/constants/pay-tokens.js';

export async function getWGCDToken() {
  const payTokens = await PAY_TOKENS_WITH_PRICES();

  return payTokens.find(
    token => token.address === '0x4200000000000000000000000000000000000006'
  );
}
