import type { ReactNode } from "react";

export const OrderedList = ({ listItems }: { listItems: ReactNode[] }) => (
	<ol className="list-inside list-decimal space-y-2">
		{listItems.map((item, index) => (
			// biome-ignore lint/suspicious/noArrayIndexKey: migrate from eslint
			<li key={index}>{item}</li>
		))}
	</ol>
);
