const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-background grow">
			{children}
		</div>
	);
};

export default AuthLayout;
