import Link from "next/link";

export default function notFound() {
  return (
    <div className="font-mono italic underline">
        <h1>404</h1>
        <p>Sorry the page you are looking for doesn't exists</p>
        <Link href="/">Return Home</Link>
    </div>
  )
}
