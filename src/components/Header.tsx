import ThemeController from "./ThemeController";

type Props = {
  title: string;
};

function Header({ title }: Props) {
  return (
    <header className="container flex items-center justify-between py-2">
      <h1 className="text-2xl font-black">{title}</h1>
      <ThemeController />
    </header>
  );
}

export default Header;
