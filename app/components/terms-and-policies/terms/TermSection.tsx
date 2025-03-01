import type { ReactNode } from "react";

const TermHeading = ({ children }: { children: ReactNode }) => (
	<h2 className="border-neutral-9 border-b pb-1 pl-1 font-bold text-lg">
		{children}
	</h2>
);

export const TermSection = ({
	title,
	children,
}: { title: ReactNode; children: ReactNode }) => (
	<div>
		<TermHeading>{title}</TermHeading>
		<div className="mt-4">{children}</div>
	</div>
);
