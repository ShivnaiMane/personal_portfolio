import logo from "../assets/logo.png"
import { contacts } from "../assets/data.tsx"
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home"><img className="mx-2 w-20" src={logo} alt="Logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-3xl" >
        {contacts?.map((contact) => (<a href={contact.url} target="blank" rel="noopener noreferrer" aria-label={contact.name} key={contact.name}>{contact.icon}</a>))}
      </div>
    </nav>
  )
}

export default Navbar
