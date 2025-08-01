import { useTexture } from '../../hooks/useTexture';
import { useGameData } from '../../hooks/useGameData';

export default function Level() {
  const { currentMap } = useGameData();
  const { texture, loading, error } = useTexture(
    currentMap?.image || '/assets/tilemap.png'
  );

  if (loading || error || !texture) {
    return null;
  }

  return (
    <pixiSprite
      texture={texture}
      width={texture.width}
      height={texture.height}
      scale={1}
      x={0}
      y={0}
    />
  );
}
