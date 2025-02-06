import { Button } from "@/components/ui/button"
import { VeltSidebarButton } from "@veltdev/react"
interface ShipmentHeaderProps {
  activeView: 'one-doc' | 'multi-docs';
  onViewChange: (view: 'one-doc' | 'multi-docs') => void;
}

export default function ShipmentHeader({ activeView, onViewChange }: ShipmentHeaderProps) {
  return (
    <div className="flex gap-4 mb-4 p-4 bg-black rounded-lg">
      <Button 
        variant={activeView === 'one-doc' ? 'default' : 'outline'}
        onClick={() => onViewChange('one-doc')}
      >
        One Document
      </Button>
      <Button 
        variant={activeView === 'multi-docs' ? 'default' : 'outline'}
        onClick={() => onViewChange('multi-docs')}
      >
        Multiple Documents
      </Button>

      <VeltSidebarButton />
    </div>
  )
}

