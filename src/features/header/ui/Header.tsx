interface HeaderProps {
	end?: React.ReactNode;
	center?: React.ReactNode;
	start?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ start, center, end }) => {
	return (
		<header className="px-10 py-4 flex flex-row justify-between border-b border-b-primary/20 items-center">
			<div className="grow flex items-center justify-start gap-4">{start}</div>
			<div className="flex items-center justify-center gap-4">{center}</div>
			<div className="grow flex items-center justify-end gap-4">{end}</div>
		</header>
	);
};
