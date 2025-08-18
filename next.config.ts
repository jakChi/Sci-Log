import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {};
 

// don't fully understand why this is needed, but it seems to be required for next-intl
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);