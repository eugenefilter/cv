
import { cn } from "../../utils/cn";

interface BlockProps {
  title: string;
  titleBold?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Block({ title, titleBold = false, children, className }: BlockProps) {
  const blockClasses = `w-full text-left pb-8 border-b-2 border-black-50 ${className || ''}`;

  return (
    <div className={blockClasses}>
      <h2 className={cn('uppercase', { 'font-bold text-3xl': titleBold })}>{title}</h2>
      <div className="mt-5">
        {children}
      </div>
    </div>
  )
}