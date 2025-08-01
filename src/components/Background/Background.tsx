import { useScreenSize } from '../../hooks/useScreenSize';
import { useTexture } from '../../hooks/useTexture';

interface BackgroundProps {
  src: string;
}

export default function Background({ src }: BackgroundProps) {
  const screenSize = useScreenSize();
  const { texture, loading, error } = useTexture(src);

  if (loading || error || !texture || screenSize.width === 0) {
    return null;
  }

  // Calculate scale to cover the entire screen
  const scaleX = screenSize.width / texture.width;
  const scaleY = screenSize.height / texture.height;
  const scale = Math.max(scaleX, scaleY);

  return (
    <pixiSprite
      texture={texture}
      anchor={{ x: 0.5, y: 0.5 }}
      x={screenSize.width / 2}
      y={screenSize.height / 2}
      scale={{ x: scale, y: scale }}
    />
  );
}
