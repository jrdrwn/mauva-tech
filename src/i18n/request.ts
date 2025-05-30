import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale =
  (await cookies()).get('lang')?.value ?? 'en';

  return {
    locale,
    messages: (await import(`../../translation/${locale}.json`)).default
  };
});
