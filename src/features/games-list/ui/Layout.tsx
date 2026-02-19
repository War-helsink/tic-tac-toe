interface LayoutProps {
	actions?: React.ReactNode;
	children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children, actions }) => {
	return (
		<div className="flex flex-col gap-4 relative">
			<div className="flex flex-row justify-end gap-4">{actions}</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{children}
			</div>
		</div>
	);
};
