export default function HorizontalPadding({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-0 lg:px-80">
      {children}
    </div>
  )
}