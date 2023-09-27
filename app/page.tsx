import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello!</h1>
      <Link href="/about">Go to about page</Link>
      <Link href="/users">Users</Link>
    </main>
  )
}
