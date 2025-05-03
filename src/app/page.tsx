import { users } from '@/db/schema/users'
import db from '@/lib/db'

const getUsers = async () => {
  try {
    return await db.select().from(users)
  } catch (error) {
    console.error('Error fetching users:', error)
    return []
  }
}

const Link = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <a
    href={href}
    className="text-blue-500 hover:text-blue-700"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)

export default async function Home() {
  const users = await getUsers()
  console.log(users)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center border-8 border-emerald-950 p-4">
      <h1 className="text-center text-5xl font-bold">Hello Nextalism! 👋</h1>
      <div className="mt-8 border-4 border-border bg-emerald-50 px-8 py-4">
        <p className="mb-2 font-bold">Read docs:</p>
        <ul className="min-w-[12rem] list-disc pl-6 font-medium">
          <li>
            <Link href="https://nextjs.org/docs">Next.js</Link>
          </li>
          <li>
            <Link href="https://neobrutalism.dev/">Neobrutalism</Link>
          </li>
          <li>
            <Link href="https://orm.drizzle.team/">Drizzle ORM</Link>
          </li>
        </ul>
      </div>
    </main>
  )
}
