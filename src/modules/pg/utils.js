import { PAY_TOKENS_WITH_PRICES } from '@/common/constants/pay-tokens.js';

export async function getWGCDToken() {
  const payTokens = await PAY_TOKENS_WITH_PRICES();

  return payTokens.find(
    token => token.address === '0xeFF66B4A84C8a6b69b99EB1C5e39aF8fc35d13db'
  );
}
