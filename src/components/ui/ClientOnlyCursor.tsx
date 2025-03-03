import dynamic from 'next/dynamic';

// Import the CustomCursor component with SSR disabled
const ClientCursor = dynamic(() => import('./CustomCursor'), { ssr: false });

export default ClientCursor;