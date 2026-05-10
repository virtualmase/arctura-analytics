from pathlib import Path
path = Path('src/components/Navbar.tsx')
text = path.read_text(encoding='utf-8')
text = text.replace("import { CalendarClock, Menu, Search, ShoppingCart, X } from 'lucide-react'", "import { BriefcaseBusiness, CalendarClock, Menu, Search, X } from 'lucide-react'")
text = text.replace('ShoppingCart', 'BriefcaseBusiness')
path.write_text(text, encoding='utf-8')
