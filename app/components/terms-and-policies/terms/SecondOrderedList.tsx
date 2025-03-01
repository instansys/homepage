import type { ReactNode } from "react";

export const SecondOrderedList = ({
	listItems,
}: { listItems: ReactNode[] }) => (
	<ol>
		{listItems.map((item, index) => (
			// biome-ignore lint/suspicious/noArrayIndexKey: migrate from eslint
			<li key={index}>
				（{index + 1}）{item}
			</li>
		))}
	</ol>
);
