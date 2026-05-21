export function Header() {
  return (
    <header>
      <nav>
        <a href="/">Notes App</a>
        <ul>
          <li><a href="/notes">Notes</a></li>
          <li><a href="/notes/new">New Note</a></li>
          <li><button>Logout</button></li>
        </ul>
      </nav>
    </header>
  );
}