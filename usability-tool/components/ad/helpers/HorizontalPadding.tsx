export default function HorizontalPadding({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-0 md:px-10 lg:px-28 xl:px-80">
      {children}
    </div>
  )
}