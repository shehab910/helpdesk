import { cn } from '@/lib/utils';
import { ReactNode } from 'react'

interface HeaddingProps {
	children: ReactNode;
	className?: string;
}

function Headding({ className = "", children }: HeaddingProps) {
	return (
		<h2 className={cn('font-bold text-xl my-8 md:text-2xl', className)}>{children}</h2>
	)
}

export default Headding