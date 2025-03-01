import type { ReactNode } from "react";

export const ThirdOrderedList = ({ listItems }: { listItems: ReactNode[] }) => (
	<ol>
		{listItems.map((item, index) => (
			// biome-ignore lint/suspicious/noArrayIndexKey: migrate from eslint
			<li key={index}>&emsp;・{item}</li>
		))}
	</ol>
);
