'use client'

export default function NoRightClick({ children }) {
  const handleContextMenu = (e) => {
    e.preventDefault();
  }
  return (
    <div onContextMenu={handleContextMenu}>{children}</div>
  )
}
