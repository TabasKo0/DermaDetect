import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', color: '#d32f2f', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Sorry, the page you are looking for does not exist.<br />
        Please check the URL or return to the <Link href="/" style={{ color: '#1976d2', textDecoration: 'underline' }}>Home page</Link>.
      </p>
    </div>
  );
}
