import { Slider } from "@/components/ui/slider";

interface FontSizeSliderProps {
  value: number;
  onChange: (value: number) => void;
}

export const FontSizeSlider = ({ value, onChange }: FontSizeSliderProps) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="text-sm text-muted-foreground whitespace-nowrap">Font Size</span>
      <Slider
        value={[value]}
        onValueChange={(v) => onChange(v[0])}
        min={12}
        max={48}
        step={1}
        className="flex-1"
      />
      <span className="text-sm font-medium text-foreground w-8">{value}px</span>
    </div>
  );
};
