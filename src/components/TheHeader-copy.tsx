import { Navigation } from './Navigation'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' }
]

const TheHeader2 = () => {
  return (
    <div className=" flex h-[75px] bg-gray-600 gap-2 items-center justify-center text-white">
      <Navigation navLinks={navItems} />
    </div>
  )
}

export { TheHeader2 }
